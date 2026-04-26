#!/usr/bin/env node
/**
 * Yoruba (yo) manifest refresh — part 1 of remaining entries.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-banks (missing entries),
 * bitcoin-vs-* (manifest-added entries), business/accounting (missing
 * + manifest-added), business/wallets, common (missing + manifest-added
 * + untranslated dimensions), compound-inflation-calculator, index,
 * lightning, nostr/index, stickers (missing + manifest-added),
 * wallets, business/faq, business/index, business/maps,
 * business/maps-success, business/sticker-files/english/index,
 * business/sticker-language-success, business/sticker-success,
 * business/stickers, business/why (manifest-added), buy
 * (manifest-added + untranslated), flyers, get-involved
 * (manifest-added), sticker-language-success, sticker-success.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(__dirname, "..", "i18n-audit", "reports", "yo.json");

// namespace::key → Yoruba translation
const T = {
	// ───────── 404 ─────────
	"404::404_not_found_short": "A Kò Rí I",

	// ───────── about ─────────
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_page_description":
		"bitcoin.rocks jẹ́ ojú-ìwé ẹ̀kọ́ Bitcoin ọ̀fẹ́, orísun-ṣíṣí tí a dá sílẹ̀ ní 2022. Ètò wa ni láti yára ìgbàfẹ́ Bitcoin nípasẹ̀ ẹ̀kọ́.",
	"about::about_business_blurb":
		"A pèsè àwọn ohun-èlò ọ̀fẹ́ fún iṣẹ́ tí ó ń ṣe é rọrùn láti gbé àwọn alágbatà àdúgbò wọlé láti gba Bitcoin. Ojú-ìwé iṣẹ́ Bitcoin wa ń bo ìdí tí Bitcoin fi dára fún iṣẹ́, bí a ṣe ń yan àpò àti àyè-tà, ó sì pèsè àwọn àlèmọ́ 'Bitcoin Accepted Here' ọ̀fẹ́.",
	"about::about_card_business_label": "Àwọn ohun-èlò iṣẹ́",
	"about::about_card_business_source": "Orísun: bitcoin.rocks →",
	"about::about_card_business_title": "Gbogbo ohun tí iṣẹ́ kan nílò láti bẹ̀rẹ̀ gbígba àwọn ìsanwó Bitcoin",
	"about::about_card_contact_github_source": "Orísun: GitHub →",
	"about::about_card_contribute_label": "Ṣe àfikún",
	"about::about_card_contribute_source": "Orísun: GitHub →",
	"about::about_card_contribute_title": "Kẹ́kọ̀ọ́ bí o ṣe ń ṣe àfikún sí bitcoin.rocks",
	"about::about_card_email_label": "Ímeèlì",
	"about::about_card_email_source": "Orísun: ímeèlì →",
	"about::about_card_flyers_label": "Àwọn ìpolówó tí a lè tẹ̀",
	"about::about_card_flyers_source": "Orísun: bitcoin.rocks →",
	"about::about_card_flyers_title": "Ṣe ìgbàsílẹ̀ kí o sì tẹ àwọn ìpolówó Bitcoin fún àyíká rẹ",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Orísun: GitHub →",
	"about::about_card_github_title": "Wo bitcoin.rocks lórí GitHub",
	"about::about_card_nostr_source": "Orísun: Nostr →",
	"about::about_card_stickers_label": "Àwọn àlèmọ́ ọ̀fẹ́",
	"about::about_card_stickers_source": "Orísun: bitcoin.rocks →",
	"about::about_card_stickers_title": "Gba àwọn àlèmọ́ Bitcoin ọ̀fẹ́ tí a fi ránṣẹ́ sí ẹnu-ọ̀nà rẹ",
	"about::about_flyers_blurb":
		"A ṣe àwọn ìpolówó tí a lè tẹ̀ tí o lè pín ní àwọn ìpàdé, fi sí ojú-ìwé àyíká, tàbí kí o sọ sí àpòlétà — ọ̀nà rírọrùn láti mú ìfẹ́-mọ̀ jí kí o sì rán àwọn ènìyàn sí bitcoin.rocks láti kẹ́kọ̀ọ́ síi.",
	"about::about_mission_1a": "A dá bitcoin.rocks sílẹ̀ nípasẹ̀",
	"about::about_mission_1b": "ní 2022 pẹ̀lú ètò rírọrùn: yára ìgbàfẹ́ Bitcoin nípasẹ̀ ẹ̀kọ́.",
	"about::about_stickers_blurb":
		"A fi àwọn àlèmọ́ Bitcoin ọ̀fẹ́ ránṣẹ́ sí ẹnu-ọ̀nà rẹ kí o lè ràn lọ́wọ́ láti tan ìmọ̀ Bitcoin kálẹ̀ ní àyíká rẹ. Àwọn ọgọrùn-ún ènìyàn ń wo àwọn QR code lórí àwọn àlèmọ́ wọ̀nyí lóṣooṣù láti kẹ́kọ̀ọ́ nípa Bitcoin.",

	// ───────── bank-runs ─────────
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin kò ní ìjàmbá ilé-ìfowópamọ́",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin jẹ́ ètò ìpamọ́-pípé. O kò pa owó rẹ mọ́ ní ilé-ìfowópamọ́. Ìwọ ni ilé-ìfowópamọ́ ara rẹ. Kò sí àyà owó rẹ láìmọ̀ọ́mọ̀ nítorí ìwọ nìkan ni ó lè wọ owó rẹ.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Niwọ̀n ìgbà tí o bá di Bitcoin nínú àpò tirẹ — kì í ṣe lórí ọjà tàbí nínú ETF — àwọn ìjàmbá ilé-ìfowópamọ́ kò ṣeéṣe.",
	"bank-runs::bank_runs_bitcoin_p3": "Pẹ̀lú Bitcoin, o ní ìṣàkóso lóòótọ́ lórí owó rẹ.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Látinú Oṣù Kẹta 26, 2020, àwọn ilé-ìfowópamọ́ U.S. ní láti pa 0% mọ́ ní ìpamọ́.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Iye ìpamọ́ ilé-ìfowópamọ́",
	"bank-runs::bank_runs_card_bank_reserve_source": "Orísun: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail": "Ètò ìpamọ́-pípé — kò sí ìdánilójú ìpamọ́ tí ó nílò.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Ìbo Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source": "Orísun: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail": "Bitcoin kọ̀ọ̀kan ń wà lórí blockchain — kò sí ohun tí a yá kúrò.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Iye ìpamọ́ Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source": "Orísun: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail": "$153.9B owó ìdánilójú vs $10.82T nínú ìpamọ́ tí a fi ìdánilójú bo (Oṣù Kejìlá 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Ìbo FDIC",
	"bank-runs::bank_runs_card_fdic_source": "Orísun: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_svb_label": "Ìwádìí ọ̀rọ̀",
	"bank-runs::bank_runs_card_svb_source": "Orísun: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title": "Kẹ́kọ̀ọ́ bí ìjàmbá Silicon Valley Bank ṣe ṣẹlẹ̀",
	"bank-runs::bank_runs_card_wallet_label": "Ìgbésẹ̀ tí ó tẹ̀le",
	"bank-runs::bank_runs_card_wallet_source": "Bẹ̀rẹ̀ níhìn-ín →",
	"bank-runs::bank_runs_card_wallet_title": "Kẹ́kọ̀ọ́ bí o ṣe ń gba àpò Bitcoin tirẹ",
	"bank-runs::bank_runs_fdic_heading": "Ìdánilójú FDIC ń bo nípa 1% nínú àwọn ìpamọ́",
	"bank-runs::bank_runs_fdic_p1":
		"Ìdánilójú FDIC ń dáàbò bo àwọn ìpamọ́ títí $250,000 fún olùpa-mọ́ kọ̀ọ̀kan. Ṣùgbọ́n owó ìdánilójú náà kéré gan-an ní ìfiwéra pẹ̀lú àpapọ̀ àwọn ìpamọ́ tí ó yẹ kí ó dáàbò.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Nínú ìkùnà ilé-ìfowópamọ́ tí ó tóbi, ìjọba lè tẹ̀ owó láti bo ààlà náà — èyí yóò yọrí sí",
	"bank-runs::bank_runs_fdic_p2_link": "owó-ṣíṣẹ́ síi.",
	"bank-runs::bank_runs_page_description":
		"Àwọn ilé-ìfowópamọ́ ń yá àwọn ìpamọ́ rẹ kúrò lábẹ́ ètò ìpamọ́-ọ̀wọ̀n. Bí àwọn ènìyàn tó pọ̀ jù bá yọ owó kúrò lẹ́ẹ̀kọ̀ọ̀kan, àwọn ilé-ìfowópamọ́ lè kùnà. Bitcoin jẹ́ ètò ìpamọ́-pípé — àwọn ìjàmbá ilé-ìfowópamọ́ kò ṣeéṣe.",
	"bank-runs::bank_runs_svb_heading": "Silicon Valley Bank: àpẹẹrẹ gidi",
	"bank-runs::bank_runs_svb_p1_a":
		"Ní Oṣù Kẹta 2023, Silicon Valley Bank kùnà lẹ́yìn tí ó ti ná àwọn ìpamọ́ oníbàárà sínú ọ̀rọ̀ ìdúró-pẹ́",
	"bank-runs::bank_runs_svb_p1_b": "Nígbà tí àwọn ìfòwó-mu wọ̀nyẹn pàdánù iye, SVB kò lè bo àwọn àyà. Ilé-ìfowópamọ́ náà kò ní owó.",
	"bank-runs::bank_runs_svb_p1_link": "ìfòwó-mu ìjọba.",
	"bank-runs::bank_runs_svb_p2":
		"Ẹgbẹẹgbẹ̀rún àwọn iṣẹ́ kò lè san àwọn òṣìṣẹ́ wọn. FDIC wọ inú rẹ̀ — ṣùgbọ́n èyí gbé ìbéèrè ńlá: ṣé owó rẹ wà ní àìséwu lóòótọ́?",
	"bank-runs::bank_runs_what_p1":
		"Àwọn ilé-ìfowópamọ́ kò ní àwọn ìpamọ́ rẹ nínú àpò-ìpamọ́. Wọ́n ń yá owó rẹ kúrò wọ́n sì ń ná a — èyí ni a pè ní ètò ìpamọ́-ọ̀wọ̀n.",
	"bank-runs::bank_runs_what_p2":
		"Bí àwọn ènìyàn tó pọ̀ jù bá gbìyànjú láti yọ kúrò lẹ́ẹ̀kọ̀ọ̀kan, ilé-ìfowópamọ́ kò ní owó tó láti sanwó padà sí gbogbo wọn. Èyí ni ìjàmbá ilé-ìfowópamọ́ — ó sì lè mú kí àwọn ilé-ìfowópamọ́ ṣubú pátápátá.",

	// ───────── bitcoin-vs-banks ─────────
	"bitcoin-vs-banks::bitcoin": "BITCOIN",
	"bitcoin-vs-banks::hero_title":
		"Iyàtọ̀ láàárín <span class=\"orange\">Bitcoin</span> àti <span class=\"asset\">Àwọn Ilé-Ìfowópamọ́</span>",

	// ───────── business/accounting ─────────
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title": "Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_card_bpr_label": "IYE BITCOIN",
	"business/accounting::accounting_card_bpr_title": "Wádìí iye dọ́là Bitcoin tí ó wà lọ́wọ́ tàbí ti ìtàn",
	"business/accounting::accounting_card_pacioli_label": "ÀWỌN AKỌSÍLẸ̀-IṢIRÒ BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label": "ÌFITUMỌ̀ EXCEL",
	"business/accounting::accounting_card_spreadsheet_title": "Mú àwọn iye Bitcoin wá sí inú Excel láìjáde",
	"business/accounting::accounting_card_wallets_label": "ÀWỌN ÀPÒ ÀKÓMỌ̀",
	"business/accounting::accounting_card_wallets_title": "Wo àwọn àpò iṣẹ́ tí a ṣe ìṣàfihàn",
	"business/accounting::accounting_disclaimer":
		"Ìtọ́sọ́nà yìí jẹ́ fún àlàyé nìkan kò sì ní láti rí gẹ́gẹ́ bí ìmọ̀ràn owó-ọrẹ. Fún ìmọ̀ràn owó-ọrẹ pàtó sí ipò rẹ, jọ̀wọ́ kàn sí akọsílẹ̀-iṣirò tí ó yẹ.",
	"business/accounting::accounting_disclaimer_label": "Jọ̀wọ́ ṣe àkíyèsí",
	"business/accounting::accounting_example_feb_1": "Oṣù Kejì 1",
	"business/accounting::accounting_example_gain_badge": "Èrè-owó",
	"business/accounting::accounting_example_gain_explain": "O kọ èrè-owó $10.",
	"business/accounting::accounting_example_jan_1": "Oṣù Kínní 1",
	"business/accounting::accounting_example_loss_badge": "Àdánù-owó",
	"business/accounting::accounting_example_loss_explain": "O kọ àdánù-owó $10.",
	"business/accounting::accounting_example_received_label": "A gbà",
	"business/accounting::accounting_example_sold_label": "A tà tàbí ná",
	"business/accounting::accounting_hero_subtitle":
		"Gbígba Bitcoin ní iṣẹ́ rẹ kò ní láti díjú ìṣirò rẹ. Èyí ni ẹ̀dà kúkúrú — pẹ̀lú àwọn ohun-èlò àti àwọn akọṣẹ́mọṣẹ́ láti ṣe é láìṣòro.",
	"business/accounting::accounting_intro_c1":
		"Bí o bá ti ń gba owó ààmù tàbí káàdì, fífi Bitcoin kún ìwé-ìṣirò iṣẹ́ rẹ rọrùn ju bí ó ti rí. O ní ọ̀nà méjì: yí gbogbo ìsanwó Bitcoin padà sí dọ́là lẹ́sẹ̀kẹsẹ̀ tí ó dé (kò sí ìṣirò tuntun tí ó nílò), tàbí kí o pa apá kan mọ́ gẹ́gẹ́ bí Bitcoin (àwọn nọ́mbà afikún díẹ̀ láti tọpa).",
	"business/accounting::accounting_intro_c2":
		"Ìtọ́sọ́nà yìí gbà ọ kọjá àwọn méjèèjì — kí o lè yan ọ̀kan tí ó bá iṣẹ́ rẹ mu kí o sì bẹ̀rẹ̀ gbígba Bitcoin ní ìgbẹ́kẹ̀lé.",
	"business/accounting::accounting_s1": "Ọ̀nà rírọrùn: yí padà sí dọ́là láìjáde",
	"business/accounting::accounting_s3_c6": "Ìyẹn nìkan ni. Ìṣirò abẹ́nú jẹ́ ó dúró pẹ̀lú bí a ṣe ń ṣe iṣirò ohun-ìní mìíràn tí ó ń pọ̀ tàbí dín kù.",
	"business/accounting::sources_bitcoin_price_report": "Bitcoin Price Report — Iye dọ́là Bitcoin lọ́wọ́ àti ti ìtàn",
	"business/accounting::sources_satoshi_pacioli": "Satoshi Pacioli Accounting Services — Ìṣirò Bitcoin fún àwọn iṣẹ́",
	"business/accounting::sources_spreadsheet_guru": "The Spreadsheet Guru — Mú àwọn iye cryptocurrency wá sí inú Excel",

	// ───────── business/wallets ─────────
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Gbogbo àwọn àpò Bitcoin ń bá ara wọn ṣiṣẹ́ — yan ọ̀kan tí ó bá iṣẹ́ rẹ mu. Ọ̀fẹ́, ìparí lẹ́sẹ̀kẹsẹ̀, kò sí àwọn chargeback.",
	"business/wallets::sources_breez_business": "Breez — Àpò Lightning Bitcoin-nìkan",
	"business/wallets::sources_ibex": "IBEX — Ohun-èlò ìsanwó Lightning",
	"business/wallets::sources_opennode": "OpenNode — Oníṣẹ́ ìsanwó Bitcoin",
	"business/wallets::sources_square": "Square — Gba àwọn ìsanwó Bitcoin",
	"business/wallets::sources_zaprite": "Zaprite — Ìfilọ́pò Bitcoin fún àwọn iṣẹ́",
	"business/wallets::wallets_hero_subtitle":
		"Àwọn àpò Bitcoin jẹ́ ọ̀fẹ́. Yan ọ̀kan tí ó bá iṣẹ́ rẹ mu — lójú-kojú, lórí ìntánẹ́ẹ̀tì, tàbí dá lórí ìfilọ́pò — kí o sì bẹ̀rẹ̀ gbígba Bitcoin láàárín ìṣẹ́jú díẹ̀.",
	"business/wallets::wallets_section_invoice": "Àwọn àpò fún àwọn iṣẹ́ tí ó dá lórí ìfilọ́pò",
	"business/wallets::wallets_section_invoice_intro":
		"Bí o bá ń kọ ìfilọ́pò sí àwọn oníbàárà (ìmọ̀ràn, iṣẹ́-ọ̀fẹ́, àwọn iṣẹ́ B2B), lo àpò tí a kọ́ ní àyíká ìfilọ́pò. Oníbàárà rẹ máa san ìfilọ́pò Bitcoin nínú àwọn tẹ̀ díẹ̀.",
	"business/wallets::wallets_section_multiple": "Àwọn àpò fún àwọn iṣẹ́ tí ó ní àwọn òṣìṣẹ́ púpọ̀",
	"business/wallets::wallets_section_multiple_intro":
		"Bí o bá ní ẹgbẹ́ tí ó ń gba àwọn ìsanwó ní àyè-tà, yan àpò tí ó ń ṣe àtìlẹyìn fún àwọn ìwọlé òṣìṣẹ́ púpọ̀ — kí òṣìṣẹ́ kọ̀ọ̀kan le ní PIN tirẹ kí o sì pa àkọsílẹ̀ àyẹ̀wò mọ́ kíá nípa ẹni tí ó gba ìsanwó wo.",
	"business/wallets::wallets_section_online": "Àwọn àpò fún àwọn iṣẹ́ lórí ìntánẹ́ẹ̀tì",
	"business/wallets::wallets_section_online_intro":
		"Ṣé o ń tà lórí ojú-ìwé? Àwọn àpò wọ̀nyí ń kàn sínú ilé-ìtàjà rẹ lórí ìntánẹ́ẹ̀tì wọ́n sì ń gba Bitcoin láti ọ̀dọ̀ oníbàárà èyíkéyìí, níbi gbogbo ní àgbáyé — kò sí àwọn chargeback, kò sí àpótí alágbàta tí ó nílò.",
	"business/wallets::wallets_section_sole": "Àwọn àpò fún àwọn iṣẹ́ tí ó jẹ́ ti ẹnìkan",
	"business/wallets::wallets_section_sole_intro":
		"Bí o bá ń ṣe ilé-ìtàjà, ilé-kọfí, studio, tàbí iṣẹ́ fúnra rẹ, èyíkéyìí àpò wọ̀nyí máa ṣiṣẹ́. Yan dá lórí bí o bá fẹ́ pa àwọn ìsanwó mọ́ ní Bitcoin tàbí kí o yí apá ìsanwó kọ̀ọ̀kan padà sí owó àdúgbò rẹ.",
	"business/wallets::wallets_strike_note":
		"Strike Business jẹ́ kí o gba àwọn ìsanwó Bitcoin àti Lightning pẹ̀lú odò owó àti ìparí lẹ́sẹ̀kẹsẹ̀. Ó ń ṣe àtìlẹyìn fún àwọn ìsanwó lójú-kojú, lórí ìntánẹ́ẹ̀tì, àti dá lórí ìfilọ́pò pẹ̀lú àyàn ìyípadà àdáṣe sí owó àdúgbò rẹ.",

	// ───────── common ─────────
	"common::common_language_switcher_add_language": "Ṣàfikún èdè",
	"common::common_next_buy_bitcoin": "Ra Bitcoin",
	"common::common_next_buy_bitcoin_desc": "Kẹ́kọ̀ọ́ bí o ṣe ń ra Bitcoin ní àìséwu",
	"common::common_next_calculate": "Ṣírò owó-ṣíṣẹ́ rẹ",
	"common::common_next_calculate_desc": "Wo bí owó-ṣíṣẹ́ ṣe ń ní ipa lórí owó oṣù rẹ pẹ̀lú àkókò",
	"common::common_next_get_wallet": "Gba àpò kan",
	"common::common_next_get_wallet_desc": "Gba àpò Bitcoin àkọ́kọ́ rẹ — ó jẹ́ ọ̀fẹ́",
	"common::common_next_keep_learning": "Tẹ̀síwájú láti kẹ́kọ̀ọ́",
	"common::common_next_keep_learning_desc": "Wo bí Bitcoin ṣe ń mú àgbáyé dára síi",
	"common::common_source_bls_cpi": "Ilé-iṣẹ́ Iṣiro Iṣẹ́ Amẹ́ríkà — Itọ́ka Iye Olùmúlò (CPI)",
	"common::common_source_fred_money_supply_index": "Federal Reserve Economic Data (FRED) — Ìpèsè Owó (Itọ́ka Ẹka)",
	"common::common_source_whitepaper": "Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction": "James Lavish — \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Kíni ó tẹ̀le?",
	// untranslated dimensions: keep identical (they're allow-listed)
	"common::common_stickers_dimensions_bdhi": "21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here": "20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"common::common_stickers_dimensions_caution": "12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"common::common_stickers_dimensions_cure_v2": "6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"common::common_stickers_dimensions_danger": "11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"common::common_stickers_dimensions_fix": "11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"common::common_stickers_dimensions_got_inflation": "7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"common::common_stickers_dimensions_study": "14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"common::common_stickers_dimensions_warning": "10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"common::common_stickers_dimensions_what_if": "21.7932 cm x 7.62 cm (8.58 in x 3 in)",
	"common::common_site_tagline": "Ẹ̀kọ́ Bitcoin fún gbogbo ènìyàn.",
	"common::common_source_btc_map": "BTC Map — Atọ́nà àwọn alágbatà tí ó gba Bitcoin ní àgbáyé",
	"common::common_source_btcpayserver": "BTCPay Server — Oníṣẹ́ ìsanwó Bitcoin ọ̀fẹ́, orísun-ṣíṣí, tí o lè dé sí",
	"common::common_source_oshi": "Oshi — Àyè ẹ̀rí Bitcoin fún àwọn alágbatà",
	"common::common_source_strike_business": "Strike — Àwọn ìsanwó Bitcoin & Lightning fún àwọn iṣẹ́",
	"common::common_sources_group_bitcoin": "Dátà Bitcoin",
	"common::common_sources_group_cpi": "Owó-ṣíṣẹ́ / Itọ́ka Iye Olùmúlò",
	"common::common_sources_group_debt": "Gbèsè ìjọba",
	"common::common_sources_group_money": "Dátà ìpèsè owó",
	"common::common_sources_group_stories": "Àwọn àpẹẹrẹ gidi-aiyé",
	"common::common_sticker_files_mission_6": "ti àwọn àlèmọ́ Èdè Gẹ̀ẹ́sì ní ọ̀fẹ́.",
	"common::common_sticker_files_next_flyers_label": "Àwọn ìpolówó",
	"common::common_sticker_files_next_flyers_title": "Tẹ ìpolówó Bitcoin kan",
	"common::common_sticker_files_next_languages_label": "Àwọn àkójọpọ̀ àlèmọ́",
	"common::common_sticker_files_next_languages_title": "Wo àwọn àkójọpọ̀ àlèmọ́ ní àwọn èdè míràn",
	"common::common_sticker_files_print_these": "TẸ ÀWỌN WỌ̀NYÍ NÍ TẸ̀ KAN",
	"common::common_sticker_name_bdhi_black": "Àlèmọ́ \"Bitcoin Doesn't Have Inflation\" (Dúdú)",
	"common::common_sticker_name_bdhi_orange": "Àlèmọ́ \"Bitcoin Doesn't Have Inflation\" (Osan)",
	"common::common_sticker_name_caution": "Àlèmọ́ Bitcoin \"Caution! Melting Ice Cube\"",
	"common::common_sticker_name_cure_inflation": "Àlèmọ́ Bitcoin \"Cure Inflation\"",
	"common::common_sticker_name_danger": "Àlèmọ́ Bitcoin \"Danger! Inflation Ahead\"",
	"common::common_sticker_name_fix": "Àlèmọ́ Bitcoin \"Fix The Money, Fix The World\"",
	"common::common_sticker_name_got_inflation": "Àlèmọ́ Bitcoin \"Got Inflation?\"",
	"common::common_sticker_name_study": "Àlèmọ́ \"Study Bitcoin\"",
	"common::common_sticker_name_warning": "Àlèmọ́ Bitcoin \"Warning! Inflation is Stealing Your Savings\"",
	"common::common_sticker_name_what_if": "Àlèmọ́ Bitcoin \"What if your money didn't have inflation?\"",
	"common::common_sticker_tips_heading": "Àwọn àbá àlèmọ́",
	"common::common_sticker_tips_intro": "Lẹ́yìn tí o ti tẹ àwọn àlèmọ́ rẹ, fi wọ́n sí ibi tí a yóò rí wọn! Àwọn ibi rere fún àlèmọ́ ni:",
	"common::common_sticker_tips_list_1": "ní gbangba níbi tí àwọn ènìyàn yóò rí wọn",
	"common::common_sticker_tips_list_2": "ní àwọn ibi tí kò ṣeé ṣe láti yọ̀ wọ́n kúrò ní kíákíá (àwọn àlèmọ́ kò fa ìbàjẹ́ títí láé)",
	"common::common_sticker_tips_list_3": "lórí àwọn ojú tí wọn yóò sopọ̀ mọ́ ní rírọrùn (irin, pílástíìkì, gíláàsì)",
	"common::common_sticker_tips_list_4": "KÌ Í ṢE lórí ohun-ìní àdáni, lórí àwọn àmì, ATM, tàbí àwọn ẹ̀rọ epo",
	"common::common_stickers_printer_prefix": "A ń lo",
	"common::common_stickers_printer_suffix": "ṣùgbọ́n o lè lo ilé-iṣẹ́ àlèmọ́ èyíkéyìí.",

	// ───────── compound-inflation-calculator ─────────
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Itọ́ka Iye Olùmúlò fún Gbogbo Olùmúlò Ìlú",
	"compound-inflation-calculator::sources_fred_m1": "Federal Reserve Economic Data (FRED) — Ìpèsè Owó M1",
	"compound-inflation-calculator::cic_calculator_heading": "Ṣírò ààlà owó-ṣíṣẹ́ rẹ",
	"compound-inflation-calculator::cic_cta_label": "Ìgbésẹ̀ tí ó tẹ̀le",
	"compound-inflation-calculator::cic_hero_subtitle": "Wo bí owó oṣù rẹ ṣe ní láti pọ̀ sí láti bá owó-ṣíṣẹ́ mu.",
	"compound-inflation-calculator::cic_next_explore_topics": "Ṣàwárí àwọn àkòrí síi",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Wo bí Bitcoin ṣe sopọ̀ mọ́ owó, òmìnira, agbára, àti síi.",
	"compound-inflation-calculator::cic_next_learn_inflation": "Kẹ́kọ̀ọ́ bí owó-ṣíṣẹ́ ṣe ń ṣiṣẹ́",
};

// Apply
const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf-8"));
let filled = 0;
let unmapped = 0;
const unmappedKeys = [];
for (const e of report.entries) {
	if (e.namespace === "inflation") continue;
	if (e.reason === "manifest-changed") continue; // handled in translate-manifest-changed.js
	const k = `${e.namespace}::${e.key}`;
	if (T[k] !== undefined) {
		e.targetTranslation = T[k];
		filled++;
	}
}
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
console.log(`part1: filled=${filled}`);
