/**
 * Creates Filipino (fil) translation files for all 15 business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fil';
const today = '2026-04-04';

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
	"bitcoin_is_good_for_business": "Maganda ang Bitcoin para sa negosyo",
	"biz_header": "MAGANDA ANG BITCOIN PARA SA NEGOSYO",
	"biz_s1": "Mababang bayarin na walang minimum",
	"biz_s1_c1": "Pinapahintulutan ka ng Bitcoin na tumanggap ng mga bayad nang direkta mula sa iyong mga customer, katulad ng cash. Ang Bitcoin network ay gumagana nang walang mga tagapamagitan tulad ng mga bangko at credit card company na kumukuha ng malalaking bayarin.",
	"biz_s2": "Instant na settlement",
	"biz_s2_c1": "Katulad ng cash, ang mga bayad ng Bitcoin ay agad na nase-settle. Hindi mo kailangang maghintay na bayaran ka ng iyong credit card company o bangko. Sa halip, makukuha mo agad ang iyong pera.",
	"biz_s3": "Walang chargeback o panloloko",
	"biz_s3_c1": "Dahil ang mga bayad ng Bitcoin ay direktang nangyayari sa pagitan mo at ng iyong mga customer, imposibleng may kumuha pabalik ng iyong pera gamit ang chargeback.",
	"biz_s3_c2": "Ang pekeng Bitcoin ay hindi maaaring ipadala sa Bitcoin Network, na nangangahulugang hindi mo kailangang mag-alala tungkol sa mga mapanlinlang na transaksyon na maaaring magdulot ng gastos sa iyong negosyo.",
	"biz_s4": "Kumuha ng mas maraming customer",
	"biz_s4_c1": "Milyon-milyong tao ang nagmamay-ari ng Bitcoin at gustong gumastos ng kanilang Bitcoin sa mga lugar na tumatanggap nito.",
	"biz_s4_c2": "Sa simpleng pagtanggap ng Bitcoin, ang iyong negosyo ay maaaring mailagay sa mga mapa ng Bitcoin merchant at makakuha ng libreng exposure sa mga bagong Bitcoin customer.",
	"biz_s4_c3": "Ang pagtanggap ng Bitcoin ay 100% libre. Walang mga kontrata o nakatagong bayarin."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Alamin kung bakit maganda ang Bitcoin para sa negosyo",
	"why_header": "MAGANDA ANG BITCOIN PARA SA NEGOSYO",
	"why_good_for_you": "MAGANDA DIN ANG BITCOIN PARA SA IYO!",
	"why_learn_more_lowercase": "Matuto pa.",
	"why_s1": "Walang inflation ang Bitcoin",
	"why_s1_c1": "Nangyayari ang inflation kapag mas maraming pera ang na-print o nalikha mula sa wala. Ginagawa nito na mas mababa ang halaga ng iyong pera sa paglipas ng panahon.",
	"why_s1_c2": "Ang Bitcoin ay may nakapirming supply, na nangangahulugang walang maaaring mag-print ng higit pang Bitcoin.",
	"why_s2": "Walang bank run ang Bitcoin",
	"why_s2_c1": "Maraming bangko sa US ang bumagsak sa nakaraang ilang taon dahil sa mga bank run.",
	"why_s2_c2": "Sa halip na basta hawakan ang iyong pera para sa iyo, ini-invest at ipinapahiram ng mga bangko ang iyong pera. Kung hindi maganda ang resulta ng mga investment na iyon, wala silang sapat na pambayad sa iyo.",
	"why_s2_c3": "At ang FDIC insurance fund ay mayroon lamang $1 para sa bawat $100 na kanilang insured.",
	"why_s3": "Ang Bitcoin ay walang kailangan na pahintulot",
	"why_s3_c1": "Hindi tulad ng mga tradisyunal na financial network, ang Bitcoin ay hindi nangangailangan ng pahintulot upang magamit.",
	"why_s3_c2": "Nangangahulugan iyan na walang maaaring pumigil sa iyo mula sa paggamit ng Bitcoin sa anumang dahilan. Ito ang unang financial network na maaari mong gamitin nang walang takot sa censorship o seizure.",
	"why_s4": "Ang Bitcoin ay bumubuo ng mas magandang mundo",
	"why_s4_c1": "Ang Bitcoin ay isang hindi maunawaan na teknolohiya na bumubuo ng mas magandang mundo.",
	"why_s4_c2": "Ang Bitcoin ay nakapagbigay-kakayahan sa mga aktibista ng karapatang pantao na lumaban para sa kalayaan, nabawasan ang global methane emissions, naililigtas ang mga national park, at marami pang iba."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Tumanggap ng mga Bayad sa Bitcoin sa Iyong Negosyo",
	"guide_header": "HANDA NANG TUMANGGAP NG BITCOIN SA IYONG NEGOSYO?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Mga FAQ para sa Pagtanggap ng Bitcoin",
	"faq_description": "May mga tanong tungkol sa pagtanggap ng mga bayad sa Bitcoin sa iyong negosyo?",
	"faq_header": "MAY MGA TANONG TUNGKOL SA PAGTANGGAP NG MGA BAYAD SA BITCOIN?",
	"faq_s1": "Ano ang Bitcoin?",
	"faq_s1_c1": "Ang Bitcoin ay dalawang bagay: digital na pera at isang computer network.",
	"faq_s1_c2": "Maaari mong ipadala ang bitcoin (ang digital na pera) nang direkta sa ibang tao gamit ang Bitcoin Network.",
	"faq_s1_c3": "Ang Bitcoin Network ay kayang gumana nang walang mga tagapamagitan o sentral na awtoridad, tulad ng mga bangko o credit card company, kaya maiiwasan mo ang kanilang mga bayarin sa transaksyon.",
	"faq_s1_c4": "Ang mga Bitcoin transaction ay nakakamit ng final settlement nang mabilis (10 minuto) at hindi kailanman maaaring i-chargeback, kaya makakatulog ka nang payapa na alam mong ang iyong pera ay sa iyo.",
	"faq_s2": "Paano makakatulong ang Bitcoin sa aking negosyo?",
	"faq_s2_c1": "Pinapayagan ka ng Bitcoin na tumanggap ng mga bayad na may mas mababang bayarin at makakuha ng mas maraming customer. Ang mga bayad sa Bitcoin ay may mababang bayarin na walang minimum, agad na nase-settle, at immune sa mga chargeback at panloloko.",
	"faq_s2_c2": "Ang pagtanggap ng Bitcoin ay libre at pinapayagan kang ilista ang iyong negosyo sa mga mapa ng Bitcoin merchant upang madali kang mahanap ng mga Bitcoin user.",
	"faq_s2_c3": "Tingnan ang lahat ng paraan kung bakit maganda ang Bitcoin para sa negosyo.",
	"faq_s3": "Paano ako tatanggap ng mga bayad sa Bitcoin?",
	"faq_s3_c1": "Ang kailangan mo lang upang tumanggap ng mga bayad sa Bitcoin ay isang libreng Bitcoin wallet.",
	"faq_s3_c2": "Ang aming gabay sa wallet ay mag-se-set up sa iyo nang mabilis at madali upang ma-unlock mo ang mga benepisyo ng pagtanggap ng Bitcoin ngayon!",
	"faq_s3_c3": "Tingnan ang Gabay sa Wallet",
	"faq_s4": "Maaari ko bang i-convert ang mga bayad sa Bitcoin na natatanggap ko sa aking lokal na pera?",
	"faq_s4_c1": "Oo! Sa pamamagitan ng paggamit ng hybrid wallet, maaari mong awtomatikong i-convert ang mga bayad sa Bitcoin na natatanggap mo sa iyong lokal na pera sa sandaling matanggap ang bayad.",
	"faq_s4_c2": "Ang aming gabay sa wallet ay makakatulong sa iyo na ma-set up nang mabilis at madali.",
	"faq_s4_c3": "Maaari mo ring piliing itago ang isang bahagi ng mga bayad na natatanggap mo bilang Bitcoin. Ang pag-iipon sa Bitcoin ay may maraming benepisyo:",
	"faq_s4_c4": "Ang Bitcoin ay isang full reserve financial system.",
	"faq_s4_c5": "Walang inflation ang Bitcoin.",
	"faq_s4_c6": "Ang mga benepisyong ito ay ginagawang magandang paraan ang Bitcoin upang mag-imbak ng pera para sa mahabang panahon.",
	"faq_s4_c7": "Kahit na piliin mong i-convert ang lahat ng iyong mga bayad sa Bitcoin sa dolyar, makukuha mo pa rin ang mga benepisyo ng pagtanggap ng mga bayad na may mas mababang bayarin habang nakakaabot sa mas maraming potensyal na customer.",
	"faq_s5": "Maaari ba akong tumanggap ng mga bayad sa Bitcoin nang personal?",
	"faq_s5_c1": "Oo! Madaling tumanggap ng mga bayad sa Bitcoin nang personal gamit ang isang Bitcoin wallet.",
	"faq_s5_c2": "Ang aming gabay sa wallet ay makakatulong sa iyo na piliin ang Bitcoin wallet na pinakamahusay para sa iyong negosyo.",
	"faq_s5_c3": "Tingnan ang Gabay sa Wallet",
	"faq_s6": "Maaari ba akong tumanggap ng mga bayad sa Bitcoin online?",
	"faq_s6_c1": "Oo! Madaling tumanggap ng mga bayad sa Bitcoin online sa iyong umiiral na online store.",
	"faq_s6_c2": "Tingnan ang aming gabay sa wallet para sa karagdagang impormasyon.",
	"faq_s7": "Paano ko ipapaalam sa aking mga customer na tumatanggap ako ng Bitcoin?",
	"faq_s7_c1": "Nag-aalok kami ng libreng 'Tumatanggap ng Bitcoin Dito' sticker na maaari mong ipakita sa iyong negosyo upang ipaalam sa iyong mga customer na tumatanggap ka ng Bitcoin.",
	"faq_s7_c2": "I-click dito upang humiling ng iyong mga sticker.",
	"faq_s7_c3": "Maaari mo ring ilista ang iyong negosyo sa mga mapa ng Bitcoin merchant nang libre at makakuha ng exposure sa milyon-milyong Bitcoin user na gustong gumastos ng kanilang Bitcoin sa mga negosyong tumatanggap nito.",
	"faq_s7_c4": "Magpalista na ngayon.",
	"faq_s8": "Paano ako makakakuha ng mas maraming customer sa pamamagitan ng pagtanggap ng Bitcoin?",
	"faq_s8_c1": "Mayroong milyon-milyong Bitcoin user na gustong gumastos ng kanilang Bitcoin sa mga negosyong tumatanggap nito.",
	"faq_s8_c2": "Sa simpleng pagtanggap ng mga bayad sa Bitcoin, ang iyong negosyo ay maaaring mailagay sa mga libreng mapa ng Bitcoin merchant at magbigay sa iyo ng exposure sa mga bagong potensyal na customer.",
	"faq_s8_c3": "Magpalista na ngayon.",
	"faq_s9": "Magkano ang gastos sa pagtanggap ng Bitcoin?",
	"faq_s9_c1": "Ang pagtanggap ng Bitcoin sa iyong negosyo ay 100% libre. Walang mga kontrata o nakatagong bayarin.",
	"faq_s9_c2": "Tingnan ang aming gabay sa wallet upang magsimulang tumanggap ng mga bayad sa Bitcoin ngayon."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Paano Tumanggap ng mga Bayad sa Bitcoin",
	"wallets_header": "KUMUHA NG LIBRENG BITCOIN WALLET UPANG TUMANGGAP NG MGA BAYAD SA BITCOIN",
	"wallets_intro_1": "Lahat ng Bitcoin wallet ay interoperable, kaya ang iyong mga customer ay maaaring magbayad sa iyo gamit ang Bitcoin kahit anong wallet ang ginagamit nila.",
	"wallets_intro_2": "Mga Bitcoin-only wallet:",
	"wallets_intro_3": "Ito ay mga purong Bitcoin wallet na nag-a-unlock ng buong benepisyo ng Bitcoin: walang tagapamagitan, mababang bayarin, at walang chargeback o panloloko.",
	"wallets_intro_4": "Mga Hybrid wallet:",
	"wallets_intro_5": "Pinapayagan ka ng mga ito na i-exchange ang anumang bahagi ng iyong Bitcoin para sa dolyar sa sandaling magbayad ang customer. Ang mga bayarin ay mas mababa pa rin kaysa sa mga bayad sa credit card, ngunit mas mataas kaysa sa purong Bitcoin payment.",
	"wallets_intro_6": "Pareho magandang paraan upang tumanggap ng Bitcoin. Ang partikular na wallet na gagamitin mo ay depende sa laki at uri ng iyong negosyo.",
	"wallets_choice_sole": "mga wallet para sa mga negosyong may iisang may-ari",
	"wallets_choice_multiple": "mga wallet para sa mga negosyong may maraming empleyado",
	"wallets_choice_online": "mga wallet para sa mga online na negosyo",
	"wallets_choice_invoice": "mga wallet para sa mga negosyong base sa invoice",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Maaari kang tumanggap ng mga bayad sa Bitcoin gamit ang iyong umiiral na Square PoS terminal o online store integration. Hindi kailanman naging mas madali ang pagtanggap ng mga bayad sa Bitcoin.",
	"wallets_feature_bitcoin_only": "Bitcoin-only wallet",
	"wallets_feature_no_info": "Walang kinakailangang impormasyon",
	"wallets_feature_in_person": "Mga personal na bayad lamang",
	"wallets_feature_settles_bitcoin": "100% na nase-settle sa Bitcoin",
	"wallets_feature_hybrid": "Hybrid wallet",
	"wallets_feature_info": "Kinakailangan ang impormasyon ng negosyo",
	"wallets_feature_in_person_online": "Personal at online na mga bayad",
	"wallets_feature_settles_both": "I-settle sa Bitcoin at dolyar",
	"wallets_feature_multiple_employees": "Suporta para sa maraming empleyado (BPTs)",
	"wallets_feature_self_hosted": "Self-hosted = 0% bayarin",
	"wallets_feature_online_store": "Online store integration",
	"wallets_feature_invoicing": "Libreng invoicing software",
	"wallets_get_wallet": "KUMUHA NG WALLET"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Gabay sa Accounting ng Bitcoin para sa Negosyo",
	"accounting_description": "Alamin kung paano maayos na i-account ang mga bayad sa Bitcoin sa accounting ng iyong negosyo.",
	"accounting_header": "GABAY SA ACCOUNTING NG BITCOIN",
	"accounting_s1_c1": "Ang pagtanggap ng Bitcoin ay may maraming benepisyo tulad ng pagtanggap ng mga bayad na may mas mababang bayarin at pagkuha ng mas maraming customer.",
	"accounting_s1_c2": "Kung gumagamit ka ng Hybrid Wallet mula sa aming Gabay sa Wallet at awtomatikong ibinebenta ang 100% ng Bitcoin na natatanggap mo para sa dolyar, hindi mo kailangang gumawa ng anumang pagbabago sa iyong kasalukuyang accounting.",
	"accounting_s1_c3": "Tingnan ang Gabay sa Wallet.",
	"accounting_s1_c4": "Gayunpaman, kung itinatago mo ang ilan sa mga bayad na natatanggap mo bilang Bitcoin, kakailanganin mong subaybayan ang ilang detalye para sa iyong accounting. Maaaring mukhang nakakatakot ito sa simula, ngunit talagang napakadali.",
	"accounting_s1_c5": "Paalala: ang gabay na ito ay para sa mga layuning pang-impormasyon lamang at hindi ito itinuturing na payo sa buwis.",
	"accounting_s1_c6": "Kung kailangan mo ng payo sa buwis, lubos naming inirerekomenda ang Satoshi Pacioli Accounting Services, isang kumpanya ng accounting na espesyalista sa Bitcoin accounting.",
	"accounting_s2": "PAGSUBAYBAY NG IYONG COST BASIS",
	"accounting_s2_c1": "Ang pagsubaybay ng iyong cost basis ay magiging pinakamalaking pagkakaiba sa pagitan ng accounting para sa dolyar at accounting para sa Bitcoin. Kahit na itinuturing mo ang iyong negosyo buong-buo sa terminong Bitcoin, kailangan mong i-report ang dolyar na halaga ng bawat transaksyon sa iyong mga buwis.",
	"accounting_s2_c2": "Kung gumagamit ka ng QuickBooks, maaari mo itong gawin nang awtomatiko gamit ang Bitcoin Sync plugin.",
	"accounting_s2_c3": "Kung hindi ka gumagamit ng QuickBooks, inirerekomenda namin ang Satoshi Pacioli Accounting Services, isang kumpanya ng accounting na espesyalista sa Bitcoin accounting.",
	"accounting_s2_c4": "Upang gawin ito nang manu-mano, kailangan mo lamang subaybayan ang halaga ng Bitcoin na natanggap mo at ang dolyar na halaga ng Bitcoin transaction sa araw na iyon.",
	"accounting_s2_c5": "Maaari mong tingnan ang kasalukuyang dolyar na presyo ng Bitcoin dito.",
	"accounting_s2_c6": "Subaybayan ang impormasyong ito sa isang Excel spreadsheet at ibigay ito sa iyong accountant.",
	"accounting_s2_c7": "Maaari mo ring awtomatikong i-import ang data na ito sa Excel.",
	"accounting_s2_c8": "Maaari mo ring tingnan ang historikal na dolyar na presyo ng Bitcoin sa mga nakaraang araw, kaya hindi mo kailangan gawin ito araw-araw.",
	"accounting_s3": "PAGGASTOS O PAGBENTA NG IYONG BITCOIN",
	"accounting_s3_c1": "Kung gumagamit ka ng Hybrid Wallet mula sa aming Gabay sa Wallet at awtomatikong ibinebenta ang 100% ng Bitcoin na natatanggap mo para sa dolyar, hindi mo kailangang gumawa ng anumang pagbabago sa iyong kasalukuyang accounting.",
	"accounting_s3_c2": "Tingnan ang Gabay sa Wallet.",
	"accounting_s3_c3": "Kung pipiliin mong gumastos o magbenta ng ilan sa Bitcoin na natatanggap mo matapos itago ito nang ilang panahon, kailangan mo lamang idagdag ang presyo kung saan mo ito ibinenta sa iyong Excel spreadsheet na sumusubaybay ng iyong cost basis.",
	"accounting_s3_c4": "Halimbawa, kung nakatanggap ka ng $100 na halaga ng Bitcoin noong Enero 1 at nagdesisyong ibenta o gumastos nito noong Pebrero 1 sa bagong halaga na $110, kakailanganin mong i-record ang $10 capital gain sa iyong accounting.",
	"accounting_s3_c5": "Maaari ring mangyari ang kabaligtaran nito. Halimbawa, kung nakatanggap ka ng $100 na halaga ng Bitcoin noong Enero 1 at nagdesisyong ibenta o gumastos nito noong Pebrero 1 sa bagong halaga na $90, kakailanganin mong i-record ang $10 capital loss sa iyong accounting.",
	"accounting_s4": "KAILANGAN KO NG HIGIT PANG TULONG",
	"accounting_s4_c1": "Kung kailangan mo ng higit pang tulong sa pag-integrate ng Bitcoin sa accounting ng iyong negosyo, lubos naming inirerekomenda ang Satoshi Pacioli Accounting Services, isang kumpanya ng accounting na espesyalista sa Bitcoin accounting.",
	"accounting_s4_c2": "Matuto pa tungkol sa Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Mga Mapa ng Bitcoin Merchant - Ilista ang iyong negosyo nang libre",
	"maps_header": "MAGPALISTA SA MGA MAPA NG BITCOIN MERCHANT AT MAKAKUHA NG MAS MARAMING CUSTOMER",
	"maps_request_details": "Ilagay ang impormasyon ng iyong negosyo sa ibaba at ililista ka namin sa mga mapa ng Bitcoin merchant nang libre. Ito ay magpapahintulot sa mga Bitcoiner na mahanap ang iyong negosyo at gumastos ng kanilang Bitcoin sa iyong negosyo!",
	"maps_view": "Tingnan ang mapa dito."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Ang iyong negosyo ay ililista sa mga mapa ng Bitcoin merchant sa loob ng 1 hanggang 2 linggo.",
	"kit_success_2": "Tingnan ang mapa dito."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Mga sticker na 'Tumatanggap ng Bitcoin Dito'",
	"stickers_header": "KUMUHA NG IYONG LIBRENG 'TUMATANGGAP NG BITCOIN DITO' STICKER",
	"stickers_request": "Kumuha ng iyong libreng sticker",
	"stickers_request_details": "Ipaalam sa iyong mga customer na tumatanggap ka ng mga bayad sa Bitcoin gamit ang mga libreng 'Tumatanggap ng Bitcoin Dito' sticker na ito.",
	"stickers_country_global_print": "Global — Mag-print ng sarili kong sticker",
	"stickers_request_instructions": "Makakatanggap ka ng tatlong 'Tumatanggap ng Bitcoin Dito' sticker sa isang plain na puting sobre. Kung kailangan mo ng higit sa tatlong sticker para sa iyong negosyo, huwag mag-atubiling humiling nang maraming beses. Ang data ng address ay binubura pagkatapos maipadala ang iyong mga libreng sticker.",
	"stickers_print_details": "Maaari kang mag-print ng sarili mong 'Tumatanggap ng Bitcoin Dito' sticker, kahit saan ka man nakatira! I-click ang iyong wika sa ibaba upang tingnan ang mga sticker file at mga tagubilin.",
	"stickers_request_language": "Hindi mo nakita ang iyong wika? Punan ang form sa ibaba upang humiling ng 'Tumatanggap ng Bitcoin Dito' sticker file sa iyong lokal na wika."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Matatanggap mo ang iyong mga sticker sa loob ng 1 hanggang 2 linggo sa isang plain na puting sobre. Bawat sobre ay may kasamang 3 sticker. Kung kailangan mo ng higit sa 3 sticker para sa iyong negosyo, huwag mag-atubiling humiling ng isa pang pack!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Gagawin at ilalathala namin ang iyong sticker file sa loob ng 3 hanggang 4 na linggo. Salamat sa iyong pasensya!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin Business Kit",
	"kit_header": "I-PRINT ANG SARILI MONG BITCOIN BUSINESS KIT",
	"kit_request": "HUMILING NG IYONG LIBRENG KIT",
	"kit_request_details": "Bawat Bitcoin Business Kit ay may kasamang dalawang brochure upang maging madali ang paghikayat sa isang lokal na negosyo na tumanggap ng Bitcoin.",
	"kit_country_global_print": "Global — Mag-print ng sarili kong mga kit",
	"kit_enter_address": "Ilagay ang iyong mailing address at ipapadala namin sa iyo ang isang libreng Bitcoin Business Kit sa isang plain na puting sobre. Ang data ng address ay binubura pagkatapos maipadala ang iyong kit.",
	"kit_print_details": "Maaari kang lumahok sa pamamagitan ng pag-print ng sarili mong mga brochure, kahit saan ka man nakatira! Maaari mo ring ipadala ang mga negosyo sa aming digital business kit upang maiwasan ang pag-print ng kahit ano.",
	"kit_view_files": "TINGNAN ANG MGA FILE",
	"kit_digital_kit": "DIGITAL KIT",
	"kit_resources": "BAWAT KIT AY NAGLILINK SA MGA LIBRENG MAPAGKUKUNANG ITO"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Matatanggap mo ang iyong Bitcoin Business Kit sa loob ng 1 hanggang 2 linggo sa isang plain na puting sobre."
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "I-print ang sarili mong Bitcoin Business Kit",
	"english_bbk_files_description": "I-download ang mga pamphlet file dito.",
	"english_header": "I-PRINT ANG SARILI MONG INGLES NA BITCOIN BUSINESS KIT BROCHURE"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Mga Ingles na File ng Sticker na 'Tumatanggap ng Bitcoin Dito'",
	"english_biz_sticker_files_description": "I-download ang mga Ingles na sticker file upang mag-print ng sarili mong Tumatanggap ng Bitcoin Dito sticker.",
	"english_header": "I-DOWNLOAD ANG MGA INGLES NA FILE NG STICKER NA 'TUMATANGGAP NG BITCOIN DITO'"
});

console.log('\nDone! All 15 business files created for Filipino (fil).');
