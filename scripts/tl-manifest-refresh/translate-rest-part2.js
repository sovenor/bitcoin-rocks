#!/usr/bin/env node
/**
 * Tagalog manifest refresh — non-inflation namespaces, part 2.
 *
 * Covers: index, get-involved, lightning, wallets, nostr/index, stickers,
 * sticker-files/index, sticker-language-success, sticker-success, and
 * all business/* namespaces.
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
	"tl.json",
);

const T = {};

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "pag-iipon",
	"index::home_card_label_art_1": "Ihambing natin",
	"index::home_card_label_art_2": "Ipakalat ang salita",
	"index::home_card_label_art_3": "Street art",
	"index::home_card_label_bank_runs": "Full reserve na sistema",
	"index::home_card_label_bonds": "Ihambing natin",
	"index::home_card_label_business_1": "Ano ang pinagkaiba?",
	"index::home_card_label_business_2": "Tumanggap ng mga bayad sa Bitcoin",
	"index::home_card_label_cash": "Ihambing natin",
	"index::home_card_label_cbdc": "Bukas o sarado?",
	"index::home_card_label_coding_1": "Interactive na tutorial",
	"index::home_card_label_coding_2": "Bumuo ng hardware",
	"index::home_card_label_coding_3": "Mga coding puzzle",
	"index::home_card_label_crowdfunding_1": "Mga protestang EndSARS",
	"index::home_card_label_crowdfunding_2": "Hindi mapipigilang pera",
	"index::home_card_label_crowdfunding_3": "Pondohan ang iyong proyekto",
	"index::home_card_label_crypto": "Ano ang pinagkaiba?",
	"index::home_card_label_energy_1": "Pagpapatatag ng grid",
	"index::home_card_label_energy_4": "Demand response",
	"index::home_card_label_energy_5": "Pag-electrify ng kanayunan",
	"index::home_card_label_energy_6": "Mga insentibo para sa renewable",
	"index::home_card_label_environment_1": "Pagbabawas ng methane",
	"index::home_card_label_environment_2": "Iniligtas ang isang national park",
	"index::home_card_label_environment_3": "Pinaka-greenest na industriya",
	"index::home_card_label_environment_4": "Binabawasan ang flared gas",
	"index::home_card_label_equality_1": "Pag-asa at pagkakataon",
	"index::home_card_label_equality_2": "Isang game changer",
	"index::home_card_label_food_1": "Mga presyo ng pagkain",
	"index::home_card_label_food_2": "Mga sakahan at lupa",
	"index::home_card_label_freedom_1": "Mga awtoritaryan na rehimen",
	"index::home_card_label_freedom_2": "Isang natatanging kasangkapan",
	"index::home_card_label_get_started_1": "Mga pangunahing kaalaman para sa baguhan",
	"index::home_card_label_get_started_2": "Ang iyong unang wallet",
	"index::home_card_label_get_started_3": "Bumili ng Bitcoin",
	"index::home_card_label_gold": "Alin ang mas mabuti?",
	"index::home_card_label_housing_1": "Abot-kayang pabahay",
	"index::home_card_label_human_rights_1": "Pagpapatupad ng karapatang pantao",
	"index::home_card_label_human_rights_2": "Adoption sa grassroots",
	"index::home_card_label_human_rights_3": "Pandaigdigang epekto",
	"index::home_card_label_inflation": "Mas mahusay na pera ang Bitcoin",
	"index::home_card_label_networks_1": "Live na pagtingin sa network",
	"index::home_card_label_networks_2": "Ihambing natin",
	"index::home_card_label_payments_1": "Ano ang pinagkaiba?",
	"index::home_card_label_payments_2": "Mabilis at murang mga bayad",
	"index::home_card_label_payments_3": "Mga remittance",
	"index::home_card_label_payments_4": "Tumanggap ng mga bayad",
	"index::home_card_label_politics_1": "Pampulitikang paradox",
	"index::home_card_label_politics_2": "Kumilos",
	"index::home_card_label_property_rights_1": "Ihambing natin",
	"index::home_card_label_property_rights_2": "Tunay na pagmamay-ari",
	"index::home_card_label_salary": "Protektahan ang iyong sahod",
	"index::home_card_label_self_custody_1": "Gabay sa Bitcoin wallet",
	"index::home_card_label_self_custody_2": "Ang pinakamahalagang hakbang",
	"index::home_card_label_self_custody_3": "Sobrenong pera",
	"index::home_card_label_war_1": "Tapusin ang walang katapusang digmaan",
	"index::home_card_label_war_2": "Pagtulong sa mga beterano",
	"index::home_card_label_war_3": "Pagtakas sa panahon ng digmaan",
	"index::home_h1":
		"Ang Bitcoin ay mas mahusay na pera na bumubuo ng mas magandang mundo.",
	"index::home_nav_about": "Tungkol sa",
	"index::home_nav_get_involved": "Makisali",
	"index::home_nav_learn": "Matuto",
	"index::home_source_prefix": "Pinagmulan:",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Makisali at ipakalat ang Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Gusto mo bang tumulong na buuin ang Bitcoin circular economy? Ang pinakamadaling paraan ay tumulong sa mga lokal na negosyo na simulan ang pagtanggap ng mga bayad sa Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"May kilala ka bang negosyo na maaaring bukás dito? Ipadala ang may-ari sa aming",
	"get-involved::get_involved_business_content_3":
		"Bitcoin business page.",
	"get-involved::get_involved_description":
		"Pinapadali ng aming mga libreng resource ang pagkalat ng adoption ng Bitcoin. Mga sticker, flyer, mga „Bitcoin Accepted Here“ sticker para sa mga negosyo, at isang open-source codebase na maaaring pag-ambagan ng kahit sino.",
	"get-involved::get_involved_header": "Makisali at ipakalat ang Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Maaari kang tumulong na baguhin iyon. Gumawa kami ng ilang libreng resource upang gawing mas madali ang pagkalat ng pag-asa na dala ng Bitcoin sa mga nasa paligid mo.",
	"get-involved::get_involved_biz_stickers_note":
		"Tumatanggap na ba ng Bitcoin? Ipaalam sa mga kustomer gamit ang aming mga libreng „Bitcoin Accepted Here“ sticker. Ipapadala namin ang isang pack sa anumang address sa USA o Canada, o maaari mong i-print ang iyong sarili kahit saan sa mundo.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Mga „accepted here“ sticker",
	"get-involved::get_involved_card_biz_stickers_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Mga libreng „Bitcoin Accepted Here“ sticker para sa iyong negosyo",
	"get-involved::get_involved_card_business_label": "Bitcoin para sa negosyo",
	"get-involved::get_involved_card_business_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Lahat ng kailangan ng isang negosyo upang simulan ang pagtanggap ng mga bayad sa Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Mga printable na flyer",
	"get-involved::get_involved_card_flyers_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"I-download at i-print ang isang libreng Bitcoin flyer",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source": "Pinagmulan: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Mag-ambag sa bitcoin.rocks sa GitHub",
	"get-involved::get_involved_card_stickers_label": "Mga libreng sticker",
	"get-involved::get_involved_card_stickers_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Humiling ng libreng pack ng Bitcoin sticker na ipapadala sa iyong pintuan",
	"get-involved::get_involved_flyers_content_1":
		"Ang mga flyer ay isa sa pinakamadaling paraan upang ipakilala ang Bitcoin sa iyong komunidad. Mag-download ng libreng printable na Bitcoin flyer, mag-print ng kasing dami ng kopya na gusto mo, at ipaskil ang mga ito sa mga community board, sa mga coffee shop, sa mga meetup, o saanman nagtitipun-tipon ang mga tao.",
	"get-involved::get_involved_flyers_content_2":
		"Bawat flyer ay may matibay na headline at QR code na nagpapadala sa mga nag-uusisang mambabasa sa bitcoin.rocks upang matuto pa.",
	"get-involved::get_involved_flyers_content_3":
		"Hindi tulad ng mga sticker, ang mga flyer ay maaaring i-print on demand mula kahit saan sa mundo — kailangan mo lang ng printer at ilang minuto.",
	"get-involved::get_involved_flyers_header": "Mag-print at mag-post ng flyer",
	"get-involved::get_involved_flyers_image_alt":
		"Preview ng libreng printable na Bitcoin flyer mula sa bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"Ang bitcoin.rocks ay isang libre, open-source na proyekto na lisensyado sa ilalim ng MIT License. Ang aming misyon ay mapabilis ang adoption ng Bitcoin sa pamamagitan ng edukasyon — at hindi namin ito magagawa nang mag-isa.",
	"get-involved::get_involved_github_content_2":
		"Developer ka man, designer, manunulat, o tagasalin, may paraan kang makatulong. Lalo kaming malugod na tinatanggap ang mga contributor na maaaring isalin ang aming nilalaman sa mas maraming wika upang mas maraming tao sa buong mundo ang matuto tungkol sa Bitcoin sa kanilang sariling wika.",
	"get-involved::get_involved_github_content_3":
		"I-fork ang repository, magbukas ng pull request, mag-file ng isyu, o i-star lang ang proyekto upang ipakita ang iyong suporta. Bawat ambag ay tumutulong na maabot ng Bitcoin ang mas maraming tao.",
	"get-involved::get_involved_github_header": "Mag-ambag sa GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Libreng pack ng Bitcoin text sticker mula sa bitcoin.rocks",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon at Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_mobile_app": "Mobile app",
	"lightning::lightning_s1_c4": "Tingnan ang aming",
	"lightning::lightning_grid_heading": "Mga sikat na Lightning wallet",
	"lightning::lightning_hardware_cta_label": "Mga hardware wallet",
	"lightning::lightning_header_subtitle":
		"Pinapayagan ka ng Lightning na magpadala ng Bitcoin sa loob ng ilang segundo sa kabahagi ng isang sentimo — pumili ng wallet na ang trade-off ay tumutugma sa kung magkano ang Bitcoin na balak mong gastusin.",
	"lightning::lightning_s1_c4_end": "para sa karagdagang impormasyon.",
	"lightning::lightning_s1_c4_link": "Gabay sa Bitcoin Hardware Wallet",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning wallet",
	"lightning::sources_breez_lightning":
		"Breez — Self-custodial na Lightning wallet",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Dokumentasyon ng Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — Custodial na Lightning wallet",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose": "Bitcoin.org — Pumili ng iyong Wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Mga Review ng Metal Bitcoin Seed Storage",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::wallets_air_gap_camera": "Air-gap mode + camera",
	"wallets::wallets_air_gap_mode": "Air-gap mode",
	"wallets::wallets_battery": "Rechargeable na baterya",
	"wallets::wallets_mobile_app": "Mobile app",
	"wallets::wallets_qr_scanner": "QR code scanner",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Self-custody na Bitcoin wallet",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardware wallet",
	"wallets::sources_coldcard_mk5": "Coinkite — Coldcard MK5 hardware wallet",
	"wallets::sources_coldcard_q": "Coinkite — Coldcard Q hardware wallet",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardware wallet",
	"wallets::sources_seedsigner":
		"SeedSigner — Open-source DIY na Bitcoin signing device",
	"wallets::wallets_grid_heading": "Mga sikat na Bitcoin wallet",
	"wallets::wallets_header_subtitle":
		"Isang hakbang-hakbang na gabay sa pagpili ng wallet, pagprotekta sa iyong mga key, at pagkuha ng buong kontrol sa iyong Bitcoin.",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android at web",
	"nostr/index::nostr_platform_web": "Web browser",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Ang Nostr ay isang bagong desentralisadong protokol para sa online na komunikasyon — walang iisang kumpanyang kumokontrol nito, ang Bitcoin zaps ay nakapaloob nang nativ, at maaari kang lumipat sa pagitan ng mga kliyente nang hindi nawawala ang mga follower.",
	"nostr/index::nostr_amethyst_f1": "Maraming feature at customization",
	"nostr/index::nostr_amethyst_f2": "Nangangailangan ng hiwalay na Bitcoin wallet",
	"nostr/index::nostr_amethyst_f3": "100% libre",
	"nostr/index::nostr_damus_f1": "Pamilyar na interface na kahawig ng Twitter",
	"nostr/index::nostr_damus_f2": "Nangangailangan ng hiwalay na Bitcoin wallet",
	"nostr/index::nostr_damus_f3": "100% libre",
	"nostr/index::nostr_download_heading":
		"Mag-download ng libreng Nostr client",
	"nostr/index::nostr_download_intro":
		"Ang mga Nostr client ay mga libreng app na nagpapahintulot sa iyong magbasa at mag-post sa Nostr network. Lahat ng ito ay interoperable — maaari kang lumipat ng client anumang oras at panatilihin ang iyong mga follower at content.",
	"nostr/index::nostr_hero_subtitle":
		"Ang Nostr ay isang bagong desentralisadong protokol para sa online na komunikasyon — walang iisang kumpanyang kumokontrol nito, ang Bitcoin zaps ay nakapaloob, at maaari kang lumipat sa pagitan ng mga app nang hindi nawawala ang iyong mga follower.",
	"nostr/index::nostr_hero_title": "Ano ang Nostr?",
	"nostr/index::nostr_intro_c1":
		"Ang Nostr ay katulad ng email: walang nagmamay-ari ng protokol, sinuman ay maaaring bumuo ng app sa ibabaw nito, at maaari kang pumili ng anumang app na pinakagusto mo. Hindi tulad ng Twitter o Facebook, walang sentral na kumpanyang maaaring mag-censor, mag-deplatform, o mag-deboost sa iyo.",
	"nostr/index::nostr_intro_c2":
		"Sa ibaba ang maikling bersyon kung bakit mahalaga ang Nostr — pagkatapos ay bawat libreng Nostr client na kailangan mo upang makapagsimula ngayon.",
	"nostr/index::nostr_iris_f1":
		"Sobrang simple — walang kailangang i-install",
	"nostr/index::nostr_iris_f2":
		"Madaling paraan upang subukan ang Nostr gamit ang test account",
	"nostr/index::nostr_iris_f3": "100% libre",
	"nostr/index::nostr_learn_more_label": "MAG-EXPLORE PA",
	"nostr/index::nostr_learn_more_title":
		"Matuto pa tungkol sa Nostr sa nostr.how",
	"nostr/index::nostr_primal_f1": "Inirerekomendang unang client",
	"nostr/index::nostr_primal_f2":
		"May kasamang Bitcoin zap wallet",
	"nostr/index::nostr_primal_f3": "100% libre",
	"nostr/index::nostr_s1": "Protokol, hindi platform",
	"nostr/index::nostr_s1_c1":
		"Ang Nostr ay isang bagong protokol na nagpapahintulot sa iyong mag-communicate online nang walang takot sa censorship, deplatforming, o deboosting.",
	"nostr/index::nostr_s1_c2":
		"Ang mga platform tulad ng Twitter at Facebook ay kontrolado ng iisang kumpanya, ngunit walang kumokontrol sa Nostr protocol.",
	"nostr/index::nostr_s2": "Kalayaan na lumipat",
	"nostr/index::nostr_s2_c1":
		"Ang Nostr ay katulad ng email. Walang kumokontrol sa email protocol, at sinuman ay maaaring bumuo ng client (tulad ng Gmail, Hotmail, atbp.) sa ibabaw nito.",
	"nostr/index::nostr_s2_c2":
		"Walang kumokontrol din sa Nostr protocol, at sinuman ay maaaring bumuo ng client (tulad ng Damus, Amethyst, atbp.) sa ibabaw nito.",
	"nostr/index::nostr_s2_c3":
		"Kung hindi mo gusto kung paano gumagana ang isang client, maaari mong walang-pasubaling ilipat ang iyong Nostr account sa ibang client nang hindi nawawala ang iyong mga follower o content.",
	"nostr/index::nostr_s3": "Nakapaloob ang Bitcoin",
	"nostr/index::nostr_s3_c1":
		"Ang Bitcoin ay nakapaloob nang nativ sa Nostr protocol. Kung makakita ka ng content na gusto mo, madali kang makakapag-zap ng Bitcoin sa isang tao bilang pasasalamat!",
	"nostr/index::nostr_s3_c2":
		"Sa mga sentralisadong platform tulad ng Twitter at Facebook, ang sentralisadong kumpanya ang kumikita mula sa iyong content. Ngunit sa mga bukás na protocol tulad ng Nostr, ikaw ang kumikita mula sa iyong content.",
	"nostr/index::sources_damus": "Damus — iPhone Nostr client",
	"nostr/index::sources_iris": "Iris — Browser-based na Nostr client",
	"nostr/index::sources_nostr_how": "nostr.how — Ano ang Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — Open-source na specification",
	"nostr/index::sources_primal":
		"Primal — Nostr client na may kasamang Bitcoin zap wallet",
	"nostr/index::what_is_nostr": "Ano ang Nostr?",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::placeholder_address_line_1": "Address Line 1",
	"stickers::placeholder_postal_code": "Postal Code",
	"stickers::placeholder_zip_code": "Zip Code",
	"stickers::stickers_flyers_link_before":
		"Habang nariyan ka na, mag-print at mag-post ng iyong sariling",
	"stickers::stickers_instructions_1":
		"Ilagay ang iyong mailing address at ipapadala namin sa iyo ang isang libreng Bitcoin Sticker Pack sa koreo. Ang iyong mga sticker ay ipapadala sa isang plain na puting sobre.",
	"stickers::stickers_btn_choose_pack": "Piliin ang pack na ito",
	"stickers::stickers_bulk_c1": "Gusto mo ng higit pa sa ilang sticker?",
	"stickers::stickers_bulk_c2":
		"Mag-order in bulk mula sa parehong printer na ginagamit namin",
	"stickers::stickers_bulk_c3":
		"— mas marami ang bibilhin mo, mas mura ang bawat sticker.",
	"stickers::stickers_bulk_cta": "Mamili ng mga sticker in bulk",
	"stickers::stickers_bulk_header": "Mag-order ng mga sticker in bulk",
	"stickers::stickers_hero_subtitle":
		"Mag-order ng libreng pack ng mga Bitcoin sticker at ipaskil ang mga ito sa publiko upang matulungan ang mas maraming tao na matuto tungkol sa Bitcoin.",
	"stickers::stickers_hero_title": "Mga libreng Bitcoin sticker",
	"stickers::stickers_intro_c1":
		"Ang aming misyon ay tulungan kang mag-orange pill ng mas maraming tao sa pamamagitan ng paglalagay ng mga Bitcoin sticker sa publiko. Lahat ng aming mga sticker ay may QR code na naglilink sa mga educational na pahina tungkol sa",
	"stickers::stickers_intro_c3": "inflation",
	"stickers::stickers_intro_c4":
		"Pumili ng sticker pack sa ibaba at piliin kung paano mo gustong makuha ang mga ito — magpapadala kami ng libreng pack sa kahit sino sa USA o Canada, o maaari kang mag-print ng iyong sarili kahit saan sa mundo.",
	"stickers::stickers_mail_header":
		"Ipapadala namin sa koreo ang iyong mga libreng sticker",
	"stickers::stickers_next_print_flyers": "Patuloy na ipakalat",
	"stickers::stickers_next_print_flyers_desc":
		"Mag-print ng mga libreng Bitcoin flyer upang ipaskil sa publiko",
	"stickers::stickers_option_bulk": "📦 Pandaigdigan — Mag-order in bulk",
	"stickers::stickers_option_canada": "🇨🇦 Canada — Libre sa koreo",
	"stickers::stickers_option_print":
		"🌍 Pandaigdigan — I-print ang sariling akin",
	"stickers::stickers_option_usa": "🇺🇸 USA — Libre sa koreo",
	"stickers::stickers_print_c1":
		"Maaari kang lumahok sa pamamagitan ng pag-print ng iyong sariling mga sticker, kahit saan ka nakatira. I-click ang iyong wika sa ibaba upang i-download ang mga sticker file at instruksyon sa pag-print.",
	"stickers::stickers_print_c2":
		"Hindi lahat ng sticker ay magagamit sa lahat ng wika.",
	"stickers::stickers_print_header":
		"I-print ang iyong sariling mga sticker file",
	"stickers::stickers_request_c1":
		"Punan ang form sa ibaba upang humiling ng mga sticker file sa iyong lokal na wika. Ipapaalam namin sa iyo kapag handa na ang mga ito.",
	"stickers::stickers_request_header": "Hindi mo nakikita ang iyong wika?",
	"stickers::stickers_share_c2": "Sundan kami sa Nostr sa pamamagitan ng paghahanap ng",
	"stickers::stickers_share_c3": "sa anumang Nostr client.",
	"stickers::stickers_signs_pack_description":
		"Mga warning, danger, at caution-style na mga sign na may mensahe ng Bitcoin — dinisenyo upang makakuha ng atensyon at mapahinto ang mga tao upang basahin.",
	"stickers::stickers_step_1_description":
		"Bawat pack ay may iba't ibang set ng mga Bitcoin sticker na may QR code na nagtuturo sa mga tao tungkol sa Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "HAKBANG 1",
	"stickers::stickers_step_1_header": "Piliin ang iyong sticker pack",
	"stickers::stickers_step_2_description":
		"Magpapadala kami ng libreng pack sa mga address sa USA at Canada. Saanman sa mundo, maaari kang mag-print ng iyong sarili o mag-order in bulk.",
	"stickers::stickers_step_2_eyebrow": "HAKBANG 2",
	"stickers::stickers_step_2_header":
		"Paano mo gustong makuha ang iyong mga sticker?",
	"stickers::stickers_text_pack_description":
		"Pinaghalong mga Bitcoin slogan at one-liner na dinisenyo upang pukawin ang pag-uusisa sa mga pampublikong lugar.",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"I-print ang iyong sariling mga Bitcoin sticker gamit ang mga Bitcoin sticker file na ito.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Natanggap ang kahilingan 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Mag-order in bulk",
	"sticker-success::sticker_success_btn_share_on_nostr": "Mag-share sa Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Ano ang Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Gusto mo ng mas maraming sticker?",
	"sticker-success::sticker_success_hero_title":
		"Papunta na ang iyong mga sticker 🎉",
	"sticker-success::sticker_success_share_header":
		"Ibahagi ang iyong mga sticker spot",
	"sticker-success::sticker_success_tips_header": "Magagandang sticker spot",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ACCOUNTING",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "MGA MAPA NG MERCHANT",
	"business/index::biz_label_rewards": "MGA REWARDS",
	"business/index::biz_label_stickers": "MGA STICKER",
	"business/index::biz_label_wallets": "MGA WALLET",
	"business/index::biz_meta_description":
		"Tumanggap ng Bitcoin sa iyong negosyo para sa mas mababang bayarin, agarang settlement, walang chargeback, at mas maraming kustomer.",
	"business/index::business_hero_subtitle":
		"Tumanggap ng mga bayad na may mas mababang bayarin, mabayaran agad, at maabot ang milyon-milyong bagong kustomer — na may zero kontrata at zero nakatagong gastos.",
	"business/index::business_intro_c1":
		"Ang Bitcoin ay nagbibigay sa iyong negosyo ng mas mabilis, mas mura, mas pribadong paraan ng pagbabayad. Walang middleman. Walang chargeback. Walang kontrata. Pera lang na nasi-settle sa loob ng ilang segundo, direkta mula sa iyong mga kustomer papunta sa iyo.",
	"business/index::business_intro_c2":
		"Sa ibaba ang maikling bersyon kung bakit maganda ang Bitcoin para sa negosyo — at sa ibaba nito, bawat resource na kailangan mo upang simulan ang pagtanggap nito ngayon.",
	"business/index::business_resources_heading":
		"Lahat ng kailangan mo upang tumanggap ng Bitcoin",
	"business/index::business_resources_intro":
		"Pag-aralan ang mga resource na ito sa iyong sariling pace. Bawat isa ay isang maikli, praktikal na gabay.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Tinatanggap dito ang Bitcoin",
	"business/why::why_good_for_you": "Bakit maganda din ang Bitcoin para sa iyo",
	"business/why::why_learn_more_lowercase": "Matuto pa →",
	"business/why::why_s1_c1":
		"Nangyayari ang inflation kapag mas maraming pera ang nai-print o nalikha mula sa wala. Ginagawa nitong mas mababa ang halaga ng pera sa iyong bulsa sa paglipas ng panahon — at iyon ang dahilan kung bakit patuloy na tumataas ang mga presyo taon-taon.",
	"business/why::why_s1_c2":
		"Ang Bitcoin ay may nakapirming supply na 21 milyong barya. Walang gobyerno, bangko, o kumpanya ang maaaring mag-print ng higit pa nito. Ang iyong mga ipon sa Bitcoin ay pinapanatili ang halaga sa paglipas ng panahon sa halip na tahimik na nawawalan nito.",
	"business/why::why_s2_c1":
		"Maraming bangko sa US ang bumagsak sa nakaraang ilang taon dahil sa mga bank run. Nang masyadong maraming kustomer ang sabay-sabay na sumubok mag-withdraw, walang sapat na cash ang mga bangko upang bayaran ang lahat.",
	"business/why::why_s2_c2":
		"Sa halip na basta hawakan ang iyong pera, ipinapautang at ini-invest ng mga bangko ang karamihan dito. Kung lumala ang mga investment na iyon — o kung mawalan ng kumpiyansa ang mga depositor — maaaring mabigo ang bangko, at maaaring ma-freeze o mawala ang iyong mga deposito.",
	"business/why::why_s2_c3":
		"Sa Bitcoin, maaari mong direktang hawakan ang iyong sariling pera sa iyong sariling wallet. Walang bangko. Walang tagapamagitan. Walang bank run.",
	"business/why::why_s3_c1":
		"Hindi tulad ng mga credit card, PayPal, o tradisyunal na bank account, ang Bitcoin ay hindi nangangailangan ng pahintulot ng kahit sino upang gamitin.",
	"business/why::why_s3_c2":
		"Walang maaaring mag-freeze ng iyong account, mag-block ng bayad, o pumigil sa iyo mula sa network. Ito ang unang financial system sa kasaysayan na maaari mong gamitin nang malayang, walang takot sa censorship o pagkumpiska.",
	"business/why::why_s4_c1":
		"Ang Bitcoin ay madalas hindi naiintindihan, ngunit tahimik itong gumagawa ng maraming kabutihan sa mundo.",
	"business/why::why_s4_c2":
		"Tumulong ito sa mga aktibista ng karapatang pantao na lumaban para sa kalayaan, binawasan ang global methane emissions mula sa mga landfill at oil field, pinatatag ang mga electric grid, at pinondohan ang mga pampublikong kalakal tulad ng mga national park.",
	"business/why::why_biz_s1": "Mas mababang bayarin, mas marami para sa negosyo",
	"business/why::why_biz_s1_c1":
		"Nilalaktawan ng mga bayad sa Bitcoin ang mga bangko at credit card company na kumukuha ng 2–3% mula sa bawat benta. Mas marami ang naiipon ng negosyo mula sa binabayad mo — na madalas ay nangangahulugang mas magagandang presyo at mas magandang serbisyo para sa iyo.",
	"business/why::why_biz_s2":
		"Agarang settlement, walang chargeback",
	"business/why::why_biz_s2_c1":
		"Ang mga bayad sa Bitcoin ay nasi-settle sa loob ng ilang segundo, direkta mula sa iyong wallet papunta sa negosyo. Walang paghihintay ng ilang araw para sa bangko na ipasa ang pondo, at walang magastos na chargeback dispute — kaya nakakapokus ang negosyo sa pagseserbisyo sa mga kustomer sa halip na lumaban sa pandaraya.",
	"business/why::why_biz_s3":
		"Libreng tanggapin, bukás sa lahat",
	"business/why::why_biz_s3_c1":
		"Walang mga kontrata, buwanang bayarin, o gastos sa setup para tumanggap ng Bitcoin ang isang negosyo. At milyon-milyong Bitcoin user sa buong mundo ang aktibong naghahanap ng mga merchant na tumatanggap nito — na nagbibigay sa negosyong ito ng libreng exposure sa mga bagong kustomer.",
	"business/why::why_business_cta_intro":
		"May negosyo at gusto mong simulan ang pagtanggap ng Bitcoin?",
	"business/why::why_business_cta_link": "Tingnan kung paano ito gumagana →",
	"business/why::why_for_business":
		"Bakit maganda ang Bitcoin para sa negosyong ito",
	"business/why::why_for_business_intro":
		"Pinapayagan ng pagtanggap ng Bitcoin ang isang negosyo na panatilihin ang mas malaking bahagi ng bawat benta, mabayaran agad nang walang chargeback, at maabot ang pandaigdigang audience ng mga Bitcoin user — lahat na may zero kontrata at zero buwanang bayarin.",
	"business/why::why_good_for_you_intro":
		"Ang Bitcoin ay hindi lamang kapaki-pakinabang sa cash register — ito ay mas magandang anyo ng pera na nagpoprotekta sa iyong mga ipon, iyong privacy, at iyong kalayaang magtransact. Narito ang mabilis na overview.",
	"business/why::why_hero_subtitle":
		"Kaka-scan mo lang ng isang „Bitcoin Accepted Here“ sticker. Narito kung bakit napakagandang balita iyan — para sa negosyong ito, at para sa iyo.",
	"business/why::why_intro_c1":
		"Ang negosyong pinupuntahan mo ay tumatanggap ng Bitcoin — isang modernong, open-source na payment network na maaaring gamitin ng kahit sino, kahit saan sa mundo, walang mga bangko o middleman na kumukuha ng bahagi.",
	"business/why::why_intro_c2":
		"Sa ibaba ang maikling bersyon kung bakit maganda para sa negosyong ito ang pagtanggap ng Bitcoin, at kung bakit maganda ang paggamit ng Bitcoin para sa iyo bilang kustomer.",
	"business/why::why_next_business_label": "TUMANGGAP NG BITCOIN",
	"business/why::why_next_business_title":
		"Tumanggap ng Bitcoin sa iyong negosyo",
	"business/why::why_next_buy_label": "BUMILI NG BITCOIN",
	"business/why::why_next_buy_title": "Bumili ng iyong unang Bitcoin",
	"business/why::why_next_learn_label": "MATUTO PA",
	"business/why::why_next_learn_title": "Matuto pa tungkol sa Bitcoin",
	"business/why::why_next_wallet_label": "KUMUHA NG WALLET",
	"business/why::why_next_wallet_title":
		"Kumuha ng sarili mong Bitcoin wallet",
	"business/why::why_whats_next_heading": "Saan susunod?",
	"business/why::why_whats_next_intro":
		"Kung ito ang iyong unang scan ng isang Bitcoin sticker, narito ang pinaka-kapaki-pakinabang na lugar na pupuntahan mula rito.",
});

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"Isang gabay sa simpleng wika sa pagtanggap ng Bitcoin sa iyong mga libro — mga hybrid wallet, cost basis, capital gains, at kailan tatawag ng accountant.",
	"business/accounting::accounting_s1_c1":
		"Ang pinakasimpleng paraan upang tumanggap ng Bitcoin ay sa pamamagitan ng hybrid wallet na awtomatikong nagbebenta ng 100% ng Bitcoin na natatanggap mo para sa dolyar (o sa iyong lokal na pera) sa sandaling pumasok ang bayad.",
	"business/accounting::accounting_s1_c2":
		"Sa setup na ito, mukhang ganoon din ang iyong mga libro tulad ngayon — ang huling numero ay nasa dolyar, sa bawat pagkakataon. Walang cost basis, walang capital gains, walang bagong spreadsheet.",
	"business/accounting::accounting_s2":
		"Kung magpapanatili ka ng ilang Bitcoin: pagsubaybay ng iyong cost basis",
	"business/accounting::accounting_s2_c1":
		"Pinipili ng ilang negosyo na panatilihin ang isang bahagi ng Bitcoin na natatanggap nila sa halip na awtomatikong i-convert ang lahat. Kung ikaw nga, ang pangunahing dagdag na hakbang ay ang pagsubaybay ng iyong cost basis — ang dolyar na halaga ng bawat bayad sa Bitcoin sa araw na natanggap mo ito.",
	"business/accounting::accounting_s2_c2":
		"Kahit na iniisip mo ang iyong negosyo nang ganap sa Bitcoin, gusto pa rin ng karamihan sa mga awtoridad ng buwis na mai-report ang dolyar na halaga. Ang magandang balita: dalawang numero lang bawat transaksyon — ang halaga ng natanggap na Bitcoin at ang dolyar na halaga nito sa araw na iyon.",
	"business/accounting::accounting_s2_c3":
		"Gamitin ang mga tool sa ibaba upang i-automate ang lookup para hindi mo na kailangang tingnan ang presyo araw-araw.",
	"business/accounting::accounting_s3":
		"Paggastos o pagbenta ng Bitcoin na pinanatili mo",
	"business/accounting::accounting_s3_c1":
		"Kung awtomatiko mong kino-convert ang bawat bayad sa dolyar, laktawan ang seksyon na ito — hindi ito naaangkop sa iyo.",
	"business/accounting::accounting_s3_c2":
		"Kung nagpanatili ka ng ilang Bitcoin at sa kalaunan ay nagdesisyong gastusin o ibenta ito, idagdag ang sale price sa parehong cost-basis spreadsheet. Ang pagkakaiba sa pagitan ng halaga ng Bitcoin nang natanggap mo ito at ang halaga nito kapag ginastos o ibinenta mo ay isang capital gain o loss.",
	"business/accounting::accounting_s3_c3": "Dalawang mabilisang halimbawa:",
	"business/accounting::accounting_s4":
		"Kailangan ng pro na nagsasalita ng Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Kung mas gusto mong ibigay ito sa iba — o ang iyong Bitcoin accounting ay mas kumplikado kaysa sa kayang harapin ng hybrid wallet — lubos naming inirerekomenda ang Satoshi Pacioli Accounting Services, isang firm na espesyalista sa Bitcoin accounting para sa mga negosyo.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin accounting para sa iyong negosyo",
	"business/accounting::accounting_card_bpr_label": "PRESYO NG BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Tingnan ang kasalukuyan o pampakasaysayang dolyar na presyo ng Bitcoin",
	"business/accounting::accounting_card_pacioli_label": "MGA BITCOIN ACCOUNTANT",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL IMPORT",
	"business/accounting::accounting_card_spreadsheet_title":
		"Awtomatikong i-pull ang mga presyo ng Bitcoin sa Excel",
	"business/accounting::accounting_card_wallets_label": "MGA HYBRID WALLET",
	"business/accounting::accounting_card_wallets_title":
		"Tingnan ang aming mga inirerekomendang business wallet",
	"business/accounting::accounting_disclaimer":
		"Ang gabay na ito ay para lamang sa impormasyon at hindi dapat ituring na tax advice. Para sa tax advice na partikular sa iyong sitwasyon, mangyaring kumonsulta sa isang kwalipikadong accountant.",
	"business/accounting::accounting_disclaimer_label": "Mangyaring tandaan",
	"business/accounting::accounting_example_feb_1": "Peb 1",
	"business/accounting::accounting_example_gain_badge": "Capital gain",
	"business/accounting::accounting_example_gain_explain":
		"Magta-record ka ng $10 capital gain.",
	"business/accounting::accounting_example_jan_1": "Ene 1",
	"business/accounting::accounting_example_loss_badge": "Capital loss",
	"business/accounting::accounting_example_loss_explain":
		"Magta-record ka ng $10 capital loss.",
	"business/accounting::accounting_example_received_label": "Natanggap",
	"business/accounting::accounting_example_sold_label":
		"Ibinenta o ginastos",
	"business/accounting::accounting_hero_subtitle":
		"Hindi kinakailangang gawing kumplikado ang iyong accounting kapag tumatanggap ng Bitcoin sa iyong negosyo. Narito ang maikling bersyon — kasama ang mga tool at pro upang gawing walang sakit ito.",
	"business/accounting::accounting_intro_c1":
		"Kung tumatanggap ka na ng cash o card, ang pagdaragdag ng Bitcoin sa mga libro ng iyong negosyo ay mas simple kaysa sa hitsura nito. May dalawang landas ka: awtomatikong i-convert ang bawat bayad sa Bitcoin sa dolyar sa sandaling dumating ito (walang bagong accounting na kailangan), o panatilihin ang ilan bilang Bitcoin (ilang dagdag na numero na susubaybayan).",
	"business/accounting::accounting_intro_c2":
		"Inilalakad ka ng gabay na ito sa parehong landas — para makapili ka ng angkop sa iyong negosyo at simulan ang pagtanggap ng Bitcoin nang may kumpiyansa.",
	"business/accounting::accounting_s1":
		"Ang madaling landas: awtomatikong i-convert sa dolyar",
	"business/accounting::accounting_s3_c6":
		"Iyon na lang. Ang underlying na matematika ay magkapareho sa kung paano ina-account ang anumang appreciating o depreciating na asset.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Kasalukuyan at pampakasaysayang dolyar na presyo ng Bitcoin",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin accounting para sa mga negosyo",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — I-import ang mga presyo ng cryptocurrency sa Excel",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_feature_bitcoin_only": "Bitcoin-only na wallet",
	"business/wallets::wallets_feature_hybrid": "Hybrid na wallet",
	"business/wallets::wallets_feature_online_store":
		"Pagsasama sa online store",
	"business/wallets::biz_wallets_meta_description":
		"Lahat ng Bitcoin wallet ay interoperable — pumili ng angkop sa iyong negosyo. Libre, agarang settlement, walang chargeback.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-only na Lightning wallet",
	"business/wallets::sources_ibex":
		"IBEX — Imprastraktura ng Lightning payments",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin payment processor",
	"business/wallets::sources_square":
		"Square — Tumanggap ng mga bayad sa Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin invoicing para sa mga negosyo",
	"business/wallets::wallets_hero_subtitle":
		"Libre ang mga Bitcoin wallet. Pumili ng angkop sa iyong negosyo — in-person, online, o invoice-based — at simulan ang pagtanggap ng Bitcoin sa loob ng ilang minuto.",
	"business/wallets::wallets_section_invoice":
		"Mga wallet para sa mga invoice-based na negosyo",
	"business/wallets::wallets_section_invoice_intro":
		"Kung nagpapadala ka ng invoice sa mga kliyente (consulting, freelancing, B2B services), gumamit ng wallet na binuo sa paligid ng invoicing. Magbabayad ang iyong kliyente ng Bitcoin invoice sa ilang click.",
	"business/wallets::wallets_section_multiple":
		"Mga wallet para sa mga negosyong may maraming empleyado",
	"business/wallets::wallets_section_multiple_intro":
		"Kung mayroon kang team na tumatanggap ng mga bayad sa register, pumili ng wallet na sumusuporta ng maraming employee login — para bawat empleyado ay may sarili niyang PIN at panatilihing malinis ang iyong audit trail kung sino ang kumuha ng bawat bayad.",
	"business/wallets::wallets_section_online":
		"Mga wallet para sa mga online na negosyo",
	"business/wallets::wallets_section_online_intro":
		"Nagbebenta sa website? Ang mga wallet na ito ay nag-plug sa iyong online store at tumatanggap ng Bitcoin mula sa anumang kustomer, kahit saan sa mundo — walang chargeback, walang merchant account na kailangan.",
	"business/wallets::wallets_section_sole":
		"Mga wallet para sa mga indibidwal na pagmamay-ari na negosyo",
	"business/wallets::wallets_section_sole_intro":
		"Kung nagpapatakbo ka ng tindahan, café, studio, o serbisyo nang mag-isa, gagana ang alinman sa mga wallet na ito. Pumili batay sa kung gusto mong panatilihin ang mga bayad sa Bitcoin o awtomatikong i-convert ang bahagi ng bawat bayad sa iyong lokal na pera.",
	"business/wallets::wallets_strike_note":
		"Pinapayagan ng Strike Business ang pagtanggap ng mga bayad sa Bitcoin at Lightning na may zero bayarin at agarang settlement. Sumusuporta sa in-person, online, at invoice-based na mga bayad na may opsyonal na auto-conversion sa iyong lokal na pera.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Sabihin sa amin ang tungkol sa iyong negosyo",
	"business/maps::biz_maps_form_intro":
		"Kakaunting detalye lamang ang kailangan namin upang maipalista ka. Ang datos ng address ay itinatago lamang nang sapat upang mai-submit ang iyong negosyo sa mga mapa.",
	"business/maps::biz_maps_hero_subtitle":
		"Ipalista ang iyong negosyo nang libre sa BTC Map — ang bukas, pandaigdigang directory ng mga merchant na tumatanggap ng Bitcoin — para mahanap ka ng mga Bitcoiner sa malapit at gumastos ng Bitcoin sa iyong negosyo.",
	"business/maps::biz_maps_hero_title":
		"Ipalista ang iyong negosyo sa mga Bitcoin merchant map",
	"business/maps::biz_maps_intro_c1":
		"Aktibong naghahanap ang mga Bitcoiner ng mga lugar na pwedeng pagastusan. Ang pagpapalista ng iyong negosyo sa mapa ay naglalagay sa iyo sa harap ng bawat Bitcoin user na naghahanap ng kainan, tindahan, o tirahan sa malapit — sa walang halaga sa iyo.",
	"business/maps::biz_maps_intro_c2":
		"Punan lang ang maikling form sa ibaba at imimbita namin ang iyong negosyo sa BTC Map at iba pang mga Bitcoin merchant map para sa iyo.",
	"business/maps::biz_maps_meta_description":
		"Ipalista ang iyong negosyo nang libre sa BTC Map at iba pang mga Bitcoin merchant map para mahanap ka ng mga Bitcoiner sa malapit.",
	"business/maps::biz_maps_placeholder_address": "Address ng kalye",
	"business/maps::biz_maps_placeholder_category":
		"Kategorya (hal. restawran, café, hotel)",
	"business/maps::biz_maps_placeholder_city": "Lungsod",
	"business/maps::biz_maps_placeholder_country": "Bansa",
	"business/maps::biz_maps_placeholder_name": "Pangalan ng negosyo",
	"business/maps::biz_maps_placeholder_region":
		"Estado / Probinsya / Rehiyon",
	"business/maps::biz_maps_placeholder_website": "Website (opsyonal)",
	"business/maps::biz_maps_view_map_cta": "Tingnan ang BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"Tingnan ang BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Salamat sa pag-submit ng iyong negosyo. Ipapalista ka namin sa mga Bitcoin merchant map sa lalong madaling panahon.",
	"business/maps-success::biz_maps_success_hero_title":
		"Natanggap ang kahilingan 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Ang iyong negosyo ay ililista sa BTC Map at iba pang mga Bitcoin merchant directory sa loob ng 1 hanggang 2 linggo. Sinusuri namin ang bawat submission nang manu-mano upang panatilihing tumpak ang mga mapa.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Sa sandaling live na ang iyong listing, ang mga Bitcoiner sa malapit ay maaaring makahanap ng iyong negosyo at pumunta upang gumastos ng Bitcoin doon.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Ano ang susunod na mangyayari",
	"business/maps-success::biz_maps_success_view_c1":
		"Habang naghihintay ka, tingnan ang BTC Map upang makita ang lumalagong network ng mga negosyong tumatanggap ng Bitcoin sa buong mundo.",
	"business/maps-success::biz_maps_success_view_header":
		"Tingnan kung saan ka lalabas",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"I-download ang mga English na sticker file upang mag-print ng iyong sariling „Bitcoin Accepted Here“ sticker.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"I-print ang iyong sariling „Bitcoin Accepted Here“ sticker sa English upang ipaalam sa iyong mga kustomer na tumatanggap ka ng Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"I-download ang English „Bitcoin Accepted Here“ sticker file",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Salamat sa paghiling ng „Bitcoin Accepted Here“ sticker file sa iyong wika.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Natanggap ang kahilingan 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Gagawa at ila-publish namin ang iyong mga sticker file sa loob ng 3 hanggang 4 na linggo. Sa sandaling handa na, magagawa mong i-download at i-print ang mga ito nang libre mula sa aming sticker files page.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Inilalabas ang mga sticker file in batches, kaya maaaring tumagal ng ilang linggo bago mai-live ang iyong wika. Salamat sa iyong pasensya!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Ano ang susunod na mangyayari",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Mag-order in bulk",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Humiling ng isa pang libreng pack",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Matatanggap mo ang iyong mga libreng „Bitcoin Accepted Here“ sticker sa loob ng 2 hanggang 4 na linggo, sa isang plain na puting sobre na may 3 sticker sa loob.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Papunta na ang iyong mga sticker 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Kung hindi sapat ang 3 sticker para sa iyong negosyo, malaya kang humiling ng isa pang libreng pack — o mag-order in bulk mula sa parehong printer na ginagamit namin.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Kailangan ng mas maraming sticker?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Sa harap ng iyong pintuan o bintana para makita ng mga kustomer bago sila pumasok",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Malapit sa iyong register, POS terminal, o lugar ng pagbabayad",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Sa mga menu, listahan ng presyo, o tip jar",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Huwag idikit ang mga ito sa lugar na hindi mo pag-aari o walang pahintulot na ilagay ang mga ito",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Magagandang lugar na paglagyan ng iyong mga sticker",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Ipaalam sa iyong mga kustomer na tumatanggap ka ng Bitcoin. Mag-order ng libreng pack ng mga „Bitcoin Accepted Here“ sticker upang ipaskil sa iyong negosyo.",
	"business/stickers::biz_stickers_hero_title":
		"Mga libreng „Bitcoin Accepted Here“ sticker",
	"business/stickers::biz_stickers_intro_c1":
		"Ang pagtanggap ng Bitcoin ay kalahati lang ng trabaho — kailangan din malaman ng iyong mga kustomer na ginagawa mo ito. Ang maliliit na „Bitcoin Accepted Here“ sticker na ito ay dinisenyo upang dumikit sa iyong harapan ng pintuan, register, menu, o saanman makikita ito ng mga kustomer bago magbayad.",
	"business/stickers::biz_stickers_intro_c2":
		"Magpapadala kami ng libreng pack kahit saan sa USA o Canada, o maaari kang mag-print ng iyong sarili kahit saan sa mundo.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Canada — Libre sa koreo",
	"business/stickers::biz_stickers_option_print":
		"🌍 Pandaigdigan — I-print ang sariling akin",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 USA — Libre sa koreo",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Salin para sa „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Salin para sa „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Maaari kang mag-print ng iyong sariling „Bitcoin Accepted Here“ sticker, kahit saan ka nakatira. I-click ang iyong wika sa ibaba upang i-download ang mga sticker file at instruksyon sa pag-print.",
	"business/stickers::biz_stickers_print_header":
		"I-print ang iyong sariling mga sticker file",
	"business/stickers::biz_stickers_request_c1":
		"Punan ang form sa ibaba upang humiling ng „Bitcoin Accepted Here“ sticker file sa iyong lokal na wika. Ipapaalam namin sa iyo kapag handa na ang mga ito.",
	"business/stickers::biz_stickers_request_header":
		"Hindi mo nakikita ang iyong wika?",
	"business/stickers::biz_stickers_step_description":
		"Magpapadala kami ng libreng pack sa mga address sa USA at Canada. Saanman sa mundo, maaari kang mag-print ng iyong sarili.",
	"business/stickers::biz_stickers_step_header":
		"Paano mo gustong makuha ang iyong mga sticker?",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Ang mga maikling sagot sa mga tanong na pinakamadalas itanong ng mga merchant bago sila magsimulang tumanggap ng Bitcoin — bayarin, settlement, mga wallet, chargeback, gastos, at iba pa.",
	"business/faq::faq_intro_c1":
		"I-tap ang anumang tanong sa ibaba upang palawakin ang sagot. Kapag handa ka nang magsimulang tumanggap ng Bitcoin, ang mga business resource sa ibaba ng pahina ay maglalakad sa iyo sa bawat hakbang.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unknown = [];

	for (const e of report.entries) {
		const id = `${e.namespace}::${e.key}`;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(T, id)) {
			e.targetTranslation = T[id];
			filled++;
			continue;
		}
	}

	for (const id of Object.keys(T)) {
		const [ns, ...rest] = id.split("::");
		const key = rest.join("::");
		const found = report.entries.find(
			(e) => e.namespace === ns && e.key === key,
		);
		if (!found) {
			unknown.push(id);
		}
	}

	fs.writeFileSync(
		REPORT_PATH,
		JSON.stringify(report, null, "\t") + "\n",
	);
	console.log(
		`translate-rest-part2 (tl): filled ${filled}, already-done ${skipped}`,
	);
	if (unknown.length) {
		console.log(
			`\nWarning: ${unknown.length} translation(s) in part2 don't match any report entry:`,
		);
		for (const id of unknown) console.log("  -", id);
	}
}

main();
