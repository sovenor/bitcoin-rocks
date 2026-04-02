/**
 * Creates Vietnamese (vi) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin Không Có Tình Trạng Rút Tiền Hàng Loạt",
	"bank_runs_header": "BITCOIN KHÔNG CÓ TÌNH TRẠNG RÚT TIỀN HÀNG LOẠT",
	"bank_runs_header_2": "NHƯNG NGÂN HÀNG CỦA BẠN CÓ THỂ",
	"bank_runs_what": "TÌNH TRẠNG RÚT TIỀN HÀNG LOẠT LÀ GÌ?",
	"bank_runs_what_content_1": "Tình trạng rút tiền hàng loạt xảy ra khi quá nhiều người cố gắng rút tiền từ ngân hàng cùng lúc.",
	"bank_runs_what_content_2": "Nếu ngân hàng không có đủ tiền để đáp ứng các yêu cầu rút tiền, họ có thể sụp đổ hoàn toàn khi xảy ra tình trạng rút tiền hàng loạt.",
	"bank_runs_how": "TÌNH TRẠNG RÚT TIỀN HÀNG LOẠT XẢY RA NHƯ THẾ NÀO?",
	"bank_runs_how_content_1": "Hệ thống ngân hàng của chúng ta là 'dự trữ một phần' nghĩa là ngân hàng không chỉ giữ tiền của bạn trong két và chờ bạn chi tiêu hoặc rút.",
	"bank_runs_how_content_2": "Thay vào đó, ngân hàng lấy tiền của bạn và cho vay hoặc đầu tư. Điều này có thể khóa tiền của bạn trong thời gian dài, mặc dù ngân hàng hứa bạn có thể rút tiền bất cứ lúc nào.",
	"bank_runs_how_content_3": "Vậy điều gì xảy ra nếu bạn cố rút tiền sau khi ngân hàng đã cho vay hoặc đầu tư?",
	"bank_runs_how_content_4": "Không có vấn đề nếu chỉ bạn rút. Ngân hàng sẽ lấy tiền của người khác và đưa cho bạn. Nhưng điều gì xảy ra khi quá nhiều người cố rút cùng lúc?",
	"bank_runs_how_content_5": "Nhiều người ở Mỹ đã biết khi xảy ra tình trạng rút tiền hàng loạt tại Silicon Valley Bank vào tháng 3 năm 2023.",
	"bank_runs_how_content_6": "Ngân hàng đã đầu tư tiền khách hàng vào trái phiếu chính phủ bị khóa đến 30 năm. Tệ hơn, giá trị trái phiếu đã giảm mạnh gần đây, vì vậy Silicon Valley Bank không thể bán trái phiếu để lấy tiền người gửi. Họ mất khả năng thanh toán. Họ không có đủ tiền để đáp ứng rút tiền.",
	"bank_runs_how_content_7": "Khi nhiều người biết, vấn đề chỉ tồi tệ hơn. Nhiều yêu cầu rút tiền hơn được gửi, nhưng nhiều yêu cầu không được xử lý. Hàng nghìn doanh nghiệp nhận ra họ không thể trả lương nhân viên do ngân hàng sụp đổ.",
	"bank_runs_how_content_8": "FDIC đã can thiệp và đồng ý bồi thường cho người gửi tiền. Vấn đề giải quyết? Không hẳn...",
	"bank_runs_fdic": "BẢO HIỂM FDIC CÓ BẢO VỆ TIỀN CỦA TÔI KHÔNG?",
	"bank_runs_fdic_content_1": "Bảo hiểm FDIC được thiết kế để bảo vệ người gửi ngân hàng trong trường hợp ngân hàng sụp đổ. Tiền gửi được bảo hiểm đến $250.000 mỗi người gửi. Nghe tuyệt vời, phải không?",
	"bank_runs_fdic_content_2": "Không hẳn. Nếu ngân hàng sụp đổ, FDIC lấy tiền từ đâu? Họ có quỹ bảo hiểm 125 tỷ đô la.",
	"bank_runs_fdic_content_3": "Nghe có vẻ nhiều tiền cho đến khi bạn so sánh với số tiền gửi họ bảo hiểm: gần 10 nghìn tỷ hay 10.000 tỷ đô la.",
	"bank_runs_fdic_content_4": "FDIC thậm chí hiển thị trên trang web rằng họ chỉ có đủ tiền trong quỹ bảo hiểm để bảo hiểm hơn 1% tiền gửi.",
	"bank_runs_fdic_content_5": "Trong trường hợp ngân hàng sụp đổ vượt quá quỹ bảo hiểm FDIC, chính phủ Mỹ có thể (nhưng không đảm bảo) sẽ in tiền để bồi thường người gửi.",
	"bank_runs_fdic_content_6": "Nhưng in tiền gây lạm phát, vì vậy đây không phải giải pháp tốt.",
	"bank_runs_safe": "CÓ NGÂN HÀNG NÀO KHÔNG SỬ DỤNG DỰ TRỮ MỘT PHẦN KHÔNG?",
	"bank_runs_safe_content_1": "Một số ngân hàng đã cố gắng trở thành 'ngân hàng an toàn' không cho vay hoặc đầu tư tiền người gửi.",
	"bank_runs_safe_content_2": "Mặc dù các ngân hàng an toàn này không có rủi ro rút tiền hàng loạt, đơn xin của họ đã bị Cục Dự trữ Liên bang từ chối. Điều này có nghĩa họ không thể hoạt động hợp pháp như ngân hàng.",
	"bank_runs_safe_content_3": "Vì bị chặn hoạt động, hiện không có ngân hàng nào không sử dụng dự trữ một phần.",
	"bank_runs_safe_content_4": "May mắn thay, có một cách để thoát khỏi hệ thống dự trữ một phần bằng cách trở thành ngân hàng của chính bạn. Không, chúng tôi không nói về việc giấu tiền mặt dưới đệm.",
	"bank_runs_safe_content_5": "Tiết kiệm bằng tiền mặt vẫn dễ bị ảnh hưởng bởi lạm phát.",
	"bank_runs_safe_content_6": "Chúng tôi nói về Bitcoin: một hệ thống tài chính mới cho phép bạn trở thành ngân hàng của chính mình.",
	"bank_runs_protect": "BITCOIN CÓ THỂ BẢO VỆ TÔI KHỎI TÌNH TRẠNG RÚT TIỀN HÀNG LOẠT KHÔNG?",
	"bank_runs_protect_content_1": "Có, Bitcoin là hệ thống tài chính dự trữ đầy đủ.",
	"bank_runs_protect_content_2": "Tình trạng rút tiền hàng loạt là bất khả thi trong Bitcoin miễn là bạn rút Bitcoin về ví riêng. Đừng để bitcoin trên sàn giao dịch hoặc trong sản phẩm bao bọc như Bitcoin ETF.",
	"bank_runs_protect_content_3": "Xem Hướng Dẫn Ví Bitcoin đơn giản để tìm hiểu cách rút về ví riêng.",
	"bank_runs_protect_content_4": "Với Bitcoin, cuối cùng bạn có thể kiểm soát tiền của mình."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Hướng Dẫn Ví Bitcoin",
	"wallets_description": "Có nhiều ví Bitcoin khác nhau khác biệt ở những điểm quan trọng. Bạn có thể xác định ví phù hợp bằng cách hỏi những câu hỏi đơn giản.",
	"wallets_header": "CÁCH LƯU TRỮ BITCOIN AN TOÀN",
	"wallets_s1_c1": "Ví Bitcoin tương thích với nhau, vì vậy bạn có thể gửi Bitcoin cho bất kỳ ai bất kể họ dùng ví nào.",
	"wallets_s1_c2": "Có nhiều ví Bitcoin khác nhau khác biệt ở những điểm quan trọng. Bạn có thể xác định ví phù hợp bằng cách hỏi những câu hỏi đơn giản:",
	"wallets_question_1": "ĐÂY CÓ PHẢI VÍ TỰ LƯU TRỮ KHÔNG?",
	"wallets_s2_c1": "Một trong những đổi mới của Bitcoin là khả năng lưu trữ mà không cần tổ chức lưu ký, như ngân hàng.",
	"wallets_s2_c2": "Nếu bạn giữ bitcoin trên sàn giao dịch hoặc trong ETF, bạn mất lợi ích tự do của bitcoin.",
	"wallets_s2_c3": "Ví tự lưu trữ mở khóa toàn bộ sức mạnh của Bitcoin: tiền tự do.",
	"wallets_s2_c4": "Với ví tự lưu trữ, bạn là người duy nhất có khả năng chi tiêu hoặc chuyển tiền. Không ai có thể ngăn bạn gửi hoặc nhận tiền khi sử dụng ví tự lưu trữ.",
	"wallets_s2_c5": "Ví tự lưu trữ còn được gọi là ví không lưu ký.",
	"wallets_s3_c1": "Ví lưu ký là ví mà bạn không kiểm soát tiền.",
	"wallets_s3_c2": "Các ví này tương tự hệ thống ngân hàng nơi bạn phải tin tưởng bên thứ ba cấp quyền truy cập tiền. Nếu Bitcoin của bạn trên sàn giao dịch, bạn đang dùng ví lưu ký.",
	"wallets_s3_c3": "Nếu bạn mua Bitcoin ETF, bạn đang dùng ví lưu ký không cho phép bạn rút về tự lưu trữ.",
	"wallets_s3_c4": "Ví lưu ký có vẻ tiện lợi, nhưng tổ chức lưu ký có khả năng kỹ thuật đánh cắp tất cả tiền người dùng bất cứ lúc nào.",
	"wallets_s3_c5": "Không phải khóa của bạn, không phải coin của bạn!",
	"wallets_question_2": "VÍ NÓNG HAY LẠNH?",
	"wallets_s4_c1": "Ví lạnh lưu trữ khóa Bitcoin theo cách không bao giờ tiếp xúc với internet.",
	"wallets_s4_c2": "Điều này giới hạn đáng kể các vectơ tấn công mà kẻ trộm có thể sử dụng, và tốt nhất cho số lượng Bitcoin lớn mà bạn không cần chuyển thường xuyên.",
	"wallets_s4_c3": "Bạn có thể coi ví lạnh như tài khoản tiết kiệm dài hạn, hay còn gọi là lưu trữ lạnh.",
	"wallets_s5_c1": "Ví nóng lưu trữ khóa Bitcoin trên thiết bị kết nối internet, như điện thoại.",
	"wallets_s5_c2": "Ví nóng thường được coi là an toàn, nhưng có thể có nhiều lỗ hổng bảo mật hơn ví lạnh.",
	"wallets_s5_c3": "Bạn có thể coi ví nóng như ví vật lý. Bạn không lưu trữ toàn bộ tiết kiệm trong ví, nhưng lưu trữ một ít tiền tiêu vặt.",
	"wallets_s5_c4": "Ví nóng giúp chi tiêu Bitcoin dễ dàng hơn mà không cần lấy toàn bộ tiết kiệm từ lưu trữ lạnh.",
	"wallets_question_3": "TÔI SẼ SAO LƯU CỤM TỪ KHÔI PHỤC NHƯ THẾ NÀO?",
	"wallets_s6_c1": "Khi thiết lập ví Bitcoin, thiết bị sẽ tạo cụm từ khôi phục. Cụm từ khôi phục này (còn gọi là seed phrase) chứa 12 hoặc 24 từ.",
	"wallets_s6_c2": "Nếu bạn mất quyền truy cập ví hoặc thiết bị ngừng hoạt động, bạn có thể nhập cụm từ khôi phục vào ví mới để lấy lại quyền truy cập Bitcoin.",
	"wallets_s6_c3": "Hầu hết ví bao gồm tờ giấy để viết cụm từ khôi phục, nhưng nhiều người thích sao lưu trên thép. Điều này giảm đáng kể khả năng mất cụm từ khôi phục trong trường hợp thiên tai như cháy hoặc lũ.",
	"wallets_s6_c4": "Jameson Lopp đã thử nghiệm 70 bộ sao lưu thép để giúp bạn chọn bộ phù hợp.",
	"wallets_s6_c5": "Xem hướng dẫn sao lưu Bitcoin bằng kim loại của Jameson tại đây.",
	"wallets_s6_c6": "Hoặc tiếp tục cuộn xuống để khám phá các tùy chọn ví Bitcoin.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Tìm Hướng Dẫn Ví Lightning của chúng tôi?",
	"wallets_starter_wallet": "Ví khởi đầu tuyệt vời",
	"wallets_mobile_app": "Ứng dụng di động",
	"wallets_2fa_support": "Hỗ trợ 2FA",
	"wallets_air_gap_mode": "Chế độ cách ly",
	"wallets_air_gap_camera": "Chế độ cách ly + camera",
	"wallets_bitcoin_only": "Chỉ Bitcoin",
	"wallets_security_features": "Nhiều tính năng bảo mật",
	"wallets_free": "Miễn phí 100%",
	"wallets_coldcard_mk5_costs": "Giá $189",
	"wallets_coldcard_q_costs": "Giá $289",
	"wallets_blockstream_jade_costs": "Giá $79",
	"wallets_foundation_passport_costs": "Giá $199",
	"wallets_seedsigner_costs": "Linh kiện giá $50",
	"wallets_very_affordable": "Rất phải chăng",
	"wallets_pair_with_phone": "Kết nối với điện thoại",
	"wallets_battery": "Pin sạc được",
	"wallets_build_your_own": "Tự lắp ráp",
	"wallets_qwerty_keyboard": "Bàn phím QWERTY đầy đủ",
	"wallets_qr_scanner": "Máy quét mã QR"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Cách Mua Bitcoin - Hướng Dẫn Từng Bước",
	"buy_header": "CÁCH MUA BITCOIN",
	"buy_intro_c1": "Mua Bitcoin lần đầu có thể có vẻ khó khăn, nhưng thực ra khá đơn giản khi chia thành từng bước.",
	"buy_intro_c2": "Hướng dẫn này sẽ giúp bạn qua quá trình mua Bitcoin an toàn và lưu trữ trong ví riêng.",
	"buy_step_1_header": "BƯỚC 1: CHỌN QUỐC GIA",
	"buy_step_1_description": "Các quốc gia khác nhau có tùy chọn mua Bitcoin khác nhau. Chọn quốc gia để xem tùy chọn tốt nhất cho bạn.",
	"buy_search_countries": "Tìm kiếm quốc gia",
	"buy_country_united_states": "Hoa Kỳ", "buy_country_australia": "Úc", "buy_country_austria": "Áo", "buy_country_belgium": "Bỉ", "buy_country_brazil": "Brazil", "buy_country_canada": "Canada", "buy_country_france": "Pháp", "buy_country_germany": "Đức", "buy_country_ireland": "Ireland", "buy_country_italy": "Ý", "buy_country_netherlands": "Hà Lan", "buy_country_new_zealand": "New Zealand", "buy_country_spain": "Tây Ban Nha", "buy_country_united_kingdom": "Vương quốc Anh", "buy_country_argentina": "Argentina", "buy_country_chile": "Chile", "buy_country_colombia": "Colombia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Cộng hòa Séc", "buy_country_denmark": "Đan Mạch", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estonia", "buy_country_finland": "Phần Lan", "buy_country_greece": "Hy Lạp", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hồng Kông", "buy_country_hungary": "Hungary", "buy_country_iceland": "Iceland", "buy_country_india": "Ấn Độ", "buy_country_israel": "Israel", "buy_country_japan": "Nhật Bản", "buy_country_latvia": "Latvia", "buy_country_lithuania": "Lithuania", "buy_country_luxembourg": "Luxembourg", "buy_country_malta": "Malta", "buy_country_mexico": "Mexico", "buy_country_norway": "Na Uy", "buy_country_panama": "Panama", "buy_country_poland": "Ba Lan", "buy_country_portugal": "Bồ Đào Nha", "buy_country_romania": "Romania", "buy_country_singapore": "Singapore", "buy_country_slovakia": "Slovakia", "buy_country_slovenia": "Slovenia", "buy_country_south_africa": "Nam Phi", "buy_country_south_korea": "Hàn Quốc", "buy_country_sweden": "Thụy Điển", "buy_country_switzerland": "Thụy Sĩ", "buy_country_thailand": "Thái Lan", "buy_country_turkey": "Thổ Nhĩ Kỳ", "buy_country_ukraine": "Ukraine", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "BƯỚC 2: CHỌN PHƯƠNG THỨC THANH TOÁN",
	"buy_step_2_description": "Có hai cách chính để mua Bitcoin: chuyển khoản ngân hàng hoặc tiền mặt. Mỗi cách có ưu điểm khác nhau.",
	"buy_method_bank_transfer": "CHUYỂN KHOẢN NGÂN HÀNG",
	"buy_method_bank_fast": "Nhanh & Dễ dàng",
	"buy_method_bank_less_private": "Ít riêng tư hơn",
	"buy_method_bank_description": "Chuyển khoản ngân hàng là cách phổ biến nhất để mua Bitcoin. Nhanh, tiện lợi, và thường có phí thấp hơn.",
	"buy_method_choose_bank": "Chọn Chuyển Khoản",
	"buy_method_cash": "TIỀN MẶT",
	"buy_method_cash_private": "Riêng tư hơn",
	"buy_method_cash_limited": "Ít lựa chọn",
	"buy_method_cash_description": "Mua bằng tiền mặt riêng tư hơn nhưng có ít lựa chọn và có thể yêu cầu gặp trực tiếp hoặc dùng máy ATM Bitcoin.",
	"buy_method_choose_cash": "Chọn Tiền Mặt",
	"buy_step_3_header": "BƯỚC 3: TÙY CHỌN MUA",
	"buy_step_3_description": "Đây là những tùy chọn mua Bitcoin tốt nhất cho quốc gia và phương thức thanh toán của bạn:",
	"buy_platform_recommended": "KHUYẾN NGHỊ",
	"buy_platform_strike_description": "Strike là cách nhanh và dễ nhất để mua Bitcoin với phí thấp và hỗ trợ Mạng Lightning tức thì.",
	"buy_platform_swan_description": "Swan Bitcoin chuyên về dịch vụ chỉ Bitcoin với trung bình chi phí đô la và tài nguyên giáo dục.",
	"buy_platform_river_description": "River cung cấp dịch vụ mua, khai thác, và lưu ký Bitcoin với trọng tâm giáo dục và bảo mật.",
	"buy_platform_coinsquare_description": "Coinsquare là sàn giao dịch Bitcoin Canada với tuân thủ quy định mạnh mẽ và hỗ trợ khách hàng.",
	"buy_platform_kraken_description": "Kraken là sàn giao dịch Bitcoin lâu đời với tính năng giao dịch nâng cao và bảo mật mạnh.",
	"buy_platform_atm_description": "Máy ATM Bitcoin cho phép bạn mua Bitcoin bằng tiền mặt ngay lập tức. Tìm một máy gần bạn bằng Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq là sàn giao dịch phi tập trung ngang hàng cho phép giao dịch Bitcoin riêng tư không cần KYC.",
	"buy_platform_feature_instant": "Mua tức thì",
	"buy_platform_feature_low_fees": "Phí thấp",
	"buy_platform_feature_lightning": "Mạng Lightning",
	"buy_platform_feature_dca": "Trung bình chi phí đô la",
	"buy_platform_feature_education": "Tài nguyên giáo dục",
	"buy_platform_feature_withdrawal": "Rút dễ dàng",
	"buy_platform_feature_mining": "Khai thác Bitcoin",
	"buy_platform_feature_custody": "Dịch vụ lưu ký",
	"buy_platform_feature_canadian": "Tập trung Canada",
	"buy_platform_feature_regulated": "Sàn giao dịch được quản lý",
	"buy_platform_feature_support": "Hỗ trợ khách hàng",
	"buy_platform_feature_established": "Nền tảng lâu đời",
	"buy_platform_feature_security": "Bảo mật mạnh",
	"buy_platform_feature_advanced": "Tính năng nâng cao",
	"buy_platform_feature_cash": "Mua bằng tiền mặt",
	"buy_platform_feature_anonymous": "Ẩn danh hơn",
	"buy_platform_feature_p2p": "Ngang hàng",
	"buy_platform_feature_private": "Giao dịch riêng tư",
	"buy_platform_feature_decentralized": "Phi tập trung",
	"buy_platform_relai_description": "Relai là ứng dụng chỉ Bitcoin của Thụy Sĩ với ví tự lưu trữ, tính năng đầu tư tự động, và phí thấp cho người dùng châu Âu.",
	"buy_platform_feature_bitcoin_only": "Chỉ Bitcoin",
	"buy_platform_feature_self_custody": "Ví tự lưu trữ",
	"buy_platform_feature_auto_invest": "Kế hoạch đầu tư tự động",
	"buy_platform_feature_european": "Tập trung châu Âu",
	"buy_step_4_header": "BƯỚC 4: LƯU TRỮ BITCOIN AN TOÀN",
	"buy_step_4_c1": "Sau khi mua Bitcoin, bước quan trọng nhất là chuyển nó vào ví riêng nơi bạn kiểm soát khóa riêng tư.",
	"buy_step_4_c2": "Để Bitcoin trên sàn giao dịch rủi ro vì bạn không thực sự sở hữu Bitcoin - sàn giao dịch sở hữu.",
	"buy_step_4_c3": "Khi bạn kiểm soát khóa riêng tư, bạn có quyền sở hữu thực sự và không ai có thể lấy Bitcoin từ bạn.",
	"buy_step_4_c4": "Tìm hiểu cách chọn ví Bitcoin phù hợp:",
	"buy_cta_wallets": "Xem Hướng Dẫn Ví Bitcoin"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Hướng Dẫn Ví Lightning Bitcoin",
	"lightning_description": "Ví Lightning cho phép bạn gửi Bitcoin nhanh chóng và rẻ trong khi vẫn duy trì chủ quyền cá nhân.",
	"lightning_header": "HƯỚNG DẪN VÍ LIGHTNING",
	"lightning_s1_c1": "Lightning cho phép bạn gửi thanh toán Bitcoin nhanh chóng và rẻ.",
	"lightning_s1_c2": "Điều quan trọng là sử dụng lightning có sự đánh đổi. Để đổi lấy thanh toán Bitcoin nhanh và rẻ hơn, bạn thường phải hy sinh một số bảo mật.",
	"lightning_s1_c3": "Nói chung, Lightning chỉ nên dùng với số lượng bitcoin nhỏ. Bạn chỉ nên lưu trữ số lượng lớn bitcoin trong ví phần cứng.",
	"lightning_s1_c4": "Xem Hướng Dẫn Ví Phần Cứng để biết thêm.",
	"lightning_s1_c5": "Không phải tất cả ví Lightning đều giống nhau. Bạn có thể xác định ví có bộ đánh đổi phù hợp bằng cách hỏi một câu đơn giản:",
	"lightning_question_1": "SỰ CÂN BẰNG ĐÁNH ĐỔI NÀO PHÙ HỢP VỚI TÔI?",
	"lightning_s2_c1": "Một trong những đổi mới của Bitcoin là khả năng lưu trữ mà không cần tổ chức lưu ký, như ngân hàng. Ví tự lưu trữ mở khóa toàn bộ sức mạnh của Bitcoin.",
	"lightning_s2_c2": "Với ví tự lưu trữ, bạn là người duy nhất có khả năng chi tiêu hoặc chuyển tiền. Không ai có thể ngăn, kiểm duyệt, hoặc đánh cắp từ bạn khi sử dụng ví tự lưu trữ. Đây còn gọi là ví không lưu ký.",
	"lightning_s2_c3": "Cách chủ quyền nhất để sử dụng Lightning là chạy nút riêng.",
	"lightning_s2_c4": "Hướng dẫn này tập trung vào ví Lightning đơn giản không yêu cầu nút riêng.",
	"lightning_s2_c5": "Điều quan trọng là ngay cả khi dùng ví Lightning không lưu ký, bạn vẫn phải tin tưởng nhà phát triển ví không đẩy bản cập nhật ứng dụng độc hại và đánh cắp tiền.",
	"lightning_s3_c1": "Ví lưu ký là ví mà bạn không kiểm soát tiền.",
	"lightning_s3_c2": "Các ví này tương tự hệ thống ngân hàng nơi bạn phải tin tưởng bên thứ ba cấp quyền truy cập tiền. Nếu Bitcoin trên sàn giao dịch, bạn đang dùng ví lưu ký.",
	"lightning_s3_c3": "Ví lưu ký có vẻ tiện lợi, nhưng tổ chức lưu ký có khả năng kỹ thuật đánh cắp tất cả tiền người dùng bất cứ lúc nào.",
	"lightning_s3_c4": "Một số người thích ví Lightning lưu ký cho số lượng bitcoin nhỏ vì dễ sử dụng. Hãy nhớ: không phải khóa của bạn, không phải coin của bạn!",
	"lightning_question_2": "CHỌN VÍ CỦA BẠN",
	"lightning_s4_c1": "Với tất cả những điều này, bây giờ bạn có thể chọn ví lightning có sự cân bằng đánh đổi phù hợp.",
	"phoenix": "PHOENIX",
	"breez": "BREEZ",
	"mutiny_wallet": "MUTINY WALLET",
	"wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Nhiều tính năng",
	"lightning_mobile_app": "Ứng dụng di động",
	"lightning_free": "Miễn phí 100%",
	"lightning_merchants": "Tuyệt vời cho thương nhân",
	"lightning_starter": "Ví khởi đầu tuyệt vời",
	"lightning_browser": "Dựa trên trình duyệt",
	"lightning_custodial": "Ví lưu ký hoàn toàn",
	"lightning_cta_hardware": "Tìm Hướng Dẫn Ví Phần Cứng Bitcoin?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Nhãn dán Bitcoin miễn phí từ bitcoin.rocks",
	"stickers_description": "Dán nhãn dán bitcoin ở nơi công cộng để giới thiệu Bitcoin cho mọi người xung quanh.",
	"stickers_header": "NHÃN DÁN BITCOIN MIỄN PHÍ",
	"stickers_choose_header": "CHỌN GÓI NHÃN DÁN CỦA BẠN",
	"stickers_choose_c1": "Sứ mệnh của chúng tôi là giúp bạn giới thiệu Bitcoin cho nhiều người hơn bằng cách dán nhãn dán Bitcoin ở nơi công cộng. Tất cả nhãn dán có mã QR liên kết đến trang giáo dục về",
	"stickers_choose_c2": "Bitcoin",
	"stickers_choose_c3": "lạm phát",
	"stickers_choose_c4": "Chọn gói nhãn dán bên dưới",
	"stickers_text_pack": "GÓI CHỮ",
	"stickers_signs_pack": "GÓI BIỂN",
	"stickers_instructions_1": "Nhập địa chỉ gửi thư và chúng tôi sẽ gửi cho bạn Gói Nhãn Dán Bitcoin miễn phí qua đường bưu điện! Nhãn dán sẽ được gửi trong phong bì trắng.",
	"stickers_instructions_2": "Dữ liệu địa chỉ được xóa sau khi nhãn dán miễn phí được gửi.",
	"stickers_share_header": "CHIA SẺ VỊ TRÍ DÁN NHÃN",
	"stickers_share_c1": "Chia sẻ vị trí dán nhãn với chúng tôi trên Nostr và xem những người khác dán nhãn ở đâu.",
	"stickers_btn_share_on_nostr": "CHIA SẺ TRÊN NOSTR",
	"stickers_btn_what_is_nostr": "NOSTR LÀ GÌ?",
	"stickers_flyers_link_before": "Đồng thời, in & dán ",
	"stickers_flyers_link_text": "tờ rơi Bitcoin",
	"stickers_flyers_link_after": " để giới thiệu Bitcoin cho nhiều người hơn.",
	"stickers_country_global_print": "Toàn cầu — Tự in nhãn dán",
	"stickers_country_global_order": "Toàn cầu — Đặt số lượng lớn",
	"placeholder_name_optional": "Tên (tùy chọn)",
	"placeholder_address_line_1": "Dòng địa chỉ 1",
	"placeholder_address_line_2": "Dòng địa chỉ 2 (tùy chọn)",
	"placeholder_city": "Thành phố",
	"placeholder_state": "Bang",
	"placeholder_province": "Tỉnh",
	"placeholder_zip_code": "Mã bưu chính",
	"placeholder_postal_code": "Mã bưu điện",
	"placeholder_language": "Ngôn ngữ",
	"placeholder_which_stickers": "Nhãn dán nào?",
	"placeholder_email_optional": "Nhập email để được thông báo (tùy chọn)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Bưu thiếp Bitcoin miễn phí từ bitcoin.rocks",
	"postcards_description": "Nhận Gói Bưu Thiếp Bitcoin miễn phí và chia sẻ Bitcoin với ai đó bạn biết.",
	"postcards_header": "CHƯƠNG TRÌNH BƯU THIẾP ĐÃ ĐÓNG",
	"postcards_program_closed_message": "Chương trình bưu thiếp Bitcoin miễn phí đã kết thúc. Cảm ơn tất cả mọi người đã tham gia lan tỏa giáo dục Bitcoin qua đường bưu điện!",
	"postcards_sticker_alternative_header": "NHẬN NHÃN DÁN BITCOIN MIỄN PHÍ THAY THẾ",
	"postcards_sticker_alternative_message": "Tiếp tục lan tỏa nhận thức Bitcoin với chương trình nhãn dán miễn phí! Nhãn dán Bitcoin hoàn hảo để chia sẻ ở nơi công cộng và có mã QR liên kết đến nội dung giáo dục.",
	"postcards_sticker_cta": "NHẬN NHÃN DÁN MIỄN PHÍ",
	"postcards_step_2": "BƯU THIẾP TRÔNG NHƯ THẾ NÀO",
	"postcards_instructions_4": "Chúng tôi tạo bưu thiếp này để bạn dễ dàng giới thiệu Bitcoin cho ai đó bạn biết! Chỉ cần thêm địa chỉ và tem, rồi bỏ bưu thiếp vào thùng thư.",
	"postcards_instructions_5": "Sứ mệnh của chúng tôi là thúc đẩy việc áp dụng Bitcoin. Bạn có thể giúp bằng cách nhận nhãn dán miễn phí và dán ở nơi công cộng!",
	"postcards_instructions_6": "Chúng ta đều biết vài người có thể hưởng lợi từ việc tìm hiểu thêm về Bitcoin. Chia sẻ nhãn dán Bitcoin với họ ngay hôm nay!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Giúp chúng tôi đặt Biển Bitcoin khắp nước Mỹ!",
	"signs_title": "Biển Bitcoin miễn phí từ bitcoin.rocks",
	"signs_choose_header": "CẢM ƠN BẠN ĐÃ GIÚP CHÚNG TÔI ĐẶT BIỂN BITCOIN KHẮP NƯỚC MỸ!",
	"signs_choose_c1": "Chúng tôi đã hết hoàn toàn biển! Sứ mệnh của chúng tôi là thúc đẩy việc áp dụng Bitcoin thông qua giáo dục.",
	"signs_choose_c2": "Nhiều bạn đã giúp bằng cách đặt biển Bitcoin miễn phí ở nơi công cộng. Tất cả biển có mã QR liên kết đến trang giáo dục về",
	"signs_choose_c3": "lạm phát",
	"signs_choose_c4": "Nhờ cộng đồng tuyệt vời, chúng tôi đã tiếp cận hàng nghìn người và giúp họ bắt đầu hành trình tìm hiểu Bitcoin.",
	"signs_share_header": "CHIA SẺ VỊ TRÍ BIỂN CỦA BẠN",
	"signs_share_c1": "Chia sẻ ảnh vị trí đặt biển với chúng tôi trên Nostr và xem những người khác đặt biển ở đâu.",
	"signs_btn_share_on_nostr": "CHIA SẺ TRÊN NOSTR",
	"signs_btn_what_is_nostr": "NOSTR LÀ GÌ?",
	"signs_instructions_1": "Nhập địa chỉ gửi thư và chúng tôi sẽ gửi cho bạn hộp 10 biển Bitcoin qua đường bưu điện!",
	"signs_instructions_2": "Dữ liệu địa chỉ được xóa sau khi biển miễn phí được gửi."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Tờ rơi Bitcoin miễn phí từ bitcoin.rocks",
	"flyers_description": "In tờ rơi Bitcoin tại nhà và dán ở nơi công cộng để giới thiệu Bitcoin cho mọi người xung quanh.",
	"flyers_header_1": "IN & DÁN",
	"flyers_header_2": "TỜ RƠI BITCOIN",
	"flyers_intro_header": "CÁCH IN & DÁN TỜ RƠI BITCOIN",
	"flyers_intro_c1": "Sứ mệnh của chúng tôi là giúp bạn giới thiệu Bitcoin cho nhiều người hơn bằng cách dán tờ rơi Bitcoin ở nơi công cộng. Tờ rơi này có mã QR liên kết đến",
	"flyers_intro_c2": "trang web giáo dục Bitcoin.",
	"flyers_intro_c3": "lạm phát",
	"flyers_intro_c4": "In tờ rơi này tại nhà hoặc tiệm in. Sau đó, dán trên bảng thông báo, cột điện thoại quanh phố, và các nơi công cộng nơi mọi người có thể nhìn thấy và tìm hiểu về Bitcoin.",
	"flyers_intro_c5": "Đồng thời, yêu cầu một gói",
	"flyers_intro_c6": "nhãn dán Bitcoin miễn phí",
	"flyers_intro_c7": "để giới thiệu Bitcoin cho nhiều người hơn.",
	"flyers_btn_download": "TẢI TỜ RƠI",
	"flyers_btn_print": "IN TỜ RƠI",
	"flyers_share_header": "CHIA SẺ VỊ TRÍ TỜ RƠI",
	"flyers_share_c1": "Chia sẻ vị trí dán tờ rơi với chúng tôi trên Nostr và xem những người khác dán tờ rơi ở đâu.",
	"flyers_btn_share_on_nostr": "CHIA SẺ TRÊN NOSTR",
	"flyers_btn_what_is_nostr": "NOSTR LÀ GÌ?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Tham gia và giúp lan tỏa Bitcoin",
	"get_involved_description": "Tài nguyên miễn phí của chúng tôi giúp lan tỏa việc áp dụng Bitcoin dễ dàng hơn.",
	"get_involved_header": "THAM GIA",
	"get_involved_header_2": "LAN TỎA BITCOIN",
	"get_involved_intro_1": "Sống trong thế giới hiện tại có thể khiến bạn chán nản.",
	"get_involved_intro_2": "Tiền của chúng ta đã hỏng. Kết quả là, những phần cơ bản của xã hội cũng hỏng theo.",
	"get_involved_intro_3": "Nếu bạn đã tìm hiểu Bitcoin, bạn biết cảm giác hy vọng mà Bitcoin mang lại. Hy vọng cho một tương lai tươi sáng hơn được tạo nên bởi tiền tốt hơn.",
	"get_involved_intro_4": "Nhưng nhiều người xung quanh bạn không biết về Bitcoin. Họ sống trong cùng thế giới hỏng như bạn, nhưng không có ngọn hải đăng hy vọng giúp họ vượt qua bóng tối.",
	"get_involved_intro_5": "Nhưng bạn có thể giúp thay đổi điều đó. Chúng tôi đã tạo nhiều tài nguyên miễn phí để giúp bạn dễ dàng lan tỏa hy vọng mà Bitcoin mang lại cho mọi người xung quanh.",
	"get_involved_sticker_header": "Dán nhãn ở nơi công cộng",
	"get_involved_sticker_content_1": "Bạn có thể giúp giáo dục mọi người xung quanh về Bitcoin mà không cần giao tiếp với ai. Chỉ cần dán một nhãn dán Bitcoin miễn phí ở nơi công cộng.",
	"get_involved_sticker_content_2": "Hàng trăm người quét mã QR trên nhãn dán mỗi tháng. Nhãn dán lạm phát liên kết đến trang về",
	"get_involved_sticker_content_3": "Bitcoin như giải pháp cho lạm phát.",
	"get_involved_sticker_content_4": "Nhãn dán khác liên kết đến trang chủ giáo dục cho thấy",
	"get_involved_sticker_content_5": "Bitcoin đang xây dựng thế giới tốt đẹp hơn.",
	"get_involved_sticker_content_6": "Bằng cách dán nhãn dán trong cộng đồng nơi mọi người nhìn thấy, bạn giúp họ bắt đầu hành trình tìm hiểu Bitcoin.",
	"get_involved_request_a": "YÊU CẦU MỘT",
	"get_involved_sticker_pack": "GÓI NHÃN DÁN",
	"get_involved_postcard_header": "Gửi bưu thiếp",
	"get_involved_postcard_content_1": "Bạn có thể giúp lan tỏa Hy Vọng của Bitcoin cho ai đó bạn biết bằng cách gửi họ một bưu thiếp miễn phí.",
	"get_involved_postcard_content_2": "Mặt sau mỗi bưu thiếp chứa đoạn giới thiệu hấp dẫn về Bitcoin cùng mã QR để tìm hiểu thêm.",
	"get_involved_postcard_content_3": "Bằng cách gửi bưu thiếp Bitcoin, bạn giúp họ nhìn Bitcoin theo cách mới.",
	"get_involved_postcard_pack": "GÓI BƯU THIẾP",
	"get_involved_business_header": "Giới thiệu doanh nghiệp",
	"get_involved_business_content_1": "Muốn giúp xây dựng nền kinh tế tuần hoàn Bitcoin? Bộ Tài Liệu Doanh Nghiệp Bitcoin giúp dễ dàng tiếp cận doanh nghiệp về việc chấp nhận thanh toán Bitcoin.",
	"get_involved_business_content_2": "Mỗi bộ tài liệu bao gồm tờ rơi nêu bật lợi ích chấp nhận thanh toán Bitcoin. Mỗi tờ rơi liên kết đến nhiều",
	"get_involved_business_content_3": "tài nguyên doanh nghiệp Bitcoin miễn phí.",
	"get_involved_business_kit": "BỘ TÀI LIỆU DOANH NGHIỆP"
});

console.log('\nDone! Created all Vietnamese content translation files.');
