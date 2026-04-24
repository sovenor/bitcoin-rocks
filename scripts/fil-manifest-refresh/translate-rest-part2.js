#!/usr/bin/env node
/**
 * Filipino manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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
	"fil.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Mga serbisyo sa accounting ng Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"Isang simpleng gabay sa pag-account ng mga bayad sa bitcoin — hybrid wallets, cost basis, capital gains, at kailan tatawag sa iyong accountant.",
	"business/accounting::accounting_s1_c1":
		"Ang pinakamadaling paraan para tanggapin ang bitcoin ay ang paggamit ng isang hybrid wallet na awtomatikong nagbebenta ng 100% ng natanggap na bitcoin sa dolyar (o iyong lokal na currency) sa sandaling dumating ang bayad.",
	"business/accounting::accounting_s1_c2":
		"Sa setup na ito, ang iyong accounting ay magmumukhang eksaktong kapareho ng ngayon — ang bottom line ay nasa dolyar bawat oras. Walang cost basis, walang capital gains, walang bagong spreadsheet.",
	"business/accounting::accounting_s2":
		"Kung magtatago ka ng ilang bitcoin: subaybayan ang iyong cost basis",
	"business/accounting::accounting_s2_c1":
		"Pinipili ng ilang negosyo na panatilihin ang bahagi ng bitcoin na kanilang natanggap sa halip na awtomatikong i-convert ang lahat. Kung ito ang iyong ginagawa, ang karagdagang hakbang ay ang pagsubaybay sa cost basis — ang dollar value ng bawat bayad sa bitcoin sa araw na natanggap mo ito.",
	"business/accounting::accounting_s2_c2":
		"Kahit iniisip mo ang iyong negosyo bilang bitcoin lamang, gusto pa rin ng karamihan sa mga tax authority na i-report mo ang mga dollar value. Magandang balita: dalawang numero lang kada transaksyon — magkano ang bitcoin na natanggap mo at ang dollar value nito sa araw na iyon.",
	"business/accounting::accounting_s2_c3":
		"Gamitin ang mga kasangkapan sa ibaba para i-automate ang paghahanap ng presyo para hindi mo na kailangang suriin ang mga presyo araw-araw.",
	"business/accounting::accounting_s3":
		"Paggastos o pagbebenta ng bitcoin na iyong itinago",
	"business/accounting::accounting_s3_c1":
		"Kung awtomatikong iko-convert mo ang bawat bayad sa dolyar, laktawan ang seksyong ito — hindi ito para sa iyo.",
	"business/accounting::accounting_s3_c2":
		"Kung nagtago ka ng ilang bitcoin at pagkatapos ay magpasya na gamitin o ibenta ito, idagdag ang sale price sa parehong spreadsheet tulad ng cost basis. Ang pagkakaiba sa pagitan ng halaga ng bitcoin noong natanggap mo ito at kung ano ang halaga nito noong ginamit o ibenta mo ito ay isang capital gain o loss.",
	"business/accounting::accounting_s3_c3": "Dalawang mabilis na halimbawa:",
	"business/accounting::accounting_s4":
		"Kailangan mo ba ng propesyonal na nakakaintindi ng bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Kung gusto mong ibang tao ang humawak nito — o kung ang iyong bitcoin accounting ay mas kumplikado kaysa sa kaya ng isang hybrid wallet — mahigpit naming inirerekomenda ang Satoshi Pacioli Accounting Services, isang firm na nagdalubhasa sa bitcoin accounting para sa mga negosyo.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin accounting para sa iyong negosyo",
	"business/accounting::accounting_card_bpr_label": "PRESYO NG BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Hanapin ang kasalukuyan o makasaysayang mga presyo ng bitcoin sa dolyar",
	"business/accounting::accounting_card_pacioli_label":
		"ACCOUNTANT NG BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"I-IMPORT SA EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Awtomatikong i-import ang mga presyo ng bitcoin sa Excel",
	"business/accounting::accounting_card_wallets_label":
		"HYBRID WALLETS",
	"business/accounting::accounting_card_wallets_title":
		"Tingnan ang aming mga inirerekomendang wallet para sa mga negosyo",
	"business/accounting::accounting_disclaimer":
		"Ang gabay na ito ay para sa impormasyon lamang at hindi payo sa buwis. Para sa payo sa buwis na naaangkop sa iyong sitwasyon, kumunsulta sa isang kwalipikadong accountant.",
	"business/accounting::accounting_disclaimer_label": "Disclaimer",
	"business/accounting::accounting_example_feb_1": "Peb 1",
	"business/accounting::accounting_example_gain_badge":
		"Capital gain",
	"business/accounting::accounting_example_gain_explain":
		"Nag-record ka ng $10 na capital gain.",
	"business/accounting::accounting_example_jan_1": "Ene 1",
	"business/accounting::accounting_example_loss_badge":
		"Capital loss",
	"business/accounting::accounting_example_loss_explain":
		"Nag-record ka ng $10 na capital loss.",
	"business/accounting::accounting_example_received_label": "Natanggap",
	"business/accounting::accounting_example_sold_label":
		"Naibenta o ginastos",
	"business/accounting::accounting_hero_subtitle":
		"Ang pagtanggap ng bitcoin sa iyong negosyo ay hindi kailangang magpakumplikado sa iyong accounting. Narito ang maikling bersyon — kasama ang mga tool at ekspertong gagawing walang hirap ito.",
	"business/accounting::accounting_intro_c1":
		"Kung tumatanggap ka na ng cash o mga card, ang pagdagdag ng bitcoin sa iyong business accounting ay mas madali kaysa sa inaakala mo. May dalawa kang daan: awtomatikong i-convert ang bawat bayad sa bitcoin sa dolyar sa sandaling dumating ito (hindi na kailangan ng bagong accounting) o panatilihin ang ilan bilang bitcoin (kakailanganin mong subaybayan ang ilang karagdagang numero).",
	"business/accounting::accounting_intro_c2":
		"Tinatalakay ng gabay na ito ang parehong daan — para makapili ka kung alin ang gumagana para sa iyong negosyo at magsimulang tumanggap ng bitcoin nang may kumpiyansa.",
	"business/accounting::accounting_s1":
		"Ang madaling daan: awtomatikong pag-convert sa dolyar",
	"business/accounting::accounting_s3_c6":
		"At iyon lang. Pareho ang basic math sa paggamit ng anumang iba pang asset na ang halaga ay tumataas o bumababa.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — kasalukuyan at makasaysayang presyo ng bitcoin sa dolyar",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — bitcoin accounting para sa mga negosyo",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — paano mag-import ng crypto prices sa Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Mga maikling sagot sa mga karaniwang tanong na itinatanong ng mga merchant bago magsimulang tumanggap ng bitcoin — fees, settlement, wallets, chargebacks, gastos at marami pa.",
	"business/faq::faq_intro_c1":
		"I-click ang anumang tanong sa ibaba para buksan ang sagot. Kapag handa ka nang magsimulang tumanggap ng bitcoin, gagabayan ka ng mga business tool sa ibaba ng page nang hakbang-hakbang.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ACCOUNTING",
	"business/index::biz_label_faq": "MADALAS NA TANONG",
	"business/index::biz_label_maps": "MGA MERCHANT MAP",
	"business/index::biz_label_rewards": "MGA GANTIMPALA",
	"business/index::biz_label_stickers": "MGA STICKER",
	"business/index::biz_label_wallets": "MGA WALLET",
	"business/index::biz_meta_description":
		"Tumanggap ng bitcoin sa iyong negosyo nang may mas mababang fees, agarang settlement, walang chargebacks, at makakuha ng mas maraming customer.",
	"business/index::business_hero_subtitle":
		"Tumanggap ng bayad nang may mas mababang fees, mag-settle sa ilang segundo, at maabot ang milyun-milyong bagong customer — walang mga kontrata at walang nakatagong gastos.",
	"business/index::business_intro_c1":
		"Binibigyan ng bitcoin ang iyong negosyo ng mas mabilis, mas mura, at mas pribadong paraan para tanggapin ang mga bayad. Walang intermediary. Walang chargebacks. Walang mga kontrata. Pera lamang na nag-sesettle sa ilang segundo direkta mula sa iyong customer patungo sa iyo.",
	"business/index::business_intro_c2":
		"Sa ibaba ay ang maikling bersyon kung bakit kapaki-pakinabang ang bitcoin para sa negosyo — at sa ibaba nito ay ang lahat ng mga tool na kailangan mo para simulan itong tanggapin ngayon.",
	"business/index::business_resources_heading":
		"Lahat ng kailangan mo para tanggapin ang bitcoin",
	"business/index::business_resources_intro":
		"Pagdaanan ang mga tool na ito sa sarili mong pace. Ang bawat isa ay isang maikling praktikal na gabay.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Sabihin sa amin ang tungkol sa iyong negosyo",
	"business/maps::biz_maps_form_intro":
		"Ilang detalye lamang ang kailangan namin para mailagay ka sa mapa. Pinapanatili namin ang impormasyon ng address hangga't kinakailangan para maisumite ang iyong negosyo sa mga mapa.",
	"business/maps::biz_maps_hero_subtitle":
		"Idagdag ang iyong negosyo nang libre sa BTC Map — isang open at global na direktoryo ng mga tumatanggap ng bitcoin merchant — para mahanap ka ng mga lokal na bitcoin user at gastusin ang kanilang bitcoin sa iyong negosyo.",
	"business/maps::biz_maps_hero_title":
		"Ilagay ang iyong negosyo sa bitcoin merchant maps",
	"business/maps::biz_maps_intro_c1":
		"Aktibong naghahanap ng mga lugar para gastusin ang kanilang pera ang mga bitcoin user. Ang pagiging nasa mapa ay naglalagay sa iyong negosyo sa harap ng bawat bitcoin user na naghahanap ng lugar na kainan, bilhan, o pagpapahingahan — ganap na libre.",
	"business/maps::biz_maps_intro_c2":
		"I-fill up lamang ang maikling form sa ibaba at isusumite namin ang iyong negosyo sa BTC Map at iba pang bitcoin merchant maps.",
	"business/maps::biz_maps_meta_description":
		"Idagdag ang iyong negosyo nang libre sa BTC Map at iba pang bitcoin merchant maps para mahanap ka ng mga lokal na bitcoin user.",
	"business/maps::biz_maps_placeholder_address": "Kalye at numero",
	"business/maps::biz_maps_placeholder_category":
		"Kategorya (hal., restaurant, cafe, hotel)",
	"business/maps::biz_maps_placeholder_city": "Lungsod",
	"business/maps::biz_maps_placeholder_country": "Bansa",
	"business/maps::biz_maps_placeholder_name": "Pangalan ng negosyo",
	"business/maps::biz_maps_placeholder_region":
		"Rehiyon / probinsya / estado",
	"business/maps::biz_maps_placeholder_website": "Website (opsyonal)",
	"business/maps::biz_maps_view_map_cta": "Tingnan ang BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Tingnan ang BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Salamat sa pag-submit ng iyong negosyo. Ilalagay ka namin sa bitcoin merchant maps sa lalong madaling panahon.",
	"business/maps-success::biz_maps_success_hero_title":
		"Natanggap ang kahilingan 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Idadagdag ang iyong negosyo sa BTC Map at iba pang bitcoin merchant listing sa loob ng 1–2 linggo. Manu-manong nirerepaso namin ang bawat listing para mapanatili ang katumpakan ng mga mapa.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Kapag naka-live na ang iyong listing, mahahanap ng mga lokal na bitcoin user ang iyong negosyo at pupunta para gastusin ang bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Ano ang mangyayari sunod",
	"business/maps-success::biz_maps_success_view_c1":
		"Habang naghihintay ka, tingnan ang BTC Map para makita ang lumalaking network ng mga negosyong tumatanggap ng bitcoin sa buong mundo.",
	"business/maps-success::biz_maps_success_view_header":
		"Tingnan kung saan ka lalabas",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"I-download ang English sticker files para i-print ang iyong \"Tumatanggap kami ng Bitcoin\" na stickers.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"I-print ang iyong \"Tumatanggap kami ng Bitcoin\" na stickers sa English para ipaalam sa mga customer na tumatanggap ka ng bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"I-download ang English \"Tumatanggap kami ng Bitcoin\" na sticker files",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Salamat sa paghiling ng mga \"Tumatanggap kami ng Bitcoin\" na sticker files sa iyong wika.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Natanggap ang kahilingan 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Gagawin at ilalabas namin ang iyong sticker files sa loob ng 3–4 na linggo. Kapag handa na, maaari mong i-download ang mga ito nang libre mula sa aming sticker files page at i-print.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Nag-re-release kami ng sticker files sa batch, kaya maaaring tumagal ng ilang linggo bago ma-activate ang iyong wika. Salamat sa iyong pasensya!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Ano ang mangyayari sunod",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Umorder ng bulk",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Humiling ng isa pang libreng pack",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Matatanggap mo ang iyong mga libreng \"Tumatanggap kami ng Bitcoin\" na stickers sa loob ng 2–4 na linggo sa isang simpleng puting sobre na may 3 na stickers.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Paparating na ang iyong mga stickers 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Kung hindi sapat ang 3 sticker para sa iyong negosyo, malaya kang humiling ng isa pang libreng pack — o umorder ng bulk sa parehong printer na ginagamit namin.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Kailangan mo ba ng mas maraming sticker?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Malapit sa pangunahing pintuan o storefront, para makita ito ng mga customer bago sila pumasok",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Malapit sa register, tabi ng payment terminal o kung saan nagbabayad ang mga customer",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Sa mga menu, price list, o tip jar",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Huwag ilagay ang mga ito sa mga lugar na hindi pag-aari mo o kung saan wala kang pahintulot na maglagay ng stickers",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Magandang lugar para maglagay ng mga stickers",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Ipaalam sa mga customer na tumatanggap ka ng bitcoin. Umorder ng libreng pack ng \"Tumatanggap kami ng Bitcoin\" na stickers para ilagay sa iyong establisimiyento.",
	"business/stickers::biz_stickers_hero_title":
		"Libreng \"Tumatanggap kami ng Bitcoin\" na stickers",
	"business/stickers::biz_stickers_intro_c1":
		"Ang pagtanggap ng bitcoin ay kalahati lamang ng trabaho — kailangan ding malaman ito ng iyong mga customer. Ang maliliit na \"Tumatanggap kami ng Bitcoin\" na stickers na ito ay dinisenyo para ilagay sa pangunahing pintuan, checkout, menu, o saan man makikita ng mga customer bago sila magbayad.",
	"business/stickers::biz_stickers_intro_c2":
		"Magpapadala kami ng libreng pack sa anumang address sa US o Canada, o maaari ka ring mag-print ng iyong sariling stickers kahit saan sa buong mundo.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canada — libre sa koreo",
	"business/stickers::biz_stickers_option_print":
		"🌍 Buong mundo — i-print mismo",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — libre sa koreo",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Pagsasalin ng \"Bitcoin Accepted Here\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Pagsasalin ng \"Scan to learn why Bitcoin is good for business.\"",
	"business/stickers::biz_stickers_print_c1":
		"Maaari kang mag-print ng iyong \"Tumatanggap kami ng Bitcoin\" na stickers kahit saan ka naninirahan. I-click ang iyong wika sa ibaba para i-download ang mga sticker files at mga tagubilin sa pag-print.",
	"business/stickers::biz_stickers_print_header":
		"I-print mismo ang iyong sticker files",
	"business/stickers::biz_stickers_request_c1":
		"I-fill up ang form sa ibaba para humiling ng \"Tumatanggap kami ng Bitcoin\" na sticker files sa iyong lokal na wika. Aabisuhan ka namin kapag handa na ang mga ito.",
	"business/stickers::biz_stickers_request_header":
		"Wala ba ang iyong wika?",
	"business/stickers::biz_stickers_step_description":
		"Nagpapadala kami ng mga libreng pack sa mga address sa US at Canada. Sa ibang parte ng mundo, maaari kang mag-print ng iyong sariling stickers.",
	"business/stickers::biz_stickers_step_header":
		"Paano mo gusto ang iyong mga stickers?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Ang lahat ng bitcoin wallets ay gumagana sa isa't isa — piliin ang isa na umaayon sa iyong negosyo. Libre, na may agarang settlement, walang chargebacks.",
	"business/wallets::sources_breez_business":
		"Breez — Lightning wallet para sa bitcoin-only",
	"business/wallets::sources_ibex":
		"IBEX — Lightning payment infrastructure",
	"business/wallets::sources_opennode":
		"OpenNode — bitcoin payment processor",
	"business/wallets::sources_square":
		"Square — tumanggap ng bayad sa bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — bitcoin invoicing para sa mga negosyo",
	"business/wallets::wallets_hero_subtitle":
		"Libre ang mga bitcoin wallet. Piliin ang isa na umaayon sa iyong negosyo — in-person, online, o invoice-based — at simulang tanggapin ang bitcoin sa loob ng ilang minuto.",
	"business/wallets::wallets_section_invoice":
		"Mga wallet para sa mga negosyong nag-i-invoice ng mga customer",
	"business/wallets::wallets_section_invoice_intro":
		"Kung nag-i-invoice ka sa mga customer (consulting, freelance, B2B services), gumamit ng wallet na ginawa para sa invoicing. Babayaran ng iyong customer ang bitcoin invoice sa ilang pag-click.",
	"business/wallets::wallets_section_multiple":
		"Mga wallet para sa mga negosyong may maraming empleyado",
	"business/wallets::wallets_section_multiple_intro":
		"Kung mayroon kang team na tumatanggap ng bayad sa register, pumili ng wallet na sumusuporta sa multi-employee login — para ang bawat staff member ay may sariling PIN at mapapanatili mo ang malinaw na rekord kung sino ang tumanggap ng bayad.",
	"business/wallets::wallets_section_online":
		"Mga wallet para sa mga online na negosyo",
	"business/wallets::wallets_section_online_intro":
		"Nagbebenta online? Kumokonekta ang mga wallet na ito sa iyong online store at tumatanggap ng bitcoin mula sa mga customer sa buong mundo — walang chargebacks at walang kailangang merchant account.",
	"business/wallets::wallets_section_sole":
		"Mga wallet para sa mga solong negosyante",
	"business/wallets::wallets_section_sole_intro":
		"Kung nagpapatakbo ka ng shop, cafe, studio, o serbisyo nang mag-isa, anuman sa mga wallet na ito ay aangkop sa iyo. Pumili batay sa kung gusto mong panatilihin ang bitcoin payments bilang bitcoin o awtomatikong i-convert ang bahagi ng bawat bayad sa iyong lokal na currency.",
	"business/wallets::wallets_strike_note":
		"Pinapayagan ka ng Strike Business na tumanggap ng bitcoin at Lightning payments nang may zero fees at agarang settlement. Sumusuporta sa in-person, online, at invoice payments, na may opsyonal na awtomatikong pag-convert sa lokal na currency.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Tumatanggap kami ng Bitcoin",
	"business/why::why_good_for_you":
		"Bakit kapaki-pakinabang ang bitcoin para sa iyo rin",
	"business/why::why_learn_more_lowercase": "Matuto pa →",
	"business/why::why_s1_c1":
		"Nangyayari ang inflation kapag nag-i-print o gumagawa ng pera mula sa wala. Nagiging sanhi ito na ang pera sa iyong bulsa ay mawalan ng halaga sa paglipas ng panahon — at kaya lumalaki ang mga presyo taon-taon.",
	"business/why::why_s1_c2":
		"Ang bitcoin ay may fixed na supply na 21 milyong barya. Walang gobyerno, bangko, o korporasyon ang makakapag-print ng mas marami. Pinapanatili ng iyong mga ipon sa bitcoin ang kanilang halaga sa paglipas ng panahon sa halip na tahimik na mawalan.",
	"business/why::why_s2_c1":
		"Sa mga nakaraang taon, maraming bangko sa US ang bumagsak dahil sa bank runs. Nang masyadong maraming customer ang sumubok na mag-withdraw nang sabay-sabay, wala nang sapat na cash ang mga bangko para mabayaran ang lahat.",
	"business/why::why_s2_c2":
		"Sa halip na itago lamang ang iyong pera, ang mga bangko ay nagpapautang at nag-iinvest ng karamihan nito. Kung mabigo ang mga investment na iyon — o mawalan ng tiwala ang mga depositor — maaaring bumagsak ang bangko at ma-freeze o mawala ang iyong mga deposito.",
	"business/why::why_s2_c3":
		"Sa bitcoin, maaari mong hawakan ang iyong pera nang direkta sa sarili mong wallet. Walang bangko. Walang intermediary. Walang bank run.",
	"business/why::why_s3_c1":
		"Hindi tulad ng mga credit card, PayPal, o tradisyonal na bank accounts, hindi nangangailangan ng pahintulot mula kaninuman ang bitcoin.",
	"business/why::why_s3_c2":
		"Walang makakapag-freeze sa iyong mga account, mag-block ng bayad, o mag-remove sa iyo mula sa network. Ito ang unang sistema ng pananalapi sa kasaysayan na maaari mong gamitin nang malaya nang walang takot sa censorship o pag-agaw.",
	"business/why::why_s4_c1":
		"Madalas na hindi naiintindihan ang bitcoin, pero tahimik itong gumagawa ng maraming mabuti sa mundo.",
	"business/why::why_s4_c2":
		"Tinulungan nito ang mga tagapagtaguyod ng karapatang pantao sa kanilang pakikibaka para sa kalayaan, binawasan ang mga global na tagas ng methane mula sa mga landfill at oil rig, pinatatag ang mga power grid, at pondohan ang mga public good tulad ng mga national park.",
	"business/why::why_biz_s1":
		"Mas mababang fees, mas marami para sa negosyo",
	"business/why::why_biz_s1_c1":
		"Ang mga bitcoin payment ay iniiwasan ang mga bangko at card company na kumukuha ng 2–3% sa bawat benta. Nakakakuha ang negosyo ng mas marami sa kung ano ang binabayaran mo — na madalas ay nangangahulugang mas magandang presyo at mas magandang serbisyo para sa iyo.",
	"business/why::why_biz_s2":
		"Agarang settlement, walang chargebacks",
	"business/why::why_biz_s2_c1":
		"Nag-se-settle ang mga bitcoin payment sa ilang segundo, direkta mula sa iyong wallet papunta sa negosyo. Walang paghihintay ng mga araw para maipalaya ng bangko ang pera, at walang mamahaling chargeback dispute — na nangangahulugang makakapag-focus ang negosyo sa pagbibigay-serbisyo sa mga customer sa halip na lumaban sa mga manloloko.",
	"business/why::why_biz_s3":
		"Libreng tumanggap, bukas sa lahat",
	"business/why::why_biz_s3_c1":
		"Walang mga kontrata, buwanang bayad, o setup na gastos para tumanggap ng bitcoin ang negosyo. At milyun-milyong bitcoin user sa buong mundo ang aktibong naghahanap ng mga tindera na tumatanggap nito — nagbibigay sa negosyong ito ng libreng exposure sa mga bagong customer.",
	"business/why::why_business_cta_intro":
		"May negosyo ka ba at gusto mong simulang tanggapin ang bitcoin?",
	"business/why::why_business_cta_link":
		"Tingnan kung paano ito gumagana →",
	"business/why::why_for_business":
		"Bakit kapaki-pakinabang ang bitcoin para sa negosyong ito",
	"business/why::why_for_business_intro":
		"Sa pamamagitan ng pagtanggap ng bitcoin, nakakakuha ang negosyong ito ng mas marami sa bawat benta, tumatanggap ng bayad agad nang walang chargebacks, at umaabot sa global na audience ng mga bitcoin user — walang mga kontrata o buwanang bayad.",
	"business/why::why_good_for_you_intro":
		"Hindi lang nasa checkout ang pagiging kapaki-pakinabang ng bitcoin — ito ay mas magandang uri ng pera na nagpoprotekta sa iyong mga ipon, privacy, at kalayaang mag-transact. Narito ang mabilis na summary.",
	"business/why::why_hero_subtitle":
		"Nag-scan ka lang ng \"Tumatanggap kami ng Bitcoin\" na sticker. Narito kung bakit magandang balita iyon — kapwa para sa negosyong ito at para sa iyo.",
	"business/why::why_intro_c1":
		"Tumatanggap ng bitcoin ang negosyong binibisita mo — isang modernong, open-source payment network na magagamit ng sinuman sa buong mundo, na walang mga bangko at intermediary na kumukuha ng kanilang parte.",
	"business/why::why_intro_c2":
		"Sa ibaba ay ang maikling bersyon kung bakit kapaki-pakinabang para sa negosyong ito na tumanggap ng bitcoin, at kung bakit kapaki-pakinabang para sa iyo bilang customer na gumamit ng bitcoin.",
	"business/why::why_next_business_label": "TUMANGGAP NG BITCOIN",
	"business/why::why_next_business_title":
		"Tumanggap ng bitcoin sa iyong negosyo",
	"business/why::why_next_buy_label": "BUMILI NG BITCOIN",
	"business/why::why_next_buy_title": "Bilhin ang iyong unang bitcoin",
	"business/why::why_next_learn_label": "MATUTO PA",
	"business/why::why_next_learn_title": "Matuto pa tungkol sa bitcoin",
	"business/why::why_next_wallet_label": "KUMUHA NG WALLET",
	"business/why::why_next_wallet_title":
		"Kumuha ng sarili mong bitcoin wallet",
	"business/why::why_whats_next_heading": "Saan susunod?",
	"business/why::why_whats_next_intro":
		"Kung ito ang unang beses mong mag-scan ng bitcoin sticker, narito ang pinaka-kapaki-pakinabang na mga lugar para ipagpatuloy.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer (direkta sa pagitan ng mga user)",
	"buy::buy_bitcoin_guide": "Paano bumili ng bitcoin",
	"buy::buy_step_1_header": "Piliin ang iyong bansa",
	"buy::buy_step_2_header": "Piliin ang iyong paraan ng pagbabayad",
	"buy::buy_step_3_header": "Ang iyong mga opsyon sa pagbili",
	"buy::buy_step_4_header": "Itago ang iyong bitcoin nang ligtas",
	"buy::buy_header_subtitle":
		"Isang simpleng hakbang-hakbang na gabay sa pagbili ng iyong unang bitcoin.",
	"buy::buy_howto_name": "Paano bumili ng bitcoin",
	"buy::buy_meta_description":
		"Alamin kung paano bumili ng bitcoin nang ligtas sa aming hakbang-hakbang na gabay. Piliin ang iyong bansa at paraan ng pagbabayad para mahanap ang pinakamahusay na mga opsyon para bumili ng bitcoin.",
	"buy::buy_step_1_eyebrow": "Hakbang 1",
	"buy::buy_step_2_eyebrow": "Hakbang 2",
	"buy::buy_step_3_eyebrow": "Hakbang 3",
	"buy::buy_step_4_eyebrow": "Hakbang 4",
	"buy::buy_storage_cta_label": "Susunod na hakbang",
	"buy::sources_bisq":
		"Bisq — desentralisadong peer-to-peer bitcoin exchange",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — global na direktoryo ng bitcoin ATMs",
	"buy::sources_kraken": "Kraken — kilalang bitcoin exchange",
	"buy::sources_relai":
		"Relai — Swiss self-custody bitcoin app",
	"buy::sources_river":
		"River — bitcoin-only na pagbili, mining, at storage",
	"buy::sources_strike_lightning":
		"Strike — pagbili ng bitcoin na may Lightning network support",
	"buy::sources_swan":
		"Swan Bitcoin — bitcoin-only na dollar-cost averaging (DCA)",
	"buy::buy_bitcoin": "Bumili ng bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Magdagdag ng wika",
	"common::common_next_buy_bitcoin": "Bumili ng bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Alamin kung paano bumili ng bitcoin nang ligtas",
	"common::common_next_calculate": "Kalkulahin ang iyong inflation",
	"common::common_next_calculate_desc":
		"Tingnan kung paano naaapektuhan ng inflation ang iyong sahod sa paglipas ng panahon",
	"common::common_next_get_wallet": "Kumuha ng wallet",
	"common::common_next_get_wallet_desc":
		"Kunin ang iyong unang bitcoin wallet — libre ito",
	"common::common_next_keep_learning": "Magpatuloy sa pag-aaral",
	"common::common_next_keep_learning_desc":
		"Tingnan kung paano ginagawang mas mabuti ng bitcoin ang mundo",
	"common::common_source_bls_cpi":
		"US Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Money Supply (index ayon sa uri)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Maaari bang mabigo ang auction ng treasury bond?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Ano ang susunod?",
	"common::common_sticker_files_mission_5": "humiling ng pack",
	"common::common_site_tagline": "Bitcoin education para sa lahat.",
	"common::common_source_btc_map":
		"BTC Map — global na direktoryo ng mga tumatanggap ng bitcoin na merchant",
	"common::common_source_btcpayserver":
		"BTCPay Server — libre at open-source na self-hosted bitcoin payment processor",
	"common::common_source_oshi":
		"Oshi — bitcoin rewards platform para sa mga merchant",
	"common::common_source_strike_business":
		"Strike — bitcoin at Lightning payments para sa mga negosyo",
	"common::common_sources_group_bitcoin": "Data ng bitcoin",
	"common::common_sources_group_cpi":
		"Inflation / consumer price index",
	"common::common_sources_group_debt": "Utang ng gobyerno",
	"common::common_sources_group_money": "Data ng money supply",
	"common::common_sources_group_stories": "Mga halimbawa sa totoong buhay",
	"common::common_sticker_files_mission_6":
		"libreng English na stickers.",
	"common::common_sticker_files_next_flyers_label": "Mga Flyer",
	"common::common_sticker_files_next_flyers_title":
		"Mag-print ng bitcoin flyer",
	"common::common_sticker_files_next_languages_label":
		"Sticker files",
	"common::common_sticker_files_next_languages_title":
		"Tingnan ang sticker files sa ibang mga wika",
	"common::common_sticker_files_print_these":
		"I-PRINT ANG MGA ITO SA ISANG PAG-CLICK",
	"common::common_sticker_name_bdhi_black":
		"Sticker na \"Bitcoin Doesn\u2019t Have Inflation\" (itim)",
	"common::common_sticker_name_bdhi_orange":
		"Sticker na \"Bitcoin Doesn\u2019t Have Inflation\" (orange)",
	"common::common_sticker_name_caution":
		"Bitcoin sticker na \"Caution! Melting Ice Cube\"",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin sticker na \"Cure Inflation\"",
	"common::common_sticker_name_danger":
		"Bitcoin sticker na \"Danger! Inflation Ahead\"",
	"common::common_sticker_name_fix":
		"Bitcoin sticker na \"Fix The Money, Fix The World\"",
	"common::common_sticker_name_got_inflation":
		"Bitcoin sticker na \"Got Inflation?\"",
	"common::common_sticker_name_study":
		"Sticker na \"Study Bitcoin\"",
	"common::common_sticker_name_warning":
		"Bitcoin sticker na \"Warning! Inflation is Stealing Your Savings\"",
	"common::common_sticker_name_what_if":
		"Bitcoin sticker na \"What if your money didn\u2019t have inflation?\"",
	"common::common_sticker_tips_heading": "Mga tip sa sticker",
	"common::common_sticker_tips_intro":
		"Kapag na-print na ang iyong mga sticker, ilagay ito kung saan makikita ng mga tao! Kasama sa mabubuting lugar ay:",
	"common::common_sticker_tips_list_1":
		"mga pampublikong lugar na mapapansin ng mga tao",
	"common::common_sticker_tips_list_2":
		"mga lugar na malamang na hindi agad maalis (ang mga sticker ay hindi nagdudulot ng permanenteng pinsala)",
	"common::common_sticker_tips_list_3":
		"mga ibabaw na maganda ang pagkakadikit (metal, plastik, salamin)",
	"common::common_sticker_tips_list_4":
		"HINDI sa pribadong ari-arian, mga karatulang trapiko, ATM, o gas pump",
	"common::common_stickers_printer_prefix": "Ginagamit namin",
	"common::common_stickers_printer_suffix":
		"pero maaari kang gumamit ng kahit anong sticker printer.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — consumer price index para sa lahat ng urban consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — money supply M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Kalkulahin ang iyong inflation gap",
	"compound-inflation-calculator::cic_cta_label": "Susunod na hakbang",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Alamin kung gaano dapat tumaas ang iyong sahod para makasabay sa inflation.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Mag-explore ng mas maraming paksa",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Tingnan kung paano konektado ang bitcoin sa pera, kalayaan, enerhiya, at marami pa.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Alamin kung paano gumagana ang inflation",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Paano mag-print at maglagay ng mga bitcoin flyer na ito",
	"flyers::flyers_hero_subtitle":
		"Libre at napi-print na mga bitcoin flyer. Ilagay ang mga ito sa mga pampublikong lugar para tulungan ang mas maraming tao na matuto tungkol sa bitcoin.",
	"flyers::flyers_hero_title": "Mag-print at maglagay ng mga bitcoin flyer",
	"flyers::flyers_next_get_stickers": "Ipakalat ang mensahe",
	"flyers::flyers_next_get_stickers_desc":
		"Umorder ng libreng pack ng bitcoin sticker",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Makilahok at tumulong na ikalat ang bitcoin",
	"get-involved::get_involved_business_content_1":
		"Gusto mo bang tumulong sa pagtatayo ng bitcoin circular economy? Ang pinakamadaling paraan ay ang pagtulong sa mga lokal na negosyo na simulan ang pagtanggap ng bayad sa bitcoin.",
	"get-involved::get_involved_business_content_2":
		"May kilala ka bang negosyo na maaaring bukas? Idirekta ang may-ari sa aming page para sa",
	"get-involved::get_involved_business_content_3":
		"Bitcoin para sa negosyo.",
	"get-involved::get_involved_description":
		"Ang aming mga libreng tool ay ginagawang madali ang pagkalat ng pag-adopt ng bitcoin. Mga sticker, flyer, \"Tumatanggap kami ng Bitcoin\" na stickers para sa mga negosyo, at open-source code na maaaring pag-ambagan ng sinuman.",
	"get-involved::get_involved_header":
		"Makilahok at tumulong na ikalat ang bitcoin.",
	"get-involved::get_involved_intro_5":
		"Maaari kang tumulong na baguhin ito. Nakagawa na kami ng mga libreng tool na magpapadali sa pagkalat ng pag-asa na dulot ng bitcoin sa iyong komunidad.",
	"get-involved::get_involved_biz_stickers_note":
		"Tumatanggap ka na ba ng bitcoin? Ipaalam sa iyong mga customer sa aming libreng \"Tumatanggap kami ng Bitcoin\" na stickers. Magpapadala kami ng pack sa anumang address sa US o Canada, o maaari ka ring mag-print kahit saan sa buong mundo.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Mga \"Tumatanggap Dito\" na stickers",
	"get-involved::get_involved_card_biz_stickers_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Libreng \"Tumatanggap kami ng Bitcoin\" na stickers para sa iyong negosyo",
	"get-involved::get_involved_card_business_label":
		"Bitcoin para sa negosyo",
	"get-involved::get_involved_card_business_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Lahat ng kailangan ng negosyo para magsimulang tumanggap ng mga bayad sa bitcoin",
	"get-involved::get_involved_card_flyers_label": "Mga napi-print na flyer",
	"get-involved::get_involved_card_flyers_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"I-download at i-print ang libreng bitcoin flyer",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source": "Pinagmulan: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Mag-ambag sa bitcoin.rocks sa GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Libreng stickers",
	"get-involved::get_involved_card_stickers_source":
		"Pinagmulan: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Umorder ng libreng pack ng bitcoin sticker na direktang ihahatid sa iyong pintuan",
	"get-involved::get_involved_flyers_content_1":
		"Ang mga flyer ay isa sa pinakamadaling paraan para ipakilala ang bitcoin sa iyong komunidad. I-download ang aming libre at napi-print na bitcoin flyer, mag-print ng maraming kopya na gusto mo, at ilagay ang mga ito sa mga bulletin board, kape shop, meetup, o saan man nagtitipon ang mga tao.",
	"get-involved::get_involved_flyers_content_2":
		"Bawat flyer ay may kaaya-ayang heading at QR code na nagdidirekta sa mga mausisang mambabasa sa bitcoin.rocks para matuto pa.",
	"get-involved::get_involved_flyers_content_3":
		"Hindi tulad ng mga sticker, maaaring i-print ang mga flyer on-demand kahit saan sa buong mundo — kailangan mo lamang ng printer at ilang minuto.",
	"get-involved::get_involved_flyers_header":
		"Mag-print at maglagay ng flyer",
	"get-involved::get_involved_flyers_image_alt":
		"Preview ng libre at napi-print na bitcoin flyer ng bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"Ang bitcoin.rocks ay isang libre at open-source na proyekto sa ilalim ng MIT License. Ang aming misyon ay pabilisin ang pag-adopt ng bitcoin sa pamamagitan ng edukasyon — at hindi namin ito magagawa nang mag-isa.",
	"get-involved::get_involved_github_content_2":
		"Kung ikaw ay isang developer, designer, writer, o tagasalin, may paraan para tumulong. Partikular naming hinahanap ang mga kontribyutor na makakapagsalin ng aming nilalaman sa mas maraming wika, para matuto ang mga tao sa buong mundo tungkol sa bitcoin sa kanilang sariling wika.",
	"get-involved::get_involved_github_content_3":
		"I-fork ang aming repository, magbukas ng pull request, gumawa ng issue, o mag-star sa proyekto. Ang bawat kontribusyon ay tumutulong sa bitcoin na maabot ang mas maraming tao.",
	"get-involved::get_involved_github_header":
		"Mag-ambag sa GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Isang pack ng libreng bitcoin text stickers ng bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "pag-iipon",
	"index::home_card_label_art_1": "Ihambing",
	"index::home_card_label_art_2": "Ipakalat ang mensahe",
	"index::home_card_label_art_3": "Street art",
	"index::home_card_label_bank_runs": "Full reserve system",
	"index::home_card_label_bonds": "Ihambing",
	"index::home_card_label_business_1": "Ano ang pagkakaiba?",
	"index::home_card_label_business_2": "Tumanggap ng bayad sa bitcoin",
	"index::home_card_label_cash": "Ihambing",
	"index::home_card_label_cbdc": "Open o sarado?",
	"index::home_card_label_coding_1": "Interactive na kurso",
	"index::home_card_label_coding_2": "Gumawa ng hardware",
	"index::home_card_label_coding_3": "Mga hamon sa programming",
	"index::home_card_label_crowdfunding_1": "Mga protesta ng EndSARS",
	"index::home_card_label_crowdfunding_2": "Pera na hindi mapipigilan",
	"index::home_card_label_crowdfunding_3": "Pondohan ang iyong proyekto",
	"index::home_card_label_crypto": "Ano ang pagkakaiba?",
	"index::home_card_label_energy_1": "Pagpapatatag ng power grid",
	"index::home_card_label_energy_4": "Pamamahala ng demand",
	"index::home_card_label_energy_5": "Pag-electrify ng mga rural na lugar",
	"index::home_card_label_energy_6": "Mga insentibo sa renewable energy",
	"index::home_card_label_environment_1": "Pagbawas ng methane",
	"index::home_card_label_environment_2": "Niligtas ang isang national park",
	"index::home_card_label_environment_3": "Pinakamabersyon na industriya",
	"index::home_card_label_environment_4": "Binabawasan ang gas flaring",
	"index::home_card_label_equality_1": "Pag-asa at oportunidad",
	"index::home_card_label_equality_2": "Ang malaking tagapag-equalize",
	"index::home_card_label_food_1": "Mga presyo ng pagkain",
	"index::home_card_label_food_2": "Mga sakahan at lupa",
	"index::home_card_label_freedom_1": "Mga authoritarian na rehimen",
	"index::home_card_label_freedom_2": "Isang natatanging tool",
	"index::home_card_label_get_started_1":
		"Mga pangunahing para sa nagsisimula",
	"index::home_card_label_get_started_2": "Ang iyong unang wallet",
	"index::home_card_label_get_started_3": "Bumili ng bitcoin",
	"index::home_card_label_gold": "Alin ang mas mabuti?",
	"index::home_card_label_housing_1": "Abot-kayang pabahay",
	"index::home_card_label_human_rights_1":
		"Ipagtaguyod ang karapatang pantao",
	"index::home_card_label_human_rights_2": "Pag-adopt mula sa mga ordinaryong tao",
	"index::home_card_label_human_rights_3": "Global na footprint",
	"index::home_card_label_inflation": "Ang bitcoin ay mas magandang pera",
	"index::home_card_label_networks_1": "Real-time network visualization",
	"index::home_card_label_networks_2": "Ihambing",
	"index::home_card_label_payments_1": "Ano ang pagkakaiba?",
	"index::home_card_label_payments_2": "Mabilis at murang bayad",
	"index::home_card_label_payments_3": "Pag-iipon sa ibang bansa",
	"index::home_card_label_payments_4": "Tumanggap ng bayad",
	"index::home_card_label_politics_1": "Ang paradox ng politika",
	"index::home_card_label_politics_2": "Ang malaking pusta",
	"index::home_card_label_property_rights_1": "Ihambing",
	"index::home_card_label_property_rights_2": "Totoong pagmamay-ari",
	"index::home_card_label_salary": "Protektahan ang iyong sahod",
	"index::home_card_label_self_custody_1":
		"Gabay sa bitcoin wallet",
	"index::home_card_label_self_custody_2": "Ang pinakamahalagang hakbang",
	"index::home_card_label_self_custody_3": "Soberanong pera",
	"index::home_card_label_war_1": "Wakasan ang walang hanggang digmaan",
	"index::home_card_label_war_2": "Tulungan ang mga beterano",
	"index::home_card_label_war_3": "Takasan ang digmaan",
	"index::home_h1":
		"Ang bitcoin ay mas magandang pera na nagtatayo ng mas magandang mundo.",
	"index::home_nav_about": "Tungkol",
	"index::home_nav_get_involved": "Makilahok",
	"index::home_nav_learn": "Matuto",
	"index::home_source_prefix": "Pinagmulan:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon at Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Tingnan ang",
	"lightning::lightning_grid_heading":
		"Mga sikat na Lightning wallet",
	"lightning::lightning_hardware_cta_label":
		"Mga hardware wallet",
	"lightning::lightning_header_subtitle":
		"Pinapayagan ka ng Lightning na magpadala ng bitcoin sa ilang segundo sa halagang kapiraso ng sentimo — piliin ang wallet na ang trade-offs ay tumutugma sa kung gaano kalaki ang bitcoin na plano mong gamitin.",
	"lightning::lightning_s1_c4_end": "para sa karagdagang impormasyon.",
	"lightning::lightning_s1_c4_link":
		"aming gabay sa bitcoin hardware wallet",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning wallet",
	"lightning::sources_breez_lightning":
		"Breez — self-custodial Lightning wallet",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentasyon ng Lightning network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — custodial Lightning wallet",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android, at web",
	"nostr/index::nostr_platform_web": "Web browser",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Ang Nostr ay isang bagong desentralisadong protocol para sa online communication — walang kumpanya ang nagmamay-ari nito, ang bitcoin zaps ay built-in, at maaari kang magpalit ng mga client nang hindi mawawala ang iyong mga follower.",
	"nostr/index::nostr_amethyst_f1":
		"Maraming features at mga opsyon sa customization",
	"nostr/index::nostr_amethyst_f2":
		"Nangangailangan ng hiwalay na bitcoin wallet",
	"nostr/index::nostr_amethyst_f3": "100% libre",
	"nostr/index::nostr_damus_f1":
		"Pamilyar na interface na tulad ng Twitter",
	"nostr/index::nostr_damus_f2":
		"Nangangailangan ng hiwalay na bitcoin wallet",
	"nostr/index::nostr_damus_f3": "100% libre",
	"nostr/index::nostr_download_heading":
		"Mag-download ng libreng Nostr client",
	"nostr/index::nostr_download_intro":
		"Ang mga Nostr client ay mga libreng app na nagbibigay-daan sa iyo na basahin at isulat sa Nostr network. Lahat ay nag-i-interoperate — maaari kang magpalit ng client anumang oras at mapanatili ang iyong mga follower at content.",
	"nostr/index::nostr_hero_subtitle":
		"Ang Nostr ay isang bagong desentralisadong protocol para sa online communication — walang kumpanya ang nagmamay-ari nito, ang bitcoin zaps ay built-in, at maaari kang magpalit ng mga app nang hindi mawawala ang iyong mga follower.",
	"nostr/index::nostr_hero_title": "Ano ang Nostr?",
	"nostr/index::nostr_intro_c1":
		"Ang Nostr ay parang email: walang nagmamay-ari ng protocol, at kahit sino ay maaaring gumawa ng app sa ibabaw nito, at pipiliin mo kung alin ang pinakagumagana para sa iyo. Hindi tulad ng Twitter o Facebook, walang sentral na kumpanya na makakapag-censor, mag-kick out, o pakatay sa iyo.",
	"nostr/index::nostr_intro_c2":
		"Sa ibaba ay ang maikling bersyon kung bakit mahalaga ang Nostr — at pagkatapos ay lahat ng mga libreng Nostr client na kakailanganin mo para magsimula ngayon.",
	"nostr/index::nostr_iris_f1":
		"Sobrang madali — walang kailangang i-install",
	"nostr/index::nostr_iris_f2":
		"Madaling paraan para subukan ang Nostr na may test account",
	"nostr/index::nostr_iris_f3": "100% libre",
	"nostr/index::nostr_learn_more_label": "MAG-DIVE NANG MAS MALALIM",
	"nostr/index::nostr_learn_more_title":
		"Matuto pa tungkol sa Nostr sa nostr.how",
	"nostr/index::nostr_primal_f1": "Ang aming unang inirerekomendang client",
	"nostr/index::nostr_primal_f2":
		"Built-in na bitcoin zap wallet",
	"nostr/index::nostr_primal_f3": "100% libre",
	"nostr/index::nostr_s1": "Isang protocol, hindi isang platform",
	"nostr/index::nostr_s1_c1":
		"Ang Nostr ay isang bagong protocol na nagbibigay-daan sa iyo na makipag-usap online nang walang takot sa censorship, deplatforming, o pakatay.",
	"nostr/index::nostr_s1_c2":
		"Ang mga platform tulad ng Twitter at Facebook ay kontrolado ng isang kumpanya, pero ang Nostr protocol ay hindi kontrolado ng kahit sino.",
	"nostr/index::nostr_s2": "Kalayaang lumipat",
	"nostr/index::nostr_s2_c1":
		"Ang Nostr ay parang email. Walang kumokontrol sa email protocol at kahit sino ay maaaring gumawa ng client sa ibabaw nito (tulad ng Gmail, Hotmail, atbp.).",
	"nostr/index::nostr_s2_c2":
		"Ang Nostr protocol ay hindi rin kontrolado ng kahit sino at kahit sino ay maaaring gumawa ng client sa ibabaw nito (tulad ng Damus, Amethyst, atbp.).",
	"nostr/index::nostr_s2_c3":
		"Kung hindi mo gusto kung paano gumagana ang isang partikular na client, maaari mong ilipat ang iyong Nostr account sa ibang client nang hindi mawawala ang iyong mga follower o content.",
	"nostr/index::nostr_s3": "Built-in ang bitcoin",
	"nostr/index::nostr_s3_c1":
		"Ang bitcoin ay built-in sa Nostr protocol. Kapag nakita mo ang content na gusto mo, maaari kang magpadala sa may-akda ng isang \"bitcoin zap\" bilang pasasalamat.",
	"nostr/index::nostr_s3_c2":
		"Sa mga sentralisadong platform tulad ng Twitter at Facebook, ang sentral na kumpanya ay kumikita mula sa iyong content. Pero sa mga open protocol tulad ng Nostr, ikaw ang kumikita mula sa iyong content.",
	"nostr/index::sources_damus": "Damus — Nostr client para sa iPhone",
	"nostr/index::sources_iris": "Iris — Nostr client sa web browser",
	"nostr/index::sources_nostr_how": "nostr.how — ano ang Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr protocol — open-source na specification",
	"nostr/index::sources_primal":
		"Primal — Nostr client na may built-in bitcoin zap wallet",
	"nostr/index::what_is_nostr": "Ano ang Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"I-print ang iyong mga bitcoin sticker gamit ang mga file na ito.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Natanggap ang kahilingan 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Umorder ng bulk",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Ibahagi sa Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Ano ang Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Kailangan mo ba ng mas maraming sticker?",
	"sticker-success::sticker_success_hero_title":
		"Paparating na ang iyong mga stickers 🎉",
	"sticker-success::sticker_success_share_header":
		"Ibahagi kung saan mo inilagay ang iyong mga sticker",
	"sticker-success::sticker_success_tips_header":
		"Magandang lugar para maglagay ng mga stickers",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"At kapag nagsimula ka na, mag-print at maglagay rin ng",
	"stickers::stickers_instructions_1":
		"Ilagay ang iyong mailing address at magpapadala kami sa iyo ng libreng pack ng bitcoin sticker sa pamamagitan ng koreo. Darating ang iyong mga sticker sa isang simpleng puting sobre.",
	"stickers::stickers_btn_choose_pack": "Piliin ang pack na ito",
	"stickers::stickers_bulk_c1":
		"Gusto mo ba ng higit sa ilang sticker?",
	"stickers::stickers_bulk_c2":
		"Umorder ng bulk mula sa parehong printer na ginagamit namin",
	"stickers::stickers_bulk_c3":
		"— mas marami ang bilhin mo, mas mura bawat isa.",
	"stickers::stickers_bulk_cta": "Bumili ng bulk sticker",
	"stickers::stickers_bulk_header":
		"Umorder ng bulk sticker",
	"stickers::stickers_hero_subtitle":
		"Umorder ng libreng pack ng bitcoin sticker at ilagay ang mga ito sa mga pampublikong lugar para tulungan ang mas maraming tao na matuto tungkol sa bitcoin.",
	"stickers::stickers_hero_title": "Libreng bitcoin sticker",
	"stickers::stickers_intro_c1":
		"Ang aming misyon ay tulungan ka na \"i-orange pill\" ang mas maraming tao sa pamamagitan ng paglalagay ng bitcoin sticker sa mga pampublikong lugar. Lahat ng aming sticker ay may QR code na nagdadala sa mga pahinang pang-edukasyon tungkol sa",
	"stickers::stickers_intro_c3": "inflation",
	"stickers::stickers_intro_c4":
		"Pumili ng sticker pack sa ibaba at piliin kung paano mo gusto ang mga ito — magpapadala kami ng libreng pack sa kahit sino sa US o Canada, o maaari ka ring mag-print ng iyong sariling sticker kahit saan sa buong mundo.",
	"stickers::stickers_mail_header":
		"Magpapadala kami ng mga sticker sa iyo nang libre",
	"stickers::stickers_next_print_flyers": "Ikalat ang mensahe nang mas malayo",
	"stickers::stickers_next_print_flyers_desc":
		"Mag-print ng libreng bitcoin flyer at ilagay sa mga pampublikong lugar",
	"stickers::stickers_option_bulk":
		"📦 Buong mundo — umorder ng bulk",
	"stickers::stickers_option_canada":
		"🇨🇦 Canada — libre sa koreo",
	"stickers::stickers_option_print":
		"🌍 Buong mundo — i-print mismo",
	"stickers::stickers_option_usa":
		"🇺🇸 USA — libre sa koreo",
	"stickers::stickers_print_c1":
		"Maaari kang sumali sa pamamagitan ng pag-print ng iyong sariling sticker kahit saan ka naninirahan. I-click ang iyong wika sa ibaba para i-download ang sticker files at mga tagubilin sa pag-print.",
	"stickers::stickers_print_c2":
		"Hindi lahat ng sticker ay available sa lahat ng wika.",
	"stickers::stickers_print_header":
		"I-print mismo ang iyong sticker files",
	"stickers::stickers_request_c1":
		"I-fill up ang form sa ibaba para humiling ng sticker files sa iyong lokal na wika. Aabisuhan ka namin kapag handa na ang mga ito.",
	"stickers::stickers_request_header":
		"Wala ba ang iyong wika?",
	"stickers::stickers_share_c2":
		"Sundan kami sa Nostr sa paghahanap ng",
	"stickers::stickers_share_c3":
		"sa anumang Nostr client.",
	"stickers::stickers_signs_pack_description":
		"Mga sticker na caution, warning, at notice na may mensahe ng bitcoin — dinisenyo para hilingin ng pansin at gawing tumigil ang mga tao para basahin.",
	"stickers::stickers_step_1_description":
		"Bawat pack ay naglalaman ng ibang koleksyon ng mga bitcoin sticker na may QR code na nagtuturo sa mga tao tungkol sa bitcoin.",
	"stickers::stickers_step_1_eyebrow": "HAKBANG 1",
	"stickers::stickers_step_1_header":
		"Pumili ng sticker pack",
	"stickers::stickers_step_2_description":
		"Nagpapadala kami ng mga libreng pack sa mga address sa US at Canada. Sa ibang parte ng mundo, maaari kang mag-print ng iyong sariling sticker o umorder ng bulk.",
	"stickers::stickers_step_2_eyebrow": "HAKBANG 2",
	"stickers::stickers_step_2_header":
		"Paano mo gusto ang iyong mga sticker?",
	"stickers::stickers_text_pack_description":
		"Isang halo ng mga bitcoin slogan at matatalinong kasabihan na dinisenyo para pukawin ang pagkamausisa sa mga pampublikong lugar.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — piliin ang iyong wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — reviews ng bitcoin seed metal storage",
	"wallets::wallets_lightning_cta_label": "Lightning network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — self-custodial bitcoin wallet",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — bitcoin hardware wallet",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardware wallet",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardware wallet",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardware wallet",
	"wallets::sources_seedsigner":
		"SeedSigner — open-source na DIY signing device para sa bitcoin transactions",
	"wallets::wallets_grid_heading": "Mga sikat na bitcoin wallet",
	"wallets::wallets_header_subtitle":
		"Isang hakbang-hakbang na gabay sa pagpili ng wallet, pagprotekta sa iyong mga key, at pagkuha ng kumpletong kontrol sa iyong bitcoin.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (fil): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
