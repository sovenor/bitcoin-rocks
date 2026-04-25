#!/usr/bin/env node
/**
 * Yoruba (yo) manifest refresh — manifest-changed entries (non-inflation).
 *
 * Covers the 160 manifest-changed entries across non-inflation namespaces.
 * These keys had their English values rewritten during V2 — fresh
 * translations of the NEW englishValue.
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
	"404::404_home": "Padà sí Ilé",
	"404::404_message": "Bitcoin dára, ṣùgbọ́n ojú-ìwé yìí tí ó fọ́ kò dára.",

	// ───────── about ─────────
	"about::about_editorial_2":
		"A ń tọ́ka sí àwọn orísun tí a gbẹ́kẹ̀lé bí Federal Reserve (FRED), Ilé-iṣẹ́ Iṣiro Iṣẹ́ Amẹ́ríkà (BLS), FDIC, Àjọ Ìparapọ̀ Àwọn Orílẹ̀-Èdè, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, àti James Lavish. A gbàgbọ́ pé Bitcoin máa sọ̀rọ̀ fúnra rẹ̀ nígbà tí a bá fi àwọn ìdánilójú hàn ní kedere.",
	"about::about_header": "Nípa bitcoin.rocks",
	"about::about_open_source_2":
		"bitcoin.rocks jẹ́ iṣẹ́-ìṣẹ̀dá ọ̀fẹ́, orísun-ṣíṣí tí MIT License fi ìwé-àṣẹ rẹ̀ fún. Ẹnikẹ́ni lè ṣe àfikún sí bitcoin.rocks. A pàápàá kí àwọn olùtumọ̀ kí, tí wọ́n ń ràn wá lọ́wọ́ láti mú àkóónú wa di àfọwọ́ka fún àwọn ènìyàn ní gbogbo àgbáyé.",

	// ───────── bank-runs ─────────
	"bank-runs::bank_runs_header": "Bitcoin kò ní ìjàmbá ilé-ìfowópamọ́, ṣùgbọ́n ilé-ìfowópamọ́ rẹ lè ní.",

	// ───────── bitcoin-vs-banks ─────────
	"bitcoin-vs-banks::point_1_summary_1": "Ẹnikẹ́ni tí ó ní ìsopọ̀ ìntánẹ́ẹ̀tì lè lo Bitcoin — ó",
	"bitcoin-vs-banks::point_1_summary_2": "kò nílò ìyọ̀ǹda.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Àwọn ilé-ìfowópamọ́ lè kọ̀, dí, tàbí pa àwọn àpótí mọ́ dá lórí ìlànà tàbí òfin ìjọba.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Nẹ́tíwọ́ọ̀kì Bitcoin ń ṣiṣẹ́ ní 24/7/365 láìní àkókò ìtọ́jú tàbí ìsinmi. Àwọn ilé-ìfowópamọ́ ní àkókò tí ó tóóró, ìsinmi ọjọ́ òpin ọ̀sẹ̀, àti àwọn àkókò ìdaduro.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Gbogbo ìṣòwò Bitcoin ni ó wà lórí blockchain tí gbogbo ènìyàn lè ṣàyẹ̀wò. Àwọn ilé-ìfowópamọ́ ń ṣiṣẹ́ pẹ̀lú ìwé-ìṣirò àdáni tí àwọn oníbàárà kò lè jẹ́rìí sí lọ́tọ̀.",
	"bitcoin-vs-banks::point_4_summary_1": "Pẹ̀lú Bitcoin, ìwọ ni ó di àwọn kọ́kọ́rọ́ àdáni tirẹ — wo ìtọ́sọ́nà rírọrùn wa lórí",
	"bitcoin-vs-banks::point_4_summary_2": "àwọn àpò Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Àwọn ilé-ìfowópamọ́ ni ó di owó rẹ, wọ́n sì lè dí i, díwọ̀n rẹ̀, tàbí kí wọ́n dí i lọ́wọ́ ní àkókò èyíkéyìí.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Àwọn iye owó Bitcoin gbangba ni wọ́n sì le ní àsọtẹ́lẹ̀. Àwọn ilé-ìfowópamọ́ ń kó owó àpótí, owó ìbo-rírẹ̀, owó ìfiránṣẹ́, àti owó ATM tí ó pamọ́ ṣẹ́gun pẹ̀lú àkókò.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin nìkan ni ó ń jẹ́ kí o ná ohun tí o ní lóòótọ́. Àwọn ilé-ìfowópamọ́ ń gba ìbo-rírẹ̀, lẹ́yìn náà wọ́n ń gba owó ìjẹnirò bí ó ti ń jọ̀wọ́ fún àǹfààní náà.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Lẹ́yìn ìfiranṣẹ́, àwọn ìṣòwò Bitcoin kò lè dúró tàbí kí ó padà. Àwọn ilé-ìfowópamọ́ lè dí, dí, tàbí kí wọ́n yi àwọn ìṣòwò padà dá lórí ìlànà tàbí àṣẹ ìjọba.",

	// ───────── bitcoin-vs-bonds ─────────
	"bitcoin-vs-bonds::point_1_summary_1":
		"Àwọn ìfòwó-mu jẹ́ 'aláìní-ewu' nínú orúkọ nìkan — owó-ṣíṣẹ́, ìyípadà ìfowó-yá, àti ewu ìkùnà ń jẹ àwọn èrè gidi run.",
	"bitcoin-vs-bonds::point_1_summary_2": "Bitcoin ní àìdúró tí ó hàn ṣùgbọ́n kò ní ewu alábàárìn tí ó pamọ́.",
	"bitcoin-vs-bonds::point_2_summary_1": "Nígbà tí",
	"bitcoin-vs-bonds::point_2_summary_2": "owó-ṣíṣẹ́",
	"bitcoin-vs-bonds::point_2_summary_3":
		"bá rékọjá èrè ìfòwó-mu, àwọn olùní ìfòwó-mu pàdánù agbára-rírà gidi ní ọdọọdún. Ààlà 21-mílíọ̀nù Bitcoin kò lè dín kù sí owó-ṣíṣẹ́.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Ọjà ìfòwó-mu lè dí ní àkókò àjálù — Silicon Valley Bank ṣubú níbi tí ó ti dúró pẹ̀lú ìfòwó-mu tí ó pàdánù iye. Wo bí",
	"bitcoin-vs-bonds::point_3_summary_2": "àwọn ìjàmbá ilé-ìfowópamọ́",
	"bitcoin-vs-bonds::point_3_summary_3":
		"ṣe máa ń ṣẹlẹ̀ àti ìdí tí Bitcoin fi yẹ̀ wọ́n. Bitcoin ń ṣòwò 24/7 ní àgbáyé láìní àjálù àìní owó.",
	"bitcoin-vs-bonds::point_4_summary_1": "Ìpolówó Treasury lè kùnà nígbà tí kò bá sí àwọn olùrà tó tó — wo",
	"bitcoin-vs-bonds::point_4_summary_2": "ìpolówó aláìlágbára 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Iye Bitcoin ni a ń wádìí léraléra ní àwọn ọjà tí a ṣíi sílẹ̀, láìní ìpolówó àárín tí ó lè kùnà.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Èrè ìfòwó-mu ti múlẹ̀ ní rírà. Kódà bí ọrọ̀-ajé bá fẹ́ sí tàbí owó orílẹ̀-èdè bá ṣubú, èrè rẹ máa wà bákan náà.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ní ààyè fún ìjẹrè pàtàkì bí ìgbà gbogbo ti ń pọ̀ sí àti bí ìbéèrè ti ń pàdé ìpèsè tí ó múlẹ̀.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Ọ̀pọ̀lọpọ̀ ìfòwó-mu ni ó dúró nípasẹ̀ ilé-ìfowópamọ́ tàbí àwọn alágbàta, èyí ń fi ewu alábàárìn kún. Bitcoin lè wà ní ìṣàkóso-ara pẹ̀lú",
	"bitcoin-vs-bonds::point_6_summary_2": "àpò",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Àwọn ìfòwó-mu dá lórí ìjọba ńsanwó padà pátápátá. Bí ìjọba kan bá kùnà tàbí kó dín gbèsè rẹ̀ kù nípasẹ̀ owó-ṣíṣẹ́, àwọn olùní ìfòwó-mu pàdánù.",
	"bitcoin-vs-bonds::point_7_summary_2": "Bitcoin ń ṣiṣẹ́ lọ́tọ̀ kúrò lọ́wọ́ ìjọba kankan tàbí àṣẹ òṣèlú.",

	// ───────── bitcoin-vs-cash ─────────
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin ń lọ lórí ìntánẹ́ẹ̀tì níbi gbogbo láàárín ìṣẹ́jú díẹ̀. Owó ààmù nílò wíwà ní ti ara tàbí àwọn alámojúkùrò tí a gbẹ́kẹ̀lé — o kò lè fi ímeèlì rán owó dọ́là $20.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin ń ṣiṣẹ́ ní ọ̀nà kan náà níbi gbogbo. Owó ààmù ní ààlà nípasẹ̀ ilẹ̀, iye ìparí, àti ìtẹ́wọ́gbà àdúgbò.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Àwọn ìjọba lè ṣe owó ààmù ní aláìwúlò ní alẹ́ kan ṣoṣo — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indíà</a> ṣe é ní 2016. Kódà láìní ìpa-iye, owó ààmù pàdánù iye sí",
	"bitcoin-vs-cash::point_3_summary_2": "owó-ṣíṣẹ́.",
	"bitcoin-vs-cash::point_3_summary_3": "Kò sí ìjọba tàbí àṣẹ tí ó lè sọ Bitcoin di aláìwúlò.",
	"bitcoin-vs-cash::point_4_summary_1":
		"A lè kọ owó ààmù dáni tàbí lè ṣe é ní àwòkọ, nígbà mìíràn ní ọ̀nà tí ó dájú. Bitcoin lo cryptography tí ó sọ àwòkọ di aláìṣeéṣe ní ọ̀nà ìṣirò.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin kò ní àṣẹ àárín. Àwọn ìjọba ń tẹ̀ owó ààmù tí wọ́n lè tẹ̀ síi, yí àpẹẹrẹ rẹ̀ padà, tàbí kí wọ́n sọ ọ́ di aláìwúlò ní àkókò tí wọ́n bá fẹ́.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Owó ààmù lè jẹ́ jíjí, jíjóná, sísọnù, àti ìgbà-pa. Bitcoin lè wà ní ààbò pẹ̀lú",
	"bitcoin-vs-cash::point_6_summary_2": "ìṣàkóso-ara",
	"bitcoin-vs-cash::point_6_summary_3": "lórí ẹ̀rọ ìbánisọ̀rọ̀ tàbí ohun-èlò amúnaláti.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin pin sí 100 mílíọ̀nù sats, tí ó ṣe àwọn ìsanwó kéré-kéré ti ìwọ̀n èyíkéyìí. Owó ààmù ní àwọn iye tí ó kéré jùlọ — o kò lè pin pení kan.",

	// ───────── bitcoin-vs-cbdc ─────────
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin ni nẹ́tíwọ́ọ̀kì ìṣirò tí ó ní ààbò jùlọ tí a tíì kọ́, ó sì kò tíì jẹ́ kí a ja jó. Àwọn CBDC dá lórí àwọn ilé-ìfowópamọ́ àti ìjọba tí a ti jagunjagun lọ́pọ̀ ìgbà.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Kò sí ẹnikẹ́ni tí ó lè dí ọ lọ́wọ́ ìṣòwò pẹ̀lú Bitcoin. A kọ́ àwọn CBDC kí ìjọba àti àwọn ilé-ìfowópamọ́ àárín lè darí gbogbo ìsanwó, èyí ń díwọ̀n àdáni àti òmìnira rẹ.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin kò ní akọsílẹ̀ ìparí, kò sì ní owó oṣù. Àwọn CBDC lè jẹ́ kí o pari, èyí ń dí ọ lọ́wọ́ láti pa owó mọ́ fún ọjọ́ iwájú.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ní ààlà tó dúró tí 21 mílíọ̀nù BTC. Àwọn CBDC kò ní ààlà lórí ìpèsè, èyí ń jẹ́ kí ìjọba lè fẹ̀ owó ní àkókò tí wọ́n fẹ́ — èyí tí ó ń fa",
	"bitcoin-vs-cbdc::point_3_summary_2": "owó-ṣíṣẹ́.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Àwọn àdírẹ́sì Bitcoin kò ní ìsopọ̀ pẹ̀lú orúkọ gidi rẹ. Àwọn CBDC ní ìsopọ̀ tààrà pẹ̀lú ID ìjọba, èyí ń ṣe àkíyèsí àti ìfagilé ti owó ní àpapọ̀.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Àwọn ìlànà Bitcoin ni a ń jẹ́rìí sí nípasẹ̀ ẹgbẹẹgbẹ̀rún àwọn nodes òmìnira. Àwọn CBDC ti darí ní àárín ní ọwọ́ ìjọba àti ilé-ìfowópamọ́ àárín, tí ó ní agbára pípé lórí nẹ́tíwọ́ọ̀kì.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Ẹnikẹ́ni lè ṣiṣẹ́ Bitcoin node láti jẹ́rìí àwọn ìlànà nẹ́tíwọ́ọ̀kì. Àwọn CBDC kò gbà fún àwọn olùmúlò láti ṣiṣẹ́ nodes — o ní láti gbẹ́kẹ̀lé àṣẹ àárín.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"A kò lè dí Bitcoin tí ó wà ní ìṣàkóso-ara lọ́wọ́ ẹnikẹ́ni. A kọ́ àwọn CBDC kí ìjọba àti ilé-ìfowópamọ́ àárín lè dí àpótí lẹ́sẹ̀kẹsẹ̀.",
	"bitcoin-vs-cbdc::point_8_summary_1": "Bitcoin fún ọ ní agbára pípé lórí owó rẹ nígbà tí o bá ṣe ìṣàkóso-ara pẹ̀lú",
	"bitcoin-vs-cbdc::point_8_summary_2": "àpò.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Àwọn CBDC nílò ìgbẹ́kẹ̀lé sí àwọn olùdúró bí àwọn ilé-ìfowópamọ́ tàbí ìjọba láti dúró pẹ̀lú owó rẹ.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Ìlànà owó Bitcoin ti múlẹ̀ ní koodu, kò sì lè yípadà. A lè tún àwọn CBDC ṣe láìpẹ́ nípa àwọn olóṣèlú, èyí ń fa",
	"bitcoin-vs-cbdc::point_9_summary_2": "owó-ṣíṣẹ́",

	// ───────── bitcoin-vs-crypto ─────────
	"bitcoin-vs-crypto::point_1_summary_1":
		"Ìlànà Bitcoin ti dúró bákan náà látinú ọdún 2009, ó ń pèsè àwọn ìlànà tí a lè sọ àsọtẹ́lẹ̀ rẹ̀. Ọ̀pọ̀ àwọn iṣẹ́-ìṣẹ̀dá crypto ń yí àwọn ìlànà, tokenomics, tàbí kí wọ́n pín sí àwọn ẹ̀dà tuntun léraléra.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin ń ṣiṣẹ́ lórí ẹgbẹẹgbẹ̀rún àwọn nodes òmìnira ní àgbáyé. Àwọn iṣẹ́-ìṣẹ̀dá crypto ọ̀pọ̀ jùlọ ni a ti darí nípasẹ̀ àwọn ipilẹ̀ṣẹ̀, ilé-iṣẹ́, tàbí àwọn ẹgbẹ́ olùgbé kéré tí wọ́n lè ṣe àwọn ìyípadà fúnra wọn.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ní ààlà tó dúró tí 21 mílíọ̀nù coin — ohun ìní oníyebíye dígítà tí ó kéré jùlọ. Ọ̀pọ̀ àwọn iṣẹ́-ìṣẹ̀dá crypto ní ìpèsè aláìlópin tàbí ọ̀nà láti dá àwọn token tuntun ní àkókò tí wọ́n fẹ́, èyí ń dín àwọn olùní kù.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ní ète kan ṣoṣo: owó dígítà ẹnikẹ́ni-sí-ẹnikẹ́ni. Ẹnikẹ́ni lè lóye ó sì lò ó. Ọ̀pọ̀ crypto ní àwọn smart contract díjú tàbí DeFi tí ó nílò ìmọ̀-ìmọ̀ ọnà láti lò ní àìséwu.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoin ti ń ṣiṣẹ́ láìsí ìkọlù tí ó ṣàṣeyọrí lórí nẹ́tíwọ́ọ̀kì pàtàkì fún ó ju ọdún 15. Ọ̀pọ̀ àwọn iṣẹ́-ìṣẹ̀dá crypto ń lo ètò àdéhùn àdánwò tí a kò tí ìdánwò ní ogun.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin jẹ́ owó dígítà — ìfowópamọ́ iye àti ohun-èlò ìparí. Ọ̀pọ̀ àwọn token crypto jẹ́ àwọn token oníṣẹ́ tàbí ìjọba ipò ìparowó pẹ̀lú iye gidi-aiyé tí kò ṣe kedere.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin ń di alágbára síi nínú ìkọlù, ó sì ti là gbogbo àjálù, ìfòfindè, àti àríwísí kọjá. Ọ̀pọ̀ àwọn iṣẹ́-ìṣẹ̀dá crypto ń ṣubú nínú ìfagilé ìlànà, ìmọ̀-ìmọ̀ ọnà, tàbí ìfagilé ọjà.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin kò ní CEO, kò ní ilé-iṣẹ́, kò ní ojú-ìkùnà kan. Ọ̀pọ̀ àwọn iṣẹ́-ìṣẹ̀dá crypto dá lórí àwọn VC, àwọn olórí pàtó, tàbí ìwà-ìpè ilé-iṣẹ́ kan.",

	// ───────── bitcoin-vs-fine-art ─────────
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Bitcoin kọ̀ọ̀kan jẹ́ bákan náà ó sì lè rọ́pò. Iṣẹ́ ọnà kọ̀ọ̀kan jẹ́ aláìṣe-bákan-náà — ìṣẹ̀dá tó yàtọ̀, ìtàn, ipò, àti orísun jẹ́ kí ìfiwéra tààrà ṣòro gan-an.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin ń ṣòwò 24/7 lórí ọjà àgbáyé tí ẹnikẹ́ni lè rí. Iṣẹ́ ọnà giga nílò àwọn ilé-ìpolówó pàtó, àwọn alágbàta àdáni, tàbí àwọn gallery ó sì lè gba oṣù láti tà.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Rírà tàbí títà Bitcoin ná kéré sí 1% nínú àwọn owó, sábà jẹ́ kéré jùlọ. Títà iṣẹ́ ọnà kó 30–40% nínú àwọn owó-rírà, owó-ìṣẹ̀, ìdánilójú, àkójọpọ̀, àti àyẹ̀wò òdodo.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin pín sí 100 mílíọ̀nù sats, èyí jẹ́ kí ó pé fún ìṣòwò ti ìwọ̀n èyíkéyìí. O kò lè ní apá kan iṣẹ́ ọnà tàbí ọ̀kan-ká àwòrán laìní ewu alábàárìn.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Ìní àti òdodo Bitcoin ni a lè jẹ́rìí sí ní ọ̀nà cryptographic nípasẹ̀ ẹnikẹ́ni lórí blockchain. Àyẹ̀wò òdodo ọnà ná, ó lọ́ra, àwọn aláyàwòran ń tan ún sí ní ìgbà gbogbo — èyí ń pa iye iṣẹ́ ọnà run ní alẹ́ kan.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin, tí a bá ti dáàbò bo dáadáa, ó là ìkún omi, iná, ìmìtìtì ilẹ̀, àti olè kọjá. Iṣẹ́ ọnà giga jẹ́ aláìlágbára sí gbogbo ọ̀nà ìparun ti ara, ìdánilójú sì sábà ò ní ní bo gbogbo rẹ̀.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Ẹnikẹ́ni tí ó ní ìsopọ̀ ìntánẹ́ẹ̀tì àti owó díẹ̀ lè ra Bitcoin. Ìnáwó iṣẹ́ ọnà giga ní ààlà sí àwọn olówó tí ó lè wọ àwọn ìpolówó pẹ̀lú ìmọ̀ pàtó.",

	// ───────── bitcoin-vs-gold ─────────
	"bitcoin-vs-gold::point_1_summary_1":
		"A lè rán Bitcoin lẹ́sẹ̀kẹsẹ̀ lórí ìntánẹ́ẹ̀tì pẹ̀lú owó kéré. Goolu ní láti firànṣẹ́ ní ti ara láti gbé ìní gba.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin jẹ́ ohun-ìní dígítà-bíbí tí o lè gbé lórí ìntánẹ́ẹ̀tì. Goolu lórí ìntánẹ́ẹ̀tì jẹ́ IOU dígítà — o ní ìlérí lọ́wọ́ olùdúró nìkan, kì í ṣe irin náà fúnra rẹ̀.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin ní ààlà tó dúró tí 21 mílíọ̀nù BTC. Ìpèsè goolu ń pọ̀ sí nípa <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% ní ọdún kan</a>, èyí ń dín apá rẹ kù — kéré sí",
	"bitcoin-vs-gold::point_3_summary_2": "owó-ṣíṣẹ́",
	"bitcoin-vs-gold::point_3_summary_3": "fiat — ṣùgbọ́n òùnń jẹ́ owó-ṣíṣẹ́ síi.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Nígbà tí iye goolu bá pọ̀ sí, a ó wa goolu síi, èyí yóò sì tì iye padà sí ìsàlẹ̀. Ìpèsè Bitcoin kò yí — láìbi-kojá iye náà ti ga tó, 21 mílíọ̀nù nìkan ni yóò máa wà títí láé.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Ẹgbẹẹgbẹ̀rún àwọn nodes òmìnira ń jẹ́rìí nẹ́tíwọ́ọ̀kì Bitcoin. Ọ̀pọ̀ goolu ti ara wà ní ọwọ́ àwọn olùdúró ńlá díẹ̀.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Ẹnikẹ́ni lè jẹ́rìí Bitcoin gidi nípa ṣíṣiṣẹ́ node ní kíkún — ó kàn jẹ́ app. Jíjẹ́rìí goolu ti ara nílò sísún ún sí omi; tungsten lè wà nínú.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin pín sí 100 mílíọ̀nù sats, èyí jẹ́ kí ó pé fún rírà ti ìwọ̀n èyíkéyìí. Goolu kò lè rọ́rọ̀ pin fún àwọn ìṣòwò kéré.",

	// ───────── bitcoin-vs-real-estate ─────────
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin ń lọ níbi gbogbo ní àgbáyé lẹ́sẹ̀kẹsẹ̀. Ohun-ìní gbígbé fún ọjà ti múlẹ̀ ní àyè kan ó sì wà ní ewu àwọn ìṣòro ọrọ̀-ajé, òṣèlú, àti tí ti ara ní àdúgbò.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin pín sí 100 mílíọ̀nù sats. Ohun-ìní gbígbé fún ọjà kò lè jẹ́ títà ní apá — o kò lè ta ile-ìdáná tàbí kí o ra ìdajì yàrá.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin ń ṣiṣẹ́ lórí nẹ́tíwọ́ọ̀kì aláìní-àárín tí kò sí ìjọba tí ó lè darí. Ohun-ìní gbígbé fún ọjà ti ní òfin pípọ̀ — ètò agbègbè, dídarí owó iyalo, àṣẹ ìjọba, àti ìgbà-pa wọn gbogbo.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin kò nílò ìtọ́jú. Ohun-ìní gbígbé fún ọjà nílò àwọn àtúnṣe, ìpadàṣe, ìdánilójú, ìṣàkóso ohun-ìní, àti àwọn ìṣòro olùyalo.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin kò ní owó-ọrẹ tí ń tẹ̀síwájú — o kàn ó sanwó owó èrè bí o bá tà. Ohun-ìní gbígbé fún ọjà ní owó-ọrẹ ohun-ìní ọdọọdún láìka iyè.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin, tí a bá ti dáàbò bo dáadáa, ó là iná, ìkún omi, àti ìmìtìtì ilẹ̀ kọjá. Ohun-ìní gbígbé fún ọjà jẹ́ aláìlágbára sí gbogbo àjálù, ìdánilójú sì sábà ò ní ní bo gbogbo rẹ̀.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Bitcoin kọ̀ọ̀kan jẹ́ bákan náà ó sì lè rọ́pò. Ohun-ìní kọ̀ọ̀kan jẹ́ aláìṣe-bákan-náà, èyí ń jẹ́ kí ìpèsè iye àti ìfiwéra ṣòro.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin ń ṣòwò ní àgbáyé 24/7 nípasẹ̀ ẹnikẹ́ni tí ó ní ìntánẹ́ẹ̀tì. Títà ohun-ìní gbígbé fún ọjà ní ààlà sí àwọn olùrà àdúgbò ó sì lè gba oṣù ti ìwé-iṣẹ́ láti pari.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin jẹ́ kí ìní tààrà nípa ẹnikẹ́ni ṣeéṣe. Rírà ohun-ìní gbígbé fún ọjà gẹ́gẹ́ bí ìnáwó kọjá ilé pàtàkì rẹ ń sọ iye ilé di gígajù, èyí ń dín àfọwọ́ka kù ó sì ń mú àjálù ilé wá.",

	// ───────── bitcoin-vs-stocks ─────────
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin jẹ́ ohun-ìní tààrà tí o ní pátápátá. Àwọn ọjà jẹ́ ipín ní ilé-iṣẹ́ — iye wọn dá lórí ìṣàkóso, iṣẹ́, àti àwọn ìpinnu tí o kò lè ṣàkóso.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin ní ààlà tó dúró tí 21 mílíọ̀nù BTC. Àwọn ilé-iṣẹ́ lè fún àwọn ipín tuntun ní àkókò èyíkéyìí, èyí ń dín àwọn olùní ipín tí ó wà tẹ́lẹ̀ kù — bákan náà bí",
	"bitcoin-vs-stocks::point_2_summary_2": "owó-ṣíṣẹ́",
	"bitcoin-vs-stocks::point_2_summary_3": " fiat ṣe ń dín owó ààmù kù. Pẹ̀lú Bitcoin, apá rẹ kò máa dín kù.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin kò ní CEO àti kò ní ojú-ìkùnà kan. Àwọn ọjà dá lórí ìṣàkóso pọ̀ — ìpinnu burúkú kan tàbí ìlọ ẹnìkan lè sọ iye ọjà silẹ̀.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Iye Bitcoin ti wá láti ọjà àgbáyé tí ó ṣíi sílẹ̀. Ìṣirò ọjà dá lórí àwọn metric bí P/E ratio tí ó lè bo àwọn ipín tí iye wọn pọ̀ jù.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin ń ṣòwò 24/7 ní gbogbo àgbáyé. Àwọn ọjà ipín ṣíi nìkan ní àkókò iṣẹ́ ní ọjọ́-ọsẹ̀.",
	"bitcoin-vs-stocks::point_6_summary_1": "O lè gba",
	"bitcoin-vs-stocks::point_6_summary_2": "ìṣàkóso-ara",
	"bitcoin-vs-stocks::point_6_summary_3":
		"ti Bitcoin pẹ̀lú app rírọrùn — kò sí alágbàta tí ó nílò. Àwọn ọjà ipín dúró pẹ̀lú àwọn ilé-alágbàta, èyí ń fi ọ́ sínu ewu alábàárìn bí wọ́n bá kùnà.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Ìpèsè dúró Bitcoin jẹ́ kí ó di àbò gbígbé-pọ̀ owó-ṣíṣẹ́. Diẹ̀ àwọn ọjà ń lu owó-ṣíṣẹ́, díẹ̀ kò ń lu — kò sí ìdánilójú.",

	// ───────── bitcoin-vs-visa ─────────
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin jẹ́ nẹ́tíwọ́ọ̀kì ṣíṣí tí ẹnikẹ́ni lè dara pọ̀ mọ́ ó sì lò láìní ìyọ̀ǹda. Visa jẹ́ ètò pípa tí àwọn ilé-iṣẹ́ ìnáwó ti darí, tí ó lè kọ̀ ààyè — pàápàá fún àwọn tí kò ní ilé-ìfowópamọ́.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Àwọn ìṣòwò Bitcoin kò ní owó alábàwà. Visa sábà ń kó nípa 3% lórí gbogbo ìṣòwò — iṣẹ́ rẹ lè pa owó mọ́ nípa gbígba",
	"bitcoin-vs-visa::point_2_summary_2": "ìsanwó Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " dípò.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Gbogbo ìṣòwò Bitcoin wà lórí blockchain gbangba tí a lè ṣàyẹ̀wò. Visa ń ṣiṣẹ́ pẹ̀lú ètò pípa ti ara wọn níbi tí àwọn oníbàárà kò ti lè jẹ́rìí sí ohunkóhun lọ́tọ̀.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Kò sí àṣẹ àárín tí ó lè dí Bitcoin. Visa lè dí àwọn àpótí, dí àwọn ìṣòwò, tàbí kí ó kọ̀ ìpèsè ní àkókò èyíkéyìí.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin jẹ́ ìparí-ìpinnu — o lè ná ohun tí o ní nìkan. Àwọn káàdì kírẹ́dítì ń dá gbèsè pẹ̀lú iye ìfowó-yá tí ó sábà jẹ́ ó ju 25% ní ọdún kan.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin jẹ́ kí o gba",
	"bitcoin-vs-visa::point_6_summary_2": "ìṣàkóso-ara",
	"bitcoin-vs-visa::point_6_summary_3":
		"láìní ilé-ìfowópamọ́ tàbí oníṣẹ́ ìsanwó. Àwọn káàdì kírẹ́dítì máa ń nílò àwọn alábàárìn nígbà gbogbo.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin ń ṣiṣẹ́ 24/7 ní àgbáyé láìní àkókò iṣẹ́. Visa ní àkókò iṣẹ́, àwọn àkókò ìtọ́jú, àti àwọn ààlà ilẹ̀ tí ó lè dí àwọn ìṣòwò.",

	// ───────── business/accounting ─────────
	"business/accounting::accounting_description":
		"Ìtọ́sọ́nà Yorùbá pàtó kan láti gba Bitcoin nínú ìwé-ìṣirò rẹ — àwọn àpò àkómọ̀, ipilẹ̀ owó, èrè-owó, àti nígbà tí o lè pe akọsílẹ̀-iṣirò.",
	"business/accounting::accounting_s1_c1":
		"Ọ̀nà tí ó rọrùn jùlọ láti gba Bitcoin ni pẹ̀lú àpò àkómọ̀ tí ó ń ta 100% nínú Bitcoin tí o gbà fún dọ́là (tàbí owó àdúgbò rẹ) lẹ́sẹ̀kẹsẹ̀ tí ìsanwó kan bá dé.",
	"business/accounting::accounting_s1_c2":
		"Pẹ̀lú ètò yìí, ìwé-ìṣirò rẹ máa rí gẹ́gẹ́ bí ó ṣe rí lónìí — iye ìparí náà wà ní dọ́là, ní gbogbo ìgbà. Kò sí ipilẹ̀ owó, kò sí èrè-owó, kò sí ìwé-ìṣirò tuntun.",
	"business/accounting::accounting_s2": "Bí o bá pa Bitcoin díẹ̀ mọ́: títọpa ipilẹ̀ owó rẹ",
	"business/accounting::accounting_s2_c1":
		"Àwọn iṣẹ́ kan máa ń yan láti pa apá kan nínú Bitcoin tí wọ́n gbà mọ́ dípò kí wọ́n yí gbogbo rẹ̀ padà. Bí èyí bá rí ọ, ohun pàtàkì tí o ní láti ṣe ni títọpa ipilẹ̀ owó rẹ — iye dọ́là ti ìsanwó Bitcoin kọ̀ọ̀kan ní ọjọ́ tí o gbà á.",
	"business/accounting::accounting_s2_c2":
		"Kódà bí o bá rò pé iṣẹ́ rẹ wà pátápátá ní Bitcoin, ọ̀pọ̀ àwọn aláṣẹ owó-ọrẹ ṣì fẹ́ kí o sọ iye dọ́là. Ìròyìn rere: ó kàn jẹ́ àwọn nọ́mbà méjì lórí ìṣòwò kọ̀ọ̀kan — iye Bitcoin tí a gbà àti iye dọ́là rẹ̀ ní ọjọ́ náà.",
	"business/accounting::accounting_s2_c3":
		"Lo àwọn ohun-èlò tí ó wà nísàlẹ̀ láti ṣe àdáṣe ìwádìí kí o má ṣe ní láti yẹ àwọn iye lójoojúmọ́.",
	"business/accounting::accounting_s3": "Nínáwó tàbí títà Bitcoin tí o ti pa mọ́",
	"business/accounting::accounting_s3_c1": "Bí o bá ń yí gbogbo ìsanwó padà sí dọ́là, fò apá yìí kọjá — kò bá ọ mu.",
	"business/accounting::accounting_s3_c2":
		"Bí o bá ti pa Bitcoin díẹ̀ mọ́ tí o sì pinnu láti ná tàbí ta a níkẹ́yìn, fi iye títà kún ìwé-ìṣirò ipilẹ̀ owó kan náà. Iyàtọ̀ láàárín iye Bitcoin nígbà tí o gbà á àti iye rẹ̀ nígbà tí o ná tàbí tà jẹ́ èrè-owó tàbí àdánù-owó.",
	"business/accounting::accounting_s3_c3": "Àpẹẹrẹ kíákíá méjì:",
	"business/accounting::accounting_s4": "Ṣé o nílò akọṣẹ́mọṣẹ́ tí ó ní ìmọ̀ Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Bí o bá fẹ́ kàn fi èyí lélẹ̀ — tàbí bí ìṣirò Bitcoin rẹ bá díjú ju bí àpò àkómọ̀ ṣe lè bójú tó lọ — a ṣe ìṣàfihàn Satoshi Pacioli Accounting Services gan-an, ilé-iṣẹ́ tí ó pàtó ní ìṣirò Bitcoin fún àwọn iṣẹ́.",
	"business/accounting::bitcoin_business_accounting_guide": "Ìṣirò Bitcoin fún iṣẹ́ rẹ",

	// ───────── business/sticker-files/english/index ─────────
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Ṣe ìgbàsílẹ̀ àwọn àkójọpọ̀ àlèmọ́ Èdè Gẹ̀ẹ́sì láti tẹ àwọn àlèmọ́ 'Bitcoin Accepted Here' tirẹ.",

	// ───────── business/why ─────────
	"business/why::learn_why_bitcoin_is_good_for_business": "A gba Bitcoin níhìn-ín",
	"business/why::why_good_for_you": "Ìdí tí Bitcoin fi dára fún ọ pẹ̀lú",
	"business/why::why_learn_more_lowercase": "Kẹ́kọ̀ọ́ síi →",
	"business/why::why_s1_c1":
		"Owó-ṣíṣẹ́ máa ń ṣẹlẹ̀ nígbà tí a bá tẹ̀ owó síi tàbí kí a dá a látinú ihò òfo. Èyí ń sọ owó tí ó wà ní àpò rẹ di kéré ní iye pẹ̀lú àkókò — èyí sì ni ìdí tí àwọn iye fi ń ga ní ọdọọdún.",
	"business/why::why_s1_c2":
		"Bitcoin ní ìpèsè tí ó dúró tí 21 mílíọ̀nù coin. Kò sí ìjọba, ilé-ìfowópamọ́, tàbí ilé-iṣẹ́ tí ó lè tẹ̀ síi. Ìfowópamọ́ Bitcoin rẹ máa di iye rẹ̀ mú lórí àkókò dípò pípàdánù rẹ̀ ní títẹ̀ẹ́.",
	"business/why::why_s2_c1":
		"Ọ̀pọ̀ àwọn ilé-ìfowópamọ́ U.S. ti ṣubú ní àwọn ọdún tí ó kọjá nítorí àwọn ìjàmbá ilé-ìfowópamọ́. Nígbà tí àwọn oníbàárà tó pọ̀ jù gbìyànjú láti yọ owó kúrò lẹ́ẹ̀kọ̀ọ̀kan, àwọn ilé-ìfowópamọ́ kò ní owó tó láti sanwó padà sí gbogbo wọn.",
	"business/why::why_s2_c2":
		"Dípò kí ó kàn pa owó rẹ mọ́, ilé-ìfowópamọ́ ń yá àti ìnáwó ọ̀pọ̀ rẹ̀. Bí àwọn ìnáwó wọn bá burú jọjọ — tàbí bí àwọn olùpa-mọ́ bá pàdánù ìgbẹ́kẹ̀lé — ilé-ìfowópamọ́ lè kùnà, owó rẹ tí o pa mọ́ sì lè jẹ́ dídí tàbí pípàdánù.",
	"business/why::why_s2_c3":
		"Pẹ̀lú Bitcoin, o lè di owó tirẹ tààrà nínú àpò tirẹ. Kò sí ilé-ìfowópamọ́. Kò sí alábàárìn. Kò sí ìjàmbá ilé-ìfowópamọ́.",
	"business/why::why_s3_c1":
		"Yàtọ̀ sí àwọn káàdì kírẹ́dítì, PayPal, tàbí àwọn àpótí ilé-ìfowópamọ́ ìbílẹ̀, Bitcoin kò nílò ìyọ̀ǹda ẹnikẹ́ni láti lò.",
	"business/why::why_s3_c2":
		"Kò sí ẹnikẹ́ni tí ó lè dí àpótí rẹ, dí ìsanwó kan, tàbí kí ó gé ọ kúrò ní nẹ́tíwọ́ọ̀kì. Ó jẹ́ ètò ìnáwó àkọ́kọ́ nínú ìtàn tí o lè lò ní òmìnira, láìbẹ̀rù àdílọ́lẹ́ tàbí ìgbà-pa.",
	"business/why::why_s4_c1":
		"A sábà ń ṣe àìlóye Bitcoin, ṣùgbọ́n ó ń ṣe rere púpọ̀ ní àgbáyé ní ìpalọ́lọ́.",
	"business/why::why_s4_c2":
		"Ó ti ràn àwọn alágbàwí ẹ̀tọ́ ọmọnìyàn lọ́wọ́ láti jagun fún òmìnira, dín ìjáde gáàsì methane àgbáyé kù láti àwọn pápá ìjẹjù àti àwọn pápá epo, mú àwọn nẹ́tíwọ́ọ̀kì iná dúró sín, ó sì pèsè owó fún àwọn ohun-èlò gbangba bí àwọn ọgbà ìṣẹ̀dáyé orílẹ̀-èdè.",

	// ───────── buy ─────────
	"buy::buy_bitcoin_guide": "Bí a ṣe ń ra Bitcoin",
	"buy::buy_step_1_header": "Yan orílẹ̀-èdè rẹ",
	"buy::buy_step_2_header": "Yan ọ̀nà ìsanwó rẹ",
	"buy::buy_step_3_header": "Àwọn àṣàyàn rírà rẹ",
	"buy::buy_step_4_header": "Pa Bitcoin rẹ mọ́ ní àìséwu",

	// ───────── common ─────────
	"common::common_sticker_files_mission_5": "béèrè àkójọpọ̀ kan",

	// ───────── flyers ─────────
	"flyers::flyers_intro_header": "Bí a ṣe ń tẹ̀ tí a sì ń fi àwọn ìpolówó Bitcoin yìí ránṣẹ́",

	// ───────── get-involved ─────────
	"get-involved::get_involved_and_help_spread_bitcoin": "Dara pọ̀ kí o sì tan Bitcoin kálẹ̀",
	"get-involved::get_involved_business_content_1":
		"Ṣé o fẹ́ ràn àjọṣe ọrọ̀-ajé yíyípo Bitcoin lọ́wọ́? Ọ̀nà tí ó rọrùn jùlọ ni láti ràn àwọn iṣẹ́ àdúgbò lọ́wọ́ láti bẹ̀rẹ̀ gbígba ìsanwó Bitcoin.",
	"get-involved::get_involved_business_content_2": "Ṣé o mọ̀ iṣẹ́ kan tí ó lè ṣíi sí i? Rán olówó rẹ̀ sí",
	"get-involved::get_involved_business_content_3": "ojú-ìwé iṣẹ́ Bitcoin wa.",
	"get-involved::get_involved_description":
		"Àwọn ohun-èlò ọ̀fẹ́ wa ń ṣe é rọrùn láti tan ìbújáde Bitcoin kálẹ̀. Àwọn àlèmọ́, ìpolówó, àlèmọ́ 'Bitcoin Accepted Here' fún iṣẹ́, àti koodu orísun-ṣíṣí tí ẹnikẹ́ni lè ṣe àfikún sí.",
	"get-involved::get_involved_header": "Dara pọ̀ kí o sì tan Bitcoin kálẹ̀.",
	"get-involved::get_involved_intro_5":
		"O lè ràn lọ́wọ́ láti yí èyí padà. A ti ṣe àwọn ohun-èlò ọ̀fẹ́ púpọ̀ láti ṣe é rọrùn láti tan ìrètí tí Bitcoin mú wá sí àyíká rẹ kálẹ̀.",

	// ───────── lightning ─────────
	"lightning::lightning_s1_c4": "Wo wa",

	// ───────── nostr/index ─────────
	"nostr/index::nostr_page_description":
		"Nostr jẹ́ ìlànà aláìní-àárín tuntun fún ìbánisọ̀rọ̀ lórí ìntánẹ́ẹ̀tì — kò sí ilé-iṣẹ́ kan ṣoṣo tí ó ń darí, a ti kọ́ àwọn zap Bitcoin sínú rẹ̀ ní àdámọ̀, o sì lè rin láàárín àwọn client láìpàdánù àwọn olùtẹ̀lé.",

	// ───────── sticker-files/index ─────────
	"sticker-files/index::sticker_files_header": "Tẹ àwọn àlèmọ́ Bitcoin tirẹ pẹ̀lú àwọn àkójọpọ̀ àlèmọ́ Bitcoin yìí.",

	// ───────── stickers ─────────
	"stickers::stickers_flyers_link_before": "Bí o sì ti wà níbẹ̀, tẹ̀ kí o sì fi àwọn",
	"stickers::stickers_instructions_1":
		"Tẹ àdírẹ́sì ìfírànṣẹ́ rẹ sí, a ó sì rán àkójọpọ̀ àlèmọ́ Bitcoin ọ̀fẹ́ sí ọ nínú ìfírànṣẹ́. Àwọn àlèmọ́ rẹ máa lọ nínú àpò funfun lásán.",
};

// Apply
const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf-8"));
let filled = 0;
let unmapped = 0;
const unmappedKeys = [];
for (const e of report.entries) {
	if (e.reason !== "manifest-changed") continue;
	if (e.namespace === "inflation") continue;
	const k = `${e.namespace}::${e.key}`;
	if (T[k] !== undefined) {
		e.targetTranslation = T[k];
		filled++;
	} else {
		unmapped++;
		unmappedKeys.push(k);
	}
}
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
console.log(`manifest-changed (non-inflation): filled=${filled} unmapped=${unmapped}`);
if (unmappedKeys.length) {
	console.log("Unmapped:");
	for (const k of unmappedKeys.slice(0, 30)) console.log("  ", k);
	if (unmappedKeys.length > 30) console.log("  ...", unmappedKeys.length - 30, "more");
}
