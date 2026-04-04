/**
 * Creates Malay (ms) translation files for all business/ pages.
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin Baik untuk Perniagaan",
	"biz_header": "BITCOIN BAIK UNTUK PERNIAGAAN",
	"biz_s1": "Yuran rendah tanpa jumlah minimum",
	"biz_s1_c1": "Dengan Bitcoin, anda menerima bayaran terus daripada pelanggan anda, sama seperti wang tunai. Rangkaian Bitcoin beroperasi tanpa perantara seperti bank atau syarikat kad kredit yang mengenakan yuran yang mahal.",
	"biz_s2": "Penyelesaian serta-merta",
	"biz_s2_c1": "Sama seperti wang tunai, pembayaran Bitcoin diselesaikan serta-merta. Tiada lagi menunggu pembayaran daripada syarikat kad kredit atau bank. Wang anda boleh diakses dengan segera.",
	"biz_s3": "Tiada caj balik atau transaksi palsu",
	"biz_s3_c1": "Oleh kerana pembayaran Bitcoin dibuat terus antara anda dan pelanggan anda, tiada siapa yang boleh mengambil balik wang anda melalui caj balik.",
	"biz_s3_c2": "Bitcoin palsu tidak boleh dihantar melalui rangkaian Bitcoin, jadi anda tidak perlu risau tentang transaksi palsu yang merosakkan perniagaan anda.",
	"biz_s4": "Dapatkan lebih ramai pelanggan",
	"biz_s4_c1": "Berjuta-juta orang memiliki Bitcoin dan mahu membelanjakannya di tempat yang menerimanya.",
	"biz_s4_c2": "Hanya dengan menerima Bitcoin, perniagaan anda akan disenaraikan di peta pedagang Bitcoin, memberikan anda pendedahan percuma kepada pelanggan Bitcoin baharu.",
	"biz_s4_c3": "Menerima Bitcoin adalah 100% percuma. Tiada kontrak atau yuran tersembunyi."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Ketahui mengapa Bitcoin baik untuk perniagaan",
	"why_header": "BITCOIN BAIK UNTUK PERNIAGAAN",
	"why_good_for_you": "Bitcoin juga baik untuk anda!",
	"why_learn_more_lowercase": "ketahui lebih lanjut.",
	"why_s1": "Bitcoin tidak mempunyai inflasi",
	"why_s1_c1": "Inflasi berlaku apabila wang dicetak lebih banyak atau dicipta daripada tiada. Ini menyebabkan wang anda kehilangan nilai dari semasa ke semasa.",
	"why_s1_c2": "Bitcoin mempunyai bekalan tetap, jadi tiada siapa yang boleh mencetak lebih banyak Bitcoin.",
	"why_s2": "Bitcoin tidak mempunyai krisis bank",
	"why_s2_c1": "Dalam beberapa tahun kebelakangan ini, beberapa bank AS telah gagal akibat krisis bank.",
	"why_s2_c2": "Bank tidak hanya menyimpan wang anda — mereka melaburkan dan meminjamkannya. Jika pelaburan tersebut tidak berjaya, mereka tidak mempunyai wang yang cukup untuk memulangkan kepada anda.",
	"why_s2_c3": "Dan dana insurans FDIC hanya mempunyai $1 untuk setiap $100 yang diinsuranskan.",
	"why_s3": "Bitcoin tidak memerlukan kebenaran",
	"why_s3_c1": "Tidak seperti rangkaian kewangan tradisional, anda tidak memerlukan kebenaran untuk menggunakan Bitcoin.",
	"why_s3_c2": "Ini bermakna tiada siapa yang boleh menghalang anda daripada menggunakan Bitcoin anda atas sebarang sebab. Ia adalah rangkaian kewangan pertama yang boleh anda gunakan tanpa takut penapisan atau rampasan.",
	"why_s4": "Bitcoin membina dunia yang lebih baik",
	"why_s4_c1": "Bitcoin ialah teknologi yang sering disalahfahami, tetapi ia membina dunia yang lebih baik.",
	"why_s4_c2": "Bitcoin membolehkan aktivis hak asasi manusia berjuang untuk kebebasan, mengurangkan pelepasan metana global, menyelamatkan taman negara, dan banyak lagi."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Terima pembayaran Bitcoin di perniagaan anda",
	"guide_header": "BERSEDIA UNTUK MENERIMA BITCOIN DI PERNIAGAAN ANDA?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Soalan lazim tentang menerima Bitcoin",
	"faq_description": "Ada soalan tentang menerima pembayaran Bitcoin untuk perniagaan anda?",
	"faq_header": "ADA SOALAN TENTANG MENERIMA PEMBAYARAN BITCOIN?",
	"faq_s1": "Apa itu Bitcoin?",
	"faq_s1_c1": "Bitcoin mempunyai dua bahagian: wang digital dan rangkaian komputer.",
	"faq_s1_c2": "Anda boleh menggunakan rangkaian Bitcoin untuk menghantar bitcoin (wang digital) terus kepada orang lain.",
	"faq_s1_c3": "Rangkaian Bitcoin beroperasi tanpa perantara atau pihak berkuasa pusat seperti bank atau syarikat kad kredit, jadi anda mengelakkan yuran transaksi mereka.",
	"faq_s1_c4": "Transaksi Bitcoin diselesaikan dengan cepat dan muktamad (10 minit) dan tidak boleh dicaj balik, jadi anda boleh tidur lena kerana wang anda adalah milik anda.",
	"faq_s2": "Bagaimana Bitcoin memberi manfaat kepada perniagaan saya?",
	"faq_s2_c1": "Dengan Bitcoin, anda boleh menerima pembayaran dengan yuran yang lebih rendah dan mendapat lebih ramai pelanggan. Pembayaran Bitcoin mempunyai yuran rendah tanpa jumlah minimum, penyelesaian serta-merta, dan tiada caj balik atau transaksi palsu.",
	"faq_s2_c2": "Menerima Bitcoin adalah percuma dan menyenaraikan perniagaan anda di peta pedagang Bitcoin, memudahkan pengguna Bitcoin menemui perniagaan anda.",
	"faq_s2_c3": "Lihat semua sebab mengapa Bitcoin baik untuk perniagaan.",
	"faq_s3": "Bagaimana saya menerima pembayaran Bitcoin?",
	"faq_s3_c1": "Anda hanya memerlukan dompet Bitcoin percuma untuk mula menerima pembayaran Bitcoin.",
	"faq_s3_c2": "Sediakan dengan cepat dan mudah menggunakan panduan dompet kami dan mula menikmati manfaat menerima Bitcoin hari ini!",
	"faq_s3_c3": "Lihat panduan dompet",
	"faq_s4": "Bolehkah saya menukar Bitcoin yang diterima kepada mata wang tempatan?",
	"faq_s4_c1": "Ya! Dengan menggunakan dompet hibrid dari panduan dompet kami, anda boleh menukar mana-mana peratusan Bitcoin yang diterima kepada mata wang tempatan secara automatik pada masa pembayaran diterima.",
	"faq_s4_c2": "Sediakan dengan cepat dan mudah menggunakan panduan dompet kami.",
	"faq_s4_c3": "Anda juga boleh menyimpan sebahagian daripada pembayaran yang diterima sebagai Bitcoin. Terdapat banyak kelebihan menyimpan dalam Bitcoin:",
	"faq_s4_c4": "Bitcoin ialah sistem kewangan rizab penuh.",
	"faq_s4_c5": "Bitcoin tidak mempunyai inflasi.",
	"faq_s4_c6": "Kelebihan ini menjadikan Bitcoin cara yang baik untuk menyimpan wang jangka panjang.",
	"faq_s4_c7": "Walaupun anda menukar semua pembayaran Bitcoin anda kepada dolar, anda masih mendapat manfaat daripada menerima pembayaran dengan yuran yang lebih rendah sambil menjangkau lebih ramai pelanggan berpotensi.",
	"faq_s5": "Bolehkah saya menerima pembayaran Bitcoin secara bersemuka?",
	"faq_s5_c1": "Ya! Anda boleh menerima pembayaran Bitcoin secara bersemuka dengan mudah menggunakan dompet Bitcoin.",
	"faq_s5_c2": "Pilih dompet Bitcoin terbaik untuk perniagaan anda menggunakan panduan dompet kami.",
	"faq_s5_c3": "Lihat panduan dompet",
	"faq_s6": "Bolehkah saya menerima pembayaran Bitcoin dalam talian?",
	"faq_s6_c1": "Ya! Anda boleh menerima pembayaran Bitcoin dengan mudah di kedai dalam talian sedia ada anda.",
	"faq_s6_c2": "Lihat panduan dompet kami untuk maklumat lanjut.",
	"faq_s7": "Bagaimana saya memberitahu pelanggan bahawa saya menerima Bitcoin?",
	"faq_s7_c1": "Kami menawarkan pelekat 'Bitcoin Accepted Here' percuma. Tampalkan di perniagaan anda untuk memberitahu pelanggan anda bahawa anda menerima pembayaran Bitcoin.",
	"faq_s7_c2": "Minta pelekat di sini.",
	"faq_s7_c3": "Anda juga boleh menyenaraikan perniagaan anda secara percuma di peta pedagang Bitcoin, mendedahkan anda kepada berjuta-juta pengguna Bitcoin yang ingin membelanjakan Bitcoin mereka di perniagaan yang menerimanya.",
	"faq_s7_c4": "Senaraikan sekarang.",
	"faq_s8": "Bagaimana menerima Bitcoin boleh meningkatkan pelanggan saya?",
	"faq_s8_c1": "Terdapat berjuta-juta pengguna Bitcoin yang ingin membelanjakan Bitcoin mereka di perniagaan yang menerimanya.",
	"faq_s8_c2": "Hanya dengan menerima pembayaran Bitcoin, anda akan disenaraikan secara percuma di peta pedagang Bitcoin, mendedahkan anda kepada pelanggan berpotensi baharu.",
	"faq_s8_c3": "Senaraikan sekarang.",
	"faq_s9": "Berapakah kos untuk menerima Bitcoin?",
	"faq_s9_c1": "Menerima Bitcoin untuk perniagaan anda adalah 100% percuma. Tiada kontrak atau yuran tersembunyi.",
	"faq_s9_c2": "Lihat panduan dompet kami untuk mula menerima pembayaran Bitcoin hari ini."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Cara menerima pembayaran Bitcoin",
	"wallets_header": "DAPATKAN DOMPET BITCOIN PERCUMA DAN MULA MENERIMA PEMBAYARAN BITCOIN",
	"wallets_intro_1": "Semua dompet Bitcoin boleh beroperasi bersama, jadi pelanggan boleh membayar anda dengan Bitcoin tidak kira dompet apa yang mereka gunakan.",
	"wallets_intro_2": "Dompet Bitcoin sahaja:",
	"wallets_intro_3": "Ini adalah dompet Bitcoin tulen yang membuka semua manfaat Bitcoin: tiada perantara, yuran rendah, tiada caj balik atau transaksi palsu.",
	"wallets_intro_4": "Dompet hibrid:",
	"wallets_intro_5": "Menukar mana-mana peratusan Bitcoin anda kepada dolar pada masa anda menerima bayaran daripada pelanggan. Yuran lebih rendah daripada kad kredit, tetapi lebih tinggi daripada pembayaran Bitcoin tulen.",
	"wallets_intro_6": "Kedua-duanya adalah cara yang baik untuk menerima Bitcoin. Dompet khusus yang anda gunakan bergantung pada saiz dan jenis perniagaan anda.",
	"wallets_choice_sole": "Dompet untuk pemilik tunggal",
	"wallets_choice_multiple": "Dompet untuk perniagaan berbilang pekerja",
	"wallets_choice_online": "Dompet untuk perniagaan dalam talian",
	"wallets_choice_invoice": "Dompet untuk perniagaan berasaskan invois",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Terima pembayaran Bitcoin menggunakan terminal POS Square sedia ada atau integrasi kedai dalam talian. Menerima pembayaran Bitcoin tidak pernah semudah ini.",
	"wallets_feature_bitcoin_only": "Dompet Bitcoin sahaja",
	"wallets_feature_no_info": "Tiada maklumat diperlukan",
	"wallets_feature_in_person": "Pembayaran bersemuka sahaja",
	"wallets_feature_settles_bitcoin": "Diselesaikan 100% dalam Bitcoin",
	"wallets_feature_hybrid": "Dompet hibrid",
	"wallets_feature_info": "Maklumat perniagaan diperlukan",
	"wallets_feature_in_person_online": "Pembayaran bersemuka & dalam talian",
	"wallets_feature_settles_both": "Diselesaikan dalam Bitcoin & dolar",
	"wallets_feature_multiple_employees": "Berbilang pekerja (BPT)",
	"wallets_feature_self_hosted": "Hos sendiri = yuran 0%",
	"wallets_feature_online_store": "Integrasi kedai dalam talian",
	"wallets_feature_invoicing": "Perisian invois percuma",
	"wallets_get_wallet": "Dapatkan dompet"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Panduan Perakaunan Perniagaan Bitcoin",
	"accounting_description": "Ketahui cara mengendalikan pembayaran Bitcoin dengan betul dalam perakaunan perniagaan anda.",
	"accounting_header": "PANDUAN PERAKAUNAN BITCOIN",
	"accounting_s1_c1": "Terdapat banyak kelebihan menerima Bitcoin, daripada menerima pembayaran dengan yuran yang lebih rendah hingga mendapat lebih ramai pelanggan.",
	"accounting_s1_c2": "Jika anda menggunakan dompet hibrid daripada panduan dompet kami dan menukar 100% Bitcoin yang diterima kepada dolar secara automatik, anda tidak perlu mengubah apa-apa dalam proses perakaunan semasa anda.",
	"accounting_s1_c3": "Lihat panduan dompet.",
	"accounting_s1_c4": "Walau bagaimanapun, jika anda menyimpan sebahagian daripada Bitcoin yang diterima sebagai Bitcoin, anda perlu merekodkan beberapa butiran untuk perakaunan. Ini mungkin kelihatan rumit pada mulanya, tetapi sebenarnya sangat mudah.",
	"accounting_s1_c5": "Nota: Panduan ini hanya untuk tujuan maklumat dan tidak boleh dianggap sebagai nasihat cukai.",
	"accounting_s1_c6": "Jika anda memerlukan nasihat cukai, kami sangat mengesyorkan Satoshi Pacioli Accounting Services, firma perakaunan yang pakar dalam perakaunan Bitcoin.",
	"accounting_s2": "Menjejak asas kos",
	"accounting_s2_c1": "Menjejak asas kos ialah perbezaan terbesar antara perakaunan dolar dan perakaunan Bitcoin. Walaupun anda melihat perniagaan anda dari sudut Bitcoin, anda masih perlu melaporkan nilai dolar setiap transaksi untuk pemfailan cukai.",
	"accounting_s2_c2": "Jika anda menggunakan QuickBooks, anda boleh melakukannya secara automatik dengan pemalam Bitcoin Sync.",
	"accounting_s2_c3": "Jika anda tidak menggunakan QuickBooks, kami mengesyorkan Satoshi Pacioli Accounting Services, yang pakar dalam perakaunan Bitcoin.",
	"accounting_s2_c4": "Jika anda melakukannya secara manual, anda hanya perlu merekodkan jumlah Bitcoin yang diterima dan nilai dolar transaksi Bitcoin pada hari itu.",
	"accounting_s2_c5": "Anda boleh menyemak harga dolar semasa Bitcoin di sini.",
	"accounting_s2_c6": "Rekodkan maklumat ini dalam hamparan Excel dan berikan kepada akauntan anda.",
	"accounting_s2_c7": "Anda juga boleh mengimport data ini ke Excel secara automatik.",
	"accounting_s2_c8": "Anda juga boleh menyemak harga dolar sejarah Bitcoin untuk hari-hari lalu, jadi anda tidak perlu melakukannya setiap hari.",
	"accounting_s3": "Membelanjakan atau menjual Bitcoin",
	"accounting_s3_c1": "Jika anda menggunakan dompet hibrid daripada panduan dompet kami dan menukar 100% Bitcoin yang diterima kepada dolar secara automatik, anda tidak perlu mengubah apa-apa dalam proses perakaunan semasa anda.",
	"accounting_s3_c2": "Lihat panduan dompet.",
	"accounting_s3_c3": "Jika anda membelanjakan atau menjual sebahagian Bitcoin selepas menyimpannya untuk tempoh tertentu, anda hanya perlu menambah harga jualan ke hamparan Excel penjejakan asas kos anda.",
	"accounting_s3_c4": "Contohnya, jika anda menerima Bitcoin bernilai $100 pada 1 Januari dan menjual atau membelanjakannya pada 1 Februari pada nilai baharu $110, anda perlu merekodkan keuntungan modal $10 dalam perakaunan anda.",
	"accounting_s3_c5": "Ini juga berfungsi secara terbalik. Contohnya, jika anda menerima Bitcoin bernilai $100 pada 1 Januari dan menjual atau membelanjakannya pada 1 Februari pada nilai baharu $90, anda perlu merekodkan kerugian modal $10 dalam perakaunan anda.",
	"accounting_s4": "Perlukan lebih banyak bantuan",
	"accounting_s4_c1": "Jika anda memerlukan lebih banyak bantuan untuk mengintegrasikan Bitcoin ke dalam perakaunan perniagaan anda, kami sangat mengesyorkan Satoshi Pacioli Accounting Services, firma perakaunan yang pakar dalam perakaunan Bitcoin.",
	"accounting_s4_c2": "Ketahui lebih lanjut tentang Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Peta Pedagang Bitcoin - Senaraikan Perniagaan Anda Secara Percuma",
	"maps_header": "SENARAIKAN DI PETA PEDAGANG BITCOIN DAN DAPATKAN LEBIH RAMAI PELANGGAN",
	"maps_request_details": "Masukkan butiran perniagaan anda di bawah dan kami akan menyenaraikan anda secara percuma di peta pedagang Bitcoin. Ini membantu pengguna Bitcoin menemui perniagaan anda dan membelanjakan Bitcoin mereka!",
	"maps_view": "Lihat peta di sini."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Perniagaan anda akan disenaraikan di peta pedagang Bitcoin dalam masa 1-2 minggu.",
	"kit_success_2": "Lihat peta di sini."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Kit Perniagaan Bitcoin",
	"kit_header": "CETAK KIT PERNIAGAAN BITCOIN ANDA SENDIRI",
	"kit_request": "Minta kit percuma",
	"kit_request_details": "Setiap kit perniagaan Bitcoin mengandungi 2 risalah yang memudahkan anda untuk menggalakkan perniagaan tempatan menerima Bitcoin.",
	"kit_country_global_print": "Global — cetak sendiri",
	"kit_enter_address": "Masukkan alamat anda dan kami akan menghantar kit perniagaan Bitcoin percuma dalam sampul surat putih. Data alamat dipadamkan selepas kit dihantar.",
	"kit_print_details": "Tidak kira di mana anda tinggal, anda boleh menyertai dengan mencetak risalah sendiri! Jika anda ingin mengelak daripada mencetak, anda juga boleh menghantar kit perniagaan digital kepada perniagaan.",
	"kit_view_files": "Lihat fail",
	"kit_digital_kit": "Kit digital",
	"kit_resources": "Setiap kit mengandungi pautan ke sumber percuma ini"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Kit perniagaan Bitcoin anda akan sampai dalam masa 1-2 minggu dalam sampul surat putih."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Pelekat 'Bitcoin Accepted Here'",
	"stickers_header": "DAPATKAN PELEKAT 'BITCOIN ACCEPTED HERE' PERCUMA",
	"stickers_request": "Dapatkan pelekat percuma",
	"stickers_request_details": "Beritahu pelanggan anda bahawa anda menerima pembayaran Bitcoin dengan pelekat 'Bitcoin Accepted Here' percuma ini.",
	"stickers_country_global_print": "Global — cetak sendiri",
	"stickers_request_instructions": "Kami akan menghantar 3 pelekat 'Bitcoin Accepted Here' dalam sampul surat putih. Jika perniagaan anda memerlukan lebih daripada 3, sila minta beberapa kali. Data alamat dipadamkan selepas pelekat dihantar.",
	"stickers_print_details": "Tidak kira di mana anda tinggal, anda boleh mencetak pelekat 'Bitcoin Accepted Here' anda sendiri! Klik pada bahasa di bawah untuk melihat fail pelekat dan arahan.",
	"stickers_request_language": "Tidak nampak bahasa anda? Isi borang di bawah untuk meminta fail pelekat 'Bitcoin Accepted Here' dalam bahasa anda."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Pelekat anda akan sampai dalam masa 1-2 minggu dalam sampul surat putih. Setiap sampul surat mengandungi 3 pelekat. Jika perniagaan anda memerlukan lebih daripada 3, minta pek lain!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Kami akan mencipta dan menerbitkan fail pelekat dalam masa 3-4 minggu. Terima kasih atas kesabaran anda!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Cetak kit perniagaan Bitcoin anda sendiri",
	"english_bbk_files_description": "Muat turun fail risalah di sini.",
	"english_header": "CETAK RISALAH KIT PERNIAGAAN BITCOIN BAHASA INGGERIS"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Fail Pelekat 'Bitcoin Accepted Here' Bahasa Inggeris",
	"english_biz_sticker_files_description": "Muat turun fail pelekat bahasa Inggeris untuk mencetak pelekat Bitcoin Accepted Here anda sendiri.",
	"english_header": "MUAT TURUN FAIL PELEKAT 'BITCOIN ACCEPTED HERE' BAHASA INGGERIS"
});

console.log('\nDone! Business files created for Malay (ms).');
