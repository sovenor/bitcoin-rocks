#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 4
 * bitcoin-vs-* comparison pages.
 *
 * Idempotent. Run after part 3.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

// Hero title common pattern: "The difference between Bitcoin and X"
function heroTitle(asset) {
	return `Sự khác biệt giữa <span class="orange">Bitcoin</span> và <span class="asset">${asset}</span>`;
}

const TRANSLATIONS = {
	// ─── bitcoin-vs-banks ───
	"bitcoin-vs-banks::point_1_summary_1":
		"Bất kỳ ai có kết nối internet đều có thể sử dụng Bitcoin — nó",
	"bitcoin-vs-banks::point_1_summary_2": "không cần xin phép.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Các ngân hàng có thể từ chối, đóng băng hoặc đóng tài khoản dựa trên chính sách hoặc quy định của chính phủ.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Mạng Bitcoin hoạt động 24/7/365 không có thời gian bảo trì hay nghỉ lễ. Các ngân hàng có giờ giới hạn, nghỉ cuối tuần và những khoảng thời gian gián đoạn.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Mọi giao dịch Bitcoin đều nằm trên một blockchain công khai mà ai cũng có thể kiểm tra. Các ngân hàng vận hành sổ cái riêng tư mà khách hàng không thể tự xác minh.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Với Bitcoin, bạn nắm giữ khóa riêng của chính mình — xem hướng dẫn",
	"bitcoin-vs-banks::point_4_summary_2": "ví Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		"đơn giản của chúng tôi. Các ngân hàng giữ tiền của bạn và có thể đóng băng, giới hạn hoặc hạn chế bất cứ lúc nào.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Phí Bitcoin minh bạch và có thể dự đoán. Các ngân hàng chồng chất các phí tài khoản, phí thấu chi, phí chuyển khoản và phí ATM ẩn theo thời gian.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin chỉ cho phép bạn chi tiêu những gì bạn thực sự sở hữu. Các ngân hàng cho phép thấu chi, sau đó tính các khoản phí phạt liên tiếp cho đặc quyền đó.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Một khi đã được phát đi, các giao dịch Bitcoin không thể bị dừng lại hoặc đảo ngược. Các ngân hàng có thể chặn, đóng băng hoặc đảo ngược giao dịch dựa trên chính sách hoặc lệnh của chính phủ.",
	"bitcoin-vs-banks::hero_title": heroTitle("Ngân hàng"),

	// ─── bitcoin-vs-bonds ───
	"bitcoin-vs-bonds::point_1_summary_1":
		"Trái phiếu chỉ \"không rủi ro\" trên danh nghĩa — lạm phát, biến động lãi suất và rủi ro vỡ nợ đều ăn mòn lợi nhuận thực tế.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin có biến động minh bạch nhưng không có rủi ro đối tác ẩn.",
	"bitcoin-vs-bonds::point_2_summary_1": "Khi",
	"bitcoin-vs-bonds::point_2_summary_2": "lạm phát",
	"bitcoin-vs-bonds::point_2_summary_3":
		"vượt quá lợi suất trái phiếu, người nắm giữ trái phiếu mất sức mua thực tế hàng năm. Mức trần 21 triệu của Bitcoin không thể bị lạm phát làm loãng.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Thị trường trái phiếu có thể bị đóng băng trong khủng hoảng — Silicon Valley Bank sụp đổ một phần vì bị mắc kẹt với trái phiếu mất giá. Xem cách",
	"bitcoin-vs-bonds::point_3_summary_2":
		"rút tiền hàng loạt",
	"bitcoin-vs-bonds::point_3_summary_3":
		"xảy ra và lý do Bitcoin tránh được điều đó. Bitcoin giao dịch 24/7 toàn cầu mà không có khủng hoảng thanh khoản.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Các cuộc đấu giá Trái phiếu Kho bạc có thể thất bại khi không đủ người mua — xem",
	"bitcoin-vs-bonds::point_4_summary_2":
		"cuộc đấu giá yếu năm 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Giá Bitcoin được phát hiện liên tục trên thị trường mở mà không có cuộc đấu giá tập trung nào có thể thất bại.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Lợi suất trái phiếu được cố định khi mua. Ngay cả khi nền kinh tế bùng nổ hay đồng tiền sụp đổ, lợi nhuận của bạn vẫn không đổi.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin có dư địa tăng giá đáng kể khi việc áp dụng tăng lên và nhu cầu gặp nguồn cung cố định.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Hầu hết trái phiếu được giữ qua các ngân hàng hoặc môi giới, tăng thêm rủi ro đối tác. Bitcoin có thể được tự lưu ký với một",
	"bitcoin-vs-bonds::point_6_summary_2": "ví",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Trái phiếu phụ thuộc hoàn toàn vào việc các chính phủ trả nợ. Nếu chính phủ vỡ nợ hoặc làm loãng nợ bằng lạm phát, người nắm giữ trái phiếu sẽ thua thiệt.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin hoạt động độc lập với bất kỳ chính phủ hay quyền lực chính trị nào.",
	"bitcoin-vs-bonds::hero_title": heroTitle("Trái phiếu"),
	"bitcoin-vs-bonds::point_6_summary_3": " — loại bỏ hoàn toàn rủi ro đó.",

	// ─── bitcoin-vs-cash ───
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin di chuyển qua internet đến bất kỳ đâu trong vài phút. Tiền mặt cần sự hiện diện vật lý hoặc người chuyển phát đáng tin cậy — bạn không thể email một tờ 20 đô.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin hoạt động giống nhau ở mọi nơi. Tiền mặt bị giới hạn bởi địa lý, tỷ giá hối đoái và mức độ chấp nhận tại địa phương.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Các chính phủ có thể vô hiệu hóa tiền mặt qua một đêm — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Ấn Độ</a> đã làm điều đó vào năm 2016. Ngay cả khi không bị thu hồi, tiền mặt vẫn mất giá vì",
	"bitcoin-vs-cash::point_3_summary_2": "lạm phát.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin không thể bị bất kỳ chính phủ hay cơ quan nào vô hiệu hóa.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Tiền mặt có thể bị làm giả, đôi khi rất tinh vi. Bitcoin sử dụng mật mã khiến việc làm giả là không thể về mặt toán học.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin không có cơ quan trung ương. Tiền mặt được phát hành bởi các chính phủ có thể in thêm, thay đổi thiết kế hoặc vô hiệu hóa các tờ tiền theo ý muốn.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Tiền mặt dễ bị trộm cắp, hỏa hoạn, mất mát và tịch thu. Bitcoin có thể được",
	"bitcoin-vs-cash::point_6_summary_2": "tự lưu ký",
	"bitcoin-vs-cash::point_6_summary_3":
		"an toàn trên điện thoại hoặc thiết bị phần cứng.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin chia thành 100 triệu sat, cho phép thanh toán vi mô ở mọi quy mô. Tiền mặt có mệnh giá tối thiểu — bạn không thể chia một xu.",
	"bitcoin-vs-cash::hero_title": heroTitle("Tiền mặt"),

	// ─── bitcoin-vs-cbdc ───
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin là mạng máy tính an toàn nhất từng được xây dựng và chưa bao giờ bị hack. Các CBDC dựa vào các ngân hàng và chính phủ đã bị hack vô số lần.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Không ai có thể ngăn bạn giao dịch với Bitcoin. CBDC được thiết kế để chính phủ và các ngân hàng trung ương có thể kiểm soát mọi giao dịch, hạn chế quyền riêng tư và tự do của bạn.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin không bao giờ hết hạn và không có phí hàng tháng. CBDC có thể được lập trình để hết hạn, ngăn bạn tiết kiệm cho tương lai.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin có mức trần cứng 21 triệu BTC. CBDC không có giới hạn về cung, cho phép các chính phủ mở rộng tiền theo ý muốn — gây ra",
	"bitcoin-vs-cbdc::point_3_summary_2": "lạm phát.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Địa chỉ Bitcoin không gắn với danh tính thực của bạn. CBDC liên kết trực tiếp với CMND của chính phủ, cho phép giám sát tài chính hàng loạt và kiểm duyệt.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Quy tắc của Bitcoin được hàng chục ngàn nút độc lập xác thực. CBDC tập trung trong tay chính phủ và ngân hàng trung ương, những bên nắm quyền kiểm soát hoàn toàn mạng lưới.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Bất kỳ ai cũng có thể chạy một nút Bitcoin để xác minh quy tắc của mạng. CBDC không cho phép người dùng chạy nút — bạn phải tin tưởng cơ quan trung ương.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin được tự lưu ký không thể bị bất kỳ ai đóng băng. CBDC được thiết kế để các chính phủ và ngân hàng trung ương có thể đóng băng tài khoản ngay lập tức.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin cho bạn toàn quyền kiểm soát tiền của mình khi bạn tự lưu ký với một",
	"bitcoin-vs-cbdc::point_8_summary_2": "ví.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC yêu cầu tin tưởng các bên giữ hộ như ngân hàng hoặc chính phủ để giữ tiền cho bạn.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Chính sách tiền tệ của Bitcoin được cố định trong mã và không thể thay đổi. CBDC có thể được lập trình lại theo ý muốn của các chính trị gia, gây ra",
	"bitcoin-vs-cbdc::point_9_summary_2": "lạm phát",
	"bitcoin-vs-cbdc::hero_title": heroTitle("CBDC"),
	"bitcoin-vs-cbdc::point_9_summary_3": " khi quá nhiều tiền được in.",

	// ─── bitcoin-vs-crypto ───
	"bitcoin-vs-crypto::point_1_summary_1":
		"Giao thức của Bitcoin đã giữ nguyên về cơ bản kể từ năm 2009, cung cấp các quy tắc có thể dự đoán. Hầu hết các dự án crypto liên tục thay đổi giao thức, kinh tế token, hoặc phân nhánh thành các phiên bản mới.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin chạy trên hàng chục ngàn nút độc lập trên toàn thế giới. Hầu hết các dự án crypto được kiểm soát bởi các quỹ, công ty hoặc nhóm phát triển nhỏ có thể thực hiện các thay đổi đơn phương.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin có mức trần cứng 21 triệu đồng — tài sản kỹ thuật số khan hiếm nhất. Hầu hết các dự án crypto có nguồn cung không giới hạn hoặc cơ chế tạo token mới theo ý muốn, làm loãng những người nắm giữ.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin có một mục đích: tiền kỹ thuật số ngang hàng. Bất kỳ ai cũng có thể hiểu và sử dụng. Hầu hết crypto liên quan đến hợp đồng thông minh phức tạp hoặc DeFi đòi hỏi chuyên môn kỹ thuật để sử dụng an toàn.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work của Bitcoin đã chạy mà không có cuộc tấn công thành công nào trên mạng chính trong hơn 15 năm. Hầu hết các dự án crypto sử dụng cơ chế đồng thuận thử nghiệm chưa được kiểm chứng qua thực chiến.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin là tiền kỹ thuật số — một kho lưu trữ giá trị và phương tiện trao đổi. Hầu hết các token crypto là token tiện ích hoặc quản trị mang tính đầu cơ với giá trị thực không rõ ràng.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin trở nên mạnh mẽ hơn dưới sự tấn công và đã vượt qua mọi cuộc khủng hoảng, lệnh cấm và chỉ trích. Hầu hết các dự án crypto sụp đổ dưới áp lực pháp lý, kỹ thuật hoặc thị trường.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin không có CEO, không có công ty, không có điểm thất bại đơn lẻ. Hầu hết các dự án crypto phụ thuộc vào VC, lãnh đạo cụ thể hoặc sự tồn tại của một công ty.",
	"bitcoin-vs-crypto::hero_title": heroTitle("Crypto"),

	// ─── bitcoin-vs-fine-art ───
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Mỗi bitcoin đều giống hệt nhau và có thể hoán đổi cho nhau. Mỗi tác phẩm nghệ thuật là duy nhất — sự sáng tạo, lịch sử, tình trạng và nguồn gốc khác nhau khiến việc so sánh trực tiếp cực kỳ khó khăn.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin giao dịch 24/7 trên thị trường toàn cầu mà ai cũng có thể truy cập. Mỹ thuật yêu cầu các nhà đấu giá chuyên dụng, đại lý tư nhân hoặc phòng tranh và có thể mất hàng tháng để bán.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Mua hoặc bán Bitcoin tốn dưới 1% phí, thường ít hơn nhiều. Bán nghệ thuật chất chồng 30–40% phí của người mua, hoa hồng, bảo hiểm, vận chuyển và phí xác thực.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin chia thành 100 triệu sat, hoàn hảo cho mọi giao dịch ở bất kỳ quy mô nào. Bạn không thể sở hữu một phần của một bức tranh hay một góc của một tác phẩm điêu khắc mà không có rủi ro đối tác.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Quyền sở hữu và tính xác thực của Bitcoin có thể được xác minh bằng mật mã trên chuỗi bởi bất kỳ ai. Việc xác thực nghệ thuật rất tốn kém, chậm chạp và vẫn thường xuyên bị làm giả qua mặt — phá hủy giá trị của một tác phẩm chỉ trong một đêm.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin, được sao lưu đúng cách, sống sót qua lũ lụt, hỏa hoạn, động đất và trộm cắp. Mỹ thuật dễ bị mọi hình thức phá hủy vật lý, và bảo hiểm hiếm khi bao phủ tất cả.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Bất kỳ ai có kết nối internet và một chút tiền đều có thể mua Bitcoin. Đầu tư mỹ thuật thực tế chỉ giới hạn ở những nhà sưu tập giàu có với quyền tiếp cận đấu giá và kiến thức chuyên môn.",
	"bitcoin-vs-fine-art::hero_title": heroTitle("Mỹ thuật"),

	// ─── bitcoin-vs-gold ───
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin có thể được gửi tức thì qua internet với phí thấp. Vàng phải được vận chuyển vật lý để chuyển quyền sở hữu.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin là một tài sản kỹ thuật số bản địa mà bạn có thể chuyển qua internet. Vàng trực tuyến là một IOU Kỹ thuật số — bạn chỉ sở hữu một lời hứa từ người giữ hộ, không phải kim loại.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin có mức trần cứng 21 triệu BTC. Nguồn cung vàng tăng khoảng <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% mỗi năm</a>, làm nhỏ phần của bạn — ít hơn",
	"bitcoin-vs-gold::point_3_summary_2": "lạm phát",
	"bitcoin-vs-gold::point_3_summary_3":
		"tiền pháp định — nhưng vẫn là lạm phát.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Khi giá vàng tăng, vàng được khai thác nhiều hơn, đẩy giá xuống. Nguồn cung Bitcoin không co giãn — bất kể giá lên cao đến đâu, sẽ chỉ có 21 triệu mà thôi.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Hàng chục ngàn nút độc lập xác thực mạng Bitcoin. Hầu hết vàng vật chất nằm trong một số ít kho lớn của các bên giữ hộ.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Bất kỳ ai cũng có thể xác minh Bitcoin thật bằng cách chạy một nút đầy đủ — chỉ là một ứng dụng. Việc xác minh vàng vật chất đòi hỏi phải nung chảy; bên trong có thể là vonfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin chia thành 100 triệu sat, hoàn hảo cho mọi giao dịch mua ở bất kỳ quy mô nào. Vàng không thể dễ dàng chia nhỏ cho các giao dịch nhỏ.",
	"bitcoin-vs-gold::hero_title": heroTitle("Vàng"),

	// ─── bitcoin-vs-real-estate ───
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin di chuyển khắp thế giới ngay lập tức. Bất động sản gắn cố định một địa điểm và phơi bày trước các rủi ro kinh tế, chính trị và tự nhiên ở địa phương.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin chia thành 100 triệu sat. Bất động sản không thể bán một phần — bạn không thể bán riêng nhà bếp hoặc mua nửa phòng ngủ.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin hoạt động trên một mạng phi tập trung mà không chính phủ nào có thể kiểm soát. Bất động sản bị quản lý chặt chẽ — quy hoạch, kiểm soát giá thuê, trưng dụng và tịch thu đều áp dụng.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin không yêu cầu bảo trì. Bất động sản đòi hỏi sửa chữa, cải tạo, bảo hiểm, quản lý tài sản và xử lý vấn đề người thuê.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin không có thuế liên tục — bạn chỉ trả thuế thặng dư khi bán. Bất động sản phải nộp thuế tài sản hàng năm bất kể thu nhập.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin, được sao lưu đúng cách, sống sót qua hỏa hoạn, lũ lụt và động đất. Bất động sản dễ bị mọi thảm họa, và bảo hiểm hiếm khi bao phủ tất cả.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Mỗi bitcoin đều giống hệt nhau và có thể hoán đổi. Mỗi bất động sản là duy nhất, khiến việc định giá và so sánh khó khăn.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin giao dịch toàn cầu 24/7 bởi bất kỳ ai có truy cập internet. Bán bất động sản chỉ giới hạn ở người mua địa phương và có thể mất hàng tháng giấy tờ để hoàn tất.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin cho phép sở hữu cá nhân trực tiếp cho bất kỳ ai. Mua bất động sản như một khoản đầu tư ngoài nơi ở chính của bạn đẩy giá nhà lên, làm giảm khả năng chi trả và thúc đẩy khủng hoảng nhà ở.",
	"bitcoin-vs-real-estate::hero_title": heroTitle("Bất động sản"),

	// ─── bitcoin-vs-stocks ───
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin là một tài sản trực tiếp mà bạn sở hữu hoàn toàn. Cổ phiếu là cổ phần trong một công ty — giá trị của chúng phụ thuộc vào ban quản lý, hiệu suất và các quyết định mà bạn không thể kiểm soát.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin có mức trần cứng 21 triệu BTC. Các công ty có thể phát hành cổ phiếu mới bất cứ lúc nào, làm loãng cổ đông hiện hữu — tương tự như cách",
	"bitcoin-vs-stocks::point_2_summary_2": "lạm phát",
	"bitcoin-vs-stocks::point_2_summary_3":
		" tiền pháp định làm loãng tiền mặt. Với Bitcoin, phần của bạn không bao giờ co lại.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin không có CEO và không có điểm thất bại đơn lẻ. Cổ phiếu phụ thuộc nặng nề vào lãnh đạo — một quyết định tồi hoặc sự ra đi có thể đánh sập giá.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Giá Bitcoin đến từ thị trường toàn cầu mở. Định giá cổ phiếu dựa vào các chỉ số như P/E có thể che giấu cổ phiếu được định giá quá cao.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin giao dịch 24/7 khắp thế giới. Thị trường chứng khoán chỉ mở cửa trong giờ làm việc các ngày trong tuần.",
	"bitcoin-vs-stocks::point_6_summary_1": "Bạn có thể",
	"bitcoin-vs-stocks::point_6_summary_2": "tự lưu ký",
	"bitcoin-vs-stocks::point_6_summary_3":
		"Bitcoin với một ứng dụng đơn giản — không cần môi giới. Cổ phiếu nằm với các công ty môi giới, khiến bạn đối mặt với rủi ro đối tác nếu họ phá sản.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Nguồn cung cố định của Bitcoin biến nó thành một hàng rào lạm phát đáng tin cậy. Một số cổ phiếu vượt qua lạm phát, một số khác thì không — không có đảm bảo nào.",
	"bitcoin-vs-stocks::hero_title": heroTitle("Cổ phiếu"),

	// ─── bitcoin-vs-visa ───
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin là một mạng mở mà bất kỳ ai cũng có thể tham gia và sử dụng mà không cần xin phép. Visa là một hệ thống đóng do các tổ chức tài chính kiểm soát có thể từ chối quyền truy cập — đặc biệt là với những người không có tài khoản ngân hàng và những người ít được tiếp cận ngân hàng.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Giao dịch Bitcoin không có phí thương nhân. Visa thường tính cho thương nhân khoảng 3% mỗi giao dịch — doanh nghiệp của bạn có thể tiết kiệm tiền bằng cách chấp nhận",
	"bitcoin-vs-visa::point_2_summary_2": "thanh toán Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " thay thế.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Mọi giao dịch Bitcoin đều nằm trên một blockchain công khai có thể kiểm tra. Visa vận hành một hệ thống đóng, độc quyền nơi khách hàng không thể tự xác minh bất kỳ điều gì.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin không thể bị bất kỳ cơ quan trung ương nào đóng băng. Visa có thể đóng băng tài khoản, chặn giao dịch hoặc từ chối dịch vụ bất cứ lúc nào.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin là thanh toán cuối cùng — bạn chỉ có thể chi tiêu những gì bạn sở hữu. Thẻ tín dụng tạo ra nợ với lãi suất thường trên 25% mỗi năm.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin cho phép bạn",
	"bitcoin-vs-visa::point_6_summary_2": "tự lưu ký",
	"bitcoin-vs-visa::point_6_summary_3":
		"mà không cần ngân hàng hay đơn vị xử lý thanh toán. Thẻ tín dụng luôn yêu cầu bên trung gian.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin hoạt động 24/7 toàn cầu mà không có giờ làm việc. Visa có giờ hoạt động, thời gian bảo trì và các hạn chế địa lý có thể chặn giao dịch.",
	"bitcoin-vs-visa::hero_title": heroTitle("Visa"),
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
		`[part4] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched} (in dictionary: ${
			Object.keys(TRANSLATIONS).length
		})`,
	);
}

main();
