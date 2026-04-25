#!/usr/bin/env node
/**
 * Malay (ms) manifest refresh — non-inflation namespaces, part 2.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 * get-involved, lightning, nostr/index, sticker-files/index,
 * sticker-language-success, sticker-success, stickers, wallets.
 *
 * (index namespace is handled separately in translate-index.js due to size.)
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
	"ms.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "HARGA BITCOIN",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Cari harga dolar Bitcoin semasa atau bersejarah",
	"business/accounting::accounting_card_pacioli_label":
		"AKAUNTAN BITCOIN",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Perkhidmatan Perakaunan Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORT EXCEL",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Tarik harga Bitcoin ke Excel secara automatik",
	"business/accounting::accounting_card_wallets_label":
		"DOMPET HIBRID",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Lihat dompet perniagaan yang kami sarankan",
	"business/accounting::accounting_description":
		"Panduan ringkas untuk menerima Bitcoin dalam pembukuan anda \u2014 dompet hibrid, harga kos, capital gain, dan bila perlu memanggil akauntan.",
	"business/accounting::accounting_disclaimer":
		"Panduan ini hanya untuk tujuan maklumat dan bukan nasihat cukai. Untuk nasihat cukai khusus situasi anda, sila berunding dengan akauntan yang berkelayakan.",
	"business/accounting::accounting_disclaimer_label": "Sila ambil perhatian",
	"business/accounting::accounting_example_feb_1": "1 Feb",
	"business/accounting::accounting_example_gain_badge": "Capital gain",
	"business/accounting::accounting_example_gain_explain":
		"Anda merekodkan capital gain $10.",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "1 Jan",
	"business/accounting::accounting_example_loss_badge": "Capital loss",
	"business/accounting::accounting_example_loss_explain":
		"Anda merekodkan capital loss $10.",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
	"business/accounting::accounting_example_received_label": "Diterima",
	"business/accounting::accounting_example_sold_label":
		"Dijual atau dibelanjakan",
	"business/accounting::accounting_hero_subtitle":
		"Menerima Bitcoin di perniagaan anda tidak semestinya merumitkan perakaunan anda. Inilah versi ringkasnya \u2014 plus alat dan profesional untuk menjadikannya tanpa kesusahan.",
	"business/accounting::accounting_intro_c1":
		"Jika anda sudah menerima wang tunai atau kad, menambah Bitcoin ke pembukuan perniagaan anda lebih mudah daripada yang kelihatan. Anda mempunyai dua laluan: tukar setiap pembayaran Bitcoin secara automatik kepada dolar apabila tiba (tiada perakaunan baharu diperlukan), atau simpan sebahagian sebagai Bitcoin (beberapa nombor tambahan untuk dijejaki).",
	"business/accounting::accounting_intro_c2":
		"Panduan ini memandu anda melalui kedua-duanya \u2014 supaya anda boleh memilih yang sesuai dengan perniagaan anda dan mula menerima Bitcoin dengan yakin.",
	"business/accounting::accounting_s1": "Laluan mudah: tukar automatik kepada dolar",
	"business/accounting::accounting_s1_c1":
		"Cara paling mudah untuk menerima Bitcoin ialah dengan dompet hibrid yang menjual 100% Bitcoin yang anda terima secara automatik kepada dolar (atau mata wang tempatan anda) apabila pembayaran masuk.",
	"business/accounting::accounting_s1_c2":
		"Dengan persediaan ini, pembukuan anda kelihatan persis seperti hari ini \u2014 angka akhir dalam dolar, setiap masa. Tiada harga kos, tiada capital gain, tiada hamparan baharu.",
	"business/accounting::accounting_s2":
		"Jika anda menyimpan sebahagian Bitcoin: menjejaki harga kos anda",
	"business/accounting::accounting_s2_c1":
		"Sesetengah perniagaan memilih untuk menyimpan sebahagian Bitcoin yang mereka terima dan bukannya menukar semuanya secara automatik. Jika itu anda, langkah tambahan utama ialah menjejaki harga kos anda \u2014 nilai dolar setiap pembayaran Bitcoin pada hari anda menerimanya.",
	"business/accounting::accounting_s2_c2":
		"Walaupun anda menganggap perniagaan anda sepenuhnya dalam Bitcoin, kebanyakan pihak berkuasa cukai masih mahu nilai dolar dilaporkan. Berita baiknya: hanya dua nombor setiap transaksi \u2014 jumlah Bitcoin yang diterima dan nilai dolarnya pada hari itu.",
	"business/accounting::accounting_s2_c3":
		"Gunakan alat di bawah untuk mengautomasikan carian supaya anda tidak perlu menyemak harga setiap hari.",
	"business/accounting::accounting_s3":
		"Membelanjakan atau menjual Bitcoin yang anda simpan",
	"business/accounting::accounting_s3_c1":
		"Jika anda menukar setiap pembayaran secara automatik kepada dolar, langkau bahagian ini \u2014 ia tidak terpakai untuk anda.",
	"business/accounting::accounting_s3_c2":
		"Jika anda menyimpan sebahagian Bitcoin dan kemudiannya memutuskan untuk membelanjakan atau menjualnya, tambah harga jualan ke hamparan harga kos yang sama. Perbezaan antara nilai Bitcoin apabila anda menerimanya dan nilainya apabila anda membelanjakannya atau menjualnya ialah capital gain atau loss.",
	"business/accounting::accounting_s3_c3": "Dua contoh ringkas:",
	"business/accounting::accounting_s3_c6":
		"Itu sahaja. Matematik asasnya sama dengan bagaimana mana-mana aset yang menghargai atau menyusut nilainya direkodkan.",
	"business/accounting::accounting_s4":
		"Perlukan profesional yang tahu Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Jika anda lebih suka menyerahkan ini \u2014 atau perakaunan Bitcoin anda lebih kompleks daripada yang boleh dikendalikan oleh dompet hibrid \u2014 kami amat mengesyorkan Perkhidmatan Perakaunan Satoshi Pacioli, firma yang khusus dalam perakaunan Bitcoin untuk perniagaan.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Perakaunan Bitcoin untuk perniagaan anda",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report \u2014 Harga dolar Bitcoin semasa & bersejarah",
	"business/accounting::sources_satoshi_pacioli":
		"Perkhidmatan Perakaunan Satoshi Pacioli \u2014 Perakaunan Bitcoin untuk perniagaan",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru \u2014 Import harga cryptocurrency ke Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Jawapan ringkas untuk soalan yang paling kerap ditanya peniaga sebelum mereka mula menerima Bitcoin \u2014 yuran, penyelesaian, dompet, chargeback, kos, dan banyak lagi.",
	"business/faq::faq_intro_c1":
		"Ketuk mana-mana soalan di bawah untuk mengembangkan jawapan. Apabila anda bersedia untuk mula menerima Bitcoin, sumber perniagaan di bahagian bawah halaman akan memandu anda melalui setiap langkah.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "PERAKAUNAN",
	"business/index::biz_label_faq": "SOALAN LAZIM",
	"business/index::biz_label_maps": "PETA PENIAGA",
	"business/index::biz_label_rewards": "GANJARAN",
	"business/index::biz_label_stickers": "PELEKAT",
	"business/index::biz_label_wallets": "DOMPET",
	"business/index::biz_meta_description":
		"Terima Bitcoin di perniagaan anda untuk yuran lebih rendah, penyelesaian serta-merta, tanpa chargeback, dan lebih ramai pelanggan.",
	"business/index::business_hero_subtitle":
		"Terima pembayaran dengan yuran lebih rendah, dapat dibayar serta-merta, dan jangkau berjuta-juta pelanggan baharu \u2014 tanpa kontrak dan tanpa kos tersembunyi.",
	"business/index::business_intro_c1":
		"Bitcoin memberi perniagaan anda cara yang lebih cepat, lebih murah, dan lebih peribadi untuk dibayar. Tiada perantara. Tiada chargeback. Tiada kontrak. Hanya wang yang diselesaikan dalam beberapa saat, terus daripada pelanggan anda kepada anda.",
	"business/index::business_intro_c2":
		"Di bawah ialah versi ringkas mengapa Bitcoin baik untuk perniagaan \u2014 dan di bawahnya, setiap sumber yang anda perlukan untuk mula menerimanya hari ini.",
	"business/index::business_resources_heading":
		"Semua yang anda perlukan untuk menerima Bitcoin",
	"business/index::business_resources_intro":
		"Lalui sumber-sumber ini mengikut kelajuan anda sendiri. Setiap satu adalah panduan ringkas dan praktikal.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Beritahu kami tentang perniagaan anda",
	"business/maps::biz_maps_form_intro":
		"Kami hanya memerlukan beberapa butiran untuk mendaftarkan anda. Data alamat hanya disimpan cukup lama untuk menghantar perniagaan anda ke peta.",
	"business/maps::biz_maps_hero_subtitle":
		"Daftarkan perniagaan anda secara percuma di BTC Map \u2014 direktori terbuka peniaga yang menerima Bitcoin di seluruh dunia \u2014 supaya pengguna Bitcoin yang berdekatan dapat mencari anda dan membelanjakan Bitcoin di perniagaan anda.",
	"business/maps::biz_maps_hero_title":
		"Daftarkan perniagaan anda di peta peniaga Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Pengguna Bitcoin secara aktif mencari tempat untuk berbelanja. Memasukkan perniagaan anda ke peta meletakkan anda di hadapan setiap pengguna Bitcoin yang mencari tempat untuk makan, membeli-belah, atau menginap berdekatan \u2014 tanpa kos kepada anda.",
	"business/maps::biz_maps_intro_c2":
		"Hanya isi borang ringkas di bawah dan kami akan menghantar perniagaan anda ke BTC Map dan peta peniaga Bitcoin yang lain untuk anda.",
	"business/maps::biz_maps_meta_description":
		"Daftarkan perniagaan anda secara percuma di BTC Map dan peta peniaga Bitcoin yang lain supaya pengguna Bitcoin yang berdekatan boleh mencari anda.",
	"business/maps::biz_maps_placeholder_address": "Alamat jalan",
	"business/maps::biz_maps_placeholder_category":
		"Kategori (cth. restoran, kafe, hotel)",
	"business/maps::biz_maps_placeholder_city": "Bandar",
	"business/maps::biz_maps_placeholder_country": "Negara",
	"business/maps::biz_maps_placeholder_name": "Nama perniagaan",
	"business/maps::biz_maps_placeholder_region":
		"Negeri / Wilayah",
	"business/maps::biz_maps_placeholder_website":
		"Laman web (pilihan)",
	"business/maps::biz_maps_view_map_cta": "Lihat BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Lihat BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Terima kasih kerana menghantar perniagaan anda. Kami akan mendaftarkan anda di peta peniaga Bitcoin tidak lama lagi.",
	"business/maps-success::biz_maps_success_hero_title":
		"Permintaan diterima 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Perniagaan anda akan didaftarkan di BTC Map dan direktori peniaga Bitcoin yang lain dalam masa 1 hingga 2 minggu. Kami menyemak setiap penghantaran secara manual untuk mengekalkan ketepatan peta.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Setelah penyenaraian anda aktif, pengguna Bitcoin yang berdekatan boleh menemui perniagaan anda dan datang membelanjakan Bitcoin di sana.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Apa yang berlaku seterusnya",
	"business/maps-success::biz_maps_success_view_c1":
		"Sementara anda menunggu, lihat BTC Map untuk melihat rangkaian perniagaan yang berkembang yang menerima Bitcoin di seluruh dunia.",
	"business/maps-success::biz_maps_success_view_header":
		"Lihat di mana anda akan muncul",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Muat turun fail pelekat dalam bahasa Inggeris untuk mencetak pelekat 'Bitcoin Diterima Di Sini' anda sendiri.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Cetak sendiri pelekat 'Bitcoin Diterima Di Sini' dalam bahasa Inggeris untuk memberitahu pelanggan anda bahawa anda menerima Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Muat turun fail pelekat 'Bitcoin Diterima Di Sini' dalam bahasa Inggeris",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Terima kasih kerana meminta fail pelekat 'Bitcoin Diterima Di Sini' dalam bahasa anda.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Permintaan diterima 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Kami akan mencipta dan menerbitkan fail pelekat anda dalam masa 3 hingga 4 minggu. Setelah siap, anda akan dapat memuat turun dan mencetaknya secara percuma daripada halaman fail pelekat kami.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Fail pelekat dikeluarkan dalam kelompok, jadi mungkin mengambil masa beberapa minggu untuk bahasa anda menjadi aktif. Terima kasih atas kesabaran anda!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Apa yang berlaku seterusnya",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Pesan secara pukal",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Minta pek percuma lain",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Anda akan menerima pelekat 'Bitcoin Diterima Di Sini' percuma anda dalam masa 2 hingga 4 minggu, dalam sampul putih kosong yang mengandungi 3 pelekat.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Pelekat anda dalam perjalanan 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Jika 3 pelekat tidak mencukupi untuk perniagaan anda, sila minta pek percuma lain \u2014 atau pesan secara pukal daripada pencetak yang sama yang kami gunakan.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Perlukan lebih banyak pelekat?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Di pintu hadapan atau tingkap anda supaya pelanggan melihatnya sebelum mereka masuk",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Berhampiran daftar tunai, terminal POS, atau kawasan pembayaran anda",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Pada menu, senarai harga, atau balang tip",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Jangan tampalkan di tempat yang anda tidak miliki atau tidak diberi kebenaran",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Tempat yang baik untuk menampal pelekat anda",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Beritahu pelanggan anda bahawa anda menerima Bitcoin. Pesan pek pelekat 'Bitcoin Diterima Di Sini' percuma untuk dipasang di perniagaan anda.",
	"business/stickers::biz_stickers_hero_title":
		"Pelekat 'Bitcoin Diterima Di Sini' percuma",
	"business/stickers::biz_stickers_intro_c1":
		"Menerima Bitcoin hanyalah separuh kerja \u2014 pelanggan anda juga perlu tahu bahawa anda melakukannya. Pelekat kecil 'Bitcoin Diterima Di Sini' ini direka untuk ditampal di pintu hadapan, daftar tunai, menu, atau di mana sahaja pelanggan akan melihatnya sebelum mereka membayar.",
	"business/stickers::biz_stickers_intro_c2":
		"Kami akan menghantar pek percuma kepada anda di mana sahaja di AS atau Kanada, atau anda boleh mencetak sendiri di mana sahaja di dunia.",
	"business/stickers::biz_stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Kanada \u2014 Percuma melalui pos",
	"business/stickers::biz_stickers_option_print":
		"\ud83c\udf0d Global \u2014 Cetak sendiri",
	"business/stickers::biz_stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 AS \u2014 Percuma melalui pos",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Terjemahan untuk 'Bitcoin Diterima Di Sini'",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Terjemahan untuk 'Imbas untuk mengetahui mengapa Bitcoin baik untuk perniagaan.'",
	"business/stickers::biz_stickers_print_c1":
		"Anda boleh mencetak sendiri pelekat 'Bitcoin Diterima Di Sini', tidak kira di mana anda tinggal. Klik bahasa anda di bawah untuk memuat turun fail pelekat dan arahan pencetakan.",
	"business/stickers::biz_stickers_print_header":
		"Cetak sendiri fail pelekat",
	"business/stickers::biz_stickers_request_c1":
		"Isi borang di bawah untuk meminta fail pelekat 'Bitcoin Diterima Di Sini' dalam bahasa tempatan anda. Kami akan memberitahu anda apabila ia siap.",
	"business/stickers::biz_stickers_request_header":
		"Tidak nampak bahasa anda?",
	"business/stickers::biz_stickers_step_description":
		"Kami akan menghantar pek percuma ke alamat di AS dan Kanada. Di mana sahaja di dunia, anda boleh mencetak sendiri.",
	"business/stickers::biz_stickers_step_header":
		"Bagaimana anda mahu mendapatkan pelekat anda?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Semua dompet Bitcoin saling bersambung \u2014 pilih yang sesuai dengan perniagaan anda. Percuma, penyelesaian serta-merta, tanpa chargeback.",
	"business/wallets::sources_breez_business":
		"Breez \u2014 Dompet Lightning khusus Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX \u2014 Infrastruktur pembayaran Lightning",
	"business/wallets::sources_opennode":
		"OpenNode \u2014 Pemproses pembayaran Bitcoin",
	"business/wallets::sources_square":
		"Square \u2014 Terima pembayaran Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite \u2014 Invois Bitcoin untuk perniagaan",
	"business/wallets::wallets_hero_subtitle":
		"Dompet Bitcoin percuma. Pilih yang sesuai dengan perniagaan anda \u2014 secara langsung, dalam talian, atau berasaskan invois \u2014 dan mula menerima Bitcoin dalam beberapa minit.",
	"business/wallets::wallets_section_invoice":
		"Dompet untuk perniagaan berasaskan invois",
	"business/wallets::wallets_section_invoice_intro":
		"Jika anda menagih klien (perundingan, kerja bebas, perkhidmatan B2B), gunakan dompet yang dibina di sekitar pengeluaran invois. Klien anda membayar invois Bitcoin dalam beberapa klik.",
	"business/wallets::wallets_section_multiple":
		"Dompet untuk perniagaan dengan beberapa pekerja",
	"business/wallets::wallets_section_multiple_intro":
		"Jika anda mempunyai pasukan yang menerima pembayaran di daftar tunai, pilih dompet yang menyokong beberapa log masuk pekerja \u2014 supaya setiap pekerja mendapat PIN sendiri dan anda menyimpan jejak audit yang bersih tentang siapa yang menerima pembayaran mana.",
	"business/wallets::wallets_section_online": "Dompet untuk perniagaan dalam talian",
	"business/wallets::wallets_section_online_intro":
		"Menjual di laman web? Dompet ini bersambung kepada kedai dalam talian anda dan menerima Bitcoin daripada mana-mana pelanggan, di mana sahaja di dunia \u2014 tanpa chargeback, tanpa keperluan akaun peniaga.",
	"business/wallets::wallets_section_sole":
		"Dompet untuk perniagaan tunggal",
	"business/wallets::wallets_section_sole_intro":
		"Jika anda menjalankan kedai, kafe, studio, atau perkhidmatan sendiri, mana-mana dompet ini akan berfungsi. Pilih berdasarkan sama ada anda mahu menyimpan pembayaran dalam Bitcoin atau menukar sebahagian setiap pembayaran secara automatik kepada mata wang tempatan anda.",
	"business/wallets::wallets_strike_note":
		"Strike Business membolehkan anda menerima pembayaran Bitcoin dan Lightning dengan yuran sifar dan penyelesaian serta-merta. Menyokong pembayaran secara langsung, dalam talian, dan berasaskan invois dengan penukaran automatik pilihan kepada mata wang tempatan anda.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin diterima di sini",
	"business/why::why_biz_s1": "Yuran lebih rendah, lebih banyak untuk perniagaan",
	"business/why::why_biz_s1_c1":
		"Pembayaran Bitcoin memintas bank dan syarikat kad kredit yang mengambil 2\u20133% daripada setiap jualan. Perniagaan menyimpan lebih banyak daripada apa yang anda bayar \u2014 yang selalunya bermakna harga yang lebih baik dan perkhidmatan yang lebih baik untuk anda.",
	"business/why::why_biz_s2": "Penyelesaian serta-merta, tanpa chargeback",
	"business/why::why_biz_s2_c1":
		"Pembayaran Bitcoin diselesaikan dalam beberapa saat, terus daripada dompet anda kepada perniagaan. Tiada menunggu berhari-hari untuk bank mengeluarkan dana, dan tiada pertikaian chargeback yang mahal \u2014 supaya perniagaan boleh menumpukan perhatian melayan pelanggan dan bukannya melawan penipuan.",
	"business/why::why_biz_s3":
		"Percuma untuk diterima, terbuka kepada semua",
	"business/why::why_biz_s3_c1":
		"Tiada kontrak, yuran bulanan, atau kos persediaan untuk perniagaan menerima Bitcoin. Dan berjuta-juta pengguna Bitcoin di seluruh dunia secara aktif mencari peniaga yang menerimanya \u2014 memberi perniagaan ini pendedahan percuma kepada pelanggan baharu.",
	"business/why::why_business_cta_intro":
		"Menjalankan perniagaan dan ingin mula menerima Bitcoin?",
	"business/why::why_business_cta_link": "Lihat bagaimana ia berfungsi \u2192",
	"business/why::why_for_business":
		"Mengapa Bitcoin sangat baik untuk perniagaan ini",
	"business/why::why_for_business_intro":
		"Menerima Bitcoin membolehkan perniagaan menyimpan lebih banyak daripada setiap jualan, dibayar serta-merta tanpa chargeback, dan menjangkau audiens global pengguna Bitcoin \u2014 semuanya tanpa kontrak dan tanpa yuran bulanan.",
	"business/why::why_good_for_you":
		"Mengapa Bitcoin juga hebat untuk anda",
	"business/why::why_good_for_you_intro":
		"Bitcoin tidak hanya berguna di daftar tunai \u2014 ia adalah bentuk wang yang lebih baik yang melindungi simpanan, privasi, dan kebebasan anda untuk bertransaksi. Berikut ialah gambaran ringkas.",
	"business/why::why_hero_subtitle":
		"Anda baru sahaja mengimbas pelekat Bitcoin Diterima Di Sini. Berikut sebab mengapa itu berita baik \u2014 untuk perniagaan ini, dan untuk anda.",
	"business/why::why_intro_c1":
		"Perniagaan tempat anda berada menerima Bitcoin \u2014 rangkaian pembayaran moden dan sumber terbuka yang boleh digunakan oleh sesiapa sahaja, di mana sahaja di dunia, tanpa bank atau perantara mengambil potongan.",
	"business/why::why_intro_c2":
		"Di bawah ialah versi ringkas mengapa menerima Bitcoin baik untuk perniagaan ini, plus mengapa menggunakan Bitcoin baik untuk anda sebagai pelanggan.",
	"business/why::why_learn_more_lowercase": "Ketahui lebih lanjut \u2192",
	"business/why::why_next_business_label": "TERIMA BITCOIN",
	"business/why::why_next_business_title":
		"Terima Bitcoin di perniagaan anda",
	"business/why::why_next_buy_label": "BELI BITCOIN",
	"business/why::why_next_buy_title": "Beli Bitcoin pertama anda",
	"business/why::why_next_learn_label": "KETAHUI LEBIH",
	"business/why::why_next_learn_title":
		"Ketahui lebih lanjut tentang Bitcoin",
	"business/why::why_next_wallet_label": "DAPATKAN DOMPET",
	"business/why::why_next_wallet_title":
		"Dapatkan dompet Bitcoin anda sendiri",
	"business/why::why_s1_c1":
		"Inflasi berlaku apabila lebih banyak wang dicetak atau dicipta begitu sahaja. Itu menjadikan wang dalam saku anda kurang bernilai dari semasa ke semasa \u2014 dan itulah sebabnya harga terus naik tahun demi tahun.",
	"business/why::why_s1_c2":
		"Bitcoin mempunyai bekalan tetap 21 juta syiling. Tiada kerajaan, bank, atau syarikat boleh mencetak yang lebih. Simpanan Bitcoin anda mengekalkan nilainya dari semasa ke semasa dan bukan diam-diam kehilangannya.",
	"business/why::why_s2_c1":
		"Beberapa bank AS telah runtuh dalam beberapa tahun kebelakangan ini akibat bank run. Apabila terlalu ramai pelanggan cuba mengeluarkan wang sekaligus, bank tidak mempunyai wang tunai untuk membayar semua orang kembali.",
	"business/why::why_s2_c2":
		"Bukannya hanya menyimpan wang anda, bank meminjamkan dan melaburkan sebahagian besar daripadanya. Jika pelaburan tersebut gagal \u2014 atau jika pendeposit kehilangan keyakinan \u2014 bank boleh gagal, dan deposit anda boleh dibekukan atau hilang.",
	"business/why::why_s2_c3":
		"Dengan Bitcoin, anda boleh menyimpan wang anda sendiri secara langsung di dompet anda sendiri. Tiada bank. Tiada perantara. Tiada bank run.",
	"business/why::why_s3_c1":
		"Tidak seperti kad kredit, PayPal, atau akaun bank tradisional, Bitcoin tidak memerlukan kebenaran sesiapa untuk digunakan.",
	"business/why::why_s3_c2":
		"Tiada siapa boleh membekukan akaun anda, menyekat pembayaran, atau memutuskan anda daripada rangkaian. Ia adalah sistem kewangan pertama dalam sejarah yang anda boleh gunakan dengan bebas, tanpa rasa takut akan penapisan atau rampasan.",
	"business/why::why_s4_c1":
		"Bitcoin sering disalahertikan, tetapi diam-diam melakukan banyak kebaikan di dunia.",
	"business/why::why_s4_c2":
		"Bitcoin telah membantu aktivis hak asasi manusia memperjuangkan kebebasan, mengurangkan pelepasan metana global daripada tapak pelupusan dan medan minyak, menstabilkan grid elektrik, dan mendanai barangan awam seperti taman negara.",
	"business/why::why_whats_next_heading": "Ke mana seterusnya?",
	"business/why::why_whats_next_intro":
		"Jika ini kali pertama anda mengimbas pelekat Bitcoin, berikut ialah tempat yang paling berguna untuk dituju dari sini.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Cara membeli Bitcoin",
	"buy::buy_step_1_header": "Pilih negara anda",
	"buy::buy_step_2_header": "Pilih kaedah pembayaran anda",
	"buy::buy_step_3_header": "Pilihan pembelian anda",
	"buy::buy_step_4_header": "Simpan Bitcoin anda dengan selamat",
	"buy::buy_header_subtitle":
		"Panduan langkah demi langkah yang ringkas untuk membeli Bitcoin pertama anda.",
	"buy::buy_howto_name": "Cara membeli Bitcoin",
	"buy::buy_meta_description":
		"Ketahui cara membeli Bitcoin dengan selamat menggunakan panduan langkah demi langkah kami. Pilih negara dan kaedah pembayaran anda untuk mencari pilihan pembelian Bitcoin terbaik untuk anda.",
	"buy::buy_step_1_eyebrow": "Langkah 1",
	"buy::buy_step_2_eyebrow": "Langkah 2",
	"buy::buy_step_3_eyebrow": "Langkah 3",
	"buy::buy_step_4_eyebrow": "Langkah 4",
	"buy::buy_storage_cta_label": "Langkah seterusnya",
	"buy::sources_bisq":
		"Bisq \u2014 Bursa Bitcoin peer-to-peer tidak berpusat",
	"buy::sources_coinatmradar":
		"Coin ATM Radar \u2014 Direktori ATM Bitcoin di seluruh dunia",
	"buy::sources_kraken": "Kraken \u2014 Bursa Bitcoin yang mantap",
	"buy::sources_relai":
		"Relai \u2014 Aplikasi self-custody khusus Bitcoin dari Switzerland",
	"buy::sources_river":
		"River \u2014 Pembelian, perlombongan, dan kustodi khusus Bitcoin",
	"buy::sources_strike_lightning":
		"Strike \u2014 Beli Bitcoin dengan sokongan Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin \u2014 Dollar-cost averaging khusus Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Tambah bahasa",
	"common::common_next_buy_bitcoin": "Beli Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Ketahui cara membeli Bitcoin dengan selamat",
	"common::common_next_calculate": "Kira inflasi anda",
	"common::common_next_calculate_desc":
		"Lihat bagaimana inflasi memberi kesan kepada gaji anda dari semasa ke semasa",
	"common::common_next_get_wallet": "Dapatkan dompet",
	"common::common_next_get_wallet_desc":
		"Dapatkan dompet Bitcoin pertama anda \u2014 percuma",
	"common::common_next_keep_learning": "Teruskan belajar",
	"common::common_next_keep_learning_desc":
		"Lihat bagaimana Bitcoin menjadikan dunia lebih baik",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics \u2014 Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) \u2014 Money Supply (Indeks Kategori)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto \u2014 Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish \u2014 \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Apa seterusnya?",
	"common::common_sticker_files_mission_5": "minta pek",
	"common::common_site_tagline": "Pendidikan Bitcoin untuk semua orang.",
	"common::common_source_btc_map":
		"BTC Map \u2014 Direktori peniaga yang menerima Bitcoin di seluruh dunia",
	"common::common_source_btcpayserver":
		"BTCPay Server \u2014 Pemproses pembayaran Bitcoin percuma, sumber terbuka, dan hos sendiri",
	"common::common_source_oshi":
		"Oshi \u2014 Platform ganjaran Bitcoin untuk peniaga",
	"common::common_source_strike_business":
		"Strike \u2014 Pembayaran Bitcoin & Lightning untuk perniagaan",
	"common::common_sources_group_bitcoin": "Data Bitcoin",
	"common::common_sources_group_cpi":
		"Inflasi / Indeks Harga Pengguna",
	"common::common_sources_group_debt": "Hutang kerajaan",
	"common::common_sources_group_money": "Data bekalan wang",
	"common::common_sources_group_stories": "Contoh dunia sebenar",
	"common::common_sticker_files_mission_6":
		"pelekat bahasa Inggeris secara percuma.",
	"common::common_sticker_files_next_flyers_label": "Risalah",
	"common::common_sticker_files_next_flyers_title":
		"Cetak risalah Bitcoin",
	"common::common_sticker_files_next_languages_label": "Fail pelekat",
	"common::common_sticker_files_next_languages_title":
		"Lihat fail pelekat dalam bahasa lain",
	"common::common_sticker_files_print_these": "CETAK INI DENGAN 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"Pelekat \"Bitcoin Tiada Inflasi\" (Hitam)",
	"common::common_sticker_name_bdhi_orange":
		"Pelekat \"Bitcoin Tiada Inflasi\" (Jingga)",
	"common::common_sticker_name_caution":
		"Pelekat Bitcoin \"Awas! Ais Sedang Cair\"",
	"common::common_sticker_name_cure_inflation":
		"Pelekat Bitcoin \"Sembuhkan Inflasi\"",
	"common::common_sticker_name_danger":
		"Pelekat Bitcoin \"Bahaya! Inflasi Di Hadapan\"",
	"common::common_sticker_name_fix":
		"Pelekat Bitcoin \"Baiki Wang, Baiki Dunia\"",
	"common::common_sticker_name_got_inflation":
		"Pelekat Bitcoin \"Ada Inflasi?\"",
	"common::common_sticker_name_study": "Pelekat \"Pelajari Bitcoin\"",
	"common::common_sticker_name_warning":
		"Pelekat Bitcoin \"Amaran! Inflasi Mencuri Simpanan Anda\"",
	"common::common_sticker_name_what_if":
		"Pelekat Bitcoin \"Bagaimana jika wang anda tiada inflasi?\"",
	"common::common_sticker_tips_heading": "Tip pelekat",
	"common::common_sticker_tips_intro":
		"Selepas anda mencetak pelekat, tampal di tempat yang akan dilihat! Tempat pelekat yang baik ialah:",
	"common::common_sticker_tips_list_1":
		"di tempat awam di mana orang akan melihatnya",
	"common::common_sticker_tips_list_2":
		"di tempat yang kemungkinan kecil akan dialihkan dengan cepat (pelekat tidak menyebabkan kerosakan kekal)",
	"common::common_sticker_tips_list_3":
		"pada permukaan yang mudah ditampal (logam, plastik, kaca)",
	"common::common_sticker_tips_list_4":
		"BUKAN di harta persendirian, menutupi tanda, ATM, atau pam minyak",
	"common::common_stickers_printer_prefix": "Kami menggunakan",
	"common::common_stickers_printer_suffix":
		"tetapi anda boleh menggunakan mana-mana syarikat pelekat.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) \u2014 Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) \u2014 M1 Money Supply",
	"compound-inflation-calculator::cic_calculator_heading":
		"Kira jurang inflasi anda",
	"compound-inflation-calculator::cic_cta_label": "Langkah seterusnya",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Lihat berapa banyak gaji anda perlu meningkat untuk mengimbangi inflasi.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Terokai lebih banyak topik",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Lihat bagaimana Bitcoin berhubung dengan wang, kebebasan, tenaga, dan banyak lagi.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Ketahui cara inflasi berfungsi",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Cara mencetak dan memasang risalah Bitcoin ini",
	"flyers::flyers_hero_subtitle":
		"Risalah Bitcoin yang percuma dan boleh dicetak. Pasang di tempat awam untuk membantu lebih ramai orang belajar tentang Bitcoin.",
	"flyers::flyers_hero_title": "Cetak dan pasang risalah Bitcoin",
	"flyers::flyers_next_get_stickers": "Sebarkan berita",
	"flyers::flyers_next_get_stickers_desc":
		"Pesan pek pelekat Bitcoin percuma",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Terlibat dan sebarkan Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Mahu membantu membina ekonomi sirkular Bitcoin? Cara termudah ialah membantu perniagaan tempatan mula menerima pembayaran Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Mengenali perniagaan yang mungkin terbuka kepadanya? Hantar pemiliknya ke",
	"get-involved::get_involved_business_content_3":
		"halaman perniagaan Bitcoin kami.",
	"get-involved::get_involved_description":
		"Sumber percuma kami menjadikannya mudah untuk menyebarkan adopsi Bitcoin. Pelekat, risalah, pelekat 'Bitcoin Diterima Di Sini' untuk perniagaan, dan pangkalan kod sumber terbuka yang sesiapa sahaja boleh menyumbang.",
	"get-involved::get_involved_header":
		"Terlibat dan sebarkan Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Anda boleh membantu mengubahnya. Kami telah membuat beberapa sumber percuma untuk memudahkan penyebaran harapan yang dibawa Bitcoin kepada orang di sekeliling anda.",
	"get-involved::get_involved_biz_stickers_note":
		"Sudah menerima Bitcoin? Beritahu pelanggan dengan pelekat 'Bitcoin Diterima Di Sini' percuma kami. Kami akan menghantar pek ke mana-mana alamat di AS atau Kanada, atau anda boleh mencetak sendiri di mana sahaja di dunia.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Pelekat diterima di sini",
	"get-involved::get_involved_card_biz_stickers_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_biz_stickers_title":
		"Pelekat 'Bitcoin Diterima Di Sini' percuma untuk perniagaan anda",
	"get-involved::get_involved_card_business_label":
		"Bitcoin untuk perniagaan",
	"get-involved::get_involved_card_business_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_business_title":
		"Semua yang diperlukan perniagaan untuk mula menerima pembayaran Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Risalah cetakan",
	"get-involved::get_involved_card_flyers_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_flyers_title":
		"Muat turun dan cetak risalah Bitcoin percuma",
	"get-involved::get_involved_card_github_label": "Sumber terbuka",
	"get-involved::get_involved_card_github_source":
		"Sumber: GitHub \u2192",
	"get-involved::get_involved_card_github_title":
		"Sumbang kepada bitcoin.rocks di GitHub",
	"get-involved::get_involved_card_stickers_label": "Pelekat percuma",
	"get-involved::get_involved_card_stickers_source":
		"Sumber: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_stickers_title":
		"Minta pek pelekat Bitcoin percuma dihantar ke pintu rumah anda",
	"get-involved::get_involved_flyers_content_1":
		"Risalah adalah salah satu cara termudah untuk memperkenalkan Bitcoin kepada komuniti anda. Muat turun risalah Bitcoin percuma yang boleh dicetak, cetak seberapa banyak yang anda mahu, dan tampal di papan komuniti, kafe, perjumpaan, atau di mana sahaja orang berkumpul.",
	"get-involved::get_involved_flyers_content_2":
		"Setiap risalah menyertakan tajuk yang menarik dan kod QR yang menghantar pembaca yang ingin tahu ke bitcoin.rocks untuk mengetahui lebih lanjut.",
	"get-involved::get_involved_flyers_content_3":
		"Tidak seperti pelekat, risalah boleh dicetak atas permintaan dari mana-mana sahaja di dunia \u2014 yang anda perlukan hanyalah pencetak dan beberapa minit.",
	"get-involved::get_involved_flyers_header":
		"Cetak dan pasang risalah",
	"get-involved::get_involved_flyers_image_alt":
		"Pratonton risalah Bitcoin percuma yang boleh dicetak daripada bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks adalah projek percuma dan sumber terbuka berlesen MIT. Misi kami adalah untuk mempercepatkan adopsi Bitcoin melalui pendidikan \u2014 dan kami tidak boleh melakukannya secara bersendirian.",
	"get-involved::get_involved_github_content_2":
		"Sama ada anda pembangun, pereka, penulis, atau penterjemah, ada cara untuk anda membantu. Kami amat mengalu-alukan penyumbang yang boleh menterjemah kandungan kami ke lebih banyak bahasa supaya lebih ramai orang di seluruh dunia boleh belajar tentang Bitcoin dalam bahasa ibunda mereka.",
	"get-involved::get_involved_github_content_3":
		"Fork repositori, buka pull request, hantar issue, atau hanya beri bintang pada projek untuk menunjukkan sokongan anda. Setiap sumbangan membantu Bitcoin menjangkau lebih ramai orang.",
	"get-involved::get_involved_github_header":
		"Sumbang di GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Pek pelekat teks Bitcoin percuma daripada bitcoin.rocks",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja \u2014 The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Lihat",
	"lightning::lightning_grid_heading": "Dompet Lightning popular",
	"lightning::lightning_hardware_cta_label": "Dompet perkakasan",
	"lightning::lightning_header_subtitle":
		"Lightning membolehkan anda menghantar Bitcoin dalam beberapa saat dengan yuran kurang daripada satu sen \u2014 pilih dompet yang trade-offnya sesuai dengan jumlah Bitcoin yang anda mahu belanjakan.",
	"lightning::lightning_s1_c4_end": "untuk maklumat lebih lanjut.",
	"lightning::lightning_s1_c4_link": "Panduan Dompet Perkakasan Bitcoin",
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
	"nostr/index::nostr_platform_web": "Pelayar web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr ialah protokol tidak berpusat baharu untuk komunikasi dalam talian \u2014 tiada satu syarikat pun yang mengawalnya, zap Bitcoin diintegrasikan secara semula jadi, dan anda boleh berpindah antara klien tanpa kehilangan pengikut.",
	"nostr/index::nostr_amethyst_f1": "Banyak ciri dan penyesuaian",
	"nostr/index::nostr_amethyst_f2":
		"Memerlukan dompet Bitcoin berasingan",
	"nostr/index::nostr_amethyst_f3": "100% percuma",
	"nostr/index::nostr_damus_f1": "Antara muka yang biasa seperti Twitter",
	"nostr/index::nostr_damus_f2": "Memerlukan dompet Bitcoin berasingan",
	"nostr/index::nostr_damus_f3": "100% percuma",
	"nostr/index::nostr_download_heading":
		"Muat turun klien Nostr percuma",
	"nostr/index::nostr_download_intro":
		"Klien Nostr ialah aplikasi percuma yang membolehkan anda membaca dan menyiarkan di rangkaian Nostr. Semuanya saling bersambung \u2014 anda boleh menukar klien pada bila-bila masa dan masih memiliki pengikut serta kandungan anda.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr ialah protokol tidak berpusat baharu untuk berkomunikasi dalam talian \u2014 tiada satu syarikat pun yang mengawalnya, zap Bitcoin diintegrasikan, dan anda boleh berpindah antara aplikasi tanpa kehilangan pengikut anda.",
	"nostr/index::nostr_hero_title": "Apakah Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr serupa dengan e-mel: tiada siapa memiliki protokol, sesiapa sahaja boleh membina aplikasi di atasnya, dan anda boleh memilih mana-mana aplikasi yang anda paling suka. Tidak seperti Twitter atau Facebook, tiada syarikat pusat yang boleh menapis, mendeplatform, atau mengurangkan jangkauan anda.",
	"nostr/index::nostr_intro_c2":
		"Di bawah ialah versi ringkas mengapa Nostr penting \u2014 kemudian setiap klien Nostr percuma yang anda perlukan untuk bermula hari ini.",
	"nostr/index::nostr_iris_f1":
		"Sangat mudah \u2014 tiada pemasangan diperlukan",
	"nostr/index::nostr_iris_f2":
		"Cara mudah untuk mencuba Nostr dengan akaun percubaan",
	"nostr/index::nostr_iris_f3": "100% percuma",
	"nostr/index::nostr_learn_more_label": "KETAHUI LEBIH MENDALAM",
	"nostr/index::nostr_learn_more_title":
		"Ketahui lebih lanjut tentang Nostr di nostr.how",
	"nostr/index::nostr_primal_f1": "Klien pertama yang disyorkan",
	"nostr/index::nostr_primal_f2": "Dompet zap Bitcoin diintegrasikan",
	"nostr/index::nostr_primal_f3": "100% percuma",
	"nostr/index::nostr_s1": "Protokol, bukan platform",
	"nostr/index::nostr_s1_c1":
		"Nostr ialah protokol baharu yang membolehkan anda berkomunikasi dalam talian tanpa rasa takut akan penapisan, deplatform, atau pengurangan jangkauan.",
	"nostr/index::nostr_s1_c2":
		"Platform seperti Twitter dan Facebook dikawal oleh satu syarikat, tetapi tiada siapa mengawal protokol Nostr.",
	"nostr/index::nostr_s2": "Kebebasan untuk berpindah",
	"nostr/index::nostr_s2_c1":
		"Nostr serupa dengan e-mel. Tiada siapa mengawal protokol e-mel, dan sesiapa sahaja boleh membina klien (seperti Gmail, Hotmail, dll.) di atasnya.",
	"nostr/index::nostr_s2_c2":
		"Tiada siapa mengawal protokol Nostr, dan sesiapa sahaja boleh membina klien (seperti Damus, Amethyst, dll.) di atasnya.",
	"nostr/index::nostr_s2_c3":
		"Jika anda tidak menyukai cara klien tertentu berfungsi, anda boleh memindahkan akaun Nostr anda ke klien lain dengan lancar tanpa kehilangan pengikut atau kandungan anda.",
	"nostr/index::nostr_s3": "Bitcoin diintegrasikan",
	"nostr/index::nostr_s3_c1":
		"Bitcoin diintegrasikan secara semula jadi ke dalam protokol Nostr. Jika anda melihat kandungan yang anda suka, anda boleh dengan mudah menghantar zap Bitcoin kepada seseorang sebagai tanda terima kasih!",
	"nostr/index::nostr_s3_c2":
		"Pada platform berpusat seperti Twitter dan Facebook, syarikat berpusat menjana wang daripada kandungan anda. Tetapi pada protokol terbuka seperti Nostr, anda menjana wang daripada kandungan anda.",
	"nostr/index::sources_damus": "Damus \u2014 Klien Nostr untuk iPhone",
	"nostr/index::sources_iris":
		"Iris \u2014 Klien Nostr berasaskan pelayar",
	"nostr/index::sources_nostr_how": "nostr.how \u2014 Apakah Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol \u2014 Spesifikasi sumber terbuka",
	"nostr/index::sources_primal":
		"Primal \u2014 Klien Nostr dengan dompet zap Bitcoin diintegrasikan",
	"nostr/index::what_is_nostr": "Apakah Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Cetak pelekat Bitcoin anda sendiri dengan fail pelekat Bitcoin ini.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Permintaan diterima 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Pesan secara pukal",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Kongsi di Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Apakah Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Mahu lebih banyak pelekat?",
	"sticker-success::sticker_success_hero_title":
		"Pelekat anda dalam perjalanan 🎉",
	"sticker-success::sticker_success_share_header":
		"Kongsi tempat anda menampal pelekat",
	"sticker-success::sticker_success_tips_header":
		"Tempat pelekat yang baik",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Sambil melakukannya, cetak dan pasang sendiri",
	"stickers::stickers_instructions_1":
		"Masukkan alamat surat anda dan kami akan menghantar Pek Pelekat Bitcoin percuma melalui pos. Pelekat anda akan dihantar dalam sampul putih kosong.",
	"stickers::stickers_btn_choose_pack": "Pilih pek ini",
	"stickers::stickers_bulk_c1":
		"Mahu lebih daripada beberapa pelekat?",
	"stickers::stickers_bulk_c2":
		"Pesan secara pukal daripada pencetak yang sama yang kami gunakan",
	"stickers::stickers_bulk_c3":
		"\u2014 lebih banyak yang anda beli, lebih murah setiap pelekat.",
	"stickers::stickers_bulk_cta": "Beli-belah pelekat secara pukal",
	"stickers::stickers_bulk_header":
		"Pesan pelekat secara pukal",
	"stickers::stickers_hero_subtitle":
		"Pesan pek pelekat Bitcoin percuma dan pasang di tempat awam untuk membantu lebih ramai orang belajar tentang Bitcoin.",
	"stickers::stickers_hero_title": "Pelekat Bitcoin percuma",
	"stickers::stickers_intro_c1":
		"Misi kami adalah untuk membantu anda meng-orange-pill lebih ramai orang dengan meletakkan pelekat Bitcoin di tempat awam. Semua pelekat kami mempunyai kod QR yang memautkan ke halaman pendidikan tentang",
	"stickers::stickers_intro_c3": "inflasi",
	"stickers::stickers_intro_c4":
		"Pilih pek pelekat di bawah dan pilih cara mendapatkannya \u2014 kami akan menghantar pek percuma kepada sesiapa sahaja di AS atau Kanada, atau anda boleh mencetak sendiri di mana sahaja di dunia.",
	"stickers::stickers_mail_header":
		"Kami akan menghantar pelekat percuma anda",
	"stickers::stickers_next_print_flyers": "Teruskan menyebarkan",
	"stickers::stickers_next_print_flyers_desc":
		"Cetak risalah Bitcoin percuma untuk dipasang di tempat awam",
	"stickers::stickers_option_bulk":
		"\ud83d\udce6 Global \u2014 Pesan secara pukal",
	"stickers::stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Kanada \u2014 Percuma melalui pos",
	"stickers::stickers_option_print":
		"\ud83c\udf0d Global \u2014 Cetak sendiri",
	"stickers::stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 AS \u2014 Percuma melalui pos",
	"stickers::stickers_print_c1":
		"Anda boleh menyertai dengan mencetak pelekat anda sendiri, tidak kira di mana anda tinggal. Klik bahasa anda di bawah untuk memuat turun fail pelekat dan arahan pencetakan.",
	"stickers::stickers_print_c2":
		"Tidak setiap pelekat tersedia dalam setiap bahasa.",
	"stickers::stickers_print_header":
		"Cetak fail pelekat anda sendiri",
	"stickers::stickers_request_c1":
		"Isi borang di bawah untuk meminta fail pelekat dalam bahasa tempatan anda. Kami akan memberitahu anda apabila ia siap.",
	"stickers::stickers_request_header": "Tidak nampak bahasa anda?",
	"stickers::stickers_share_c2": "Ikuti kami di Nostr dengan mencari",
	"stickers::stickers_share_c3": "di mana-mana klien Nostr.",
	"stickers::stickers_signs_pack_description":
		"Tanda amaran, bahaya, dan awas dengan mesej Bitcoin \u2014 direka untuk menarik perhatian dan menyebabkan orang berhenti dan membaca.",
	"stickers::stickers_step_1_description":
		"Setiap pek mempunyai koleksi pelekat Bitcoin yang berbeza dengan kod QR yang mengajar orang tentang Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "LANGKAH 1",
	"stickers::stickers_step_1_header": "Pilih pek pelekat anda",
	"stickers::stickers_step_2_description":
		"Kami akan menghantar pek percuma ke alamat di AS dan Kanada. Di mana sahaja di dunia, anda boleh mencetak sendiri atau memesan secara pukal.",
	"stickers::stickers_step_2_eyebrow": "LANGKAH 2",
	"stickers::stickers_step_2_header":
		"Bagaimana anda mahu mendapatkan pelekat anda?",
	"stickers::stickers_text_pack_description":
		"Campuran slogan Bitcoin dan one-liner yang direka untuk menimbulkan rasa ingin tahu di tempat awam.",
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
		"Blockstream Jade \u2014 Dompet perkakasan Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite \u2014 Dompet perkakasan Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite \u2014 Dompet perkakasan Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices \u2014 Dompet perkakasan Passport",
	"wallets::sources_seedsigner":
		"SeedSigner \u2014 Peranti penandatanganan Bitcoin DIY sumber terbuka",
	"wallets::wallets_grid_heading": "Dompet Bitcoin popular",
	"wallets::wallets_header_subtitle":
		"Panduan langkah demi langkah untuk memilih dompet, melindungi kunci anda, dan mengambil kawalan penuh ke atas Bitcoin anda.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

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
		`translate-rest-part2 (ms): filled ${filled}, already-done ${skipped}`,
	);
}

main();
