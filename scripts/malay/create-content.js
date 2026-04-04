/**
 * Creates Malay (ms) translation files for remaining content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin tidak mempunyai krisis bank",
	"bank_runs_header": "Bitcoin tidak mempunyai krisis bank",
	"bank_runs_header_2": "Tetapi bank anda mungkin ada",
	"bank_runs_what": "Apa itu krisis bank?",
	"bank_runs_what_content_1": "Krisis bank berlaku apabila terlalu ramai orang cuba mengeluarkan wang mereka dari bank pada masa yang sama.",
	"bank_runs_what_content_2": "Jika bank tidak mempunyai wang yang cukup untuk memenuhi pengeluaran, krisis bank boleh menyebabkan bank runtuh sepenuhnya.",
	"bank_runs_how": "Bagaimana krisis bank berlaku?",
	"bank_runs_how_content_1": "Sistem perbankan kita ialah \"rizab pecahan\" — bermakna bank tidak hanya menyimpan wang anda di dalam peti besi menunggu anda menggunakan atau mengeluarkannya.",
	"bank_runs_how_content_2": "Sebaliknya, bank meminjamkan dan melaburkan wang anda. Ini boleh mengunci wang anda untuk tempoh yang lama, walaupun bank berjanji bahawa anda boleh mengeluarkannya pada bila-bila masa.",
	"bank_runs_how_content_3": "Jadi apa yang berlaku jika anda cuba mengeluarkan wang anda selepas bank sudah meminjamkan atau melaburkannya?",
	"bank_runs_how_content_4": "Jika hanya anda seorang yang mengeluarkan, tiada masalah. Bank hanya menggunakan wang orang lain untuk memberikan kepada anda. Tetapi bagaimana jika terlalu ramai orang cuba mengeluarkan pada masa yang sama?",
	"bank_runs_how_content_5": "Ramai rakyat Amerika mendapat tahu apabila krisis bank berlaku di Silicon Valley Bank pada Mac 2023.",
	"bank_runs_how_content_6": "Bank itu telah melaburkan wang pelanggan dalam bon kerajaan yang dikunci sehingga 30 tahun. Lebih teruk lagi, bon ini telah kehilangan nilai baru-baru ini, jadi Silicon Valley Bank tidak boleh menjual bon untuk mendapatkan semula wang pendeposit. Ia muflis. Ia tidak mempunyai wang yang cukup untuk memenuhi pengeluaran pendeposit.",
	"bank_runs_how_content_7": "Apabila lebih ramai orang mengetahui hal ini, masalah menjadi lebih teruk. Lebih banyak permintaan pengeluaran datang, tetapi banyak yang tidak dapat diproses. Ribuan perniagaan mendapati mereka tidak dapat membayar gaji pekerja kerana kegagalan bank.",
	"bank_runs_how_content_8": "FDIC campur tangan dan bersetuju untuk melindungi pendeposit sepenuhnya. Masalah selesai? Tidak tepat...",
	"bank_runs_fdic": "Adakah insurans FDIC melindungi wang saya?",
	"bank_runs_fdic_content_1": "Insurans FDIC direka untuk melindungi pendeposit jika bank gagal. Deposit diinsuranskan sehingga $250,000 setiap pendeposit. Bagus, kan?",
	"bank_runs_fdic_content_2": "Tidak tepat. Jika bank gagal, dari mana FDIC mendapat wang? Ia mempunyai dana insurans sebanyak $125 bilion.",
	"bank_runs_fdic_content_3": "Kedengaran banyak, tetapi bandingkan dengan jumlah deposit yang diinsuranskan: kira-kira $10 trilion, atau $10,000 bilion.",
	"bank_runs_fdic_content_4": "FDIC menunjukkan di laman webnya sendiri bahawa dana insurans hanya mempunyai wang yang cukup untuk menampung lebih sedikit daripada 1% deposit.",
	"bank_runs_fdic_content_5": "Jika kegagalan bank melebihi dana insurans FDIC, berkemungkinan (tetapi tidak dijamin) kerajaan AS akan mencetak wang untuk melindungi pendeposit sepenuhnya.",
	"bank_runs_fdic_content_6": "Tetapi pencetakan wang menyebabkan inflasi, jadi ini bukan penyelesaian yang baik.",
	"bank_runs_safe": "Adakah bank yang tidak menggunakan rizab pecahan?",
	"bank_runs_safe_content_1": "Beberapa bank telah cuba menjadi \"bank selamat\" yang tidak meminjamkan atau melaburkan dana pendeposit.",
	"bank_runs_safe_content_2": "Bank-bank selamat ini telah ditolak permohonan mereka oleh Federal Reserve walaupun mereka akan mempunyai risiko krisis bank sifar. Bermakna mereka tidak boleh beroperasi secara sah sebagai bank.",
	"bank_runs_safe_content_3": "Oleh kerana operasi mereka disekat, tiada bank hari ini yang tidak menggunakan rizab pecahan.",
	"bank_runs_safe_content_4": "Nasib baik, terdapat cara untuk keluar dari rizab pecahan dengan menjadi bank anda sendiri. Tidak, kami tidak bercakap tentang menyorokkan wang tunai di bawah tilam.",
	"bank_runs_safe_content_5": "Menyimpan dalam wang tunai masih terdedah kepada inflasi.",
	"bank_runs_safe_content_6": "Kami bercakap tentang Bitcoin: sistem kewangan baharu yang membolehkan anda menjadi bank anda sendiri.",
	"bank_runs_protect": "Adakah Bitcoin melindungi saya daripada krisis bank?",
	"bank_runs_protect_content_1": "Ya, Bitcoin ialah sistem kewangan rizab penuh.",
	"bank_runs_protect_content_2": "Selagi anda mengeluarkan Bitcoin anda ke dompet anda sendiri, krisis bank adalah mustahil dengan Bitcoin. Jangan simpan Bitcoin anda di bursa atau dalam pembungkus seperti ETF Bitcoin.",
	"bank_runs_protect_content_3": "Lihat panduan dompet Bitcoin mudah kami untuk mengetahui cara mengeluarkan ke dompet anda sendiri.",
	"bank_runs_protect_content_4": "Dengan Bitcoin, anda akhirnya mengawal wang anda."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Panduan Dompet Bitcoin",
	"wallets_description": "Terdapat pelbagai dompet Bitcoin yang berbeza dalam aspek penting. Anda boleh menentukan dompet mana yang sesuai untuk anda dengan bertanya soalan mudah ini.",
	"wallets_header": "Cara menyimpan Bitcoin anda dengan selamat",
	"wallets_s1_c1": "Dompet Bitcoin boleh beroperasi bersama, jadi anda boleh menghantar Bitcoin kepada sesiapa sahaja tidak kira dompet apa yang mereka gunakan.",
	"wallets_s1_c2": "Terdapat pelbagai dompet Bitcoin yang berbeza dalam aspek penting. Anda boleh menentukan dompet mana yang sesuai untuk anda dengan bertanya soalan mudah ini:",
	"wallets_question_1": "Adakah ia dompet jagaan sendiri?",
	"wallets_s2_c1": "Salah satu inovasi Bitcoin ialah keupayaan untuk menyimpannya tanpa bergantung kepada penjaga seperti bank.",
	"wallets_s2_c2": "Jika anda memegang Bitcoin di bursa atau ETF, anda kehilangan manfaat kebebasan Bitcoin.",
	"wallets_s2_c3": "Dompet jagaan sendiri membuka kuasa penuh Bitcoin: wang bebas.",
	"wallets_s2_c4": "Dengan dompet jagaan sendiri, hanya anda yang mempunyai keupayaan untuk membelanjakan atau memindahkan wang anda. Dengan dompet jagaan sendiri, tiada siapa yang boleh menghalang anda daripada menghantar atau menerima wang anda.",
	"wallets_s2_c5": "Dompet jagaan sendiri juga dikenali sebagai dompet bukan kustodian.",
	"wallets_s3_c1": "Dompet kustodian ialah dompet di mana anda tidak mengawal wang anda.",
	"wallets_s3_c2": "Dompet ini lebih dekat dengan sistem perbankan, di mana anda perlu mempercayai pihak ketiga untuk memberikan akses kepada wang anda. Jika Bitcoin anda di bursa, anda menggunakan dompet kustodian.",
	"wallets_s3_c3": "Jika anda membeli ETF Bitcoin, anda menggunakan dompet kustodian yang tidak membenarkan anda mengeluarkan ke jagaan sendiri.",
	"wallets_s3_c4": "Walaupun dompet kustodian mungkin kelihatan mudah, penjaga mempunyai keupayaan teknikal untuk mencuri semua dana pengguna pada bila-bila masa.",
	"wallets_s3_c5": "Bukan kunci anda, bukan syiling anda!",
	"wallets_question_2": "Panas atau sejuk?",
	"wallets_s4_c1": "Dompet sejuk menyimpan kunci Bitcoin anda dengan cara yang tidak pernah menyentuh internet.",
	"wallets_s4_c2": "Ini secara drastik mengehadkan vektor serangan untuk pencuri yang cuba mencuri Bitcoin anda, menjadikannya sesuai untuk jumlah Bitcoin yang besar yang anda tidak perlu hantar dengan kerap.",
	"wallets_s4_c3": "Fikirkan dompet sejuk sebagai akaun simpanan jangka panjang, juga dikenali sebagai simpanan sejuk.",
	"wallets_s5_c1": "Dompet panas menyimpan kunci Bitcoin anda pada peranti yang disambungkan ke internet, seperti telefon pintar.",
	"wallets_s5_c2": "Dompet panas secara amnya dianggap selamat, tetapi ia mungkin mempunyai lebih banyak kelemahan keselamatan berbanding dompet sejuk.",
	"wallets_s5_c3": "Fikirkan dompet panas seperti dompet fizikal. Anda tidak akan meletakkan semua wang anda di dalamnya, tetapi anda akan menyimpan sedikit wang.",
	"wallets_s5_c4": "Dompet panas menjadikannya lebih mudah untuk membelanjakan Bitcoin tanpa perlu mengeluarkan semua wang anda dari simpanan sejuk.",
	"wallets_question_3": "Bagaimana cara membuat sandaran frasa pemulihan?",
	"wallets_s6_c1": "Apabila anda menyediakan dompet Bitcoin, peranti anda akan menjana frasa pemulihan. Frasa pemulihan ini (juga dipanggil frasa seed) mengandungi 12 atau 24 perkataan.",
	"wallets_s6_c2": "Jika anda kehilangan akses kepada dompet anda atau peranti berhenti berfungsi, anda boleh memasukkan frasa pemulihan ini ke dalam dompet baharu untuk mendapatkan semula akses kepada Bitcoin anda.",
	"wallets_s6_c3": "Kebanyakan dompet datang dengan kertas untuk menulis frasa pemulihan anda, tetapi ramai orang lebih suka membuat sandaran frasa ini pada keluli. Ini mengurangkan dengan drastik kemungkinan kehilangan frasa pemulihan anda akibat bencana alam seperti kebakaran atau banjir.",
	"wallets_s6_c4": "Jameson Lopp telah menguji 70 kit sandaran keluli untuk membantu anda memilih yang sesuai.",
	"wallets_s6_c5": "Panduan sandaran logam Bitcoin Jameson di sini.",
	"wallets_s6_c6": "Atau teruskan menatal untuk meneroka pilihan dompet Bitcoin.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Mencari panduan dompet Lightning?",
	"wallets_starter_wallet": "Dompet permulaan yang disyorkan",
	"wallets_mobile_app": "Aplikasi mudah alih",
	"wallets_2fa_support": "Sokongan 2FA",
	"wallets_air_gap_mode": "Mod celah udara",
	"wallets_air_gap_camera": "Mod celah udara + kamera",
	"wallets_bitcoin_only": "Bitcoin sahaja",
	"wallets_security_features": "Banyak ciri keselamatan",
	"wallets_free": "100% percuma",
	"wallets_coldcard_mk5_costs": "Harga $189",
	"wallets_coldcard_q_costs": "Harga $289",
	"wallets_blockstream_jade_costs": "Harga $79",
	"wallets_foundation_passport_costs": "Harga $199",
	"wallets_seedsigner_costs": "Kos komponen $50",
	"wallets_very_affordable": "Sangat berpatutan",
	"wallets_pair_with_phone": "Pasangkan dengan telefon",
	"wallets_battery": "Bateri boleh dicas semula",
	"wallets_build_your_own": "Bina sendiri",
	"wallets_qwerty_keyboard": "Papan kekunci QWERTY penuh",
	"wallets_qr_scanner": "Pengimbas kod QR"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Cara Membeli Bitcoin - Panduan Langkah Demi Langkah",
	"buy_header": "Cara Membeli Bitcoin",
	"buy_intro_c1": "Membeli Bitcoin buat pertama kali mungkin terasa menakutkan, tetapi apabila dipecahkan kepada langkah-langkah, ia sebenarnya sangat mudah.",
	"buy_intro_c2": "Panduan ini akan membimbing anda melalui proses membeli Bitcoin dengan selamat dan menyimpannya di dompet anda sendiri.",
	"buy_step_1_header": "Langkah 1: Pilih negara anda",
	"buy_step_1_description": "Negara yang berbeza mempunyai pilihan pembelian Bitcoin yang berbeza. Pilih negara anda untuk melihat pilihan terbaik untuk anda.",
	"buy_search_countries": "Cari negara",
	"buy_country_united_states": "Amerika Syarikat", "buy_country_australia": "Australia", "buy_country_austria": "Austria", "buy_country_belgium": "Belgium", "buy_country_brazil": "Brazil", "buy_country_canada": "Kanada", "buy_country_france": "Perancis", "buy_country_germany": "Jerman", "buy_country_ireland": "Ireland", "buy_country_italy": "Itali", "buy_country_netherlands": "Belanda", "buy_country_new_zealand": "New Zealand", "buy_country_spain": "Sepanyol", "buy_country_united_kingdom": "United Kingdom", "buy_country_argentina": "Argentina", "buy_country_chile": "Chile", "buy_country_colombia": "Colombia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Republik Czech", "buy_country_denmark": "Denmark", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estonia", "buy_country_finland": "Finland", "buy_country_greece": "Greece", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hong Kong", "buy_country_hungary": "Hungary", "buy_country_iceland": "Iceland", "buy_country_india": "India", "buy_country_israel": "Israel", "buy_country_japan": "Jepun", "buy_country_latvia": "Latvia", "buy_country_lithuania": "Lithuania", "buy_country_luxembourg": "Luxembourg", "buy_country_malta": "Malta", "buy_country_mexico": "Mexico", "buy_country_norway": "Norway", "buy_country_panama": "Panama", "buy_country_poland": "Poland", "buy_country_portugal": "Portugal", "buy_country_romania": "Romania", "buy_country_singapore": "Singapura", "buy_country_slovakia": "Slovakia", "buy_country_slovenia": "Slovenia", "buy_country_south_africa": "Afrika Selatan", "buy_country_south_korea": "Korea Selatan", "buy_country_sweden": "Sweden", "buy_country_switzerland": "Switzerland", "buy_country_thailand": "Thailand", "buy_country_turkey": "Turki", "buy_country_ukraine": "Ukraine", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "Langkah 2: Pilih kaedah pembayaran",
	"buy_step_2_description": "Terdapat dua cara utama untuk membeli Bitcoin: pindahan bank dan wang tunai. Setiap satu mempunyai kelebihan yang berbeza.",
	"buy_method_bank_transfer": "Pindahan bank",
	"buy_method_bank_fast": "Cepat & mudah",
	"buy_method_bank_less_private": "Kurang privasi",
	"buy_method_bank_description": "Pindahan bank ialah cara paling biasa untuk membeli Bitcoin. Ia cepat, mudah, dan biasanya mempunyai yuran yang rendah.",
	"buy_method_choose_bank": "Pilih pindahan bank",
	"buy_method_cash": "Wang tunai",
	"buy_method_cash_private": "Lebih privasi",
	"buy_method_cash_limited": "Pilihan terhad",
	"buy_method_cash_description": "Pembelian wang tunai menawarkan lebih privasi tetapi mempunyai pilihan yang lebih terhad dan mungkin memerlukan pertemuan bersemuka atau menggunakan ATM Bitcoin.",
	"buy_method_choose_cash": "Pilih wang tunai",
	"buy_step_3_header": "Langkah 3: Pilihan pembelian",
	"buy_step_3_description": "Berikut ialah pilihan terbaik untuk membeli Bitcoin berdasarkan negara dan kaedah pembayaran anda:",
	"buy_platform_recommended": "Disyorkan",
	"buy_platform_strike_description": "Strike ialah cara tercepat dan termudah untuk membeli Bitcoin dengan yuran rendah dan sokongan Rangkaian Lightning serta-merta.",
	"buy_platform_swan_description": "Swan Bitcoin menawarkan perkhidmatan Bitcoin sahaja dengan purata kos dolar dan sumber pendidikan.",
	"buy_platform_river_description": "River menawarkan pembelian Bitcoin, perlombongan, dan perkhidmatan kustodi dengan tumpuan pada pendidikan dan keselamatan.",
	"buy_platform_coinsquare_description": "Coinsquare ialah bursa Bitcoin Kanada dengan pematuhan peraturan yang kukuh dan sokongan pelanggan.",
	"buy_platform_kraken_description": "Kraken ialah bursa Bitcoin yang mapan dengan ciri dagangan lanjutan dan keselamatan yang kukuh.",
	"buy_platform_atm_description": "ATM Bitcoin membolehkan anda membeli Bitcoin serta-merta dengan wang tunai. Cari ATM berdekatan anda di Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq ialah bursa rakan-ke-rakan terdesentralisasi yang membolehkan dagangan Bitcoin peribadi tanpa pengesahan identiti.",
	"buy_platform_feature_instant": "Pembelian serta-merta",
	"buy_platform_feature_low_fees": "Yuran rendah",
	"buy_platform_feature_lightning": "Rangkaian Lightning",
	"buy_platform_feature_dca": "Purata kos dolar",
	"buy_platform_feature_education": "Sumber pendidikan",
	"buy_platform_feature_withdrawal": "Pengeluaran mudah",
	"buy_platform_feature_mining": "Perlombongan Bitcoin",
	"buy_platform_feature_custody": "Perkhidmatan kustodi",
	"buy_platform_feature_canadian": "Fokus Kanada",
	"buy_platform_feature_regulated": "Bursa terkawal",
	"buy_platform_feature_support": "Sokongan pelanggan",
	"buy_platform_feature_established": "Platform mapan",
	"buy_platform_feature_security": "Keselamatan kukuh",
	"buy_platform_feature_advanced": "Ciri lanjutan",
	"buy_platform_feature_cash": "Pembelian wang tunai",
	"buy_platform_feature_anonymous": "Lebih tanpa nama",
	"buy_platform_feature_p2p": "Rakan-ke-rakan",
	"buy_platform_feature_private": "Dagangan peribadi",
	"buy_platform_feature_decentralized": "Terdesentralisasi",
	"buy_platform_relai_description": "Relai ialah aplikasi Bitcoin sahaja dari Switzerland yang menawarkan dompet jagaan sendiri, pelaburan automatik, dan yuran rendah untuk pengguna Eropah.",
	"buy_platform_feature_bitcoin_only": "Bitcoin sahaja",
	"buy_platform_feature_self_custody": "Dompet jagaan sendiri",
	"buy_platform_feature_auto_invest": "Pelan pelaburan automatik",
	"buy_platform_feature_european": "Fokus Eropah",
	"buy_step_4_header": "Langkah 4: Simpan Bitcoin anda dengan selamat",
	"buy_step_4_c1": "Selepas membeli Bitcoin, langkah paling penting ialah memindahkannya ke dompet anda sendiri di mana anda mengawal kunci peribadi anda.",
	"buy_step_4_c2": "Menyimpan Bitcoin anda di bursa adalah berisiko kerana anda sebenarnya tidak memiliki Bitcoin anda — bursa yang memilikinya.",
	"buy_step_4_c3": "Dengan mengawal kunci peribadi anda sendiri, anda mempunyai pemilikan sebenar ke atas Bitcoin anda dan tiada siapa yang boleh mengambilnya daripada anda.",
	"buy_step_4_c4": "Ketahui cara memilih dompet Bitcoin yang sesuai untuk keperluan anda:",
	"buy_cta_wallets": "Lihat panduan dompet Bitcoin"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Panduan Dompet Lightning Bitcoin",
	"lightning_description": "Dompet Lightning membolehkan anda menghantar Bitcoin dengan cepat dan murah sambil mengekalkan kedaulatan peribadi.",
	"lightning_header": "Panduan Dompet Lightning",
	"lightning_s1_c1": "Lightning membolehkan anda menghantar pembayaran Bitcoin dengan cepat dan murah.",
	"lightning_s1_c2": "Adalah penting untuk mengetahui bahawa terdapat kompromi dalam menggunakan Lightning. Sebagai pertukaran untuk pembayaran Bitcoin yang lebih cepat dan lebih murah, anda sering mengorbankan sebahagian keselamatan.",
	"lightning_s1_c3": "Secara amnya, Lightning hanya patut digunakan untuk jumlah Bitcoin yang kecil. Jumlah Bitcoin yang besar hanya patut disimpan di dompet perkakasan.",
	"lightning_s1_c4": "Lihat panduan dompet perkakasan kami untuk maklumat lanjut.",
	"lightning_s1_c5": "Tidak semua dompet Lightning sama. Anda boleh menentukan dompet mana yang mempunyai keseimbangan kompromi yang betul untuk anda dengan bertanya satu soalan mudah:",
	"lightning_question_1": "Apakah keseimbangan kompromi yang betul untuk saya?",
	"lightning_s2_c1": "Salah satu inovasi Bitcoin ialah keupayaan untuk menyimpannya tanpa bergantung kepada penjaga seperti bank. Dompet jagaan sendiri membuka kuasa penuh Bitcoin.",
	"lightning_s2_c2": "Dengan dompet jagaan sendiri, hanya anda yang mempunyai keupayaan untuk membelanjakan atau memindahkan wang anda. Tiada siapa yang boleh menghalang, menapis, atau mencuri daripada anda. Ini juga dikenali sebagai dompet bukan kustodian.",
	"lightning_s2_c3": "Cara paling berdaulat untuk menggunakan Lightning ialah menjalankan nod anda sendiri.",
	"lightning_s2_c4": "Panduan ini memberi tumpuan kepada dompet Lightning mudah yang tidak memerlukan nod anda sendiri.",
	"lightning_s2_c5": "Walaupun menggunakan dompet Lightning bukan kustodian, adalah penting untuk mengetahui bahawa anda mempercayai pencipta dompet untuk tidak menolak kemas kini aplikasi berniat jahat yang boleh mencuri dana.",
	"lightning_s3_c1": "Dompet kustodian ialah dompet di mana anda tidak mengawal wang anda.",
	"lightning_s3_c2": "Dompet ini lebih dekat dengan sistem perbankan, di mana anda perlu mempercayai pihak ketiga untuk memberikan akses kepada wang anda. Jika Bitcoin anda di bursa, anda menggunakan dompet kustodian.",
	"lightning_s3_c3": "Walaupun dompet kustodian mungkin kelihatan mudah, penjaga mempunyai keupayaan teknikal untuk mencuri semua dana pengguna pada bila-bila masa.",
	"lightning_s3_c4": "Sesetengah orang lebih suka dompet Lightning kustodian untuk jumlah kecil Bitcoin demi kemudahan penggunaan. Walau bagaimanapun, ingat: bukan kunci anda, bukan syiling anda!",
	"lightning_question_2": "Pilih dompet anda",
	"lightning_s4_c1": "Dengan semua ini dalam fikiran, pilih dompet Lightning yang mempunyai keseimbangan kompromi yang betul untuk anda.",
	"phoenix": "PHOENIX",
	"breez": "BREEZ",
	"mutiny_wallet": "MUTINY WALLET",
	"wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Banyak ciri",
	"lightning_mobile_app": "Aplikasi mudah alih",
	"lightning_free": "100% percuma",
	"lightning_merchants": "Sesuai untuk pedagang",
	"lightning_starter": "Dompet permulaan yang disyorkan",
	"lightning_browser": "Berasaskan pelayar",
	"lightning_custodial": "Dompet kustodian sepenuhnya",
	"lightning_cta_hardware": "Mencari panduan dompet perkakasan Bitcoin?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Pelekat Bitcoin percuma daripada bitcoin.rocks",
	"stickers_description": "Lekatkan pelekat Bitcoin di tempat awam untuk memperkenalkan Bitcoin kepada orang di sekeliling anda.",
	"stickers_header": "Pelekat Bitcoin Percuma",
	"stickers_choose_header": "Pilih pek pelekat",
	"stickers_choose_c1": "Misi kami adalah membantu memperkenalkan Bitcoin kepada lebih ramai orang dengan melekatkan pelekat Bitcoin di tempat awam. Semua pelekat mempunyai kod QR yang memautkan ke halaman pendidikan:",
	"stickers_choose_c2": "Bitcoin",
	"stickers_choose_c3": "Inflasi",
	"stickers_choose_c4": "Pilih pek pelekat di bawah",
	"stickers_text_pack": "Pek teks",
	"stickers_signs_pack": "Pek tanda",
	"stickers_instructions_1": "Masukkan alamat anda dan kami akan menghantar pek pelekat Bitcoin percuma melalui pos! Pelekat dihantar dalam sampul surat putih.",
	"stickers_instructions_2": "Data alamat dipadamkan selepas pelekat dihantar.",
	"stickers_share_header": "Kongsi lokasi pelekat anda",
	"stickers_share_c1": "Kongsi lokasi pelekat anda di Nostr dan lihat di mana orang lain melekatkan pelekat mereka.",
	"stickers_btn_share_on_nostr": "KONGSI DI NOSTR",
	"stickers_btn_what_is_nostr": "APA ITU NOSTR?",
	"stickers_flyers_link_before": "Sementara itu, cetak beberapa",
	"stickers_flyers_link_text": "risalah Bitcoin",
	"stickers_flyers_link_after": " dan tampalkannya untuk memperkenalkan Bitcoin kepada lebih ramai orang.",
	"stickers_country_global_print": "Global — cetak sendiri",
	"stickers_country_global_order": "Global — pesan secara pukal",
	"placeholder_name_optional": "Nama (pilihan)",
	"placeholder_address_line_1": "Alamat baris 1",
	"placeholder_address_line_2": "Alamat baris 2 (pilihan)",
	"placeholder_city": "Bandar",
	"placeholder_state": "Negeri",
	"placeholder_province": "Wilayah",
	"placeholder_zip_code": "Poskod",
	"placeholder_postal_code": "Kod pos",
	"placeholder_language": "Bahasa",
	"placeholder_which_stickers": "Pelekat mana?",
	"placeholder_email_optional": "Masukkan e-mel untuk pemberitahuan (pilihan)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Poskad Bitcoin percuma daripada bitcoin.rocks",
	"postcards_description": "Dapatkan pek poskad Bitcoin percuma untuk memperkenalkan Bitcoin kepada orang yang anda kenali.",
	"postcards_header": "Program poskad telah ditutup",
	"postcards_program_closed_message": "Program poskad Bitcoin percuma telah berakhir. Terima kasih kepada semua yang menyertai dalam menyebarkan pendidikan Bitcoin melalui pos!",
	"postcards_sticker_alternative_header": "Dapatkan pelekat Bitcoin percuma sebagai ganti",
	"postcards_sticker_alternative_message": "Teruskan menyebarkan kesedaran Bitcoin dengan program pelekat percuma kami! Pelekat Bitcoin sesuai untuk dikongsi di tempat awam dan mempunyai kod QR yang memautkan ke kandungan pendidikan.",
	"postcards_sticker_cta": "Dapatkan pelekat percuma",
	"postcards_step_2": "Rupa poskad",
	"postcards_instructions_4": "Kami membuat poskad ini untuk memudahkan anda memperkenalkan Bitcoin kepada orang yang anda kenali! Hanya tambah alamat dan setem dan masukkan poskad ke dalam peti mel.",
	"postcards_instructions_5": "Misi kami adalah mempercepatkan penerimaan Bitcoin. Anda boleh membantu dengan mendapatkan pelekat percuma dan melekatkannya di tempat awam!",
	"postcards_instructions_6": "Pasti ada seseorang dalam hidup anda yang boleh mendapat manfaat daripada mengetahui lebih lanjut tentang Bitcoin. Kongsi pelekat Bitcoin hari ini!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Bantu pasang papan tanda Bitcoin di seluruh Amerika!",
	"signs_title": "Papan tanda Bitcoin percuma daripada bitcoin.rocks",
	"signs_choose_header": "Terima kasih kerana membantu memasang papan tanda Bitcoin di seluruh Amerika!",
	"signs_choose_c1": "Semua papan tanda telah habis! Misi kami adalah mempercepatkan penerimaan Bitcoin melalui pendidikan.",
	"signs_choose_c2": "Ramai daripada anda telah membantu dengan memasang papan tanda Bitcoin percuma di tempat awam. Semua papan tanda mempunyai kod QR yang memautkan ke halaman pendidikan:",
	"signs_choose_c3": "Inflasi",
	"signs_choose_c4": "Terima kasih kepada komuniti yang hebat, kami telah menjangkau ribuan orang dan membantu mereka mengambil langkah pertama ke dunia Bitcoin.",
	"signs_share_header": "Kongsi lokasi papan tanda anda",
	"signs_share_c1": "Kongsi lokasi papan tanda anda di Nostr dan lihat di mana orang lain memasang papan tanda mereka.",
	"signs_btn_share_on_nostr": "KONGSI DI NOSTR",
	"signs_btn_what_is_nostr": "APA ITU NOSTR?",
	"signs_instructions_1": "Masukkan alamat anda dan kami akan menghantar 10 papan tanda Bitcoin dalam kotak melalui pos!",
	"signs_instructions_2": "Data alamat dipadamkan selepas papan tanda dihantar."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Risalah Bitcoin percuma daripada bitcoin.rocks",
	"flyers_description": "Cetak risalah Bitcoin di rumah dan tampalkan di tempat awam untuk memperkenalkan Bitcoin kepada orang di sekeliling anda.",
	"flyers_header_1": "Cetak dan tampal",
	"flyers_header_2": "risalah Bitcoin",
	"flyers_intro_header": "Cara mencetak dan menampal risalah Bitcoin",
	"flyers_intro_c1": "Misi kami adalah membantu memperkenalkan Bitcoin kepada lebih ramai orang dengan menampal risalah Bitcoin di tempat awam. Risalah ini menghubungkan ke",
	"flyers_intro_c2": "laman web pendidikan Bitcoin",
	"flyers_intro_c3": "Inflasi",
	"flyers_intro_c4": "Cetak risalah ini di rumah atau di kedai cetak. Kemudian tampalkan di papan kenyataan, tiang di bandar, dan tempat awam lain di mana orang boleh melihatnya dan belajar tentang Bitcoin.",
	"flyers_intro_c5": "Sementara itu, minta",
	"flyers_intro_c6": "pelekat Bitcoin percuma",
	"flyers_intro_c7": " kami juga untuk memperkenalkan Bitcoin kepada lebih ramai orang.",
	"flyers_btn_download": "Muat turun risalah",
	"flyers_btn_print": "Cetak risalah",
	"flyers_share_header": "Kongsi lokasi risalah anda",
	"flyers_share_c1": "Kongsi lokasi risalah anda di Nostr dan lihat di mana orang lain menampal risalah mereka.",
	"flyers_btn_share_on_nostr": "KONGSI DI NOSTR",
	"flyers_btn_what_is_nostr": "APA ITU NOSTR?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Libatkan diri dan bantu sebarkan Bitcoin",
	"get_involved_description": "Jadikan mudah untuk menyebarkan Bitcoin dengan sumber percuma.",
	"get_involved_header": "Libatkan diri dan",
	"get_involved_header_2": "bantu sebarkan Bitcoin",
	"get_involved_intro_1": "Tinggal dalam keadaan dunia sekarang boleh menjadi menyedihkan.",
	"get_involved_intro_2": "Wang kita rosak. Dan akibatnya, bahagian asas masyarakat kita juga rosak.",
	"get_involved_intro_3": "Jika anda sudah terlibat dalam Bitcoin, anda tahu perasaan harapan yang Bitcoin berikan. Harapan untuk masa depan yang lebih cerah yang dimungkinkan oleh wang yang lebih baik.",
	"get_involved_intro_4": "Tetapi ramai orang di sekeliling anda tidak tahu tentang Bitcoin. Mereka hidup dalam dunia rosak yang sama seperti anda, tetapi tanpa secercah harapan untuk membawa mereka melalui kegelapan.",
	"get_involved_intro_5": "Tetapi anda boleh mengubah perkara itu. Berikut ialah beberapa sumber percuma yang boleh anda gunakan untuk menyebarkan harapan yang Bitcoin berikan kepada orang di sekeliling anda.",
	"get_involved_sticker_header": "Lekatkan pelekat di tempat awam",
	"get_involved_sticker_content_1": "Anda boleh membantu mendidik orang di sekeliling anda tentang Bitcoin tanpa perlu berinteraksi dengan sesiapa. Hanya lekatkan pelekat Bitcoin percuma di tempat awam.",
	"get_involved_sticker_content_2": "Ratusan orang mengimbas kod QR pada pelekat ini setiap bulan. Pelekat inflasi memautkan ke halaman tentang",
	"get_involved_sticker_content_3": "Bitcoin sebagai lindung nilai terhadap inflasi",
	"get_involved_sticker_content_4": ". Pelekat lain memautkan ke laman utama pendidikan yang menunjukkan bahawa",
	"get_involved_sticker_content_5": "Bitcoin membina dunia yang lebih baik",
	"get_involved_sticker_content_6": ". Dengan melekatkan pelekat ini di tempat komuniti yang ramai melihatnya, anda boleh membantu orang di sekeliling anda mengambil langkah pertama ke dunia Bitcoin.",
	"get_involved_request_a": "Minta",
	"get_involved_sticker_pack": "pek pelekat",
	"get_involved_postcard_header": "Hantar poskad",
	"get_involved_postcard_content_1": "Anda boleh membantu menyebarkan harapan Bitcoin dengan menghantar poskad percuma kepada orang yang anda kenali.",
	"get_involved_postcard_content_2": "Setiap poskad mempunyai penerangan yang menarik tentang Bitcoin di bahagian belakang bersama kod QR untuk mengetahui lebih lanjut.",
	"get_involved_postcard_content_3": "Dengan menghantar poskad Bitcoin kepada seseorang, anda boleh membantu mereka melihat Bitcoin dari perspektif baharu.",
	"get_involved_postcard_pack": "pek poskad",
	"get_involved_business_header": "Libatkan perniagaan",
	"get_involved_business_content_1": "Mahu membantu membina ekonomi peredaran Bitcoin? Kit perniagaan Bitcoin memudahkan anda mendekati perniagaan tentang menerima pembayaran Bitcoin.",
	"get_involved_business_content_2": "Setiap kit perniagaan mengandungi risalah yang menyoroti manfaat menerima pembayaran Bitcoin. Setiap risalah menghubungkan ke pelbagai",
	"get_involved_business_content_3": "sumber perniagaan Bitcoin percuma",
	"get_involved_business_kit": "kit perniagaan"
});

console.log('\nDone! Content files created for Malay (ms).');
