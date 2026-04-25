#!/usr/bin/env node
/**
 * Yoruba (yo) manifest refresh — part 2 of remaining entries.
 *
 * Covers: index (homepage), buy (untranslated platform descriptions +
 * manifest-added), nostr/index, stickers, get-involved, business/why
 * (manifest-added), wallets, business/maps, business/stickers,
 * business/index, business/sticker-success, lightning, business/maps-success,
 * sticker-success, business/sticker-language-success, flyers,
 * bitcoin-vs-* (manifest-added hero_titles + tail summaries), business/faq,
 * business/sticker-files/english/index, sticker-language-success.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(__dirname, "..", "i18n-audit", "reports", "yo.json");

const T = {
	// ───────── index (homepage) ─────────
	"index::home_btn_saving": "ìfowópamọ́",
	"index::home_card_label_art_1": "Jẹ́ ká fiwéra",
	"index::home_card_label_art_2": "Tan ọ̀rọ̀ kálẹ̀",
	"index::home_card_label_art_3": "Iṣẹ́ ọnà ojú-pópó",
	"index::home_card_label_bank_runs": "Ètò ìpamọ́-pípé",
	"index::home_card_label_bonds": "Jẹ́ ká fiwéra",
	"index::home_card_label_business_1": "Kíni iyàtọ̀?",
	"index::home_card_label_business_2": "Gba àwọn ìsanwó Bitcoin",
	"index::home_card_label_cash": "Jẹ́ ká fiwéra",
	"index::home_card_label_cbdc": "Ṣíṣí tàbí pípa?",
	"index::home_card_label_coding_1": "Ìkọ́ni ìbáraẹnisọ̀rọ̀",
	"index::home_card_label_coding_2": "Kọ́ ohun-èlò",
	"index::home_card_label_coding_3": "Àwọn ìṣòro koodu",
	"index::home_card_label_crowdfunding_1": "Èhónúnú EndSARS",
	"index::home_card_label_crowdfunding_2": "Owó tí kò ṣeé dí",
	"index::home_card_label_crowdfunding_3": "Pèsè owó fún iṣẹ́ rẹ",
	"index::home_card_label_crypto": "Kíni iyàtọ̀?",
	"index::home_card_label_energy_1": "Ìmúdúró nẹ́tíwọ́ọ̀kì",
	"index::home_card_label_energy_4": "Ìdáhùn ìbéèrè",
	"index::home_card_label_energy_5": "Iná àwọn agbègbè ìgberí",
	"index::home_card_label_energy_6": "Àwọn ẹ̀bùn agbára aladayeba",
	"index::home_card_label_environment_1": "Ìdín methane kù",
	"index::home_card_label_environment_2": "Gba ọgbà ìṣẹ̀dáyé orílẹ̀-èdè là",
	"index::home_card_label_environment_3": "Ilé-iṣẹ́ tó mọ́ jùlọ",
	"index::home_card_label_environment_4": "Ń dín gáàsì gbígbóná kù",
	"index::home_card_label_equality_1": "Ìrètí & àǹfààní",
	"index::home_card_label_equality_2": "Yíyípadà ńlá",
	"index::home_card_label_food_1": "Iye oúnjẹ",
	"index::home_card_label_food_2": "Àwọn oko & ilẹ̀",
	"index::home_card_label_freedom_1": "Àwọn ìjọba ìnìlàrà",
	"index::home_card_label_freedom_2": "Ohun-èlò aláìṣe-bákan-náà",
	"index::home_card_label_get_started_1": "Ipilẹ̀ òbí",
	"index::home_card_label_get_started_2": "Àpò àkọ́kọ́ rẹ",
	"index::home_card_label_get_started_3": "Ra Bitcoin",
	"index::home_card_label_gold": "Èwo ló dára?",
	"index::home_card_label_housing_1": "Ilé tí a lè ní",
	"index::home_card_label_human_rights_1": "Ìfòfindè ẹ̀tọ́ ọmọnìyàn",
	"index::home_card_label_human_rights_2": "Ìgbàfẹ́ àwọn ènìyàn lásán",
	"index::home_card_label_human_rights_3": "Ipa àgbáyé",
	"index::home_card_label_inflation": "Bitcoin jẹ́ owó tó dára jùlọ",
	"index::home_card_label_networks_1": "Ìwòran taárà nẹ́tíwọ́ọ̀kì",
	"index::home_card_label_networks_2": "Jẹ́ ká fiwéra",
	"index::home_card_label_payments_1": "Kíni iyàtọ̀?",
	"index::home_card_label_payments_2": "Ìsanwó kíákíá & olówó-pọ́ọ́kú",
	"index::home_card_label_payments_3": "Owó-fírànṣẹ́",
	"index::home_card_label_payments_4": "Gba àwọn ìsanwó",
	"index::home_card_label_politics_1": "Ìpàdé òṣèlú",
	"index::home_card_label_politics_2": "Ṣe iṣẹ́",
	"index::home_card_label_property_rights_1": "Jẹ́ ká fiwéra",
	"index::home_card_label_property_rights_2": "Ìní gidi",
	"index::home_card_label_salary": "Dáàbò bo owó oṣù rẹ",
	"index::home_card_label_self_custody_1": "Ìtọ́sọ́nà àpò Bitcoin",
	"index::home_card_label_self_custody_2": "Ìgbésẹ̀ pàtàkì jùlọ",
	"index::home_card_label_self_custody_3": "Owó olómìnira",
	"index::home_card_label_war_1": "Parí ogun aláìlópin",
	"index::home_card_label_war_2": "Ràn àwọn ológun lọ́wọ́",
	"index::home_card_label_war_3": "Sálo lọ́wọ́ ogun",
	"index::home_h1": "Bitcoin jẹ́ owó tó dára jùlọ tó ń kọ́ àgbáyé tó dára jùlọ.",
	"index::home_nav_about": "Nípa Wa",
	"index::home_nav_get_involved": "Dara Pọ̀",
	"index::home_nav_learn": "Kẹ́kọ̀ọ́",
	"index::home_source_prefix": "Orísun:",

	// ───────── lightning ─────────
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_grid_heading": "Àwọn àpò Lightning gbajúmọ̀",
	"lightning::lightning_hardware_cta_label": "Àwọn àpò ohun-èlò",
	"lightning::lightning_header_subtitle":
		"Lightning jẹ́ kí o rán Bitcoin nínú ìṣẹ́jú díẹ̀ pẹ̀lú ìpín kéré ti pení — yan àpò tí àwọn ìpinnu rẹ̀ bá iye Bitcoin tí o pinnu láti ná mu.",
	"lightning::lightning_s1_c4_end": "fún àlàyé síi.",
	"lightning::lightning_s1_c4_link": "Ìtọ́sọ́nà Àpò Ohun-èlò Bitcoin",
	"lightning::sources_acinq_phoenix": "ACINQ — Àpò Lightning Phoenix",
	"lightning::sources_breez_lightning": "Breez — Àpò Lightning oníṣàkóso-ara",
	"lightning::sources_lightning_labs": "Lightning Labs — Àkọsílẹ̀ Lightning Network",
	"lightning::sources_wallet_of_satoshi": "Wallet of Satoshi — Àpò Lightning olùdúró",

	// ───────── nostr/index ─────────
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android & ojú-ìwé",
	"nostr/index::nostr_platform_web": "Awakò ojú-ìwé",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_amethyst_f1": "Ọ̀pọ̀ àwọn ẹ̀rọ àti ìṣàfihàn",
	"nostr/index::nostr_amethyst_f2": "Ó nílò àpò Bitcoin lọ́tọ̀",
	"nostr/index::nostr_amethyst_f3": "100% ọ̀fẹ́",
	"nostr/index::nostr_damus_f1": "Wíwo bíi Twitter tí a mọ̀",
	"nostr/index::nostr_damus_f2": "Ó nílò àpò Bitcoin lọ́tọ̀",
	"nostr/index::nostr_damus_f3": "100% ọ̀fẹ́",
	"nostr/index::nostr_download_heading": "Ṣe ìgbàsílẹ̀ client Nostr ọ̀fẹ́",
	"nostr/index::nostr_download_intro":
		"Àwọn client Nostr jẹ́ àwọn app ọ̀fẹ́ tí ó jẹ́ kí o kà àti pípolówó lórí nẹ́tíwọ́ọ̀kì Nostr. Gbogbo wọn ń bá ara wọn ṣiṣẹ́ — o lè yí client padà ní àkókò èyíkéyìí kí o sì pa àwọn olùtẹ̀lé àti àkóónú rẹ mọ́.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr jẹ́ ìlànà aláìní-àárín tuntun fún ìbánisọ̀rọ̀ lórí ìntánẹ́ẹ̀tì — kò sí ilé-iṣẹ́ kan ṣoṣo tí ó ń darí, a ti kọ́ àwọn zap Bitcoin sínú rẹ̀, o sì lè rin láàárín àwọn app láìpàdánù àwọn olùtẹ̀lé rẹ.",
	"nostr/index::nostr_hero_title": "Kíni Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr dàbí ímeèlì: kò sí ẹnikẹ́ni tí ó ní ìlànà náà, ẹnikẹ́ni lè kọ́ app sí orí rẹ̀, o sì lè yan app èyíkéyìí tí o fẹ́ jùlọ. Yàtọ̀ sí Twitter tàbí Facebook, kò sí ilé-iṣẹ́ àárín tí ó lè dí ọ lẹ́nu, fa ọ́ kúrò, tàbí kí ó dín ìsọ̀rọ̀ rẹ kù.",
	"nostr/index::nostr_intro_c2":
		"Nísàlẹ̀ ni ẹ̀dà kúkúrú ti ìdí tí Nostr fi ṣe pàtàkì — lẹ́yìn náà, gbogbo client Nostr ọ̀fẹ́ tí o nílò láti bẹ̀rẹ̀ lónìí.",
	"nostr/index::nostr_iris_f1": "Rọrùn gan-an — kò nílò ìfọ̀rọ̀-ráńṣẹ́",
	"nostr/index::nostr_iris_f2": "Ọ̀nà rírọrùn láti dán Nostr wò pẹ̀lú àpótí ìdánwò",
	"nostr/index::nostr_iris_f3": "100% ọ̀fẹ́",
	"nostr/index::nostr_learn_more_label": "LỌ JÌN SÍI",
	"nostr/index::nostr_learn_more_title": "Kẹ́kọ̀ọ́ síi nípa Nostr lórí nostr.how",
	"nostr/index::nostr_primal_f1": "Client àkọ́kọ́ tí a ṣe ìṣàfihàn",
	"nostr/index::nostr_primal_f2": "Àpò zap Bitcoin tí a kọ́ sínú",
	"nostr/index::nostr_primal_f3": "100% ọ̀fẹ́",
	"nostr/index::nostr_s1": "Ìlànà, kì í ṣe àyè",
	"nostr/index::nostr_s1_c1":
		"Nostr jẹ́ ìlànà tuntun tí ó jẹ́ kí o bánisọ̀rọ̀ lórí ìntánẹ́ẹ̀tì láìbẹ̀rù àdílọ́lẹ́, fífà-kúrò, tàbí ìdín-ìsọ̀rọ̀-kù.",
	"nostr/index::nostr_s1_c2":
		"Àwọn àyè bíi Twitter àti Facebook ti darí nípasẹ̀ ilé-iṣẹ́ kan, ṣùgbọ́n kò sí ẹnikẹ́ni tí ó ń darí ìlànà Nostr.",
	"nostr/index::nostr_s2": "Òmìnira láti rin",
	"nostr/index::nostr_s2_c1":
		"Nostr dàbí ímeèlì. Kò sí ẹnikẹ́ni tí ó ń darí ìlànà ímeèlì, ẹnikẹ́ni sì lè kọ́ client (bíi Gmail, Hotmail, abbl.) sí orí rẹ̀.",
	"nostr/index::nostr_s2_c2":
		"Kò sí ẹnikẹ́ni tí ó ń darí ìlànà Nostr pẹ̀lú, ẹnikẹ́ni sì lè kọ́ client (bíi Damus, Amethyst, abbl.) sí orí rẹ̀.",
	"nostr/index::nostr_s2_c3":
		"Bí o kò bá fẹ́ bí client kan ṣe ń ṣiṣẹ́, o lè rọra mú àpótí Nostr rẹ lọ sí client mìíràn láìpàdánù àwọn olùtẹ̀lé tàbí àkóónú rẹ.",
	"nostr/index::nostr_s3": "A ti kọ́ Bitcoin sínú",
	"nostr/index::nostr_s3_c1":
		"A ti kọ́ Bitcoin sínú ìlànà Nostr ní àdámọ̀. Bí o bá rí àkóónú tí o fẹ́, o lè zap Bitcoin sí ẹnikan ní rírọrùn gẹ́gẹ́ bí ìdúpẹ́!",
	"nostr/index::nostr_s3_c2":
		"Ní àwọn àyè àárín bíi Twitter àti Facebook, ilé-iṣẹ́ àárín ń jẹrè owó láti àkóónú rẹ. Ṣùgbọ́n lórí àwọn ìlànà ṣíṣí bíi Nostr, ìwọ ni ó ń jẹrè owó láti àkóónú rẹ.",
	"nostr/index::sources_damus": "Damus — Client Nostr iPhone",
	"nostr/index::sources_iris": "Iris — Client Nostr ti orí awakò ojú-ìwé",
	"nostr/index::sources_nostr_how": "nostr.how — Kíni Nostr?",
	"nostr/index::sources_nostr_protocol": "Nostr Protocol — Ìlànà orísun-ṣíṣí",
	"nostr/index::sources_primal": "Primal — Client Nostr pẹ̀lú àpò zap Bitcoin tí a kọ́ sínú",
	"nostr/index::what_is_nostr": "Kíni Nostr?",

	// ───────── stickers ─────────
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_btn_choose_pack": "Yan àkójọpọ̀ yìí",
	"stickers::stickers_bulk_c1": "Ṣé o fẹ́ àwọn àlèmọ́ ó ju díẹ̀?",
	"stickers::stickers_bulk_c2": "Bere lọ́pọ̀ láti ọ̀dọ̀ ilé-iṣẹ́ tẹ̀-ìpolówó kan náà tí a ń lò",
	"stickers::stickers_bulk_c3": "— bí o ṣe ń ra púpọ̀ tó, bẹ́ẹ̀ ni wọ́n ń wù ní àlèmọ́ kọ̀ọ̀kan.",
	"stickers::stickers_bulk_cta": "Ra àwọn àlèmọ́ ní bulk",
	"stickers::stickers_bulk_header": "Bere àwọn àlèmọ́ ní bulk",
	"stickers::stickers_hero_subtitle":
		"Bere àkójọpọ̀ àlèmọ́ Bitcoin ọ̀fẹ́ kí o sì fi wọ́n sí gbangba láti ràn àwọn ènìyàn púpọ̀ síi lọ́wọ́ láti kẹ́kọ̀ọ́ nípa Bitcoin.",
	"stickers::stickers_hero_title": "Àwọn àlèmọ́ Bitcoin ọ̀fẹ́",
	"stickers::stickers_intro_c1":
		"Ètò wa ni láti ràn ọ́ lọ́wọ́ láti ṣe orange-pill àwọn ènìyàn síi nípa fífi àwọn àlèmọ́ Bitcoin sí gbangba. Gbogbo àwọn àlèmọ́ wa ní àwọn QR code tí ó ń sopọ̀ mọ́ àwọn ojú-ìwé ẹ̀kọ́ nípa",
	"stickers::stickers_intro_c3": "owó-ṣíṣẹ́",
	"stickers::stickers_intro_c4":
		"Yan àkójọpọ̀ àlèmọ́ kan nísàlẹ̀ kí o sì yan bí o ṣe fẹ́ gbà wọ́n — a ó fi àkójọpọ̀ ọ̀fẹ́ ránṣẹ́ sí ẹnikẹ́ni ní USA tàbí Kánádà, tàbí o lè tẹ tirẹ ní àyè èyíkéyìí ní àgbáyé.",
	"stickers::stickers_mail_header": "A ó fi àwọn àlèmọ́ ọ̀fẹ́ rẹ ránṣẹ́",
	"stickers::stickers_next_print_flyers": "Tẹ̀síwájú láti tan kálẹ̀",
	"stickers::stickers_next_print_flyers_desc": "Tẹ àwọn ìpolówó Bitcoin ọ̀fẹ́ láti fi sí gbangba",
	"stickers::stickers_option_bulk": "📦 Àgbáyé — Bere ní bulk",
	"stickers::stickers_option_canada": "🇨🇦 Kánádà — Ọ̀fẹ́ nípa ìfírànṣẹ́",
	"stickers::stickers_option_print": "🌍 Àgbáyé — Tẹ tirẹ",
	"stickers::stickers_option_usa": "🇺🇸 USA — Ọ̀fẹ́ nípa ìfírànṣẹ́",
	"stickers::stickers_print_c1":
		"O lè kópa nípa títẹ àwọn àlèmọ́ tirẹ, láìka ibi tí o ń gbé. Tẹ̀ èdè rẹ nísàlẹ̀ láti gba àwọn àkójọpọ̀ àlèmọ́ àti àwọn ìtọ́ni títẹ̀.",
	"stickers::stickers_print_c2": "Kì í ṣe gbogbo àlèmọ́ ni a ní ní gbogbo èdè.",
	"stickers::stickers_print_header": "Tẹ àwọn àkójọpọ̀ àlèmọ́ tirẹ",
	"stickers::stickers_request_c1":
		"Kún fọ́mù tí ó wà nísàlẹ̀ láti béèrè àwọn àkójọpọ̀ àlèmọ́ ní èdè àdúgbò rẹ. A ó jẹ́ kí o mọ̀ nígbà tí wọ́n bá ti ṣetán.",
	"stickers::stickers_request_header": "Ṣé o kò rí èdè rẹ?",
	"stickers::stickers_share_c2": "Tẹ̀le wa lórí Nostr nípa wíwá",
	"stickers::stickers_share_c3": "ní client Nostr èyíkéyìí.",
	"stickers::stickers_signs_pack_description":
		"Àwọn àmì ìkìlọ̀, ewu, àti ìṣọ́ra pẹ̀lú àwọn ìfiránṣẹ́ Bitcoin — a ṣe wọ́n láti gba àfiyèsí kí ó sì jẹ́ kí àwọn ènìyàn dúró tí wọ́n sì kà.",
	"stickers::stickers_step_1_description":
		"Àkójọpọ̀ kọ̀ọ̀kan ní àwọn àlèmọ́ Bitcoin tí ó yàtọ̀ pẹ̀lú àwọn QR code tí ó ń kọ́ àwọn ènìyàn nípa Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "ÌGBÉSẸ̀ 1",
	"stickers::stickers_step_1_header": "Yan àkójọpọ̀ àlèmọ́ rẹ",
	"stickers::stickers_step_2_description":
		"A ó rán àkójọpọ̀ ọ̀fẹ́ sí àwọn àdírẹ́sì ní USA àti Kánádà. Níbi mìíràn ní àgbáyé, o lè tẹ tirẹ tàbí kí o bere ní bulk.",
	"stickers::stickers_step_2_eyebrow": "ÌGBÉSẸ̀ 2",
	"stickers::stickers_step_2_header": "Báwo ni o ṣe fẹ́ gba àwọn àlèmọ́ rẹ?",
	"stickers::stickers_text_pack_description":
		"Àpapọ̀ àwọn ọ̀rọ̀ àti ìfiránṣẹ́ kúkúrú Bitcoin tí a ṣe láti mú ìfẹ́-mọ̀ jí ní àwọn ibi gbangba.",

	// ───────── wallets ─────────
	"wallets::sources_bitcoin_org_choose": "Bitcoin.org — Choose Your Wallet",
	"wallets::sources_jameson_lopp": "Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::wallets_blockstream_jade_costs": "Iye $79",
	"wallets::wallets_coldcard_mk5_costs": "Iye $189",
	"wallets::wallets_coldcard_q_costs": "Iye $289",
	"wallets::wallets_foundation_passport_costs": "Iye $199",
	"wallets::wallets_seedsigner_costs": "Àwọn ohun-èlò ná $50",
	"wallets::sources_blockstream_green": "Blockstream Green — Àpò Bitcoin oníṣàkóso-ara",
	"wallets::sources_blockstream_jade": "Blockstream Jade — Àpò ohun-èlò Bitcoin",
	"wallets::sources_coldcard_mk5": "Coinkite — Àpò ohun-èlò Coldcard MK5",
	"wallets::sources_coldcard_q": "Coinkite — Àpò ohun-èlò Coldcard Q",
	"wallets::sources_passport": "Foundation Devices — Àpò ohun-èlò Passport",
	"wallets::sources_seedsigner": "SeedSigner — Ẹ̀rọ ìfọwọ́sí Bitcoin DIY orísun-ṣíṣí",
	"wallets::wallets_grid_heading": "Àwọn àpò Bitcoin gbajúmọ̀",
	"wallets::wallets_header_subtitle":
		"Ìtọ́sọ́nà ìgbésẹ̀-pẹ̀-ìgbésẹ̀ láti yan àpò, dáàbò bo àwọn kọ́kọ́rọ́ rẹ, àti gba ìṣàkóso pípé lórí Bitcoin rẹ.",

	// ───────── bitcoin-vs-* manifest-added ─────────
	"bitcoin-vs-crypto::crypto": "CRYPTO",
	"bitcoin-vs-crypto::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Crypto</span>",
	"bitcoin-vs-bonds::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Àwọn Ìfòwó-mu</span>",
	"bitcoin-vs-bonds::point_6_summary_3": " — èyí ń yọ ewu náà kúrò pátápátá.",
	"bitcoin-vs-cash::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Owó Ààmù</span>",
	"bitcoin-vs-cbdc::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Àwọn CBDC</span>",
	"bitcoin-vs-cbdc::point_9_summary_3": " nígbà tí a bá tẹ̀ owó pọ̀ jù.",
	"bitcoin-vs-fine-art::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Iṣẹ́ Ọnà Giga</span>",
	"bitcoin-vs-gold::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Goolu</span>",
	"bitcoin-vs-real-estate::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Ohun-Ìní Gbígbé Fún Ọjà</span>",
	"bitcoin-vs-stocks::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Àwọn Ọjà</span>",
	"bitcoin-vs-visa::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Visa</span>",

	// ───────── buy ─────────
	"buy::buy_platform_atm_description":
		"Àwọn ATM Bitcoin jẹ́ kí o ra Bitcoin pẹ̀lú owó ààmù lẹ́sẹ̀kẹsẹ̀. Wá ọ̀kan tí ó súnmọ́ ọ pẹ̀lú Coin ATM Radar.",
	"buy::buy_platform_bisq_description":
		"Bisq jẹ́ ọjà ẹnikẹ́ni-sí-ẹnikẹ́ni aláìní-àárín tí ó jẹ́ kí ìṣòwò Bitcoin àdáni ṣeéṣe láìnílò KYC.",
	"buy::buy_platform_coinsquare_description":
		"Coinsquare jẹ́ ọjà Bitcoin Kánádà pẹ̀lú ìbámu ìlànà tó dára àti àtìlẹyìn oníbàárà.",
	"buy::buy_platform_feature_advanced": "Àwọn ẹ̀rọ ńlá",
	"buy::buy_platform_feature_anonymous": "Aláìmọ̀-ẹni síi",
	"buy::buy_platform_feature_auto_invest": "Àwọn ètò àdáṣe-fipámọ́",
	"buy::buy_platform_feature_bitcoin_only": "Bitcoin nìkan",
	"buy::buy_platform_feature_canadian": "Kánádà ní àfiyèsí",
	"buy::buy_platform_feature_cash": "Rírà pẹ̀lú owó ààmù",
	"buy::buy_platform_feature_custody": "Àwọn iṣẹ́ ìpamọ́",
	"buy::buy_platform_feature_dca": "Ìpín-iye dọ́là",
	"buy::buy_platform_feature_decentralized": "Aláìní-àárín",
	"buy::buy_platform_feature_education": "Àwọn ohun-èlò ẹ̀kọ́",
	"buy::buy_platform_feature_established": "Àyè tó ti dúró",
	"buy::buy_platform_feature_european": "Yúrópù ní àfiyèsí",
	"buy::buy_platform_feature_instant": "Rírà lẹ́sẹ̀kẹsẹ̀",
	"buy::buy_platform_feature_low_fees": "Owó kéré",
	"buy::buy_platform_feature_mining": "Iwakùsà Bitcoin",
	"buy::buy_platform_feature_p2p": "Ẹnikẹ́ni-sí-ẹnikẹ́ni",
	"buy::buy_platform_feature_private": "Ìṣòwò àdáni",
	"buy::buy_platform_feature_regulated": "Ọjà tí a ti kọ́ òfin",
	"buy::buy_platform_feature_security": "Ààbò tó dára",
	"buy::buy_platform_feature_self_custody": "Àpò oníṣàkóso-ara",
	"buy::buy_platform_feature_support": "Àtìlẹyìn oníbàárà",
	"buy::buy_platform_feature_withdrawal": "Yíyọ rírọrùn",
	"buy::buy_platform_kraken_description":
		"Kraken jẹ́ ọjà Bitcoin tó ti dúró pẹ̀lú àwọn ẹ̀rọ ìṣòwò ńlá àti ààbò tó dára.",
	"buy::buy_platform_relai_description":
		"Relai jẹ́ app Bitcoin-nìkan ti Switzerland pẹ̀lú àpò oníṣàkóso-ara, àwọn ẹ̀rọ àdáṣe-fipámọ́, àti owó kéré fún àwọn olùmúlò Yúrópù.",
	"buy::buy_platform_river_description":
		"River ń pèsè rírà Bitcoin, iwakùsà, àti àwọn iṣẹ́ ìpamọ́ pẹ̀lú àfiyèsí lórí ẹ̀kọ́ àti ààbò.",
	"buy::buy_platform_strike_description":
		"Strike ni ọ̀nà tí ó yára àti rírọrùn jùlọ láti ra Bitcoin pẹ̀lú owó kéré àti àtìlẹyìn Lightning Network lẹ́sẹ̀kẹsẹ̀.",
	"buy::buy_platform_swan_description":
		"Swan Bitcoin pàtó ní àwọn iṣẹ́ Bitcoin-nìkan pẹ̀lú ìpín-iye dọ́là àti àwọn ohun-èlò ẹ̀kọ́.",
	"buy::buy_header_subtitle": "Ìtọ́sọ́nà rírọrùn, ìgbésẹ̀-pẹ̀-ìgbésẹ̀ láti ra Bitcoin àkọ́kọ́ rẹ.",
	"buy::buy_howto_name": "Bí a ṣe ń ra Bitcoin",
	"buy::buy_meta_description":
		"Kẹ́kọ̀ọ́ bí o ṣe ń ra Bitcoin ní àìséwu pẹ̀lú ìtọ́sọ́nà ìgbésẹ̀-pẹ̀-ìgbésẹ̀ wa. Yan orílẹ̀-èdè rẹ àti ọ̀nà ìsanwó láti rí àwọn àṣàyàn rírà Bitcoin tí ó dára jùlọ fún ọ.",
	"buy::buy_step_1_eyebrow": "Ìgbésẹ̀ 1",
	"buy::buy_step_2_eyebrow": "Ìgbésẹ̀ 2",
	"buy::buy_step_3_eyebrow": "Ìgbésẹ̀ 3",
	"buy::buy_step_4_eyebrow": "Ìgbésẹ̀ 4",
	"buy::buy_storage_cta_label": "Ìgbésẹ̀ tí ó tẹ̀le",
	"buy::sources_bisq": "Bisq — Ọjà Bitcoin ẹnikẹ́ni-sí-ẹnikẹ́ni aláìní-àárín",
	"buy::sources_coinatmradar": "Coin ATM Radar — Atọ́nà ATM Bitcoin àgbáyé",
	"buy::sources_kraken": "Kraken — Ọjà Bitcoin tó ti dúró",
	"buy::sources_relai": "Relai — App Bitcoin-nìkan oníṣàkóso-ara ti Switzerland",
	"buy::sources_river": "River — Rírà, iwakùsà, àti ìpamọ́ Bitcoin-nìkan",
	"buy::sources_strike_lightning": "Strike — Ra Bitcoin pẹ̀lú àtìlẹyìn Lightning Network",
	"buy::sources_swan": "Swan Bitcoin — Ìpín-iye dọ́là Bitcoin-nìkan",

	// ───────── business/faq ─────────
	"business/faq::faq_hero_subtitle":
		"Àwọn ìdáhùn kúkúrú sí àwọn ìbéèrè tí àwọn alágbatà sábà béèrè jùlọ kí wọ́n tó bẹ̀rẹ̀ gbígba Bitcoin — owó, ìparí, àwọn àpò, chargeback, iye, àti síi.",
	"business/faq::faq_intro_c1":
		"Tẹ̀ ìbéèrè èyíkéyìí nísàlẹ̀ láti fẹ̀ ìdáhùn náà. Nígbà tí o bá tí múratán láti bẹ̀rẹ̀ gbígba Bitcoin, àwọn ohun-èlò iṣẹ́ ní ìsàlẹ̀ ojú-ìwé yóò gbà ọ kọjá ìgbésẹ̀ kọ̀ọ̀kan.",

	// ───────── business/index ─────────
	"business/index::biz_label_accounting": "ÌṢIRÒ",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "ÀWỌN MAP ALÁGBATÀ",
	"business/index::biz_label_rewards": "ÀWỌN ẸBÙN",
	"business/index::biz_label_stickers": "ÀWỌN ÀLÈMỌ́",
	"business/index::biz_label_wallets": "ÀWỌN ÀPÒ",
	"business/index::biz_meta_description":
		"Gba Bitcoin ní iṣẹ́ rẹ fún owó kéré, ìparí lẹ́sẹ̀kẹsẹ̀, kò sí àwọn chargeback, àti àwọn oníbàárà síi.",
	"business/index::business_hero_subtitle":
		"Gba àwọn ìsanwó pẹ̀lú owó kéré, gba ìsanwó lẹ́sẹ̀kẹsẹ̀, kí o sì dé àwọn mílíọ̀nù àwọn oníbàárà tuntun — pẹ̀lú odò àdéhùn àti odò àwọn iye tí ó pamọ́.",
	"business/index::business_intro_c1":
		"Bitcoin fún iṣẹ́ rẹ ní ọ̀nà tí ó yára, olówó-pọ́ọ́kú, àti àdáni síi láti gba ìsanwó. Kò sí àwọn alábàárìn. Kò sí àwọn chargeback. Kò sí àwọn àdéhùn. Kàn owó tí ó pari ní àwọn ìṣẹ́jú díẹ̀, tààrà láti àwọn oníbàárà rẹ sí ọ.",
	"business/index::business_intro_c2":
		"Nísàlẹ̀ ni ẹ̀dà kúkúrú ti ìdí tí Bitcoin fi dára fún iṣẹ́ — àti nísàlẹ̀ ni gbogbo ohun-èlò tí o nílò láti bẹ̀rẹ̀ gbígba lónìí.",
	"business/index::business_resources_heading": "Gbogbo ohun tí o nílò láti gba Bitcoin",
	"business/index::business_resources_intro": "Ṣe iṣẹ́ pẹ̀lú àwọn ohun-èlò wọ̀nyí ní ìwọ̀n rẹ. Kọ̀ọ̀kan jẹ́ ìtọ́sọ́nà kúkúrú, tí ó wúlò.",

	// ───────── business/maps ─────────
	"business/maps::biz_maps_form_header": "Sọ fún wa nípa iṣẹ́ rẹ",
	"business/maps::biz_maps_form_intro":
		"A nílò àlàyé díẹ̀ láti fi ọ́ pamọ́. A pa dátà àdírẹ́sì mọ́ nìkan tó láti fi iṣẹ́ rẹ ránṣẹ́ sí àwọn map.",
	"business/maps::biz_maps_hero_subtitle":
		"Fi iṣẹ́ rẹ pamọ́ ní ọ̀fẹ́ lórí BTC Map — atọ́nà àgbáyé ṣíṣí ti àwọn alágbatà tí ó gba Bitcoin — kí àwọn Bitcoiner tí ó súnmọ́ rẹ lè rí ọ kí wọ́n sì ná Bitcoin ní iṣẹ́ rẹ.",
	"business/maps::biz_maps_hero_title": "Fi iṣẹ́ rẹ sórí àwọn map alágbatà Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Àwọn Bitcoiner ń wá àwọn ibi láti ná lóòótọ́. Fífi iṣẹ́ rẹ sórí map fi ọ́ síwájú gbogbo olùmúlò Bitcoin tí ó ń wá ibi láti jẹun, ra, tàbí dúró sí — ní odò iye fún ọ.",
	"business/maps::biz_maps_intro_c2":
		"Kàn kún fọ́mù kúkúrú nísàlẹ̀, a ó sì fi iṣẹ́ rẹ ránṣẹ́ sí BTC Map àti àwọn map alágbatà Bitcoin mìíràn fún ọ.",
	"business/maps::biz_maps_meta_description":
		"Fi iṣẹ́ rẹ pamọ́ ní ọ̀fẹ́ lórí BTC Map àti àwọn map alágbatà Bitcoin mìíràn kí àwọn Bitcoiner tí ó súnmọ́ rẹ lè rí ọ.",
	"business/maps::biz_maps_placeholder_address": "Àdírẹ́sì opópónà",
	"business/maps::biz_maps_placeholder_category": "Ẹka (fún àpẹẹrẹ ilé-ìjẹun, ilé-kọfí, hotẹ́ẹ̀lì)",
	"business/maps::biz_maps_placeholder_city": "Ìlú",
	"business/maps::biz_maps_placeholder_country": "Orílẹ̀-èdè",
	"business/maps::biz_maps_placeholder_name": "Orúkọ iṣẹ́",
	"business/maps::biz_maps_placeholder_region": "Ìpínlẹ̀ / Agbègbè",
	"business/maps::biz_maps_placeholder_website": "Ojú-ìwé (kò pọn dandan)",
	"business/maps::biz_maps_view_map_cta": "Wo BTC Map",

	// ───────── business/maps-success ─────────
	"business/maps-success::biz_maps_success_btn_view_map": "Wo BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"O ṣé fún fífi iṣẹ́ rẹ ránṣẹ́. A ó pamọ́ rẹ lórí àwọn map alágbatà Bitcoin láìpẹ́.",
	"business/maps-success::biz_maps_success_hero_title": "A gba ìbéèrè 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"A ó pamọ́ iṣẹ́ rẹ lórí BTC Map àti àwọn atọ́nà alágbatà Bitcoin mìíràn láàárín ọ̀sẹ̀ 1 sí 2. A ń ṣe àyẹ̀wò fífiránṣẹ́ kọ̀ọ̀kan ní ọwọ́ kí àwọn map lè péye.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Lẹ́yìn tí a bá ti pamọ́ rẹ, àwọn Bitcoiner tí ó súnmọ́ rẹ lè rí iṣẹ́ rẹ kí wọ́n sì wá ná Bitcoin níbẹ̀.",
	"business/maps-success::biz_maps_success_timeline_header": "Kíni yóò ṣẹlẹ̀ tó kàn",
	"business/maps-success::biz_maps_success_view_c1":
		"Bí o ṣe ń dúró, wo BTC Map láti rí nẹ́tíwọ́ọ̀kì àwọn iṣẹ́ tí ó ń pọ̀ sí tí wọ́n ń gba Bitcoin ní àgbáyé.",
	"business/maps-success::biz_maps_success_view_header": "Wo ibi tí ìwọ ó wà",

	// ───────── business/sticker-files/english/index ─────────
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Tẹ àwọn àlèmọ́ 'Bitcoin Accepted Here' tirẹ ní Èdè Gẹ̀ẹ́sì láti jẹ́ kí àwọn oníbàárà rẹ mọ̀ pé o gba Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Ṣe ìgbàsílẹ̀ àwọn àkójọpọ̀ àlèmọ́ 'Bitcoin Accepted Here' Èdè Gẹ̀ẹ́sì",

	// ───────── business/sticker-language-success ─────────
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"O ṣé fún bíbéèrè àwọn àkójọpọ̀ àlèmọ́ 'Bitcoin Accepted Here' ní èdè rẹ.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title": "A gba ìbéèrè 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"A ó dá àwọn àkójọpọ̀ àlèmọ́ rẹ kí a sì tẹ̀ wọ́n jáde láàárín ọ̀sẹ̀ 3 sí 4. Lẹ́yìn tí wọ́n bá ti ṣetán, ìwọ ó lè ṣe ìgbàsílẹ̀ wọn láti ojú-ìwé àkójọpọ̀ àlèmọ́ wa kí o sì tẹ̀ wọ́n ní ọ̀fẹ́.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"A tu àwọn àkójọpọ̀ àlèmọ́ jáde ní àwọn ìpín, nítorí náà ó lè gba ọ̀sẹ̀ díẹ̀ fún èdè rẹ láti wà lórí ojú-ìwé. O ṣé fún sùúrù rẹ!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header": "Kíni yóò ṣẹlẹ̀ tó kàn",

	// ───────── business/sticker-success ─────────
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "Bere ní bulk",
	"business/sticker-success::biz_sticker_success_btn_request_more": "Béèrè àkójọpọ̀ ọ̀fẹ́ mìíràn",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"O ó gba àwọn àlèmọ́ 'Bitcoin Accepted Here' ọ̀fẹ́ rẹ láàárín ọ̀sẹ̀ 2 sí 4, nínú àpò funfun lásán pẹ̀lú àwọn àlèmọ́ 3 nínú.",
	"business/sticker-success::biz_sticker_success_hero_title": "Àwọn àlèmọ́ rẹ ti wà ní ọ̀nà 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Bí àwọn àlèmọ́ 3 kò bá tó fún iṣẹ́ rẹ, jọ̀wọ́ béèrè àkójọpọ̀ ọ̀fẹ́ mìíràn — tàbí kí o bere ní bulk láti ọ̀dọ̀ ilé-iṣẹ́ tẹ̀-ìpolówó kan náà tí a ń lò.",
	"business/sticker-success::biz_sticker_success_more_header": "Ṣé o nílò àwọn àlèmọ́ síi?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Lórí ẹnu-ọ̀nà iwájú rẹ tàbí ojú-fèrèsé kí àwọn oníbàárà lè rí i kí wọ́n tó wọ inú",
	"business/sticker-success::biz_sticker_success_tip_2": "Súnmọ́ olùgbasilẹ rẹ, terminal POS, tàbí àyè ìsanwó",
	"business/sticker-success::biz_sticker_success_tip_3": "Lórí àwọn menu, àkọsílẹ̀ iye, tàbí àpò òwò",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Má ṣe fi wọ́n sí ibikíbi tí o kò ní tàbí tí o kò ní ìyọ̀ǹda láti fi wọ́n",
	"business/sticker-success::biz_sticker_success_tips_header": "Àwọn ibi rere láti fi àwọn àlèmọ́ rẹ",

	// ───────── business/stickers ─────────
	"business/stickers::biz_stickers_hero_subtitle":
		"Jẹ́ kí àwọn oníbàárà rẹ mọ̀ pé o gba Bitcoin. Bere àkójọpọ̀ àlèmọ́ 'Bitcoin Accepted Here' ọ̀fẹ́ kan láti fi sí iṣẹ́ rẹ.",
	"business/stickers::biz_stickers_hero_title": "Àwọn àlèmọ́ 'Bitcoin Accepted Here' ọ̀fẹ́",
	"business/stickers::biz_stickers_intro_c1":
		"Gbígba Bitcoin jẹ́ ìdajì iṣẹ́ nìkan — àwọn oníbàárà rẹ pẹ̀lú nílò láti mọ̀ pé o ṣe é. Àwọn àlèmọ́ kéré 'Bitcoin Accepted Here' wọ̀nyí ni a ṣe láti so mọ́ ẹnu-ọ̀nà iwájú rẹ, olùgbasilẹ, menu, tàbí ibi mìíràn tí àwọn oníbàárà yóò rí i kí wọ́n tó sanwó.",
	"business/stickers::biz_stickers_intro_c2":
		"A ó fi àkójọpọ̀ ọ̀fẹ́ ránṣẹ́ sí ọ ní àyè èyíkéyìí ní USA tàbí Kánádà, tàbí o lè tẹ tirẹ ní àyè èyíkéyìí ní àgbáyé.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kánádà — Ọ̀fẹ́ nípa ìfírànṣẹ́",
	"business/stickers::biz_stickers_option_print": "🌍 Àgbáyé — Tẹ tirẹ",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 USA — Ọ̀fẹ́ nípa ìfírànṣẹ́",
	"business/stickers::biz_stickers_placeholder_translation1": "Ìtumọ̀ fún 'Bitcoin Accepted Here'",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Ìtumọ̀ fún 'Scan to learn why Bitcoin is good for business.'",
	"business/stickers::biz_stickers_print_c1":
		"O lè tẹ àwọn àlèmọ́ 'Bitcoin Accepted Here' tirẹ, láìka ibi tí o ń gbé. Tẹ̀ èdè rẹ nísàlẹ̀ láti gba àwọn àkójọpọ̀ àlèmọ́ àti àwọn ìtọ́ni títẹ̀.",
	"business/stickers::biz_stickers_print_header": "Tẹ àwọn àkójọpọ̀ àlèmọ́ tirẹ",
	"business/stickers::biz_stickers_request_c1":
		"Kún fọ́mù tí ó wà nísàlẹ̀ láti béèrè àwọn àkójọpọ̀ àlèmọ́ 'Bitcoin Accepted Here' ní èdè àdúgbò rẹ. A ó jẹ́ kí o mọ̀ nígbà tí wọ́n bá ti ṣetán.",
	"business/stickers::biz_stickers_request_header": "Ṣé o kò rí èdè rẹ?",
	"business/stickers::biz_stickers_step_description":
		"A ó rán àkójọpọ̀ ọ̀fẹ́ sí àwọn àdírẹ́sì ní USA àti Kánádà. Níbi mìíràn ní àgbáyé, o lè tẹ tirẹ.",
	"business/stickers::biz_stickers_step_header": "Báwo ni o ṣe fẹ́ gba àwọn àlèmọ́ rẹ?",

	// ───────── business/why (manifest-added) ─────────
	"business/why::why_biz_s1": "Owó kéré, púpọ̀ síi fún iṣẹ́",
	"business/why::why_biz_s1_c1":
		"Àwọn ìsanwó Bitcoin fò àwọn ilé-ìfowópamọ́ àti àwọn ilé-iṣẹ́ káàdì kírẹ́dítì kọjá tí wọ́n ń gba 2–3% láti gbogbo ìtàjà. Iṣẹ́ ń pa púpọ̀ síi mọ́ nínú ohun tí o sanwó — èyí tí ó sábà jẹ́ àwọn iye tí ó dára àti iṣẹ́ tí ó dára síi fún ọ.",
	"business/why::why_biz_s2": "Ìparí lẹ́sẹ̀kẹsẹ̀, kò sí àwọn chargeback",
	"business/why::why_biz_s2_c1":
		"Àwọn ìsanwó Bitcoin pari ní àwọn ìṣẹ́jú díẹ̀, tààrà láti àpò rẹ sí iṣẹ́. Kò sí ìdúró fún àwọn ọjọ́ pé ilé-ìfowópamọ́ kan ìtujáde owó, kò sì sí àwọn ìjà chargeback olówó-iyebíye — kí iṣẹ́ lè dojú kọ ìpèsè iṣẹ́ fún àwọn oníbàárà dípò jíja-ìjà-ọrùn-jagunjagun.",
	"business/why::why_biz_s3": "Ọ̀fẹ́ láti gba, ṣíṣí sí ẹnikẹ́ni",
	"business/why::why_biz_s3_c1":
		"Kò sí àwọn àdéhùn, owó oṣù, tàbí àwọn iye ìfìlélẹ̀ fún iṣẹ́ kan láti gba Bitcoin. Àwọn mílíọ̀nù olùmúlò Bitcoin ní àgbáyé ń wá àwọn alágbatà tí ó ń gbà — èyí ń fún iṣẹ́ yìí ní ìfihàn ọ̀fẹ́ sí àwọn oníbàárà tuntun.",
	"business/why::why_business_cta_intro": "Ṣé o ń ṣe iṣẹ́ tí o sì fẹ́ bẹ̀rẹ̀ gbígba Bitcoin?",
	"business/why::why_business_cta_link": "Wo bí ó ṣe ń ṣiṣẹ́ →",
	"business/why::why_for_business": "Ìdí tí Bitcoin fi dára fún iṣẹ́ yìí",
	"business/why::why_for_business_intro":
		"Gbígba Bitcoin jẹ́ kí iṣẹ́ pa púpọ̀ síi mọ́ láti gbogbo ìtàjà, gba ìsanwó lẹ́sẹ̀kẹsẹ̀ pẹ̀lú odò àwọn chargeback, kí ó sì dé ọwọ́ àwọn olùmúlò Bitcoin àgbáyé — gbogbo rẹ̀ pẹ̀lú odò àdéhùn àti odò owó oṣù.",
	"business/why::why_good_for_you_intro":
		"Bitcoin kò kàn wúlò ní ààbò olùgbasilẹ — ó jẹ́ ọ̀nà owó tó dára síi tí ó ń dáàbò bo ìfowópamọ́ rẹ, àdáni rẹ, àti òmìnira rẹ láti ṣòwò. Èyí ni ìwòran kíákíá.",
	"business/why::why_hero_subtitle":
		"O ṣẹ̀ṣẹ̀ wo àlèmọ́ Bitcoin Accepted Here. Èyí ni ìdí tí èyí fi jẹ́ ìròyìn dára — fún iṣẹ́ yìí, àti fún ọ.",
	"business/why::why_intro_c1":
		"Iṣẹ́ tí o wà ń gba Bitcoin — nẹ́tíwọ́ọ̀kì ìsanwó òde-òní, orísun-ṣíṣí tí ẹnikẹ́ni lè lò, níbi gbogbo ní àgbáyé, láìní ilé-ìfowópamọ́ tàbí àwọn alábàárìn tí ó gba ìpín.",
	"business/why::why_intro_c2":
		"Nísàlẹ̀ ni ẹ̀dà kúkúrú ti ìdí tí gbígba Bitcoin fi dára fún iṣẹ́ yìí, pẹ̀lú ìdí tí lílò Bitcoin fi dára fún ọ gẹ́gẹ́ bí oníbàárà.",
	"business/why::why_next_business_label": "GBA BITCOIN",
	"business/why::why_next_business_title": "Gba Bitcoin ní iṣẹ́ rẹ",
	"business/why::why_next_buy_label": "RA BITCOIN",
	"business/why::why_next_buy_title": "Ra Bitcoin àkọ́kọ́ rẹ",
	"business/why::why_next_learn_label": "KẸ́KỌ̀Ọ́ SÍI",
	"business/why::why_next_learn_title": "Kẹ́kọ̀ọ́ síi nípa Bitcoin",
	"business/why::why_next_wallet_label": "GBA ÀPÒ KAN",
	"business/why::why_next_wallet_title": "Gba àpò Bitcoin tirẹ",
	"business/why::why_whats_next_heading": "Sí ibo ni o tó kàn?",
	"business/why::why_whats_next_intro":
		"Bí èyí jẹ́ ìṣẹ̀ṣì àkọ́kọ́ àlèmọ́ Bitcoin rẹ, èyí ni àwọn ibi tó wúlò jùlọ láti lọ láti ibi.",

	// ───────── flyers ─────────
	"flyers::flyers_hero_subtitle":
		"Àwọn ìpolówó Bitcoin ọ̀fẹ́, tí a lè tẹ̀. Fi wọ́n sí gbangba láti ràn àwọn ènìyàn púpọ̀ síi lọ́wọ́ láti kẹ́kọ̀ọ́ nípa Bitcoin.",
	"flyers::flyers_hero_title": "Tẹ àti fi àwọn ìpolówó Bitcoin sí",
	"flyers::flyers_next_get_stickers": "Tan ọ̀rọ̀ kálẹ̀",
	"flyers::flyers_next_get_stickers_desc": "Bere àkójọpọ̀ àwọn àlèmọ́ Bitcoin ọ̀fẹ́",

	// ───────── get-involved (manifest-added) ─────────
	"get-involved::get_involved_biz_stickers_note":
		"Ṣé o ń gba Bitcoin tẹ́lẹ̀? Jẹ́ kí àwọn oníbàárà mọ̀ pẹ̀lú àwọn àlèmọ́ 'Bitcoin Accepted Here' ọ̀fẹ́ wa. A ó rán àkójọpọ̀ sí àyè èyíkéyìí ní USA tàbí Kánádà, tàbí o lè tẹ tirẹ ní àyè èyíkéyìí ní àgbáyé.",
	"get-involved::get_involved_card_biz_stickers_label": "Àwọn àlèmọ́ Accepted Here",
	"get-involved::get_involved_card_biz_stickers_source": "Orísun: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title": "Àwọn àlèmọ́ 'Bitcoin Accepted Here' ọ̀fẹ́ fún iṣẹ́ rẹ",
	"get-involved::get_involved_card_business_label": "Bitcoin fún iṣẹ́",
	"get-involved::get_involved_card_business_source": "Orísun: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title": "Gbogbo ohun tí iṣẹ́ kan nílò láti bẹ̀rẹ̀ gbígba àwọn ìsanwó Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Àwọn ìpolówó tí a lè tẹ̀",
	"get-involved::get_involved_card_flyers_source": "Orísun: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title": "Ṣe ìgbàsílẹ̀ kí o sì tẹ ìpolówó Bitcoin ọ̀fẹ́",
	"get-involved::get_involved_card_github_label": "Orísun-ṣíṣí",
	"get-involved::get_involved_card_github_source": "Orísun: GitHub →",
	"get-involved::get_involved_card_github_title": "Ṣe àfikún sí bitcoin.rocks lórí GitHub",
	"get-involved::get_involved_card_stickers_label": "Àwọn àlèmọ́ ọ̀fẹ́",
	"get-involved::get_involved_card_stickers_source": "Orísun: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title": "Béèrè àkójọpọ̀ àlèmọ́ Bitcoin ọ̀fẹ́ tí a fi ránṣẹ́ sí ẹnu-ọ̀nà rẹ",
	"get-involved::get_involved_flyers_content_1":
		"Àwọn ìpolówó jẹ́ ọ̀kan nínú àwọn ọ̀nà tí ó rọrùn jùlọ láti ṣàfihàn Bitcoin sí àyíká rẹ. Ṣe ìgbàsílẹ̀ ìpolówó Bitcoin ọ̀fẹ́ tí a lè tẹ̀, tẹ àwọn ẹ̀dà tí o fẹ́, kí o sì fi wọ́n sí ojú-ìwé àyíká, ní ilé-kọfí, ní àwọn ìpàdé, tàbí ibi mìíràn tí àwọn ènìyàn ń pé.",
	"get-involved::get_involved_flyers_content_2":
		"Ìpolówó kọ̀ọ̀kan ní orí ìwé tí ó wúwo àti QR code tí ó rán àwọn olùkà tí wọ́n ní ìfẹ́-mọ̀ sí bitcoin.rocks láti kẹ́kọ̀ọ́ síi.",
	"get-involved::get_involved_flyers_content_3":
		"Yàtọ̀ sí àwọn àlèmọ́, a lè tẹ àwọn ìpolówó ní ìbéèrè láti ibi gbogbo ní àgbáyé — gbogbo ohun tí o nílò ni ẹ̀rọ tẹ̀-ìpolówó àti àwọn ìṣẹ́jú díẹ̀.",
	"get-involved::get_involved_flyers_header": "Tẹ àti fi ìpolówó kan sí",
	"get-involved::get_involved_flyers_image_alt": "Ìwòran ti ìpolówó Bitcoin ọ̀fẹ́ tí a lè tẹ̀ láti bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks jẹ́ iṣẹ́-ìṣẹ̀dá ọ̀fẹ́, orísun-ṣíṣí tí MIT License fi ìwé-àṣẹ rẹ̀ fún. Ètò wa ni láti yára ìgbàfẹ́ Bitcoin nípasẹ̀ ẹ̀kọ́ — a kò sì lè ṣe é nìkan.",
	"get-involved::get_involved_github_content_2":
		"Bí o bá jẹ́ olùṣàfihàn, ọ̀gbọ̀n-ìṣe, akọ̀wé, tàbí olùtumọ̀, ọ̀nà wà fún ọ láti ràn lọ́wọ́. A pàápàá kí àwọn olùṣe-àfikún kí, tí wọ́n lè tumọ̀ àkóónú wa sí àwọn èdè púpọ̀ síi kí àwọn ènìyàn púpọ̀ síi ní àgbáyé lè kẹ́kọ̀ọ́ nípa Bitcoin ní èdè ìbílẹ̀ wọn.",
	"get-involved::get_involved_github_content_3":
		"Fork repository, ṣíi pull request, fi ọ̀rọ̀ sílẹ̀, tàbí kí o kàn fi ìràwọ̀ sí iṣẹ́ náà láti fi ìtìlẹyìn rẹ hàn. Gbogbo àfikún ń ràn Bitcoin lọ́wọ́ láti dé ọwọ́ àwọn ènìyàn púpọ̀ síi.",
	"get-involved::get_involved_github_header": "Ṣe àfikún lórí GitHub",
	"get-involved::get_involved_sticker_image_alt": "Àkójọpọ̀ àlèmọ́ ọ̀rọ̀ Bitcoin ọ̀fẹ́ láti bitcoin.rocks",

	// ───────── sticker-language-success ─────────
	"sticker-language-success::sticker_language_success_hero_title": "A gba ìbéèrè 🎉",

	// ───────── sticker-success ─────────
	"sticker-success::sticker_success_btn_order_bulk": "Bere ní bulk",
	"sticker-success::sticker_success_btn_share_on_nostr": "Pín lórí Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Kíni Nostr?",
	"sticker-success::sticker_success_bulk_header": "Ṣé o fẹ́ àwọn àlèmọ́ síi?",
	"sticker-success::sticker_success_hero_title": "Àwọn àlèmọ́ rẹ ti wà ní ọ̀nà 🎉",
	"sticker-success::sticker_success_share_header": "Pín àwọn ibi àlèmọ́ rẹ",
	"sticker-success::sticker_success_tips_header": "Àwọn ibi rere fún àlèmọ́",
};

const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf-8"));
let filled = 0;
for (const e of report.entries) {
	if (e.targetTranslation !== null) continue;
	const k = `${e.namespace}::${e.key}`;
	if (T[k] !== undefined) {
		e.targetTranslation = T[k];
		filled++;
	}
}
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
console.log(`part2: filled=${filled}`);

// Report what's still null
const stillNull = report.entries.filter(e => e.targetTranslation === null);
console.log(`Still null: ${stillNull.length}`);
if (stillNull.length) {
	const byNs = {};
	for (const e of stillNull) (byNs[e.namespace] = byNs[e.namespace] || 0) , byNs[e.namespace]++;
	for (const [ns, c] of Object.entries(byNs).sort((a,b) => b[1]-a[1])) {
		console.log("  ", c, ns);
	}
	console.log("Sample first 10:");
	for (const e of stillNull.slice(0, 10)) console.log(`    ${e.namespace}::${e.key} (${e.reason})`);
}
