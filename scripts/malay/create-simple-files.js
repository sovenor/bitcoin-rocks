/**
 * Creates Malay (ms) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ms';
const today = '2026-04-03';

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
	"404_title": "Ralat 404 | Halaman Tidak Ditemui",
	"404_message": "Halaman rosak ini langsung tidak hebat",
	"404_home": "Kembali ke laman utama"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Mengenai bitcoin.rocks — Pendidikan Bitcoin Sejak 2022",
	"about_description": "bitcoin.rocks ialah laman web pendidikan Bitcoin percuma dan sumber terbuka yang ditubuhkan pada 2022. Misi kami adalah mempercepatkan penerimaan Bitcoin melalui pendidikan.",
	"about_header": "MENGENAI",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Misi Kami",
	"about_mission_1": "bitcoin.rocks ditubuhkan pada 2022 dengan misi yang mudah: mempercepatkan penerimaan Bitcoin melalui pendidikan.",
	"about_mission_2": "Kami wujud untuk menjadi pautan pertama yang anda kongsi dengan seseorang yang ingin tahu tentang Bitcoin. Titik permulaan yang mesra dan mudah diakses yang menerangkan bagaimana Bitcoin membina dunia yang lebih baik.",
	"about_mission_3": "Terlalu ramai orang salah faham tentang Bitcoin atau belum pernah diperkenalkan dengan betul kepadanya. Kami mahu mengubah perkara ini dengan menyediakan kandungan pendidikan percuma dan berkualiti tinggi yang boleh difahami oleh sesiapa sahaja.",
	"about_what_we_do_header": "Apa Yang Kami Lakukan",
	"about_what_we_do_1": "Kami mencipta kandungan pendidikan percuma untuk pendatang baru Bitcoin. Laman web kami merangkumi topik seperti inflasi, jagaan sendiri, dompet, Rangkaian Lightning, dan bagaimana Bitcoin dibandingkan dengan aset dan sistem pembayaran lain.",
	"about_what_we_do_2a": "Kami menghantar ",
	"about_what_we_do_2b": "pelekat Bitcoin percuma",
	"about_what_we_do_2c": " ke pintu anda supaya anda boleh membantu menyebarkan kesedaran Bitcoin di komuniti anda. Ratusan orang mengimbas kod QR pada pelekat ini setiap bulan untuk belajar tentang Bitcoin.",
	"about_what_we_do_3a": "Kami juga menyediakan ",
	"about_what_we_do_3b": "risalah boleh cetak",
	"about_what_we_do_3c": " dan ",
	"about_what_we_do_3d": "kit perniagaan",
	"about_what_we_do_3e": " untuk sesiapa yang mahu membantu perniagaan tempatan menerima pembayaran Bitcoin.",
	"about_what_we_do_4": "Semua kandungan kami mengandaikan pengetahuan Bitcoin sifar. Sama ada anda baru mengenal Bitcoin atau seorang Bitcoiner berpengalaman yang mencari sumber untuk dikongsi, bitcoin.rocks adalah untuk anda.",
	"about_editorial_header": "Pendekatan Editorial Kami",
	"about_editorial_1": "Setiap kandungan di bitcoin.rocks disusun dan disemak fakta. Apabila kami merujuk data atau statistik, kami memetik sumber kami supaya anda boleh mengesahkan maklumat sendiri.",
	"about_editorial_2": "Kami memautkan ke sumber yang dipercayai seperti Majalah TIME, Forbes, MIT Technology Review, Lyn Alden, dan banyak lagi. Kami percaya bahawa Bitcoin bercakap sendiri apabila fakta dibentangkan dengan jelas.",
	"about_editorial_3": "Kandungan kami disemak dan dikemas kini secara berkala untuk memastikan ketepatan dan kesegaran. Semua kandungan tertumpu secara eksklusif pada pendidikan Bitcoin.",
	"about_open_source_header": "Sumber Terbuka",
	"about_open_source_1a": "bitcoin.rocks ialah projek sumber terbuka percuma yang dilesenkan di bawah Lesen MIT. Keseluruhan pangkalan kod kami tersedia secara terbuka ",
	"about_open_source_1b": "di GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Sesiapa sahaja boleh menyumbang kepada bitcoin.rocks. Kami terutamanya mengalu-alukan penterjemah yang membantu menjadikan kandungan kami boleh diakses oleh orang di seluruh dunia.",
	"about_open_source_3": "Terima kasih kepada komuniti penterjemah sukarelawan kami, bitcoin.rocks kini tersedia dalam 23 bahasa dan terus berkembang.",
	"about_open_source_contribute": "Ketahui cara menyumbang.",
	"about_contact_header": "Hubungi Kami",
	"about_contact_1": "Kami ingin mendengar daripada anda. Sama ada anda mempunyai soalan, cadangan, atau sekadar ingin bertanya khabar, hubungi kami pada bila-bila masa.",
	"about_contact_email": "E-mel:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Pelekat anda akan sampai dalam masa 2-4 minggu. Sementara menunggu, fikirkan tempat yang baik untuk melekatkannya!",
	"sticker_success_2": "Tempat yang baik untuk melekatkan pelekat:",
	"sticker_success_list_1": "Tempat awam yang ramai orang akan melihatnya",
	"sticker_success_list_2": "Tempat yang tidak mudah ditanggalkan (pelekat tidak menyebabkan kerosakan kekal)",
	"sticker_success_list_3": "Permukaan yang mudah dilekatkan (logam, plastik, kaca)",
	"sticker_success_list_4": "Jangan lekatkan pada harta persendirian, papan tanda, ATM, atau pam minyak",
	"sticker_success_3": "Mahu lihat di mana orang lain melekatkan pelekat mereka?",
	"sticker_success_flyers_bar_new": "Baru!",
	"sticker_success_flyers_bar_cta": "Cetak dan tampal risalah Bitcoin →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Permintaan anda telah berjaya diterima.",
	"sticker_language_success_2": "Fail baharu diterbitkan secara berkumpulan, jadi ia mungkin mengambil masa beberapa minggu sebelum tersedia untuk dimuat turun. Sila kembali semula!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Poskad anda akan sampai dalam masa 1-2 minggu.",
	"postcard_success_2": "Terima kasih kerana menghantar poskad ini kepada orang yang anda kenali untuk membantu mempercepatkan penerimaan Bitcoin!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Papan tanda anda akan sampai dalam masa 1-2 minggu. Sementara menunggu, fikirkan tempat yang baik untuk memasangnya!",
	"sign_success_3": "Mahu lihat di mana orang lain memasang papan tanda mereka?",
	"signs_share_header": "Kongsi lokasi papan tanda anda",
	"signs_share_c1": "Kongsi gambar lokasi papan tanda anda di Nostr dan kami akan zap sats kepada anda! Sats ialah pecahan Bitcoin.",
	"signs_btn_share_on_nostr": "KONGSI DI NOSTR",
	"signs_btn_what_is_nostr": "APA ITU NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "Kalkulator Inflasi Kompaun",
	"cic_description": "Gunakan kalkulator inflasi kompaun ini untuk melihat berapa banyak gaji anda perlu dinaikkan untuk mengikuti inflasi.",
	"what_can_i_do_about": "Apa yang boleh saya lakukan tentang",
	"what_can_i_do_about_2": "inflasi?",
	"cic_inflation_cta": "Keluar daripada inflasi dengan Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Keluar dari matriks dengan Nostr",
	"nostr_header": "KELUAR DARI MATRIKS DENGAN NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Apa itu Nostr?",
	"what_is_nostr_header": "APA ITU NOSTR?"
});

console.log('\nDone! Simple files created for Malay (ms).');
