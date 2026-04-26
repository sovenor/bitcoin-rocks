#!/usr/bin/env node
/**
 * Indonesian (id) manifest refresh — non-inflation namespaces, part 2.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 * get-involved, index, lightning, nostr/index, sticker-files/index,
 * sticker-language-success, sticker-success, stickers, wallets.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"id.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "HARGA BITCOIN",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Cari harga dolar Bitcoin saat ini atau historis",
	"business/accounting::accounting_card_pacioli_label":
		"AKUNTAN BITCOIN",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Layanan Akuntansi Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPOR EXCEL",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Tarik harga Bitcoin ke Excel secara otomatis",
	"business/accounting::accounting_card_wallets_label":
		"DOMPET HIBRIDA",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Lihat dompet bisnis yang kami rekomendasikan",
	"business/accounting::accounting_description":
		"Panduan sederhana untuk menerima Bitcoin dalam pembukuan Anda \u2014 dompet hibrida, harga perolehan, capital gain, dan kapan harus memanggil akuntan.",
	"business/accounting::accounting_disclaimer":
		"Panduan ini hanya untuk tujuan informasi dan bukan saran pajak. Untuk saran pajak khusus situasi Anda, silakan konsultasikan dengan akuntan yang berkualifikasi.",
	"business/accounting::accounting_disclaimer_label": "Harap diperhatikan",
	"business/accounting::accounting_example_feb_1": "1 Feb",
	"business/accounting::accounting_example_gain_badge": "Capital gain",
	"business/accounting::accounting_example_gain_explain":
		"Anda mencatat capital gain $10.",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "1 Jan",
	"business/accounting::accounting_example_loss_badge": "Capital loss",
	"business/accounting::accounting_example_loss_explain":
		"Anda mencatat capital loss $10.",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
	"business/accounting::accounting_example_received_label": "Diterima",
	"business/accounting::accounting_example_sold_label":
		"Dijual atau dibelanjakan",
	"business/accounting::accounting_hero_subtitle":
		"Menerima Bitcoin di bisnis Anda tidak harus mempersulit akuntansi Anda. Berikut versi singkatnya \u2014 plus alat dan profesional untuk membuatnya tanpa rasa sakit.",
	"business/accounting::accounting_intro_c1":
		"Jika Anda sudah menerima uang tunai atau kartu, menambahkan Bitcoin ke pembukuan bisnis Anda lebih sederhana daripada yang terlihat. Anda memiliki dua jalur: konversi otomatis setiap pembayaran Bitcoin ke dolar saat tiba (tidak perlu akuntansi baru), atau simpan sebagian sebagai Bitcoin (beberapa angka tambahan untuk dilacak).",
	"business/accounting::accounting_intro_c2":
		"Panduan ini memandu Anda melalui keduanya \u2014 sehingga Anda dapat memilih yang sesuai dengan bisnis Anda dan mulai menerima Bitcoin dengan percaya diri.",
	"business/accounting::accounting_s1": "Jalur mudah: konversi otomatis ke dolar",
	"business/accounting::accounting_s1_c1":
		"Cara paling sederhana untuk menerima Bitcoin adalah dengan dompet hibrida yang secara otomatis menjual 100% Bitcoin yang Anda terima ke dolar (atau mata uang lokal Anda) saat pembayaran masuk.",
	"business/accounting::accounting_s1_c2":
		"Dengan pengaturan ini, pembukuan Anda terlihat persis seperti hari ini \u2014 angka akhirnya dalam dolar, setiap saat. Tidak ada harga perolehan, tidak ada capital gain, tidak ada spreadsheet baru.",
	"business/accounting::accounting_s2":
		"Jika Anda menyimpan sebagian Bitcoin: melacak harga perolehan Anda",
	"business/accounting::accounting_s2_c1":
		"Beberapa bisnis memilih untuk menyimpan sebagian Bitcoin yang mereka terima alih-alih mengkonversi semuanya secara otomatis. Jika itu Anda, langkah ekstra utama adalah melacak harga perolehan Anda \u2014 nilai dolar setiap pembayaran Bitcoin pada hari Anda menerimanya.",
	"business/accounting::accounting_s2_c2":
		"Bahkan jika Anda menganggap bisnis Anda sepenuhnya dalam Bitcoin, sebagian besar otoritas pajak masih menginginkan nilai dolar dilaporkan. Kabar baiknya: hanya dua angka per transaksi \u2014 jumlah Bitcoin yang diterima dan nilai dolarnya pada hari itu.",
	"business/accounting::accounting_s2_c3":
		"Gunakan alat di bawah ini untuk mengotomatiskan pencarian sehingga Anda tidak perlu memeriksa harga setiap hari.",
	"business/accounting::accounting_s3":
		"Membelanjakan atau menjual Bitcoin yang Anda simpan",
	"business/accounting::accounting_s3_c1":
		"Jika Anda mengkonversi otomatis setiap pembayaran ke dolar, lewati bagian ini \u2014 tidak berlaku untuk Anda.",
	"business/accounting::accounting_s3_c2":
		"Jika Anda menyimpan sebagian Bitcoin dan kemudian memutuskan untuk membelanjakan atau menjualnya, tambahkan harga jual ke spreadsheet harga perolehan yang sama. Selisih antara nilai Bitcoin saat Anda menerimanya dan nilainya saat Anda membelanjakan atau menjualnya adalah capital gain atau loss.",
	"business/accounting::accounting_s3_c3": "Dua contoh singkat:",
	"business/accounting::accounting_s3_c6":
		"Itu saja. Matematika dasarnya identik dengan bagaimana aset apa pun yang menghargai atau menyusut nilainya dicatat.",
	"business/accounting::accounting_s4":
		"Butuh profesional yang paham Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Jika Anda lebih suka menyerahkan ini \u2014 atau akuntansi Bitcoin Anda lebih kompleks daripada yang dapat ditangani dompet hibrida \u2014 kami sangat merekomendasikan Layanan Akuntansi Satoshi Pacioli, firma yang berspesialisasi dalam akuntansi Bitcoin untuk bisnis.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Akuntansi Bitcoin untuk bisnis Anda",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report \u2014 Harga dolar Bitcoin saat ini & historis",
	"business/accounting::sources_satoshi_pacioli":
		"Layanan Akuntansi Satoshi Pacioli \u2014 Akuntansi Bitcoin untuk bisnis",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru \u2014 Impor harga cryptocurrency ke Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Jawaban singkat untuk pertanyaan yang paling sering ditanyakan pedagang sebelum mereka mulai menerima Bitcoin \u2014 biaya, penyelesaian, dompet, chargeback, biaya, dan banyak lagi.",
	"business/faq::faq_intro_c1":
		"Ketuk pertanyaan apa pun di bawah ini untuk mengembangkan jawaban. Saat Anda siap mulai menerima Bitcoin, sumber daya bisnis di bagian bawah halaman akan memandu Anda melalui setiap langkah.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "AKUNTANSI",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "PETA PEDAGANG",
	"business/index::biz_label_rewards": "REWARDS",
	"business/index::biz_label_stickers": "STIKER",
	"business/index::biz_label_wallets": "DOMPET",
	"business/index::biz_meta_description":
		"Terima Bitcoin di bisnis Anda untuk biaya lebih rendah, penyelesaian instan, tanpa chargeback, dan lebih banyak pelanggan.",
	"business/index::business_hero_subtitle":
		"Terima pembayaran dengan biaya lebih rendah, dapatkan bayaran secara instan, dan jangkau jutaan pelanggan baru \u2014 tanpa kontrak dan tanpa biaya tersembunyi.",
	"business/index::business_intro_c1":
		"Bitcoin memberi bisnis Anda cara yang lebih cepat, lebih murah, dan lebih privat untuk dibayar. Tanpa perantara. Tanpa chargeback. Tanpa kontrak. Hanya uang yang diselesaikan dalam hitungan detik, langsung dari pelanggan Anda kepada Anda.",
	"business/index::business_intro_c2":
		"Di bawah ini adalah versi singkat mengapa Bitcoin baik untuk bisnis \u2014 dan di bawahnya, setiap sumber daya yang Anda butuhkan untuk mulai menerimanya hari ini.",
	"business/index::business_resources_heading":
		"Semua yang Anda butuhkan untuk menerima Bitcoin",
	"business/index::business_resources_intro":
		"Kerjakan sumber daya ini sesuai kecepatan Anda sendiri. Setiap satu adalah panduan singkat dan praktis.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Beri tahu kami tentang bisnis Anda",
	"business/maps::biz_maps_form_intro":
		"Kami hanya membutuhkan beberapa detail untuk mendaftarkan Anda. Data alamat hanya disimpan cukup lama untuk mengirimkan bisnis Anda ke peta.",
	"business/maps::biz_maps_hero_subtitle":
		"Daftarkan bisnis Anda gratis di BTC Map \u2014 direktori terbuka pedagang yang menerima Bitcoin di seluruh dunia \u2014 sehingga Bitcoiner di sekitar dapat menemukan Anda dan membelanjakan Bitcoin di bisnis Anda.",
	"business/maps::biz_maps_hero_title":
		"Daftarkan bisnis Anda di peta pedagang Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Bitcoiner aktif mencari tempat untuk membelanjakan. Memasukkan bisnis Anda ke peta menempatkan Anda di hadapan setiap pengguna Bitcoin yang mencari tempat untuk makan, berbelanja, atau menginap di sekitar \u2014 tanpa biaya bagi Anda.",
	"business/maps::biz_maps_intro_c2":
		"Cukup isi formulir singkat di bawah ini dan kami akan mengirimkan bisnis Anda ke BTC Map dan peta pedagang Bitcoin lainnya untuk Anda.",
	"business/maps::biz_maps_meta_description":
		"Daftarkan bisnis Anda gratis di BTC Map dan peta pedagang Bitcoin lainnya sehingga Bitcoiner di sekitar dapat menemukan Anda.",
	"business/maps::biz_maps_placeholder_address": "Alamat jalan",
	"business/maps::biz_maps_placeholder_category":
		"Kategori (mis. restoran, kafe, hotel)",
	"business/maps::biz_maps_placeholder_city": "Kota",
	"business/maps::biz_maps_placeholder_country": "Negara",
	"business/maps::biz_maps_placeholder_name": "Nama bisnis",
	"business/maps::biz_maps_placeholder_region":
		"Provinsi / Wilayah",
	"business/maps::biz_maps_placeholder_website":
		"Situs web (opsional)",
	"business/maps::biz_maps_view_map_cta": "Lihat BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Lihat BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Terima kasih telah mengirimkan bisnis Anda. Kami akan mendaftarkan Anda di peta pedagang Bitcoin segera.",
	"business/maps-success::biz_maps_success_hero_title":
		"Permintaan diterima 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Bisnis Anda akan didaftarkan di BTC Map dan direktori pedagang Bitcoin lainnya dalam 1 hingga 2 minggu. Kami meninjau setiap pengiriman secara manual untuk menjaga akurasi peta.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Setelah daftar Anda aktif, Bitcoiner di sekitar dapat menemukan bisnis Anda dan datang membelanjakan Bitcoin di sana.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Apa yang terjadi selanjutnya",
	"business/maps-success::biz_maps_success_view_c1":
		"Sambil Anda menunggu, lihat BTC Map untuk melihat jaringan bisnis yang berkembang yang menerima Bitcoin di seluruh dunia.",
	"business/maps-success::biz_maps_success_view_header":
		"Lihat di mana Anda akan muncul",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Unduh file stiker dalam bahasa Inggris untuk mencetak sendiri stiker 'Bitcoin Diterima di Sini' Anda.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Cetak sendiri stiker 'Bitcoin Diterima di Sini' dalam bahasa Inggris untuk memberi tahu pelanggan Anda bahwa Anda menerima Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Unduh file stiker 'Bitcoin Diterima di Sini' dalam bahasa Inggris",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Terima kasih telah meminta file stiker 'Bitcoin Diterima di Sini' dalam bahasa Anda.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Permintaan diterima 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Kami akan membuat dan mempublikasikan file stiker Anda dalam 3 hingga 4 minggu. Setelah siap, Anda akan dapat mengunduh dan mencetaknya gratis dari halaman file stiker kami.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"File stiker dirilis dalam batch, jadi mungkin perlu beberapa minggu untuk bahasa Anda agar aktif. Terima kasih atas kesabaran Anda!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Apa yang terjadi selanjutnya",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Pesan dalam jumlah besar",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Minta paket gratis lainnya",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Anda akan menerima stiker 'Bitcoin Diterima di Sini' gratis Anda dalam 2 hingga 4 minggu, dalam amplop putih polos berisi 3 stiker.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Stiker Anda sedang dalam perjalanan 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Jika 3 stiker tidak cukup untuk bisnis Anda, silakan minta paket gratis lainnya \u2014 atau pesan dalam jumlah besar dari pencetak yang sama yang kami gunakan.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Butuh lebih banyak stiker?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Di pintu depan atau jendela Anda agar pelanggan melihatnya sebelum mereka masuk",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Di dekat kasir, terminal POS, atau area pembayaran Anda",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Pada menu, daftar harga, atau tip jar",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Jangan menempelkannya di tempat yang tidak Anda miliki atau tidak Anda izinkan",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Tempat yang baik untuk menempelkan stiker Anda",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Beri tahu pelanggan Anda bahwa Anda menerima Bitcoin. Pesan paket stiker 'Bitcoin Diterima di Sini' gratis untuk dipasang di bisnis Anda.",
	"business/stickers::biz_stickers_hero_title":
		"Stiker 'Bitcoin Diterima di Sini' gratis",
	"business/stickers::biz_stickers_intro_c1":
		"Menerima Bitcoin hanyalah setengah pekerjaan \u2014 pelanggan Anda juga perlu tahu bahwa Anda melakukannya. Stiker kecil 'Bitcoin Diterima di Sini' ini dirancang untuk ditempelkan di pintu depan, kasir, menu, atau di mana pun pelanggan akan melihatnya sebelum mereka membayar.",
	"business/stickers::biz_stickers_intro_c2":
		"Kami akan mengirimkan paket gratis kepada Anda di mana saja di AS atau Kanada, atau Anda dapat mencetak sendiri di mana saja di dunia.",
	"business/stickers::biz_stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Kanada \u2014 Gratis melalui pos",
	"business/stickers::biz_stickers_option_print":
		"\ud83c\udf0d Global \u2014 Cetak sendiri",
	"business/stickers::biz_stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 AS \u2014 Gratis melalui pos",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Terjemahan untuk 'Bitcoin Diterima di Sini'",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Terjemahan untuk 'Pindai untuk mempelajari mengapa Bitcoin baik untuk bisnis.'",
	"business/stickers::biz_stickers_print_c1":
		"Anda dapat mencetak sendiri stiker 'Bitcoin Diterima di Sini', tidak peduli di mana Anda tinggal. Klik bahasa Anda di bawah ini untuk mengunduh file stiker dan instruksi pencetakan.",
	"business/stickers::biz_stickers_print_header":
		"Cetak sendiri file stiker",
	"business/stickers::biz_stickers_request_c1":
		"Isi formulir di bawah ini untuk meminta file stiker 'Bitcoin Diterima di Sini' dalam bahasa lokal Anda. Kami akan memberi tahu Anda setelah siap.",
	"business/stickers::biz_stickers_request_header":
		"Tidak melihat bahasa Anda?",
	"business/stickers::biz_stickers_step_description":
		"Kami akan mengirim paket gratis ke alamat di AS dan Kanada. Di mana pun di dunia, Anda dapat mencetak sendiri.",
	"business/stickers::biz_stickers_step_header":
		"Bagaimana Anda ingin mendapatkan stiker Anda?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Semua dompet Bitcoin saling terhubung \u2014 pilih yang sesuai dengan bisnis Anda. Gratis, penyelesaian instan, tanpa chargeback.",
	"business/wallets::sources_breez_business":
		"Breez \u2014 Dompet Lightning khusus Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX \u2014 Infrastruktur pembayaran Lightning",
	"business/wallets::sources_opennode":
		"OpenNode \u2014 Pemroses pembayaran Bitcoin",
	"business/wallets::sources_square":
		"Square \u2014 Terima pembayaran Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite \u2014 Faktur Bitcoin untuk bisnis",
	"business/wallets::wallets_hero_subtitle":
		"Dompet Bitcoin gratis. Pilih yang sesuai dengan bisnis Anda \u2014 langsung, online, atau berbasis faktur \u2014 dan mulai menerima Bitcoin dalam hitungan menit.",
	"business/wallets::wallets_section_invoice":
		"Dompet untuk bisnis berbasis faktur",
	"business/wallets::wallets_section_invoice_intro":
		"Jika Anda menagih klien (konsultasi, pekerjaan lepas, layanan B2B), gunakan dompet yang dibangun di sekitar penagihan. Klien Anda membayar faktur Bitcoin dalam beberapa klik.",
	"business/wallets::wallets_section_multiple":
		"Dompet untuk bisnis dengan beberapa karyawan",
	"business/wallets::wallets_section_multiple_intro":
		"Jika Anda memiliki tim yang menerima pembayaran di kasir, pilih dompet yang mendukung beberapa login karyawan \u2014 sehingga setiap karyawan mendapat PIN sendiri dan Anda menyimpan jejak audit yang bersih tentang siapa yang menerima pembayaran mana.",
	"business/wallets::wallets_section_online": "Dompet untuk bisnis online",
	"business/wallets::wallets_section_online_intro":
		"Menjual di situs web? Dompet ini terhubung ke toko online Anda dan menerima Bitcoin dari pelanggan mana pun, di mana saja di dunia \u2014 tanpa chargeback, tanpa akun pedagang yang diperlukan.",
	"business/wallets::wallets_section_sole":
		"Dompet untuk bisnis perorangan",
	"business/wallets::wallets_section_sole_intro":
		"Jika Anda menjalankan toko, kafe, studio, atau layanan sendiri, dompet mana pun ini akan berfungsi. Pilih berdasarkan apakah Anda ingin menyimpan pembayaran dalam Bitcoin atau mengkonversi otomatis sebagian dari setiap pembayaran ke mata uang lokal Anda.",
	"business/wallets::wallets_strike_note":
		"Strike Business memungkinkan Anda menerima pembayaran Bitcoin dan Lightning dengan biaya nol dan penyelesaian instan. Mendukung pembayaran langsung, online, dan berbasis faktur dengan konversi otomatis opsional ke mata uang lokal Anda.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin diterima di sini",
	"business/why::why_biz_s1": "Biaya lebih rendah, lebih banyak untuk bisnis",
	"business/why::why_biz_s1_c1":
		"Pembayaran Bitcoin melewati bank dan perusahaan kartu kredit yang mengambil 2\u20133% dari setiap penjualan. Bisnis menyimpan lebih banyak dari apa yang Anda bayar \u2014 yang sering kali berarti harga yang lebih baik dan layanan yang lebih baik untuk Anda.",
	"business/why::why_biz_s2": "Penyelesaian instan, tanpa chargeback",
	"business/why::why_biz_s2_c1":
		"Pembayaran Bitcoin diselesaikan dalam hitungan detik, langsung dari dompet Anda ke bisnis. Tidak ada menunggu berhari-hari untuk bank merilis dana, dan tidak ada sengketa chargeback yang mahal \u2014 sehingga bisnis dapat fokus melayani pelanggan alih-alih melawan penipuan.",
	"business/why::why_biz_s3":
		"Gratis untuk diterima, terbuka untuk semua orang",
	"business/why::why_biz_s3_c1":
		"Tidak ada kontrak, biaya bulanan, atau biaya pengaturan bagi bisnis untuk menerima Bitcoin. Dan jutaan pengguna Bitcoin di seluruh dunia secara aktif mencari pedagang yang menerimanya \u2014 memberi bisnis ini paparan gratis kepada pelanggan baru.",
	"business/why::why_business_cta_intro":
		"Menjalankan bisnis dan ingin mulai menerima Bitcoin?",
	"business/why::why_business_cta_link": "Lihat cara kerjanya \u2192",
	"business/why::why_for_business":
		"Mengapa Bitcoin sangat baik untuk bisnis ini",
	"business/why::why_for_business_intro":
		"Menerima Bitcoin memungkinkan bisnis menyimpan lebih banyak dari setiap penjualan, dibayar secara instan tanpa chargeback, dan menjangkau audiens global pengguna Bitcoin \u2014 semuanya tanpa kontrak dan tanpa biaya bulanan.",
	"business/why::why_good_for_you":
		"Mengapa Bitcoin juga hebat untuk Anda",
	"business/why::why_good_for_you_intro":
		"Bitcoin tidak hanya berguna di kasir \u2014 ia adalah bentuk uang yang lebih baik yang melindungi tabungan, privasi, dan kebebasan Anda untuk bertransaksi. Berikut adalah ikhtisar singkat.",
	"business/why::why_hero_subtitle":
		"Anda baru saja memindai stiker Bitcoin Diterima di Sini. Berikut alasan mengapa itu kabar baik \u2014 untuk bisnis ini, dan untuk Anda.",
	"business/why::why_intro_c1":
		"Bisnis tempat Anda berada menerima Bitcoin \u2014 jaringan pembayaran modern dan open source yang dapat digunakan siapa saja, di mana saja di dunia, tanpa bank atau perantara yang mengambil potongan.",
	"business/why::why_intro_c2":
		"Di bawah ini adalah versi singkat mengapa menerima Bitcoin baik untuk bisnis ini, plus mengapa menggunakan Bitcoin baik untuk Anda sebagai pelanggan.",
	"business/why::why_learn_more_lowercase": "Pelajari lebih lanjut \u2192",
	"business/why::why_next_business_label": "TERIMA BITCOIN",
	"business/why::why_next_business_title":
		"Terima Bitcoin di bisnis Anda",
	"business/why::why_next_buy_label": "BELI BITCOIN",
	"business/why::why_next_buy_title": "Beli Bitcoin pertama Anda",
	"business/why::why_next_learn_label": "PELAJARI LEBIH",
	"business/why::why_next_learn_title":
		"Pelajari lebih lanjut tentang Bitcoin",
	"business/why::why_next_wallet_label": "DAPATKAN DOMPET",
	"business/why::why_next_wallet_title":
		"Dapatkan dompet Bitcoin Anda sendiri",
	"business/why::why_s1_c1":
		"Inflasi terjadi ketika lebih banyak uang dicetak atau diciptakan begitu saja. Itu membuat uang di kantong Anda bernilai lebih sedikit seiring waktu \u2014 dan itulah mengapa harga terus naik tahun demi tahun.",
	"business/why::why_s1_c2":
		"Bitcoin memiliki pasokan tetap 21 juta koin. Tidak ada pemerintah, bank, atau perusahaan yang dapat mencetak lebih banyak. Tabungan Bitcoin Anda mempertahankan nilainya seiring waktu alih-alih diam-diam kehilangannya.",
	"business/why::why_s2_c1":
		"Beberapa bank AS telah runtuh dalam beberapa tahun terakhir karena bank run. Ketika terlalu banyak nasabah mencoba menarik uang sekaligus, bank tidak memiliki uang tunai untuk membayar semua orang kembali.",
	"business/why::why_s2_c2":
		"Alih-alih hanya menyimpan uang Anda, bank meminjamkan dan menginvestasikan sebagian besar darinya. Jika investasi tersebut gagal \u2014 atau jika penyimpan kehilangan kepercayaan \u2014 bank dapat gagal, dan simpanan Anda dapat dibekukan atau hilang.",
	"business/why::why_s2_c3":
		"Dengan Bitcoin, Anda dapat menyimpan uang Anda sendiri secara langsung di dompet Anda sendiri. Tanpa bank. Tanpa perantara. Tanpa bank run.",
	"business/why::why_s3_c1":
		"Tidak seperti kartu kredit, PayPal, atau rekening bank tradisional, Bitcoin tidak memerlukan izin siapa pun untuk digunakan.",
	"business/why::why_s3_c2":
		"Tidak ada yang dapat membekukan rekening Anda, memblokir pembayaran, atau memutus Anda dari jaringan. Ini adalah sistem keuangan pertama dalam sejarah yang dapat Anda gunakan dengan bebas, tanpa takut akan sensor atau penyitaan.",
	"business/why::why_s4_c1":
		"Bitcoin sering disalahpahami, tetapi diam-diam melakukan banyak kebaikan di dunia.",
	"business/why::why_s4_c2":
		"Bitcoin telah membantu aktivis hak asasi manusia memperjuangkan kebebasan, mengurangi emisi metana global dari TPA dan ladang minyak, menstabilkan jaringan listrik, dan mendanai barang publik seperti taman nasional.",
	"business/why::why_whats_next_heading": "Ke mana selanjutnya?",
	"business/why::why_whats_next_intro":
		"Jika ini pertama kali Anda memindai stiker Bitcoin, berikut adalah tempat yang paling berguna untuk dituju dari sini.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Cara membeli Bitcoin",
	"buy::buy_step_1_header": "Pilih negara Anda",
	"buy::buy_step_2_header": "Pilih metode pembayaran Anda",
	"buy::buy_step_3_header": "Opsi pembelian Anda",
	"buy::buy_step_4_header": "Simpan Bitcoin Anda dengan aman",
	"buy::buy_header_subtitle":
		"Panduan langkah demi langkah yang sederhana untuk membeli Bitcoin pertama Anda.",
	"buy::buy_howto_name": "Cara membeli Bitcoin",
	"buy::buy_meta_description":
		"Pelajari cara membeli Bitcoin dengan aman menggunakan panduan langkah demi langkah kami. Pilih negara dan metode pembayaran Anda untuk menemukan opsi pembelian Bitcoin terbaik untuk Anda.",
	"buy::buy_step_1_eyebrow": "Langkah 1",
	"buy::buy_step_2_eyebrow": "Langkah 2",
	"buy::buy_step_3_eyebrow": "Langkah 3",
	"buy::buy_step_4_eyebrow": "Langkah 4",
	"buy::buy_storage_cta_label": "Langkah berikutnya",
	"buy::sources_bisq":
		"Bisq \u2014 Bursa Bitcoin peer-to-peer terdesentralisasi",
	"buy::sources_coinatmradar":
		"Coin ATM Radar \u2014 Direktori ATM Bitcoin di seluruh dunia",
	"buy::sources_kraken": "Kraken \u2014 Bursa Bitcoin yang mapan",
	"buy::sources_relai":
		"Relai \u2014 Aplikasi self-custody khusus Bitcoin asal Swiss",
	"buy::sources_river":
		"River \u2014 Pembelian, penambangan, dan kustodi khusus Bitcoin",
	"buy::sources_strike_lightning":
		"Strike \u2014 Beli Bitcoin dengan dukungan Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin \u2014 Dollar-cost averaging khusus Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Tambah bahasa",
	"common::common_next_buy_bitcoin": "Beli Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Pelajari cara membeli Bitcoin dengan aman",
	"common::common_next_calculate": "Hitung inflasi Anda",
	"common::common_next_calculate_desc":
		"Lihat bagaimana inflasi memengaruhi gaji Anda dari waktu ke waktu",
	"common::common_next_get_wallet": "Dapatkan dompet",
	"common::common_next_get_wallet_desc":
		"Dapatkan dompet Bitcoin pertama Anda \u2014 gratis",
	"common::common_next_keep_learning": "Terus belajar",
	"common::common_next_keep_learning_desc":
		"Lihat bagaimana Bitcoin membuat dunia lebih baik",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics \u2014 Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) \u2014 Money Supply (Indeks Kategori)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto \u2014 Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish \u2014 \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Apa selanjutnya?",
	"common::common_sticker_files_mission_5": "minta paket",
	"common::common_site_tagline": "Edukasi Bitcoin untuk semua orang.",
	"common::common_source_btc_map":
		"BTC Map \u2014 Direktori pedagang yang menerima Bitcoin di seluruh dunia",
	"common::common_source_btcpayserver":
		"BTCPay Server \u2014 Pemroses pembayaran Bitcoin gratis, open source, dan dihosting sendiri",
	"common::common_source_oshi":
		"Oshi \u2014 Platform reward Bitcoin untuk pedagang",
	"common::common_source_strike_business":
		"Strike \u2014 Pembayaran Bitcoin & Lightning untuk bisnis",
	"common::common_sources_group_bitcoin": "Data Bitcoin",
	"common::common_sources_group_cpi":
		"Inflasi / Indeks Harga Konsumen",
	"common::common_sources_group_debt": "Utang pemerintah",
	"common::common_sources_group_money": "Data pasokan uang",
	"common::common_sources_group_stories": "Contoh dunia nyata",
	"common::common_sticker_files_mission_6":
		"stiker bahasa Inggris secara gratis.",
	"common::common_sticker_files_next_flyers_label": "Selebaran",
	"common::common_sticker_files_next_flyers_title":
		"Cetak selebaran Bitcoin",
	"common::common_sticker_files_next_languages_label": "File stiker",
	"common::common_sticker_files_next_languages_title":
		"Lihat file stiker dalam bahasa lain",
	"common::common_sticker_files_print_these": "CETAK INI DENGAN 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"Stiker \"Bitcoin Tidak Memiliki Inflasi\" (Hitam)",
	"common::common_sticker_name_bdhi_orange":
		"Stiker \"Bitcoin Tidak Memiliki Inflasi\" (Oranye)",
	"common::common_sticker_name_caution":
		"Stiker Bitcoin \"Hati-hati! Es Batu Mencair\"",
	"common::common_sticker_name_cure_inflation":
		"Stiker Bitcoin \"Sembuhkan Inflasi\"",
	"common::common_sticker_name_danger":
		"Stiker Bitcoin \"Bahaya! Inflasi di Depan\"",
	"common::common_sticker_name_fix":
		"Stiker Bitcoin \"Perbaiki Uang, Perbaiki Dunia\"",
	"common::common_sticker_name_got_inflation":
		"Stiker Bitcoin \"Punya Inflasi?\"",
	"common::common_sticker_name_study": "Stiker \"Pelajari Bitcoin\"",
	"common::common_sticker_name_warning":
		"Stiker Bitcoin \"Peringatan! Inflasi Mencuri Tabungan Anda\"",
	"common::common_sticker_name_what_if":
		"Stiker Bitcoin \"Bagaimana jika uang Anda tidak memiliki inflasi?\"",
	"common::common_sticker_tips_heading": "Tips stiker",
	"common::common_sticker_tips_intro":
		"Setelah Anda mencetak stiker, tempelkan di tempat yang akan terlihat! Tempat stiker yang baik adalah:",
	"common::common_sticker_tips_list_1":
		"di tempat umum di mana orang akan melihatnya",
	"common::common_sticker_tips_list_2":
		"di tempat yang kemungkinan kecil akan dilepas dengan cepat (stiker tidak menyebabkan kerusakan permanen)",
	"common::common_sticker_tips_list_3":
		"pada permukaan yang mudah ditempeli (logam, plastik, kaca)",
	"common::common_sticker_tips_list_4":
		"BUKAN di properti pribadi, menutupi tanda, ATM, atau pompa bensin",
	"common::common_stickers_printer_prefix": "Kami menggunakan",
	"common::common_stickers_printer_suffix":
		"tetapi Anda dapat menggunakan perusahaan stiker mana pun.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) \u2014 Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) \u2014 M1 Money Supply",
	"compound-inflation-calculator::cic_calculator_heading":
		"Hitung kesenjangan inflasi Anda",
	"compound-inflation-calculator::cic_cta_label": "Langkah berikutnya",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Lihat seberapa banyak gaji Anda perlu meningkat untuk mengimbangi inflasi.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Jelajahi lebih banyak topik",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Lihat bagaimana Bitcoin terhubung dengan uang, kebebasan, energi, dan lainnya.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Pelajari cara kerja inflasi",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Cara mencetak dan memasang selebaran Bitcoin ini",
	"flyers::flyers_hero_subtitle":
		"Selebaran Bitcoin yang gratis dan dapat dicetak. Pasang di tempat umum untuk membantu lebih banyak orang belajar tentang Bitcoin.",
	"flyers::flyers_hero_title": "Cetak dan pasang selebaran Bitcoin",
	"flyers::flyers_next_get_stickers": "Sebarkan kabar",
	"flyers::flyers_next_get_stickers_desc":
		"Pesan paket stiker Bitcoin gratis",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Terlibat dan sebarkan Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Ingin membantu membangun ekonomi sirkular Bitcoin? Cara termudah adalah membantu bisnis lokal mulai menerima pembayaran Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Mengenal bisnis yang mungkin terbuka untuk itu? Kirim pemiliknya ke",
	"get-involved::get_involved_business_content_3":
		"halaman bisnis Bitcoin kami.",
	"get-involved::get_involved_description":
		"Sumber daya gratis kami memudahkan penyebaran adopsi Bitcoin. Stiker, selebaran, stiker 'Bitcoin Diterima di Sini' untuk bisnis, dan basis kode open source yang dapat dikontribusikan siapa saja.",
	"get-involved::get_involved_header":
		"Terlibat dan sebarkan Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Anda dapat membantu mengubah itu. Kami telah membuat beberapa sumber daya gratis untuk memudahkan penyebaran harapan yang dibawa Bitcoin kepada orang-orang di sekitar Anda.",
	"get-involved::get_involved_biz_stickers_note":
		"Sudah menerima Bitcoin? Beri tahu pelanggan dengan stiker 'Bitcoin Diterima di Sini' gratis kami. Kami akan mengirimkan paket ke alamat mana pun di AS atau Kanada, atau Anda dapat mencetak sendiri di mana saja di dunia.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Stiker diterima di sini",
	"get-involved::get_involved_card_biz_stickers_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_biz_stickers_title":
		"Stiker 'Bitcoin Diterima di Sini' gratis untuk bisnis Anda",
	"get-involved::get_involved_card_business_label":
		"Bitcoin untuk bisnis",
	"get-involved::get_involved_card_business_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_business_title":
		"Semua yang dibutuhkan bisnis untuk mulai menerima pembayaran Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Selebaran cetak",
	"get-involved::get_involved_card_flyers_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_flyers_title":
		"Unduh dan cetak selebaran Bitcoin gratis",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source":
		"Sumber: GitHub \u2192",
	"get-involved::get_involved_card_github_title":
		"Berkontribusi pada bitcoin.rocks di GitHub",
	"get-involved::get_involved_card_stickers_label": "Stiker gratis",
	"get-involved::get_involved_card_stickers_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_stickers_title":
		"Minta paket stiker Bitcoin gratis dikirim ke depan pintu Anda",
	"get-involved::get_involved_flyers_content_1":
		"Selebaran adalah salah satu cara termudah untuk memperkenalkan Bitcoin kepada komunitas Anda. Unduh selebaran Bitcoin gratis yang dapat dicetak, cetak sebanyak yang Anda inginkan, dan tempel di papan komunitas, kafe, pertemuan, atau di mana pun orang berkumpul.",
	"get-involved::get_involved_flyers_content_2":
		"Setiap selebaran menyertakan headline yang menarik dan kode QR yang mengirim pembaca yang penasaran ke bitcoin.rocks untuk mempelajari lebih lanjut.",
	"get-involved::get_involved_flyers_content_3":
		"Tidak seperti stiker, selebaran dapat dicetak sesuai permintaan dari mana saja di dunia \u2014 yang Anda butuhkan hanyalah printer dan beberapa menit.",
	"get-involved::get_involved_flyers_header":
		"Cetak dan pasang selebaran",
	"get-involved::get_involved_flyers_image_alt":
		"Pratinjau selebaran Bitcoin gratis yang dapat dicetak dari bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks adalah proyek gratis dan open source berlisensi MIT. Misi kami adalah mempercepat adopsi Bitcoin melalui edukasi \u2014 dan kami tidak dapat melakukannya sendirian.",
	"get-involved::get_involved_github_content_2":
		"Apakah Anda seorang pengembang, desainer, penulis, atau penerjemah, ada cara bagi Anda untuk membantu. Kami sangat menyambut kontributor yang dapat menerjemahkan konten kami ke lebih banyak bahasa sehingga lebih banyak orang di seluruh dunia dapat belajar tentang Bitcoin dalam bahasa ibu mereka.",
	"get-involved::get_involved_github_content_3":
		"Fork repositori, buka pull request, ajukan issue, atau cukup beri bintang pada proyek untuk menunjukkan dukungan Anda. Setiap kontribusi membantu Bitcoin menjangkau lebih banyak orang.",
	"get-involved::get_involved_github_header":
		"Berkontribusi di GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Paket stiker teks Bitcoin gratis dari bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "menabung",
	"index::home_card_label_art_1": "Mari kita bandingkan",
	"index::home_card_label_art_2": "Sebarkan kabar",
	"index::home_card_label_art_3": "Seni jalanan",
	"index::home_card_label_bank_runs": "Sistem cadangan penuh",
	"index::home_card_label_bonds": "Mari kita bandingkan",
	"index::home_card_label_business_1": "Apa bedanya?",
	"index::home_card_label_business_2": "Terima pembayaran Bitcoin",
	"index::home_card_label_cash": "Mari kita bandingkan",
	"index::home_card_label_cbdc": "Terbuka atau tertutup?",
	"index::home_card_label_coding_1": "Tutorial interaktif",
	"index::home_card_label_coding_2": "Bangun perangkat keras",
	"index::home_card_label_coding_3": "Teka-teki coding",
	"index::home_card_label_crowdfunding_1": "Protes EndSARS",
	"index::home_card_label_crowdfunding_2": "Uang yang tak terhentikan",
	"index::home_card_label_crowdfunding_3": "Danai proyek Anda",
	"index::home_card_label_crypto": "Apa bedanya?",
	"index::home_card_label_energy_1": "Stabilisasi jaringan",
	"index::home_card_label_energy_4": "Respons permintaan",
	"index::home_card_label_energy_5": "Elektrifikasi pedesaan",
	"index::home_card_label_energy_6": "Insentif terbarukan",
	"index::home_card_label_environment_1": "Pengurangan metana",
	"index::home_card_label_environment_2": "Menyelamatkan taman nasional",
	"index::home_card_label_environment_3": "Industri terhijau",
	"index::home_card_label_environment_4": "Mengurangi gas suar",
	"index::home_card_label_equality_1": "Harapan & peluang",
	"index::home_card_label_equality_2": "Pengubah permainan",
	"index::home_card_label_food_1": "Harga pangan",
	"index::home_card_label_food_2": "Pertanian & tanah",
	"index::home_card_label_freedom_1": "Rezim otoriter",
	"index::home_card_label_freedom_2": "Alat unik",
	"index::home_card_label_get_started_1": "Dasar pemula",
	"index::home_card_label_get_started_2": "Dompet pertama Anda",
	"index::home_card_label_get_started_3": "Beli Bitcoin",
	"index::home_card_label_gold": "Mana yang lebih baik?",
	"index::home_card_label_housing_1": "Perumahan terjangkau",
	"index::home_card_label_human_rights_1":
		"Penegakan hak asasi manusia",
	"index::home_card_label_human_rights_2": "Adopsi akar rumput",
	"index::home_card_label_human_rights_3": "Dampak global",
	"index::home_card_label_inflation": "Bitcoin adalah uang yang lebih baik",
	"index::home_card_label_networks_1": "Tampilan jaringan langsung",
	"index::home_card_label_networks_2": "Mari kita bandingkan",
	"index::home_card_label_payments_1": "Apa bedanya?",
	"index::home_card_label_payments_2": "Pembayaran cepat & murah",
	"index::home_card_label_payments_3": "Remitansi",
	"index::home_card_label_payments_4": "Terima pembayaran",
	"index::home_card_label_politics_1": "Paradoks politik",
	"index::home_card_label_politics_2": "Ambil tindakan",
	"index::home_card_label_property_rights_1": "Mari kita bandingkan",
	"index::home_card_label_property_rights_2": "Kepemilikan sejati",
	"index::home_card_label_salary": "Lindungi gaji Anda",
	"index::home_card_label_self_custody_1": "Panduan dompet Bitcoin",
	"index::home_card_label_self_custody_2": "Langkah paling penting",
	"index::home_card_label_self_custody_3": "Uang berdaulat",
	"index::home_card_label_war_1": "Akhiri perang tanpa akhir",
	"index::home_card_label_war_2": "Membantu veteran",
	"index::home_card_label_war_3": "Pelarian masa perang",
	"index::home_h1":
		"Bitcoin adalah uang yang lebih baik yang membangun dunia yang lebih baik.",
	"index::home_nav_about": "Tentang",
	"index::home_nav_get_involved": "Terlibat",
	"index::home_nav_learn": "Belajar",
	"index::home_source_prefix": "Sumber:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja \u2014 The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Lihat",
	"lightning::lightning_grid_heading": "Dompet Lightning populer",
	"lightning::lightning_hardware_cta_label": "Dompet perangkat keras",
	"lightning::lightning_header_subtitle":
		"Lightning memungkinkan Anda mengirim Bitcoin dalam hitungan detik dengan biaya kurang dari satu sen \u2014 pilih dompet yang trade-off-nya sesuai dengan seberapa banyak Bitcoin yang ingin Anda belanjakan.",
	"lightning::lightning_s1_c4_end": "untuk informasi lebih lanjut.",
	"lightning::lightning_s1_c4_link": "Panduan Dompet Perangkat Keras Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ \u2014 Dompet Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez \u2014 Dompet Lightning self-custodial",
	"lightning::sources_lightning_labs":
		"Lightning Labs \u2014 Dokumentasi Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi \u2014 Dompet Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android & web",
	"nostr/index::nostr_platform_web": "Browser web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr adalah protokol terdesentralisasi baru untuk komunikasi online \u2014 tidak ada satu perusahaan pun yang mengendalikannya, zap Bitcoin terintegrasi secara native, dan Anda dapat berpindah antar klien tanpa kehilangan pengikut.",
	"nostr/index::nostr_amethyst_f1": "Banyak fitur dan kustomisasi",
	"nostr/index::nostr_amethyst_f2":
		"Membutuhkan dompet Bitcoin terpisah",
	"nostr/index::nostr_amethyst_f3": "100% gratis",
	"nostr/index::nostr_damus_f1": "Antarmuka yang familiar seperti Twitter",
	"nostr/index::nostr_damus_f2": "Membutuhkan dompet Bitcoin terpisah",
	"nostr/index::nostr_damus_f3": "100% gratis",
	"nostr/index::nostr_download_heading":
		"Unduh klien Nostr gratis",
	"nostr/index::nostr_download_intro":
		"Klien Nostr adalah aplikasi gratis yang memungkinkan Anda membaca dan memposting di jaringan Nostr. Semuanya saling terhubung \u2014 Anda dapat berpindah klien kapan saja dan tetap memiliki pengikut serta konten Anda.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr adalah protokol terdesentralisasi baru untuk berkomunikasi online \u2014 tidak ada satu perusahaan pun yang mengendalikannya, zap Bitcoin terintegrasi, dan Anda dapat berpindah antar aplikasi tanpa kehilangan pengikut Anda.",
	"nostr/index::nostr_hero_title": "Apa itu Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr mirip dengan email: tidak ada yang memiliki protokol, siapa pun dapat membangun aplikasi di atasnya, dan Anda dapat memilih aplikasi mana pun yang paling Anda suka. Tidak seperti Twitter atau Facebook, tidak ada perusahaan pusat yang dapat menyensor, mendeplatform, atau mengurangi jangkauan Anda.",
	"nostr/index::nostr_intro_c2":
		"Di bawah ini adalah versi singkat mengapa Nostr penting \u2014 lalu setiap klien Nostr gratis yang Anda butuhkan untuk memulai hari ini.",
	"nostr/index::nostr_iris_f1":
		"Sangat sederhana \u2014 tidak perlu instalasi",
	"nostr/index::nostr_iris_f2":
		"Cara mudah untuk mencoba Nostr dengan akun uji coba",
	"nostr/index::nostr_iris_f3": "100% gratis",
	"nostr/index::nostr_learn_more_label": "PELAJARI LEBIH DALAM",
	"nostr/index::nostr_learn_more_title":
		"Pelajari lebih lanjut tentang Nostr di nostr.how",
	"nostr/index::nostr_primal_f1": "Klien pertama yang direkomendasikan",
	"nostr/index::nostr_primal_f2": "Dompet zap Bitcoin terintegrasi",
	"nostr/index::nostr_primal_f3": "100% gratis",
	"nostr/index::nostr_s1": "Protokol, bukan platform",
	"nostr/index::nostr_s1_c1":
		"Nostr adalah protokol baru yang memungkinkan Anda berkomunikasi online tanpa takut akan sensor, deplatform, atau pengurangan jangkauan.",
	"nostr/index::nostr_s1_c2":
		"Platform seperti Twitter dan Facebook dikontrol oleh satu perusahaan, tetapi tidak ada yang mengontrol protokol Nostr.",
	"nostr/index::nostr_s2": "Kebebasan untuk berpindah",
	"nostr/index::nostr_s2_c1":
		"Nostr mirip dengan email. Tidak ada yang mengontrol protokol email, dan siapa pun dapat membangun klien (seperti Gmail, Hotmail, dll.) di atasnya.",
	"nostr/index::nostr_s2_c2":
		"Tidak ada yang mengontrol protokol Nostr, dan siapa pun dapat membangun klien (seperti Damus, Amethyst, dll.) di atasnya.",
	"nostr/index::nostr_s2_c3":
		"Jika Anda tidak menyukai cara klien tertentu bekerja, Anda dapat dengan mulus memindahkan akun Nostr Anda ke klien lain tanpa kehilangan pengikut atau konten Anda.",
	"nostr/index::nostr_s3": "Bitcoin terintegrasi",
	"nostr/index::nostr_s3_c1":
		"Bitcoin terintegrasi secara native ke dalam protokol Nostr. Jika Anda melihat konten yang Anda suka, Anda dapat dengan mudah mengirim zap Bitcoin kepada seseorang sebagai ucapan terima kasih!",
	"nostr/index::nostr_s3_c2":
		"Pada platform terpusat seperti Twitter dan Facebook, perusahaan terpusat menghasilkan uang dari konten Anda. Tetapi pada protokol terbuka seperti Nostr, Anda menghasilkan uang dari konten Anda.",
	"nostr/index::sources_damus": "Damus \u2014 Klien Nostr untuk iPhone",
	"nostr/index::sources_iris":
		"Iris \u2014 Klien Nostr berbasis browser",
	"nostr/index::sources_nostr_how": "nostr.how \u2014 Apa itu Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol \u2014 Spesifikasi open source",
	"nostr/index::sources_primal":
		"Primal \u2014 Klien Nostr dengan dompet zap Bitcoin terintegrasi",
	"nostr/index::what_is_nostr": "Apa itu Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Cetak stiker Bitcoin Anda sendiri dengan file stiker Bitcoin ini.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Permintaan diterima 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Pesan dalam jumlah besar",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Bagikan di Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Apa itu Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Ingin lebih banyak stiker?",
	"sticker-success::sticker_success_hero_title":
		"Stiker Anda sedang dalam perjalanan 🎉",
	"sticker-success::sticker_success_share_header":
		"Bagikan tempat stiker Anda",
	"sticker-success::sticker_success_tips_header":
		"Tempat stiker yang baik",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Sambil melakukannya, cetak dan pasang sendiri",
	"stickers::stickers_instructions_1":
		"Masukkan alamat surat Anda dan kami akan mengirimkan Paket Stiker Bitcoin gratis melalui pos. Stiker Anda akan dikirim dalam amplop putih polos.",
	"stickers::stickers_btn_choose_pack": "Pilih paket ini",
	"stickers::stickers_bulk_c1":
		"Ingin lebih dari beberapa stiker?",
	"stickers::stickers_bulk_c2":
		"Pesan dalam jumlah besar dari pencetak yang sama yang kami gunakan",
	"stickers::stickers_bulk_c3":
		"\u2014 semakin banyak Anda membeli, semakin murah per stikernya.",
	"stickers::stickers_bulk_cta": "Belanja stiker dalam jumlah besar",
	"stickers::stickers_bulk_header":
		"Pesan stiker dalam jumlah besar",
	"stickers::stickers_hero_subtitle":
		"Pesan paket stiker Bitcoin gratis dan pasang di tempat umum untuk membantu lebih banyak orang belajar tentang Bitcoin.",
	"stickers::stickers_hero_title": "Stiker Bitcoin gratis",
	"stickers::stickers_intro_c1":
		"Misi kami adalah membantu Anda meng-orange-pill lebih banyak orang dengan menempatkan stiker Bitcoin di tempat umum. Semua stiker kami memiliki kode QR yang menautkan ke halaman edukasi tentang",
	"stickers::stickers_intro_c3": "inflasi",
	"stickers::stickers_intro_c4":
		"Pilih paket stiker di bawah ini dan pilih cara mendapatkannya \u2014 kami akan mengirimkan paket gratis kepada siapa saja di AS atau Kanada, atau Anda dapat mencetak sendiri di mana saja di dunia.",
	"stickers::stickers_mail_header":
		"Kami akan mengirim stiker gratis Anda",
	"stickers::stickers_next_print_flyers": "Terus menyebarkan",
	"stickers::stickers_next_print_flyers_desc":
		"Cetak selebaran Bitcoin gratis untuk dipasang di tempat umum",
	"stickers::stickers_option_bulk":
		"\ud83d\udce6 Global \u2014 Pesan dalam jumlah besar",
	"stickers::stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Kanada \u2014 Gratis melalui pos",
	"stickers::stickers_option_print":
		"\ud83c\udf0d Global \u2014 Cetak sendiri",
	"stickers::stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 AS \u2014 Gratis melalui pos",
	"stickers::stickers_print_c1":
		"Anda dapat berpartisipasi dengan mencetak stiker Anda sendiri, tidak peduli di mana Anda tinggal. Klik bahasa Anda di bawah ini untuk mengunduh file stiker dan instruksi pencetakan.",
	"stickers::stickers_print_c2":
		"Tidak setiap stiker tersedia dalam setiap bahasa.",
	"stickers::stickers_print_header":
		"Cetak file stiker Anda sendiri",
	"stickers::stickers_request_c1":
		"Isi formulir di bawah ini untuk meminta file stiker dalam bahasa lokal Anda. Kami akan memberi tahu Anda setelah siap.",
	"stickers::stickers_request_header": "Tidak melihat bahasa Anda?",
	"stickers::stickers_share_c2": "Ikuti kami di Nostr dengan mencari",
	"stickers::stickers_share_c3": "di klien Nostr mana pun.",
	"stickers::stickers_signs_pack_description":
		"Tanda peringatan, bahaya, dan hati-hati dengan pesan Bitcoin \u2014 dirancang untuk menarik perhatian dan membuat orang berhenti dan membaca.",
	"stickers::stickers_step_1_description":
		"Setiap paket memiliki kumpulan stiker Bitcoin berbeda dengan kode QR yang mengajarkan orang tentang Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "LANGKAH 1",
	"stickers::stickers_step_1_header": "Pilih paket stiker Anda",
	"stickers::stickers_step_2_description":
		"Kami akan mengirim paket gratis ke alamat di AS dan Kanada. Di mana pun di dunia, Anda dapat mencetak sendiri atau memesan dalam jumlah besar.",
	"stickers::stickers_step_2_eyebrow": "LANGKAH 2",
	"stickers::stickers_step_2_header":
		"Bagaimana Anda ingin mendapatkan stiker Anda?",
	"stickers::stickers_text_pack_description":
		"Campuran slogan Bitcoin dan one-liner yang dirancang untuk memicu rasa ingin tahu di tempat umum.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org \u2014 Pilih Dompet Anda",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp \u2014 Tinjauan Penyimpanan Seed Bitcoin Logam",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green \u2014 Dompet Bitcoin self-custody",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade \u2014 Dompet perangkat keras Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite \u2014 Dompet perangkat keras Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite \u2014 Dompet perangkat keras Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices \u2014 Dompet perangkat keras Passport",
	"wallets::sources_seedsigner":
		"SeedSigner \u2014 Perangkat penandatanganan Bitcoin DIY open source",
	"wallets::wallets_grid_heading": "Dompet Bitcoin populer",
	"wallets::wallets_header_subtitle":
		"Panduan langkah demi langkah untuk memilih dompet, melindungi kunci Anda, dan mengambil kendali penuh atas Bitcoin Anda.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (id): filled ${filled}, already-done ${skipped}`,
	);
}

main();
