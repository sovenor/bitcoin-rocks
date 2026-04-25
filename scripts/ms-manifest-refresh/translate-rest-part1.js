#!/usr/bin/env node
/**
 * Malay (ms) manifest refresh — non-inflation namespaces, part 1.
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
	"ms.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Kembali ke laman utama",
	"404::404_message":
		"Bitcoin hebat, tetapi halaman yang rosak ini tidak.",
	"404::404_not_found_short": "Tidak dijumpai",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Kami menyediakan sumber perniagaan percuma yang memudahkan peniaga tempatan untuk mula menerima Bitcoin. Halaman perniagaan Bitcoin kami menjelaskan mengapa Bitcoin baik untuk perniagaan, cara memilih dompet dan sistem POS, serta menyediakan pelekat 'Bitcoin Diterima Di Sini' percuma.",
	"about::about_card_business_label": "Sumber perniagaan",
	"about::about_card_business_source": "Sumber: bitcoin.rocks \u2192",
	"about::about_card_business_title":
		"Semua yang diperlukan perniagaan untuk mula menerima pembayaran Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Sumber: GitHub \u2192",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Sumbang",
	"about::about_card_contribute_source": "Sumber: GitHub \u2192",
	"about::about_card_contribute_title":
		"Ketahui cara untuk menyumbang kepada bitcoin.rocks",
	"about::about_card_email_label": "E-mel",
	"about::about_card_email_source": "Sumber: e-mel \u2192",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Risalah cetakan",
	"about::about_card_flyers_source": "Sumber: bitcoin.rocks \u2192",
	"about::about_card_flyers_title":
		"Muat turun dan cetak risalah Bitcoin untuk komuniti anda",
	"about::about_card_github_label": "Repositori",
	"about::about_card_github_source": "Sumber: GitHub \u2192",
	"about::about_card_github_title": "Lihat bitcoin.rocks di GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Sumber: Nostr \u2192",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Pelekat percuma",
	"about::about_card_stickers_source": "Sumber: bitcoin.rocks \u2192",
	"about::about_card_stickers_title":
		"Dapatkan pelekat Bitcoin percuma dihantar ke pintu rumah anda",
	"about::about_editorial_2":
		"Kami memautkan kepada sumber yang dipercayai seperti Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, Pertubuhan Bangsa-Bangsa Bersatu, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, dan James Lavish. Kami percaya Bitcoin bercakap untuk dirinya sendiri apabila fakta dipersembahkan dengan jelas.",
	"about::about_flyers_blurb":
		"Kami mereka bentuk risalah cetakan yang anda boleh edarkan di perjumpaan, tampal di papan komuniti, atau masukkan ke peti surat \u2014 cara mudah untuk menimbulkan rasa ingin tahu dan mengarahkan orang ke bitcoin.rocks untuk belajar lebih banyak.",
	"about::about_header": "Tentang bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks ditubuhkan oleh",
	"about::about_mission_1b":
		"pada tahun 2022 dengan misi mudah: mempercepatkan adopsi Bitcoin melalui pendidikan.",
	"about::about_open_source_2":
		"bitcoin.rocks adalah projek percuma dan sumber terbuka di bawah lesen MIT. Sesiapa sahaja boleh menyumbang kepada bitcoin.rocks. Kami amat mengalu-alukan penterjemah yang membantu menjadikan kandungan kami boleh diakses oleh orang ramai di seluruh dunia.",
	"about::about_page_description":
		"bitcoin.rocks adalah laman pendidikan Bitcoin yang percuma dan sumber terbuka, ditubuhkan pada tahun 2022. Misi kami adalah untuk mempercepatkan adopsi Bitcoin melalui pendidikan.",
	"about::about_stickers_blurb":
		"Kami menghantar pelekat Bitcoin percuma ke pintu rumah anda supaya anda boleh membantu menyebarkan kesedaran Bitcoin di komuniti anda. Beratus-ratus orang mengimbas kod QR pada pelekat ini setiap bulan untuk belajar tentang Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin tidak mengalami bank run",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin adalah sistem rizab penuh. Anda tidak mendepositkan wang anda di bank. Anda adalah bank anda sendiri. Tiada siapa meminjamkan wang anda tanpa pengetahuan anda kerana hanya anda yang boleh mengakses wang anda.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Selagi anda menyimpan Bitcoin di dompet anda sendiri \u2014 bukan di bursa atau dibungkus dalam ETF \u2014 bank run tidak mungkin berlaku.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Dengan Bitcoin, anda benar-benar memegang kawalan ke atas wang anda.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Sejak 26 Mac 2020, bank-bank di AS dikehendaki menyimpan 0% sebagai rizab.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Nisbah rizab bank",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Sumber: Federal Reserve \u2192",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistem rizab penuh \u2014 tiada keperluan untuk insurans deposit.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Liputan Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Sumber: Kertas Putih Bitcoin \u2192",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Setiap Bitcoin wujud di blockchain \u2014 tiada apa-apa yang dipinjamkan.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Nisbah rizab Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Sumber: Kertas Putih Bitcoin \u2192",
	"bank-runs::bank_runs_card_fdic_detail":
		"Dana insurans $153.9 bilion vs $10.82 trilion deposit yang diinsuranskan (Dis 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Liputan FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Sumber: FDIC Statistics at a Glance \u2192",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Kajian kes",
	"bank-runs::bank_runs_card_svb_source":
		"Sumber: University of Washington School of Law \u2192",
	"bank-runs::bank_runs_card_svb_title":
		"Ketahui bagaimana bank run Silicon Valley Bank berlaku",
	"bank-runs::bank_runs_card_wallet_label": "Langkah seterusnya",
	"bank-runs::bank_runs_card_wallet_source": "Mula di sini \u2192",
	"bank-runs::bank_runs_card_wallet_title":
		"Ketahui cara mendapatkan dompet Bitcoin anda sendiri",
	"bank-runs::bank_runs_fdic_heading":
		"Insurans FDIC hanya melindungi sekitar 1% daripada deposit",
	"bank-runs::bank_runs_fdic_p1":
		"Insurans FDIC melindungi deposit sehingga $250,000 setiap pendeposit. Tetapi dana insurans itu sangat kecil berbanding dengan jumlah deposit yang sepatutnya dilindungi.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Dalam kegagalan bank berskala besar, kerajaan kemungkinan akan mencetak wang untuk menutup jurang \u2014 yang menyebabkan lebih banyak",
	"bank-runs::bank_runs_fdic_p2_link": "inflasi.",
	"bank-runs::bank_runs_header":
		"Bitcoin tidak mengalami bank run, tetapi bank anda mungkin mengalaminya.",
	"bank-runs::bank_runs_page_description":
		"Bank meminjamkan deposit anda di bawah sistem perbankan rizab pecahan. Jika terlalu ramai orang mengeluarkan wang sekaligus, bank boleh gagal. Bitcoin adalah sistem rizab penuh \u2014 bank run tidak mungkin berlaku.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: contoh sebenar",
	"bank-runs::bank_runs_svb_p1_a":
		"Pada Mac 2023, Silicon Valley Bank gagal selepas melaburkan deposit pelanggan dalam jangka panjang",
	"bank-runs::bank_runs_svb_p1_b":
		"Apabila bon tersebut kehilangan nilainya, SVB tidak dapat menampung pengeluaran. Bank itu muflis.",
	"bank-runs::bank_runs_svb_p1_link": "bon kerajaan.",
	"bank-runs::bank_runs_svb_p2":
		"Beribu-ribu perniagaan tidak dapat membayar pekerja mereka. FDIC turun tangan \u2014 tetapi ia menimbulkan persoalan yang lebih besar: adakah wang anda benar-benar selamat?",
	"bank-runs::bank_runs_what_p1":
		"Bank tidak menyimpan deposit anda di peti besi. Mereka meminjamkan dan melaburkan wang anda \u2014 itu dipanggil perbankan rizab pecahan.",
	"bank-runs::bank_runs_what_p2":
		"Jika terlalu ramai orang cuba mengeluarkan wang pada masa yang sama, bank tidak mempunyai cukup tunai untuk membayar semua orang. Itulah bank run \u2014 dan ia boleh menyebabkan bank runtuh sepenuhnya.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Bank</span>',
	"bitcoin-vs-banks::point_1_summary_1":
		"Sesiapa sahaja yang mempunyai sambungan internet boleh menggunakan Bitcoin \u2014 ia",
	"bitcoin-vs-banks::point_1_summary_2": "tanpa kebenaran.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Bank boleh menolak, membekukan, atau menutup akaun berdasarkan polisi atau peraturan kerajaan.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Rangkaian Bitcoin beroperasi 24/7/365 tanpa tetingkap penyelenggaraan atau cuti. Bank mempunyai waktu terhad, tutup pada hujung minggu, dan tempoh tidak beroperasi.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Setiap transaksi Bitcoin berada di blockchain awam yang boleh diaudit oleh sesiapa sahaja. Bank menjalankan lejar peribadi yang tidak boleh disahkan oleh pelanggan secara bebas.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Dengan Bitcoin, anda memegang kunci peribadi anda sendiri \u2014 lihat panduan ringkas kami tentang",
	"bitcoin-vs-banks::point_4_summary_2": "dompet Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Bank menyimpan wang anda dan boleh membekukan, menyekat, atau menahannya pada bila-bila masa.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Yuran Bitcoin telus dan boleh diramal. Bank menambah yuran akaun tersembunyi, overdraf, pemindahan, dan ATM dari semasa ke semasa.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin hanya membenarkan anda berbelanja apa yang sebenarnya anda miliki. Bank membenarkan overdraf, kemudian mengenakan denda berlapis untuk hak istimewa itu.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Setelah disiarkan, transaksi Bitcoin tidak boleh dihentikan atau diterbalikkan. Bank boleh menyekat, membekukan, atau membatalkan transaksi berdasarkan polisi atau perintah kerajaan.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Bon</span>',
	"bitcoin-vs-bonds::point_1_summary_1":
		"Bon hanya 'bebas risiko' secara nominal \u2014 inflasi, pergerakan kadar faedah, dan risiko mungkir semuanya menghakis pulangan sebenar.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin mempunyai turun naik yang telus tetapi tiada risiko pihak lawan yang tersembunyi.",
	"bitcoin-vs-bonds::point_2_summary_1": "Apabila",
	"bitcoin-vs-bonds::point_2_summary_2": "inflasi",
	"bitcoin-vs-bonds::point_2_summary_3":
		"melebihi hasil bon, pemegang bon kehilangan kuasa beli sebenar setiap tahun. Had 21 juta Bitcoin tidak boleh diinflasi.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Pasaran bon boleh membeku semasa krisis \u2014 Silicon Valley Bank runtuh sebahagiannya kerana terperangkap dengan bon yang kehilangan nilai. Lihat bagaimana",
	"bitcoin-vs-bonds::point_3_summary_2": "bank run",
	"bitcoin-vs-bonds::point_3_summary_3":
		"berlaku dan mengapa Bitcoin mengelaknya. Bitcoin didagangkan 24/7 secara global tanpa krisis kecairan.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Lelongan Treasury boleh gagal apabila tiada pembeli yang mencukupi \u2014 lihat",
	"bitcoin-vs-bonds::point_4_summary_2": "lelongan lemah 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Harga Bitcoin ditemui secara berterusan di pasaran terbuka tanpa lelongan pusat yang boleh gagal.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Hasil bon ditetapkan apabila dibeli. Walaupun ekonomi melonjak atau mata wang runtuh, pulangan anda kekal sama.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin mempunyai ruang untuk apresiasi yang ketara apabila adopsi berkembang dan permintaan bertemu dengan bekalan tetap.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Sebahagian besar bon disimpan melalui bank atau broker, menambah risiko pihak lawan. Bitcoin boleh disimpan sendiri dengan",
	"bitcoin-vs-bonds::point_6_summary_2": "dompet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" \u2014 menghapuskan risiko itu sepenuhnya.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Bon bergantung sepenuhnya kepada kerajaan membayar balik. Jika kerajaan mungkir atau menginflasi hutangnya, pemegang bon rugi.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin beroperasi secara bebas daripada mana-mana kerajaan atau pihak berkuasa politik.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Wang Tunai</span>',
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin bergerak melalui internet ke mana-mana sahaja dalam beberapa minit. Wang tunai memerlukan kehadiran fizikal atau kurier yang dipercayai \u2014 anda tidak boleh menghantar wang tunai $20 melalui e-mel.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin berfungsi dengan cara yang sama di mana-mana. Wang tunai dihadkan oleh geografi, kadar pertukaran, dan penerimaan tempatan.",
	"bitcoin-vs-cash::point_3_summary_1":
		'Kerajaan boleh membatalkan wang tunai dalam sekelip mata \u2014 <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">India</a> melakukannya pada tahun 2016. Walaupun tanpa demonetisasi, wang tunai kehilangan nilainya kerana',
	"bitcoin-vs-cash::point_3_summary_2": "inflasi.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin tidak boleh dibatalkan oleh mana-mana kerajaan atau pihak berkuasa.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Wang tunai boleh dipalsukan, kadangkala dengan sangat meyakinkan. Bitcoin menggunakan kriptografi yang menjadikan pemalsuan secara matematiknya mustahil.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin tiada pihak berkuasa pusat. Wang tunai dikeluarkan oleh kerajaan yang boleh mencetak lebih banyak, mengubah reka bentuk, atau membatalkan wang kertas mengikut kehendak.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Wang tunai terdedah kepada kecurian, kebakaran, kehilangan, dan rampasan. Bitcoin boleh disimpan dengan selamat",
	"bitcoin-vs-cash::point_6_summary_2": "secara sendiri",
	"bitcoin-vs-cash::point_6_summary_3":
		"di telefon atau peranti perkakasan.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin dibahagikan kepada 100 juta satoshi, membenarkan pembayaran mikro dalam apa-apa saiz. Wang tunai mempunyai denominasi minimum \u2014 anda tidak boleh membahagikan satu sen.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">CBDC</span>',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin adalah rangkaian pengkomputeran paling selamat yang pernah dibina dan tidak pernah digodam. CBDC bergantung kepada bank dan kerajaan yang telah digodam berkali-kali.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Tiada siapa yang boleh menghalang anda daripada bertransaksi dengan Bitcoin. CBDC direka supaya kerajaan dan bank pusat boleh mengawal setiap pembayaran, mengehadkan privasi dan kebebasan anda.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin tidak pernah luput dan tiada yuran bulanan. CBDC boleh diprogramkan untuk luput, menghalang anda daripada menyimpan untuk masa hadapan.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin mempunyai had keras 21 juta BTC. CBDC tiada had bekalan, membolehkan kerajaan mengembangkan wang mengikut kehendak \u2014 yang menyebabkan",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflasi.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Alamat Bitcoin tidak terikat dengan identiti sebenar anda. CBDC dikaitkan terus dengan ID kerajaan, membolehkan pengawasan kewangan secara besar-besaran dan penapisan.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Peraturan Bitcoin disahkan oleh berpuluh-puluh ribu nod bebas. CBDC dipusatkan di tangan kerajaan dan bank pusat, yang memegang kawalan penuh ke atas rangkaian.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Sesiapa sahaja boleh menjalankan nod Bitcoin untuk mengesahkan peraturan rangkaian. CBDC tidak membenarkan pengguna menjalankan nod \u2014 anda mesti mempercayai pihak berkuasa pusat.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin yang disimpan sendiri tidak boleh dibekukan oleh sesiapa pun. CBDC direka supaya kerajaan dan bank pusat boleh membekukan akaun serta-merta.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin memberi anda kawalan penuh ke atas wang anda apabila anda menyimpannya sendiri dengan",
	"bitcoin-vs-cbdc::point_8_summary_2": "dompet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC memerlukan anda mempercayakan kustodian seperti bank atau kerajaan untuk menyimpan wang anda.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Polisi monetari Bitcoin tetap dalam kod dan tidak boleh diubah. CBDC boleh diprogramkan semula mengikut kehendak ahli politik, menyebabkan",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflasi",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" apabila terlalu banyak wang dicetak.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragil",
	"bitcoin-vs-crypto::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Kripto</span>',
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protokol Bitcoin pada asasnya kekal sama sejak 2009, memberikan peraturan yang boleh diramal. Kebanyakan projek kripto sentiasa mengubah protokol, tokenomik, atau bercabang menjadi versi baharu.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin beroperasi pada berpuluh-puluh ribu nod bebas di seluruh dunia. Kebanyakan projek kripto dikawal oleh yayasan, syarikat, atau pasukan dev kecil yang boleh membuat perubahan secara unilateral.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin mempunyai had keras 21 juta syiling \u2014 aset digital paling langka. Kebanyakan projek kripto mempunyai bekalan tanpa had atau mekanisme untuk mencetak token baharu mengikut kehendak, mencairkan pemegang.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin mempunyai satu tujuan: wang digital peer-to-peer. Sesiapa sahaja boleh memahaminya dan menggunakannya. Kebanyakan kripto melibatkan kontrak pintar atau DeFi yang kompleks yang memerlukan kepakaran teknikal untuk digunakan dengan selamat.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoin telah beroperasi tanpa serangan yang berjaya pada rangkaian utama selama lebih daripada 15 tahun. Kebanyakan projek kripto menggunakan konsensus eksperimen yang belum diuji di lapangan.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin adalah wang digital \u2014 simpanan nilai dan medium pertukaran. Kebanyakan token kripto adalah token utiliti atau tadbir urus spekulatif dengan nilai dunia sebenar yang tidak jelas.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin tumbuh lebih kuat di bawah serangan dan telah bertahan daripada setiap krisis, larangan, dan kritikan. Kebanyakan projek kripto runtuh akibat tekanan kawal selia, teknikal, atau pasaran.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin tiada CEO, tiada syarikat, tiada satu titik kegagalan. Kebanyakan projek kripto bergantung kepada VC, kepimpinan tertentu, atau kelangsungan satu syarikat.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Seni Halus</span>',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Setiap Bitcoin adalah sama dan boleh ditukar. Setiap karya seni adalah unik \u2014 penciptaan, sejarah, keadaan, dan asal usul yang berbeza menjadikan perbandingan langsung sangat sukar.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin didagangkan 24/7 di pasaran global yang boleh diakses oleh sesiapa sahaja. Seni halus memerlukan rumah lelong khusus, peniaga peribadi, atau galeri dan boleh mengambil masa berbulan-bulan untuk dijual.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Membeli atau menjual Bitcoin memerlukan kos kurang daripada 1%, selalunya jauh lebih sedikit. Penjualan seni menambah yuran 30\u201340% dalam premium pembeli, komisen, insurans, pengangkutan, dan yuran pengesahan.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin dibahagikan kepada 100 juta satoshi, sempurna untuk transaksi sebarang saiz. Anda tidak boleh memiliki sebahagian daripada lukisan atau sudut arca tanpa risiko pihak lawan.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Pemilikan dan keaslian Bitcoin boleh disahkan secara kriptografi oleh sesiapa sahaja di blockchain. Pengesahan seni adalah mahal, lambat, dan masih kerap diperdaya oleh pemalsu \u2014 memusnahkan nilai karya seni dalam sekelip mata.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin yang disandarkan dengan betul boleh bertahan daripada banjir, kebakaran, gempa bumi, dan kecurian. Seni halus terdedah kepada setiap bentuk kerosakan fizikal, dan insurans jarang merangkumi semua.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Sesiapa sahaja yang mempunyai sambungan internet dan sedikit wang boleh membeli Bitcoin. Pelaburan seni halus secara berkesan terhad kepada pengumpul kaya dengan akses lelong dan pengetahuan khusus.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Emas</span>',
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin boleh dihantar serta-merta melalui internet dengan kos rendah. Emas mesti dihantar secara fizikal untuk memindahkan pemilikan.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin adalah aset asli digital yang boleh anda pindahkan melalui internet. Emas dalam talian adalah IOU Digital \u2014 anda hanya memiliki janji daripada kustodian, bukan logam itu sendiri.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Bitcoin mempunyai had keras 21 juta BTC. Bekalan emas berkembang sekitar <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1.6% setahun</a>, mengecilkan bahagian anda \u2014 kurang daripada',
	"bitcoin-vs-gold::point_3_summary_2": "inflasi",
	"bitcoin-vs-gold::point_3_summary_3":
		"fiat \u2014 tetapi tetap inflasi.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Apabila harga emas meningkat, lebih banyak emas dilombong, mendorong harga turun semula. Bekalan Bitcoin tidak elastik \u2014 tidak kira betapa tingginya harga, hanya akan ada 21 juta.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Berpuluh-puluh ribu nod bebas mengesahkan rangkaian Bitcoin. Kebanyakan emas fizikal berada di segelintir peti besi kustodian besar.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Sesiapa sahaja boleh mengesahkan Bitcoin tulen dengan menjalankan full node \u2014 hanyalah satu aplikasi. Mengesahkan emas fizikal memerlukan ia dileburkan; bahagian dalamnya boleh menjadi tungsten.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin dibahagikan kepada 100 juta satoshi, sempurna untuk pembelian sebarang saiz. Emas tidak boleh dengan mudah dibahagikan untuk transaksi kecil.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Hartanah</span>',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin bergerak ke mana-mana sahaja di dunia serta-merta. Hartanah terikat kepada satu lokasi dan terdedah kepada risiko ekonomi, politik, dan alam tempatan.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin dibahagikan kepada 100 juta satoshi. Hartanah tidak boleh dijual sebahagian \u2014 anda tidak boleh menjual hanya dapur atau membeli separuh bilik tidur.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin beroperasi pada rangkaian tidak berpusat yang tidak boleh dikawal oleh mana-mana kerajaan. Hartanah dikawal selia dengan ketat \u2014 zon, kawalan sewa, eminent domain, dan rampasan semuanya terpakai.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin tidak memerlukan penyelenggaraan. Hartanah memerlukan pembaikan, pengubahsuaian, insurans, pengurusan hartanah, dan masalah penyewa.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin tiada cukai berterusan \u2014 anda hanya membayar capital gain apabila menjual. Hartanah dikenakan cukai harta tahunan tanpa mengira pendapatan.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin yang disandarkan dengan betul bertahan daripada kebakaran, banjir, dan gempa bumi. Hartanah terdedah kepada setiap bencana, dan insurans jarang merangkumi semua.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Setiap Bitcoin adalah sama dan boleh ditukar. Setiap hartanah adalah unik, menjadikan penetapan harga dan perbandingan sukar.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin didagangkan secara global 24/7 oleh sesiapa sahaja yang mempunyai akses internet. Penjualan hartanah terhad kepada pembeli tempatan dan boleh mengambil masa berbulan-bulan dengan dokumen.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin membolehkan pemilikan individu langsung untuk sesiapa sahaja. Membeli hartanah sebagai pelaburan di luar tempat tinggal utama anda mendorong harga rumah naik, mengurangkan kemampuan dan mencetuskan krisis perumahan.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Saham</span>',
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin adalah aset langsung yang anda miliki sepenuhnya. Saham adalah sebahagian daripada syarikat \u2014 nilainya bergantung kepada pengurusan, prestasi, dan keputusan yang anda tidak boleh kawal.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin mempunyai had keras 21 juta BTC. Syarikat boleh menerbitkan saham baharu pada bila-bila masa, mencairkan pemegang saham sedia ada \u2014 mirip dengan bagaimana fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "inflasi",
	"bitcoin-vs-stocks::point_2_summary_3":
		" mencairkan wang tunai. Dengan Bitcoin, bahagian anda tidak pernah mengecil.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin tiada CEO dan tiada satu titik kegagalan. Saham sangat bergantung kepada kepimpinan \u2014 satu keputusan buruk atau pemergian boleh menjatuhkan harga.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Harga Bitcoin berasal daripada pasaran global terbuka. Penilaian saham bergantung kepada metrik seperti nisbah P/E yang boleh menyembunyikan saham yang dinilai berlebihan.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin didagangkan 24/7 di seluruh dunia. Pasaran saham hanya buka semasa waktu bekerja pada hari bekerja.",
	"bitcoin-vs-stocks::point_6_summary_1": "Anda boleh melakukan",
	"bitcoin-vs-stocks::point_6_summary_2": "self-custody",
	"bitcoin-vs-stocks::point_6_summary_3":
		"Bitcoin dengan aplikasi mudah \u2014 tiada broker diperlukan. Saham berada di broker, mendedahkan anda kepada risiko pihak lawan jika mereka gagal.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bekalan tetap Bitcoin menjadikannya lindung nilai inflasi yang boleh dipercayai. Sesetengah saham mengatasi inflasi, yang lain tidak \u2014 tiada jaminan.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'Perbezaan antara <span class="orange">Bitcoin</span> dan <span class="asset">Visa</span>',
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin adalah rangkaian terbuka yang boleh disertai dan digunakan oleh sesiapa sahaja tanpa kebenaran. Visa adalah sistem tertutup yang dikawal oleh institusi kewangan yang boleh menafikan akses \u2014 terutamanya bagi mereka yang tidak mempunyai akaun atau kurang dilayani oleh bank.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Transaksi Bitcoin tiada yuran peniaga. Visa biasanya mengenakan yuran sekitar 3% setiap transaksi kepada peniaga \u2014 perniagaan anda boleh menjimatkan wang dengan menerima",
	"bitcoin-vs-visa::point_2_summary_2": "pembayaran Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " sebagai gantinya.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Setiap transaksi Bitcoin berada di blockchain awam yang boleh diaudit. Visa menjalankan sistem tertutup dan proprietari di mana pelanggan tidak boleh mengesahkan apa-apa secara bebas.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin tidak boleh dibekukan oleh mana-mana pihak berkuasa pusat. Visa boleh membekukan akaun, menyekat transaksi, atau menafikan perkhidmatan pada bila-bila masa.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin adalah penyelesaian akhir \u2014 anda hanya boleh berbelanja apa yang anda miliki. Kad kredit mencipta hutang dengan kadar faedah selalunya melebihi 25% setahun.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin membolehkan anda mengambil",
	"bitcoin-vs-visa::point_6_summary_2": "self-custody",
	"bitcoin-vs-visa::point_6_summary_3":
		"tanpa memerlukan bank atau pemproses pembayaran. Kad kredit sentiasa memerlukan perantara.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin berfungsi 24/7 secara global tanpa waktu bekerja. Visa mempunyai waktu operasi, tetingkap penyelenggaraan, dan sekatan geografi yang boleh menyekat transaksi.",
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
		`translate-rest-part1 (ms): filled ${filled}, already-done ${skipped}`,
	);
}

main();
