#!/usr/bin/env node
/**
 * Indonesian (id) manifest refresh — non-inflation namespaces, part 1.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Kembali ke beranda",
	"404::404_message":
		"Bitcoin keren, tetapi halaman yang rusak ini tidak.",
	"404::404_not_found_short": "Tidak ditemukan",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Kami menyediakan sumber daya bisnis gratis yang memudahkan pedagang lokal untuk mulai menerima Bitcoin. Halaman bisnis Bitcoin kami menjelaskan mengapa Bitcoin baik untuk bisnis, cara memilih dompet dan sistem POS, serta menyediakan stiker 'Bitcoin Diterima di Sini' gratis.",
	"about::about_card_business_label": "Sumber daya bisnis",
	"about::about_card_business_source": "Sumber: bitcoin.rocks \u2192",
	"about::about_card_business_title":
		"Semua yang dibutuhkan bisnis untuk mulai menerima pembayaran Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Sumber: GitHub \u2192",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Berkontribusi",
	"about::about_card_contribute_source": "Sumber: GitHub \u2192",
	"about::about_card_contribute_title":
		"Pelajari cara berkontribusi pada bitcoin.rocks",
	"about::about_card_email_label": "Email",
	"about::about_card_email_source": "Sumber: email \u2192",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Selebaran cetak",
	"about::about_card_flyers_source": "Sumber: bitcoin.rocks \u2192",
	"about::about_card_flyers_title":
		"Unduh dan cetak selebaran Bitcoin untuk komunitas Anda",
	"about::about_card_github_label": "Repositori",
	"about::about_card_github_source": "Sumber: GitHub \u2192",
	"about::about_card_github_title": "Lihat bitcoin.rocks di GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Sumber: Nostr \u2192",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Stiker gratis",
	"about::about_card_stickers_source": "Sumber: bitcoin.rocks \u2192",
	"about::about_card_stickers_title":
		"Dapatkan stiker Bitcoin gratis dikirim ke depan pintu Anda",
	"about::about_editorial_2":
		"Kami menautkan ke sumber tepercaya seperti Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, Perserikatan Bangsa-Bangsa, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, dan James Lavish. Kami percaya Bitcoin berbicara sendiri ketika fakta disajikan dengan jelas.",
	"about::about_flyers_blurb":
		"Kami merancang selebaran cetak yang dapat Anda bagikan di pertemuan, ditempel di papan komunitas, atau dimasukkan ke kotak surat \u2014 cara sederhana untuk memicu rasa ingin tahu dan mengarahkan orang ke bitcoin.rocks untuk belajar lebih banyak.",
	"about::about_header": "Tentang bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks didirikan oleh",
	"about::about_mission_1b":
		"pada tahun 2022 dengan misi sederhana: mempercepat adopsi Bitcoin melalui edukasi.",
	"about::about_open_source_2":
		"bitcoin.rocks adalah proyek gratis dan open source dengan lisensi MIT. Siapa saja dapat berkontribusi pada bitcoin.rocks. Kami sangat menyambut penerjemah yang membantu membuat konten kami dapat diakses oleh orang-orang di seluruh dunia.",
	"about::about_page_description":
		"bitcoin.rocks adalah situs edukasi Bitcoin yang gratis dan open source, didirikan pada tahun 2022. Misi kami adalah mempercepat adopsi Bitcoin melalui edukasi.",
	"about::about_stickers_blurb":
		"Kami mengirimkan stiker Bitcoin gratis ke depan pintu Anda agar Anda dapat membantu menyebarkan kesadaran Bitcoin di komunitas Anda. Ratusan orang memindai kode QR pada stiker ini setiap bulan untuk belajar tentang Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin tidak mengalami bank run",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin adalah sistem cadangan penuh. Anda tidak menyetorkan uang Anda di bank. Anda adalah bank Anda sendiri. Tidak ada yang meminjamkan uang Anda tanpa sepengetahuan Anda karena hanya Anda yang dapat mengakses uang Anda.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Selama Anda menyimpan Bitcoin di dompet Anda sendiri \u2014 bukan di bursa atau dibungkus dalam ETF \u2014 bank run tidak mungkin terjadi.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Dengan Bitcoin, Anda benar-benar memegang kendali atas uang Anda.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Sejak 26 Maret 2020, bank-bank di AS diwajibkan menyimpan 0% sebagai cadangan.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Rasio cadangan bank",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Sumber: Federal Reserve \u2192",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistem cadangan penuh \u2014 tidak perlu asuransi simpanan.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Cakupan Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Sumber: Whitepaper Bitcoin \u2192",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Setiap Bitcoin ada di blockchain \u2014 tidak ada yang dipinjamkan.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Rasio cadangan Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Sumber: Whitepaper Bitcoin \u2192",
	"bank-runs::bank_runs_card_fdic_detail":
		"Dana asuransi $153,9 miliar vs $10,82 triliun simpanan yang diasuransikan (Des 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Cakupan FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Sumber: FDIC Statistics at a Glance \u2192",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Studi kasus",
	"bank-runs::bank_runs_card_svb_source":
		"Sumber: University of Washington School of Law \u2192",
	"bank-runs::bank_runs_card_svb_title":
		"Pelajari bagaimana bank run Silicon Valley Bank terjadi",
	"bank-runs::bank_runs_card_wallet_label": "Langkah berikutnya",
	"bank-runs::bank_runs_card_wallet_source": "Mulai di sini \u2192",
	"bank-runs::bank_runs_card_wallet_title":
		"Pelajari cara mendapatkan dompet Bitcoin Anda sendiri",
	"bank-runs::bank_runs_fdic_heading":
		"Asuransi FDIC hanya menutupi sekitar 1% dari simpanan",
	"bank-runs::bank_runs_fdic_p1":
		"Asuransi FDIC melindungi simpanan hingga $250.000 per penyimpan. Tetapi dana asuransi itu sangat kecil dibandingkan dengan total simpanan yang seharusnya dilindungi.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Dalam kegagalan bank skala besar, pemerintah kemungkinan akan mencetak uang untuk menutupi celah \u2014 yang mengakibatkan lebih banyak",
	"bank-runs::bank_runs_fdic_p2_link": "inflasi.",
	"bank-runs::bank_runs_header":
		"Bitcoin tidak mengalami bank run, tetapi bank Anda mungkin saja.",
	"bank-runs::bank_runs_page_description":
		"Bank meminjamkan simpanan Anda di bawah sistem perbankan cadangan fraksional. Jika terlalu banyak orang menarik uang sekaligus, bank dapat gagal. Bitcoin adalah sistem cadangan penuh \u2014 bank run tidak mungkin terjadi.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: contoh nyata",
	"bank-runs::bank_runs_svb_p1_a":
		"Pada Maret 2023, Silicon Valley Bank gagal setelah menginvestasikan simpanan nasabah dalam jangka panjang",
	"bank-runs::bank_runs_svb_p1_b":
		"Ketika obligasi tersebut kehilangan nilai, SVB tidak dapat menutup penarikan. Bank tersebut bangkrut.",
	"bank-runs::bank_runs_svb_p1_link": "obligasi pemerintah.",
	"bank-runs::bank_runs_svb_p2":
		"Ribuan bisnis tidak dapat membayar karyawan mereka. FDIC turun tangan \u2014 tetapi itu memunculkan pertanyaan yang lebih besar: apakah uang Anda benar-benar aman?",
	"bank-runs::bank_runs_what_p1":
		"Bank tidak menyimpan simpanan Anda di brankas. Mereka meminjamkan dan menginvestasikan uang Anda \u2014 itu disebut perbankan cadangan fraksional.",
	"bank-runs::bank_runs_what_p2":
		"Jika terlalu banyak orang mencoba menarik uang pada saat yang sama, bank tidak memiliki cukup uang tunai untuk membayar semua orang. Itulah bank run \u2014 dan dapat menyebabkan bank runtuh sepenuhnya.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Bank</span>',
	"bitcoin-vs-banks::point_1_summary_1":
		"Siapa pun dengan koneksi internet dapat menggunakan Bitcoin \u2014 ia",
	"bitcoin-vs-banks::point_1_summary_2": "tanpa izin.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Bank dapat menolak, membekukan, atau menutup rekening berdasarkan kebijakan atau aturan pemerintah.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Jaringan Bitcoin berjalan 24/7/365 tanpa jendela pemeliharaan atau hari libur. Bank memiliki jam terbatas, tutup pada akhir pekan, dan periode tidak beroperasi.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Setiap transaksi Bitcoin berada di blockchain publik yang dapat diaudit siapa saja. Bank menjalankan buku besar pribadi yang tidak dapat diverifikasi nasabah secara independen.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Dengan Bitcoin, Anda memegang kunci pribadi Anda sendiri \u2014 lihat panduan sederhana kami tentang",
	"bitcoin-vs-banks::point_4_summary_2": "dompet Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Bank menyimpan uang Anda dan dapat membekukan, membatasi, atau menahannya kapan saja.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Biaya Bitcoin transparan dan dapat diprediksi. Bank menumpuk biaya rekening tersembunyi, overdraft, transfer, dan ATM dari waktu ke waktu.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin hanya membiarkan Anda membelanjakan apa yang benar-benar Anda miliki. Bank mengizinkan overdraft, lalu membebankan denda berlapis untuk hak istimewa itu.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Setelah disiarkan, transaksi Bitcoin tidak dapat dihentikan atau dibalik. Bank dapat memblokir, membekukan, atau membatalkan transaksi berdasarkan kebijakan atau perintah pemerintah.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Obligasi</span>',
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligasi hanya 'bebas risiko' secara nominal \u2014 inflasi, pergerakan suku bunga, dan risiko gagal bayar semuanya menggerus pengembalian riil.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin memiliki volatilitas yang transparan tetapi tidak ada risiko pihak lawan yang tersembunyi.",
	"bitcoin-vs-bonds::point_2_summary_1": "Ketika",
	"bitcoin-vs-bonds::point_2_summary_2": "inflasi",
	"bitcoin-vs-bonds::point_2_summary_3":
		"melampaui hasil obligasi, pemegang obligasi kehilangan daya beli riil setiap tahun. Batas 21 juta Bitcoin tidak dapat diinflasi.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Pasar obligasi dapat membeku saat krisis \u2014 Silicon Valley Bank runtuh sebagian karena terjebak dengan obligasi yang kehilangan nilai. Lihat bagaimana",
	"bitcoin-vs-bonds::point_3_summary_2": "bank run",
	"bitcoin-vs-bonds::point_3_summary_3":
		"terjadi dan mengapa Bitcoin menghindarinya. Bitcoin diperdagangkan 24/7 secara global tanpa krisis likuiditas.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Lelang Treasury dapat gagal ketika tidak ada cukup pembeli \u2014 lihat",
	"bitcoin-vs-bonds::point_4_summary_2": "lelang lemah 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Harga Bitcoin ditemukan terus-menerus di pasar terbuka tanpa lelang pusat yang dapat gagal.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Hasil obligasi tetap saat dibeli. Bahkan jika ekonomi melonjak atau mata uang runtuh, pengembalian Anda tetap sama.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin memiliki ruang untuk apresiasi signifikan seiring pertumbuhan adopsi dan permintaan bertemu pasokan tetap.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Sebagian besar obligasi disimpan melalui bank atau broker, menambah risiko pihak lawan. Bitcoin dapat disimpan sendiri dengan",
	"bitcoin-vs-bonds::point_6_summary_2": "dompet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" \u2014 menghilangkan risiko itu sepenuhnya.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligasi sepenuhnya bergantung pada pemerintah membayar kembali. Jika pemerintah gagal bayar atau menginflasi utangnya, pemegang obligasi merugi.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin beroperasi secara independen dari pemerintah atau otoritas politik mana pun.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Uang Tunai</span>',
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin bergerak melalui internet ke mana saja dalam hitungan menit. Uang tunai membutuhkan kehadiran fisik atau kurir tepercaya \u2014 Anda tidak dapat mengirim uang tunai $20 melalui email.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin bekerja dengan cara yang sama di mana saja. Uang tunai dibatasi oleh geografi, nilai tukar, dan penerimaan lokal.",
	"bitcoin-vs-cash::point_3_summary_1":
		'Pemerintah dapat membatalkan uang tunai dalam semalam \u2014 <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">India</a> melakukannya pada tahun 2016. Bahkan tanpa demonetisasi, uang tunai kehilangan nilainya karena',
	"bitcoin-vs-cash::point_3_summary_2": "inflasi.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin tidak dapat dibatalkan oleh pemerintah atau otoritas mana pun.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Uang tunai dapat dipalsukan, terkadang sangat meyakinkan. Bitcoin menggunakan kriptografi yang membuat pemalsuan secara matematis tidak mungkin.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin tidak memiliki otoritas pusat. Uang tunai diterbitkan oleh pemerintah yang dapat mencetak lebih banyak, mengubah desain, atau membatalkan uang kertas sesuka hati.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Uang tunai rentan terhadap pencurian, kebakaran, kehilangan, dan penyitaan. Bitcoin dapat dengan aman",
	"bitcoin-vs-cash::point_6_summary_2": "disimpan sendiri",
	"bitcoin-vs-cash::point_6_summary_3":
		"di ponsel atau perangkat keras.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin dibagi menjadi 100 juta satoshi, memungkinkan pembayaran mikro dalam ukuran berapa pun. Uang tunai memiliki denominasi minimum \u2014 Anda tidak dapat membagi sen.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">CBDC</span>',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin adalah jaringan komputasi paling aman yang pernah dibangun dan belum pernah diretas. CBDC mengandalkan bank dan pemerintah yang telah diretas berkali-kali.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Tidak ada yang dapat menghentikan Anda bertransaksi dengan Bitcoin. CBDC dirancang agar pemerintah dan bank sentral dapat mengontrol setiap pembayaran, membatasi privasi dan kebebasan Anda.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin tidak pernah kedaluwarsa dan tidak memiliki biaya bulanan. CBDC dapat diprogram untuk kedaluwarsa, mencegah Anda menabung untuk masa depan.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin memiliki batas keras 21 juta BTC. CBDC tidak memiliki batas pasokan, memungkinkan pemerintah memperluas uang sesuka hati \u2014 yang menyebabkan",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflasi.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Alamat Bitcoin tidak terkait dengan identitas asli Anda. CBDC terhubung langsung ke ID pemerintah, memungkinkan pengawasan keuangan massal dan sensor.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Aturan Bitcoin divalidasi oleh puluhan ribu node independen. CBDC terpusat di tangan pemerintah dan bank sentral, yang memegang kontrol penuh atas jaringan.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Siapa pun dapat menjalankan node Bitcoin untuk memverifikasi aturan jaringan. CBDC tidak memungkinkan pengguna menjalankan node \u2014 Anda harus mempercayai otoritas pusat.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin yang disimpan sendiri tidak dapat dibekukan oleh siapa pun. CBDC dirancang agar pemerintah dan bank sentral dapat membekukan rekening secara instan.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin memberi Anda kendali penuh atas uang Anda saat Anda menyimpannya sendiri dengan",
	"bitcoin-vs-cbdc::point_8_summary_2": "dompet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC mengharuskan Anda mempercayakan kustodian seperti bank atau pemerintah untuk menyimpan uang Anda.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Kebijakan moneter Bitcoin tetap dalam kode dan tidak dapat diubah. CBDC dapat diprogram ulang sesuka hati oleh politisi, menyebabkan",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflasi",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" ketika terlalu banyak uang dicetak.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragil",
	"bitcoin-vs-crypto::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Kripto</span>',
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protokol Bitcoin pada dasarnya tetap sama sejak 2009, memberikan aturan yang dapat diprediksi. Sebagian besar proyek kripto terus mengubah protokol, tokenomik, atau bercabang menjadi versi baru.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin berjalan di puluhan ribu node independen di seluruh dunia. Sebagian besar proyek kripto dikontrol oleh yayasan, perusahaan, atau tim dev kecil yang dapat membuat perubahan sepihak.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin memiliki batas keras 21 juta koin \u2014 aset digital paling langka. Sebagian besar proyek kripto memiliki pasokan tidak terbatas atau mekanisme untuk mencetak token baru sesuka hati, mengencerkan pemegang.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin memiliki satu tujuan: uang digital peer-to-peer. Siapa pun dapat memahaminya dan menggunakannya. Sebagian besar kripto melibatkan kontrak pintar atau DeFi yang kompleks yang memerlukan keahlian teknis untuk digunakan dengan aman.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoin telah berjalan tanpa serangan yang berhasil di jaringan utama selama lebih dari 15 tahun. Sebagian besar proyek kripto menggunakan konsensus eksperimental yang belum teruji di lapangan.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin adalah uang digital \u2014 penyimpan nilai dan alat tukar. Sebagian besar token kripto adalah token utilitas atau tata kelola spekulatif dengan nilai dunia nyata yang tidak jelas.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin tumbuh lebih kuat di bawah serangan dan telah bertahan dari setiap krisis, larangan, dan kritik. Sebagian besar proyek kripto runtuh karena tekanan regulasi, teknis, atau pasar.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin tidak memiliki CEO, tidak ada perusahaan, tidak ada satu titik kegagalan. Sebagian besar proyek kripto bergantung pada VC, kepemimpinan tertentu, atau kelangsungan satu perusahaan.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Seni Rupa</span>',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Setiap Bitcoin identik dan dapat ditukar. Setiap karya seni unik \u2014 penciptaan, sejarah, kondisi, dan asal-usul yang berbeda membuat perbandingan langsung sangat sulit.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin diperdagangkan 24/7 di pasar global yang dapat diakses siapa saja. Seni rupa memerlukan rumah lelang khusus, dealer pribadi, atau galeri dan dapat memakan waktu berbulan-bulan untuk dijual.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Membeli atau menjual Bitcoin memakan biaya kurang dari 1%, sering kali jauh lebih sedikit. Penjualan seni menumpuk biaya 30\u201340% dalam premi pembeli, komisi, asuransi, transportasi, dan biaya autentikasi.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin dibagi menjadi 100 juta satoshi, sempurna untuk transaksi ukuran apa pun. Anda tidak dapat memiliki sebagian lukisan atau sudut patung tanpa risiko pihak lawan.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Kepemilikan dan keaslian Bitcoin dapat diverifikasi secara kriptografis oleh siapa saja di blockchain. Autentikasi seni mahal, lambat, dan masih rutin dikecoh pemalsu \u2014 menghancurkan nilai karya seni dalam semalam.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin yang dicadangkan dengan benar bertahan dari banjir, kebakaran, gempa bumi, dan pencurian. Seni rupa rentan terhadap setiap bentuk kerusakan fisik, dan asuransi jarang menutupi semuanya.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Siapa pun dengan koneksi internet dan sedikit uang dapat membeli Bitcoin. Investasi seni rupa secara efektif terbatas pada kolektor kaya dengan akses lelang dan pengetahuan khusus.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Emas</span>',
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin dapat dikirim secara instan melalui internet dengan biaya rendah. Emas harus dikirim secara fisik untuk mentransfer kepemilikan.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin adalah aset asli digital yang dapat Anda transfer melalui internet. Emas online adalah IOU Digital \u2014 Anda hanya memiliki janji dari kustodian, bukan logamnya sendiri.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Bitcoin memiliki batas keras 21 juta BTC. Pasokan emas tumbuh sekitar <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1,6% per tahun</a>, menyusutkan bagian Anda \u2014 lebih rendah daripada',
	"bitcoin-vs-gold::point_3_summary_2": "inflasi",
	"bitcoin-vs-gold::point_3_summary_3":
		"fiat \u2014 tetapi tetap inflasi.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Ketika harga emas naik, lebih banyak emas ditambang, mendorong harga turun kembali. Pasokan Bitcoin tidak elastis \u2014 tidak peduli seberapa tinggi harganya, hanya akan ada 21 juta.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Puluhan ribu node independen memvalidasi jaringan Bitcoin. Sebagian besar emas fisik berada di segelintir brankas kustodian besar.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Siapa pun dapat memverifikasi Bitcoin asli dengan menjalankan full node \u2014 hanya sebuah aplikasi. Memverifikasi emas fisik mengharuskan meleburnya; bagian dalamnya bisa saja tungsten.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin dibagi menjadi 100 juta satoshi, sempurna untuk pembelian ukuran apa pun. Emas tidak dapat dengan mudah dibagi untuk transaksi kecil.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Real Estat</span>',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin bergerak ke mana saja di dunia secara instan. Real estat terikat di satu lokasi dan terpapar pada risiko ekonomi, politik, dan alam lokal.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin dibagi menjadi 100 juta satoshi. Real estat tidak dapat dijual sebagian \u2014 Anda tidak dapat melepas hanya dapur atau membeli setengah kamar tidur.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin beroperasi di jaringan terdesentralisasi yang tidak dapat dikontrol oleh pemerintah mana pun. Real estat sangat diatur \u2014 zonasi, kontrol sewa, eminent domain, dan penyitaan semuanya berlaku.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin tidak memerlukan pemeliharaan. Real estat menuntut perbaikan, renovasi, asuransi, manajemen properti, dan masalah penyewa.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin tidak memiliki pajak berkelanjutan \u2014 Anda hanya membayar capital gain saat menjual. Real estat berutang pajak properti tahunan terlepas dari pendapatan.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin yang dicadangkan dengan benar bertahan dari kebakaran, banjir, dan gempa bumi. Real estat rentan terhadap setiap bencana, dan asuransi jarang menutupi semuanya.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Setiap Bitcoin identik dan dapat ditukar. Setiap properti unik, membuat penetapan harga dan perbandingan menjadi sulit.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin diperdagangkan secara global 24/7 oleh siapa pun yang memiliki akses internet. Penjualan real estat terbatas pada pembeli lokal dan dapat memakan waktu berbulan-bulan dengan dokumen.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin memungkinkan kepemilikan individu langsung untuk siapa saja. Membeli real estat sebagai investasi di luar tempat tinggal utama Anda mendorong harga rumah naik, mengurangi keterjangkauan dan memicu krisis perumahan.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Saham</span>',
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin adalah aset langsung yang Anda miliki sepenuhnya. Saham adalah bagian dari perusahaan \u2014 nilainya bergantung pada manajemen, kinerja, dan keputusan yang tidak dapat Anda kontrol.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin memiliki batas keras 21 juta BTC. Perusahaan dapat menerbitkan saham baru kapan saja, mengencerkan pemegang saham yang ada \u2014 mirip dengan bagaimana fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "inflasi",
	"bitcoin-vs-stocks::point_2_summary_3":
		" mengencerkan uang tunai. Dengan Bitcoin, bagian Anda tidak pernah menyusut.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin tidak memiliki CEO dan tidak ada satu titik kegagalan. Saham sangat bergantung pada kepemimpinan \u2014 satu keputusan buruk atau kepergian dapat menjatuhkan harga.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Harga Bitcoin berasal dari pasar global terbuka. Penilaian saham bergantung pada metrik seperti rasio P/E yang dapat menyembunyikan saham yang dihargai berlebihan.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin diperdagangkan 24/7 di seluruh dunia. Pasar saham hanya buka selama jam kerja pada hari kerja.",
	"bitcoin-vs-stocks::point_6_summary_1": "Anda dapat melakukan",
	"bitcoin-vs-stocks::point_6_summary_2": "self-custody",
	"bitcoin-vs-stocks::point_6_summary_3":
		"Bitcoin dengan aplikasi sederhana \u2014 tidak perlu pialang. Saham berada di pialang, mengekspos Anda pada risiko pihak lawan jika mereka gagal.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Pasokan Bitcoin yang tetap menjadikannya lindung nilai inflasi yang andal. Beberapa saham mengalahkan inflasi, yang lain tidak \u2014 tidak ada jaminan.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'Perbedaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Visa</span>',
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin adalah jaringan terbuka yang dapat diikuti dan digunakan siapa saja tanpa izin. Visa adalah sistem tertutup yang dikontrol oleh institusi keuangan yang dapat menolak akses \u2014 terutama bagi mereka yang tidak memiliki rekening atau kurang terlayani bank.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Transaksi Bitcoin tidak memiliki biaya pedagang. Visa biasanya membebankan biaya sekitar 3% per transaksi kepada pedagang \u2014 bisnis Anda dapat menghemat uang dengan menerima",
	"bitcoin-vs-visa::point_2_summary_2": "pembayaran Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " sebagai gantinya.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Setiap transaksi Bitcoin berada di blockchain publik yang dapat diaudit. Visa menjalankan sistem tertutup dan proprietary di mana pelanggan tidak dapat memverifikasi apa pun secara independen.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin tidak dapat dibekukan oleh otoritas pusat mana pun. Visa dapat membekukan rekening, memblokir transaksi, atau menolak layanan kapan saja.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin adalah penyelesaian akhir \u2014 Anda hanya dapat membelanjakan apa yang Anda miliki. Kartu kredit menciptakan utang dengan suku bunga yang sering kali lebih dari 25% per tahun.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin memungkinkan Anda mengambil",
	"bitcoin-vs-visa::point_6_summary_2": "self-custody",
	"bitcoin-vs-visa::point_6_summary_3":
		"tanpa perlu bank atau pemroses pembayaran. Kartu kredit selalu memerlukan perantara.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin bekerja 24/7 secara global tanpa jam kerja. Visa memiliki jam operasional, jendela pemeliharaan, dan pembatasan geografis yang dapat memblokir transaksi.",
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
		`translate-rest-part1 (id): filled ${filled}, already-done ${skipped}`,
	);
}

main();
