/**
 * Creates Vietnamese (vi) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "Lỗi 404 | Không Tìm Thấy Trang",
	"404_message": "TRANG LỖI NÀY KHÔNG HAY CHÚT NÀO",
	"404_home": "QUAY VỀ TRANG CHỦ"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Về bitcoin.rocks — Giáo Dục Bitcoin Từ Năm 2022",
	"about_description": "bitcoin.rocks là một trang web giáo dục Bitcoin miễn phí, mã nguồn mở, được thành lập năm 2022. Sứ mệnh của chúng tôi là thúc đẩy việc áp dụng Bitcoin thông qua giáo dục.",
	"about_header": "GIỚI THIỆU",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Sứ Mệnh Của Chúng Tôi",
	"about_mission_1": "bitcoin.rocks được thành lập năm 2022 với một sứ mệnh đơn giản: thúc đẩy việc áp dụng Bitcoin thông qua giáo dục.",
	"about_mission_2": "Chúng tôi tồn tại để trở thành đường dẫn đầu tiên bạn chia sẻ với người tò mò về Bitcoin. Một điểm khởi đầu thân thiện, dễ tiếp cận giải thích Bitcoin đang xây dựng một thế giới tốt đẹp hơn như thế nào.",
	"about_mission_3": "Quá nhiều người hiểu sai về Bitcoin hoặc chưa bao giờ được giới thiệu đúng cách. Chúng tôi muốn thay đổi điều đó bằng cách cung cấp nội dung giáo dục miễn phí, chất lượng cao mà ai cũng có thể hiểu được.",
	"about_what_we_do_header": "Chúng Tôi Làm Gì",
	"about_what_we_do_1": "Chúng tôi tạo nội dung giáo dục miễn phí dành cho người mới tìm hiểu Bitcoin. Trang web của chúng tôi bao gồm các chủ đề như lạm phát, tự lưu trữ, ví, Mạng Lightning, và so sánh Bitcoin với các tài sản và hệ thống thanh toán khác.",
	"about_what_we_do_2a": "Chúng tôi gửi ",
	"about_what_we_do_2b": "nhãn dán Bitcoin miễn phí",
	"about_what_we_do_2c": " đến tận cửa nhà bạn để bạn có thể giúp lan tỏa nhận thức về Bitcoin trong cộng đồng. Hàng trăm người quét mã QR trên những nhãn dán này mỗi tháng để tìm hiểu về Bitcoin.",
	"about_what_we_do_3a": "Chúng tôi cũng cung cấp ",
	"about_what_we_do_3b": "tờ rơi có thể in",
	"about_what_we_do_3c": " và ",
	"about_what_we_do_3d": "bộ tài liệu doanh nghiệp",
	"about_what_we_do_3e": " cho bất kỳ ai muốn giúp các doanh nghiệp địa phương chấp nhận thanh toán Bitcoin.",
	"about_what_we_do_4": "Tất cả nội dung của chúng tôi không yêu cầu bất kỳ kiến thức Bitcoin nào trước đó. Dù bạn hoàn toàn mới với Bitcoin hay là một Bitcoiner kỳ cựu đang tìm tài liệu để chia sẻ, bitcoin.rocks dành cho bạn.",
	"about_editorial_header": "Phương Pháp Biên Tập Của Chúng Tôi",
	"about_editorial_1": "Mọi nội dung trên bitcoin.rocks đều được sưu tầm và kiểm chứng thông tin. Khi chúng tôi tham chiếu dữ liệu hoặc số liệu thống kê, chúng tôi trích dẫn nguồn để bạn có thể tự xác minh thông tin.",
	"about_editorial_2": "Chúng tôi liên kết đến các nguồn đáng tin cậy như TIME Magazine, Forbes, MIT Technology Review, Lyn Alden và nhiều nguồn khác. Chúng tôi tin rằng Bitcoin tự nói lên tất cả khi các sự thật được trình bày rõ ràng.",
	"about_editorial_3": "Nội dung của chúng tôi được xem xét và cập nhật thường xuyên để đảm bảo tính chính xác và mới mẻ. Tất cả nội dung tập trung hoàn toàn vào giáo dục Bitcoin.",
	"about_open_source_header": "Mã Nguồn Mở",
	"about_open_source_1a": "bitcoin.rocks là một dự án miễn phí, mã nguồn mở được cấp phép theo Giấy phép MIT. Toàn bộ mã nguồn của chúng tôi công khai ",
	"about_open_source_1b": "trên GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Bất kỳ ai cũng có thể đóng góp cho bitcoin.rocks. Chúng tôi đặc biệt chào đón các dịch giả giúp nội dung của chúng tôi tiếp cận được với mọi người trên toàn thế giới.",
	"about_open_source_3": "Nhờ cộng đồng dịch giả tình nguyện, bitcoin.rocks hiện có sẵn bằng 20 ngôn ngữ và đang tiếp tục phát triển.",
	"about_open_source_contribute": "Tìm hiểu cách đóng góp.",
	"about_contact_header": "Liên Hệ Với Chúng Tôi",
	"about_contact_1": "Chúng tôi rất mong nhận được phản hồi từ bạn. Dù bạn có câu hỏi, đề xuất, hay chỉ muốn chào hỏi, hãy liên hệ bất cứ lúc nào.",
	"about_contact_email": "Email:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Bạn sẽ nhận được bưu thiếp trong 1 đến 2 tuần.",
	"postcard_success_2": "Cảm ơn bạn đã giúp thúc đẩy việc áp dụng Bitcoin bằng cách gửi những bưu thiếp này cho người bạn quen biết!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Bạn sẽ nhận được biển hiệu trong 1 đến 2 tuần. Trong khi chờ đợi, hãy nghĩ về những vị trí tốt để đặt biển hiệu!",
	"sign_success_3": "Bạn muốn xem những người khác đặt biển hiệu ở đâu?",
	"signs_share_header": "CHIA SẺ VỊ TRÍ BIỂN HIỆU CỦA BẠN",
	"signs_share_c1": "Chia sẻ ảnh vị trí đặt biển hiệu của bạn với chúng tôi trên Nostr và chúng tôi sẽ gửi sats cho bạn! Sats là phần nhỏ của một bitcoin.",
	"signs_btn_share_on_nostr": "CHIA SẺ TRÊN NOSTR",
	"signs_btn_what_is_nostr": "NOSTR LÀ GÌ?"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Bạn sẽ nhận được nhãn dán trong 2 đến 4 tuần. Trong khi chờ đợi, hãy nghĩ về một vị trí tốt để dán nhãn dán!",
	"sticker_success_2": "Vị trí dán nhãn tốt là:",
	"sticker_success_list_1": "nơi công cộng nơi mọi người sẽ nhìn thấy",
	"sticker_success_list_2": "những nơi ít bị gỡ bỏ nhanh chóng (nhãn dán không gây hư hại vĩnh viễn)",
	"sticker_success_list_3": "trên các bề mặt dễ dính (kim loại, nhựa, kính)",
	"sticker_success_list_4": "KHÔNG dán trên tài sản tư nhân, che biển báo, máy ATM, hoặc trụ bơm xăng",
	"sticker_success_3": "Bạn muốn xem những người khác dán nhãn ở đâu?",
	"sticker_success_flyers_bar_new": "MỚI!",
	"sticker_success_flyers_bar_cta": "In & Dán Tờ Rơi Bitcoin →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Chúng tôi đã nhận được yêu cầu của bạn thành công.",
	"sticker_language_success_2": "Chúng tôi xuất bản các tập tin mới theo đợt, vì vậy có thể mất vài tuần để các tập tin này có sẵn để tải xuống. Hãy quay lại kiểm tra sớm!"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "MÁY TÍNH LẠM PHÁT GỘP",
	"cic_description": "Sử dụng Máy Tính Lạm Phát Gộp này để tìm hiểu mức lương của bạn cần tăng bao nhiêu để theo kịp lạm phát.",
	"what_can_i_do_about": "Tôi có thể làm gì về",
	"what_can_i_do_about_2": "lạm phát?",
	"cic_inflation_cta": "Thoát Khỏi Lạm Phát Với Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Thoát Khỏi Ma Trận Với Nostr",
	"nostr_header": "THOÁT KHỎI MA TRẬN VỚI NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr Là Gì?",
	"what_is_nostr_header": "NOSTR LÀ GÌ?"
});

console.log('\nDone! Created simple Vietnamese translation files.');
