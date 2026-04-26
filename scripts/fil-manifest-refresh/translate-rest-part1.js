#!/usr/bin/env node
/**
 * Filipino manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Bumalik sa home page",
	"404::404_message":
		"Astig ang bitcoin, pero ang sirang page na ito ay hindi.",
	"404::404_not_found_short": "Hindi nahanap",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Nag-aalok kami ng libreng mga kasangkapan para sa negosyo na madaling makapagsimula ang mga lokal na negosyo sa pagtanggap ng bitcoin. Ipinapaliwanag ng aming pahinang \"Bitcoin para sa Negosyo\" kung bakit kapaki-pakinabang ang bitcoin para sa isang negosyo, paano pumili ng wallet at payment processor, at nag-aalok ng libreng \"Tumatanggap kami ng Bitcoin\" na stickers.",
	"about::about_card_business_label": "Kasangkapan sa Negosyo",
	"about::about_card_business_source": "Pinagmulan: bitcoin.rocks →",
	"about::about_card_business_title":
		"Lahat ng kailangan ng negosyo para magsimulang tumanggap ng mga bayad sa bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Pinagmulan: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Mag-ambag",
	"about::about_card_contribute_source": "Pinagmulan: GitHub →",
	"about::about_card_contribute_title":
		"Alamin kung paano mag-ambag sa proyekto ng bitcoin.rocks",
	"about::about_card_email_label": "Email",
	"about::about_card_email_source": "Pinagmulan: email →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Mga napi-print na Flyer",
	"about::about_card_flyers_source": "Pinagmulan: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"I-download at i-print ang mga flyer ng bitcoin para sa iyong komunidad",
	"about::about_card_github_label": "Repositoryo",
	"about::about_card_github_source": "Pinagmulan: GitHub →",
	"about::about_card_github_title": "Tingnan ang bitcoin.rocks sa GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Pinagmulan: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Libreng Stickers",
	"about::about_card_stickers_source": "Pinagmulan: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Makakuha ng mga libreng sticker ng bitcoin na direktang ihahatid sa iyong pintuan",
	"about::about_editorial_2":
		"Tinutukoy namin ang mga pinagkakatiwalaang pinagmulan tulad ng US Federal Reserve (FRED), US Bureau of Labor Statistics, FDIC, United Nations, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, at James Lavish. Naniniwala kami na kapag malinaw na iniharap ang mga katotohanan, magsasalita ang bitcoin para sa sarili nito.",
	"about::about_flyers_blurb":
		"Nagdi-disenyo kami ng mga napi-print na flyer na maaari mong ibahagi sa mga meetup, ipako sa mga bulletin board, o ilagay sa mga mailbox — isang madaling paraan para pukawin ang interes at iakay ang mga tao sa bitcoin.rocks para sa karagdagang impormasyon.",
	"about::about_header": "Tungkol sa bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Itinatag ang bitcoin.rocks ni",
	"about::about_mission_1b":
		"noong 2022 na may simpleng misyon: pabilisin ang pag-adopt ng bitcoin sa pamamagitan ng edukasyon.",
	"about::about_open_source_2":
		"Ang bitcoin.rocks ay isang libre at open-source na proyekto sa ilalim ng MIT License. Ang lahat ay welcome na mag-ambag. Partikular naming hinahanap ang mga tagasalin na makakatulong na gawing accessible ang aming nilalaman sa mga tao sa buong mundo.",
	"about::about_open_source_header": "Open source",
	"about::about_page_description":
		"Ang bitcoin.rocks ay isang libre at open-source na bitcoin education website, itinatag noong 2022. Ang aming misyon ay pabilisin ang pag-adopt ng bitcoin sa pamamagitan ng edukasyon.",
	"about::about_stickers_blurb":
		"Nagpapadala kami ng mga libreng bitcoin sticker na direktang ihahatid sa iyong pintuan para mapalaki mo ang kamalayan sa bitcoin sa iyong komunidad. Bawat buwan, daan-daang tao ang nag-scan ng QR code sa mga stickers na ito para matuto pa tungkol sa bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Hindi maaaring magkaroon ng bank run ang bitcoin",
	"bank-runs::bank_runs_bitcoin_p1":
		"Ang bitcoin ay isang full reserve system. Hindi mo inilalagay ang iyong pera sa bangko. Ikaw mismo ang iyong sariling bangko. Ang iyong pera ay hindi ipinapautang sa iba nang hindi mo alam, dahil tanging ikaw lamang ang may access dito.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Hangga't itinatago mo ang iyong bitcoin sa sarili mong wallet — hindi sa isang exchange o ETF — imposible ang bank run.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Sa bitcoin, mayroon kang totoong kontrol sa iyong pera.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Simula noong Marso 26, 2020, ang mga bangko sa US ay hindi na kinakailangang magpanatili ng anumang mandatoryong reserba.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Reserve ratio ng bangko",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Pinagmulan: US Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Full reserve system — hindi kailangan ng insurance sa deposito.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Saklaw ng bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Pinagmulan: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Bawat bitcoin ay umiiral sa blockchain — walang ipinapautang.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Reserve ratio ng bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Pinagmulan: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"$153.9B na insurance fund kumpara sa $10.82T na insured na deposits (Disyembre 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Saklaw ng FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Pinagmulan: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Case study",
	"bank-runs::bank_runs_card_svb_source":
		"Pinagmulan: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Tingnan kung paano nangyari ang bank run sa Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Susunod na hakbang",
	"bank-runs::bank_runs_card_wallet_source": "Magsimula dito →",
	"bank-runs::bank_runs_card_wallet_title":
		"Alamin kung paano makakuha ng sarili mong bitcoin wallet",
	"bank-runs::bank_runs_fdic_heading":
		"Saklaw lamang ng FDIC deposit insurance ang mga 1% ng mga deposito",
	"bank-runs::bank_runs_fdic_p1":
		"Ang FDIC deposit insurance ay pumoprotekta sa mga deposito hanggang $250,000 bawat depositor. Ngunit maliit ang insurance fund kumpara sa kabuuang dami ng mga deposito na dapat nitong pangalagaan.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Sa pangyayaring malaking banking crisis, malamang na mag-i-print ang gobyerno ng mas maraming pera para punan ang kakulangan — na magdudulot ng mas maraming",
	"bank-runs::bank_runs_fdic_p2_link": "inflation.",
	"bank-runs::bank_runs_header":
		"Hindi maaaring magkaroon ng bank run ang bitcoin, pero maaaring mangyari ito sa iyong bangko.",
	"bank-runs::bank_runs_page_description":
		"Ipinapautang ng mga bangko ang iyong mga deposito sa pamamagitan ng fractional reserve banking. Kung masyadong maraming tao ang mag-withdraw nang sabay-sabay, maaaring bumagsak ang bangko. Ang bitcoin ay isang full reserve system — imposible ang bank run.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: isang tunay na halimbawa",
	"bank-runs::bank_runs_svb_p1_a":
		"Noong Marso 2023, bumagsak ang Silicon Valley Bank matapos i-invest ang mga deposito ng kanilang mga customer sa",
	"bank-runs::bank_runs_svb_p1_b":
		"Nang mawalan ng halaga ang mga bond na iyon, hindi na-cover ng SVB ang mga withdrawal. Naging insolvent ang bangko.",
	"bank-runs::bank_runs_svb_p1_link":
		"mahahabang panahong government bonds.",
	"bank-runs::bank_runs_svb_p2":
		"Libo-libong negosyo ang hindi nakapag-bayad ng sahod sa kanilang mga empleyado. Pumasok ang FDIC — pero bumangon ang mas malaking tanong: talaga bang ligtas ang iyong pera?",
	"bank-runs::bank_runs_what_p1":
		"Hindi itinatago ng mga bangko ang iyong mga deposito sa isang vault. Ipinapautang at ini-invest nila ang karamihan nito — tinatawag itong fractional reserve banking.",
	"bank-runs::bank_runs_what_p2":
		"Kung masyadong maraming tao ang magtangkang mag-withdraw ng kanilang pera nang sabay-sabay, wala nang sapat na cash ang bangko para mabayaran ang lahat. Iyon ang bank run — at maaari itong humantong sa kumpletong pagkalugi ng bangko.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">mga bangko</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Ang bitcoin ay magagamit ng kahit sino na may internet connection — ito ay ",
	"bitcoin-vs-banks::point_1_summary_2": "permissionless.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Maaaring tumanggi ang mga bangko na magbukas ng mga account, i-freeze ang mga ito, o isara ang mga ito batay sa kanilang sariling mga patakaran o mga direktiba ng gobyerno.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Ang bitcoin network ay tumatakbo nang 24/7/365 nang walang downtime at holidays. May limitadong oras ang mga bangko, sarado tuwing weekends, at nakakaranas ng mga outage.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Bawat bitcoin transaction ay nasa publikong blockchain na maaaring i-verify ng kahit sino. Pribado ang mga ledger ng mga bangko na hindi independent na maa-audit ng mga customer.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Sa bitcoin, ikaw mismo ang nagtatago ng iyong sariling mga private key — tingnan ang aming simpleng gabay sa ",
	"bitcoin-vs-banks::point_4_summary_2": "bitcoin wallets",
	"bitcoin-vs-banks::point_4_summary_3":
		". Hawak ng mga bangko ang iyong pera para sa iyo at maaaring i-freeze, i-restrict, o i-block ito anumang oras.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Transparent at predictable ang mga fee sa bitcoin transactions. Unti-unting nagdadagdag ang mga bangko ng mga nakatagong fee para sa mga account, overdraft, transfer, at mga ATM.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Hinahayaan ka ng bitcoin na gumastos lamang ng kung ano talaga ang mayroon ka. Pinapayagan ng mga bangko ang overdraft at pagkatapos ay naniningil ng serye ng mga penalty fee dahil dito.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Kapag ipinadala na ang isang bitcoin transaction, hindi na ito mapipigilan o mababaligtad. Maaaring i-block, i-freeze, o ibalik ng mga bangko ang mga transaksyon batay sa kanilang mga patakaran o mga direktiba ng gobyerno.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">mga bond</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Ang mga bond ay \"walang panganib\" lamang sa pangalan — kinakain ng inflation, pagbabago ng interes, at panganib ng default ang tunay na returns.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Ang bitcoin ay may transparent na volatility ngunit walang nakatagong counterparty risk.",
	"bitcoin-vs-bonds::point_2_summary_1": "Kapag",
	"bitcoin-vs-bonds::point_2_summary_2": "inflation",
	"bitcoin-vs-bonds::point_2_summary_3":
		"ay lumampas sa yield ng bond, ang mga may hawak ng bond ay nawawalan ng tunay na kapangyarihan sa pagbili taon-taon. Ang 21-milyong limit ng bitcoin ay hindi maaaring palituin ng inflation.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Maaaring mag-freeze ang mga bond market sa panahon ng krisis — bumagsak ang Silicon Valley Bank dahil bahagya dahil may mga bond na nawalan ng halaga. Tingnan kung paano",
	"bitcoin-vs-bonds::point_3_summary_2": "nangyayari ang mga bank run",
	"bitcoin-vs-bonds::point_3_summary_3":
		" at kung bakit naiiwasan ito ng bitcoin. Nagta-trade ang bitcoin nang 24/7 sa buong mundo nang walang liquidity crisis.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Maaaring mabigo ang mga auction ng government bond kung walang sapat na bumibili — tingnan ang",
	"bitcoin-vs-bonds::point_4_summary_2": "mahinang auction ng 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Ang presyo ng bitcoin ay patuloy na natutuklasan sa open markets nang walang sentralisadong auction na maaaring mabigo.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Naka-lock ang yield ng mga bond sa oras ng pagbili. Kahit lumago ang ekonomiya o bumagsak ang currency, mananatili ang iyong yield.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Ang bitcoin ay may malaking room para lumago habang lumalawak ang adoption at nakakatagpo ang demand ng fixed na supply.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Ang karamihan ng mga bond ay hawak sa pamamagitan ng mga bangko o broker, na nagdaragdag ng counterparty risk. Maaaring hawakan mo mismo ang bitcoin sa sarili mong",
	"bitcoin-vs-bonds::point_6_summary_2": "wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — tinatanggal nito ang panganib na iyon nang tuluyan.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Umaasa nang buo ang mga bond sa mga gobyernong magbabayad ng utang. Kung mag-default ang gobyerno o bawasan ito sa pamamagitan ng inflation, matatalo ang mga may hawak ng bond.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Nag-o-operate ang bitcoin nang nakapag-iisa mula sa anumang gobyerno o kapangyarihang pampulitika.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">cash</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Gumagalaw ang bitcoin sa buong mundo sa internet sa loob ng ilang minuto. Kailangan ng cash ng pisikal na presensya o mapagkakatiwalaang courier — hindi ka makakapag-email ng $20 bill.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Gumagana ang bitcoin saan mang lugar sa parehong paraan. Limitado ang cash ng heograpiya, mga exchange rate, at lokal na pagtanggap.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Maaaring gawing walang halaga ng mga gobyerno ang cash magdamag — ginawa ito ng <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> noong 2016. Ngunit kahit walang demonetization, nawawalan ng halaga ang cash dahil sa",
	"bitcoin-vs-cash::point_3_summary_2": "inflation",
	"bitcoin-vs-cash::point_3_summary_3":
		". Ang bitcoin ay hindi maaaring gawing walang halaga ng anumang gobyerno o awtoridad.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Maaaring peke ang cash, kung minsan ay lubhang kapani-paniwala. Gumagamit ang bitcoin ng cryptography na ginagawang imposible sa matematika ang pamemeke.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Walang sentralisadong awtoridad ang bitcoin. Ang cash ay ini-issue ng mga gobyerno na maaaring mag-print ng mas marami, magpalit ng disenyo, o bawiin ang mga bills sa kanilang pagpapasya.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Masisira ang cash dahil sa pagnanakaw, sunog, pagkawala, at pag-agaw. Ang bitcoin ay maaaring ",
	"bitcoin-vs-cash::point_6_summary_2": "ligtas na itago mo mismo",
	"bitcoin-vs-cash::point_6_summary_3":
		" sa iyong telepono o hardware wallet.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Nahahati ang bitcoin sa 100 milyong satoshi, na nagbibigay-daan sa mga micropayment ng anumang laki. May pinakamaliit na denominasyon ang cash — hindi mo maaaring hatiin ang isang sentimo sa kalahati.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">mga digital currency ng central bank (CBDCs)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Walang makakapigil sa iyo sa paggawa ng bitcoin transactions. Ang mga CBDC ay dinisenyo para masuri ng mga gobyerno at central bank ang bawat payment, nililimitahan ang iyong privacy at kalayaan.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Ang bitcoin ay hindi kailanman nag-e-expire at walang buwanang bayad. Maaaring i-program ang mga CBDC na mag-expire, pilitin kang hindi makapag-ipon para sa hinaharap.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Ang bitcoin ay may fixed na limit na 21 milyong BTC. Walang supply cap ang mga CBDC at hinahayaan ang mga gobyernong palawakin ang money supply sa kanilang pagpapasya — nagdudulot ng",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflation.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Hindi naka-tie ang mga bitcoin address sa iyong totoong identity. Direktang naka-tie ang mga CBDC sa identity na kinikilala ng gobyerno, nagpapahintulot ng mass surveillance at pampinansyal na censorship.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Pinapamahalaan ng sampu-sampung libong independent node ang mga patakaran ng bitcoin. Ang mga CBDC ay sentralisado sa mga kamay ng mga gobyerno at central bank na may kumpletong kontrol sa network.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Maaaring magpatakbo ng bitcoin node ang sinuman at i-enforce ang mga patakaran ng network. Hindi pinapayagan ng mga CBDC ang mga user na magpatakbo ng node — kailangan mong magtiwala sa isang sentralisadong awtoridad.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Ang self-custodied na bitcoin ay hindi maaaring ma-freeze ng sinuman. Ang mga CBDC ay dinisenyo para ma-freeze ng mga gobyerno at central bank ang mga account sa isang sandali.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Binibigyan ka ng bitcoin ng kumpletong kontrol sa iyong pera kapag itinatago mo ito sa isang",
	"bitcoin-vs-cbdc::point_8_summary_2": "wallet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Ang mga CBDC ay nangangailangan ng tiwala sa mga custodian tulad ng mga bangko o gobyerno na naghahawak ng pera para sa iyo.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Ang patakaran sa pera ng bitcoin ay nakalagay sa code at hindi mababago. Maaaring ma-reprogram ang mga CBDC sa pagpapasya ng mga pulitiko, nagdudulot ng",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflation",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" kung masyadong maraming pera ang i-print.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Ang bitcoin ang pinakaligtas na computer network na nagawa, at hindi pa ito kailanman na-hack. Ang mga CBDC ay umaasa sa mga bangko at gobyerno na na-hack nang hindi mabilang na beses.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">crypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bahagyang nagbago ang protocol ng bitcoin mula 2009 at nagbibigay ng predictable na mga patakaran. Ang karamihan ng crypto project ay patuloy na binabago ang mga protocol, tokenomics, o nag-fork sa mga bagong bersyon.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Tumatakbo ang bitcoin sa sampu-sampung libong independent nodes sa buong mundo. Ang karamihan ng crypto project ay kontrolado ng mga foundation, kumpanya, o maliliit na grupo ng developer na maaaring gumawa ng unilateral na pagbabago.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Ang bitcoin ay may fixed na limit na 21 milyong barya — ang pinakabihirang digital asset. Ang karamihan ng crypto project ay may unlimited supply o mekanismo para gumawa ng bagong token nang arbitraryo, pinupuno ang mga hawak.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Ang bitcoin ay may isang layunin: peer-to-peer digital money. Nauunawaan ito ng sinuman at magagamit ito. Ang karamihan ng crypto ay may kasamang kumplikadong smart contracts o DeFi na nangangailangan ng teknikal na kaalaman para ligtas na magamit.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Ang proof-of-work ng bitcoin ay tumagal na higit sa 15 taon nang walang matagumpay na pag-atake sa base layer. Ang karamihan ng crypto project ay gumagamit ng experimental na mga consensus na hindi malawak na nasubukan.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Ang bitcoin ay digital money — isang store of value at medium of exchange. Ang karamihan ng mga crypto token ay spekulatibong utility o governance token na may hindi malinaw na totoong halaga.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Lumalakas ang bitcoin sa ilalim ng pag-atake at nakaligtas sa bawat krisis, ban, at kritisismo. Ang karamihan ng crypto project ay bumabagsak sa regulatoryo, teknikal, o pressure ng merkado.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Walang CEO, kumpanya, o isang solong failure point ang bitcoin. Ang karamihan ng crypto project ay umaasa sa venture capital, partikular na leadership, o pag-iral ng isang kumpanya.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">fine art</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Bawat bitcoin ay parehong-pareho at interchangeable. Bawat piraso ng fine art ay kakaiba — iba't ibang provenance, kasaysayan, kondisyon, at pinagmulan ay nagpapahirap ng direktang paghahambing.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Nagta-trade ang bitcoin nang 24/7 sa pandaigdigang markets na accessible sa lahat. Nangangailangan ang fine art ng mga espesyalistang auction house, pribadong dealer, o gallery, at ang mga pagbebenta ay maaaring tumagal ng buwan.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Ang pagbili o pagbebenta ng bitcoin ay nagkakahalaga ng mas mababa sa 1% sa fees, kadalasan ay mas mababa pa. Ang pagbebenta ng fine art ay umaaabot ng 30–40% sa buyer premium, komisyon, insurance, shipping, at fees sa pag-authenticate.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Nahahati ang bitcoin sa 100 milyong satoshi, na ginagawa itong perpekto para sa mga transaksyon ng anumang laki. Hindi ka maaaring magmay-ari ng bahagi ng isang painting o sulok ng isang sculpture nang walang counterparty risk.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Ang pagmamay-ari at pagiging tunay ng bitcoin ay maaaring ma-verify sa pamamagitan ng cryptography sa blockchain ng sinuman. Ang authentication ng fine art ay mahal, mabagal, at regular na nabibigla ng mga forger — sumisira ng halaga ng trabaho magdamag.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Ang bitcoin na tamang naka-backup ay nakakaligtas sa mga baha, sunog, lindol, at pagnanakaw. Madaling masira ang fine art sa lahat ng uri ng pisikal na kalamidad, at bihirang masaklaw ng insurance ang lahat.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Kahit sino na may internet connection at kaunting pera ay maaaring bumili ng bitcoin. Ang pag-iinvest sa fine art ay praktikal lang sa mga mayayamang kolektor na may access sa mga auction at espesyalistang kadalubhasaan.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">ginto</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Maaaring ipadala agad ang bitcoin sa internet na may mababang fees. Kailangang pisikal na ipadala ang ginto para mailipat ang pagmamay-ari.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Ang bitcoin ay natively digital asset na maaaring ilipat sa internet. Ang ginto sa online ay digital IOU — nagmamay-ari ka lang ng pangako mula sa isang custodian, hindi ng metal mismo.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Ang bitcoin ay may fixed na limit na 21 milyong BTC. Lumalaki ang supply ng ginto ng humigit-kumulang <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% kada taon</a>, pinupuno ang iyong parte — mas mababa kaysa sa",
	"bitcoin-vs-gold::point_3_summary_2": "inflation",
	"bitcoin-vs-gold::point_3_summary_3":
		" ng fiat, pero inflation pa rin.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Kapag tumaas ang presyo ng ginto, mas marami ang minahan, na muling bumababa ang presyo. Ang supply ng bitcoin ay hindi flexible — gaano man kataas ang presyo, magkakaroon lamang ng 21 milyon.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Ang bitcoin network ay kontrolado ng sampu-sampung libong independent nodes. Ang karamihan ng pisikal na ginto ay nasa ilang malalaking vault.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Kahit sino ay maaaring mag-verify ng tunay na bitcoin sa pamamagitan ng pagpapatakbo ng full node — isang app lamang ito. Para ma-verify ang pisikal na ginto, kailangan mo itong tunawin; maaaring may tungsten sa loob.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Nahahati ang bitcoin sa 100 milyong satoshi, na ginagawa itong perpekto para sa anumang laki ng pagbili. Hindi madaling hatiin ang ginto para sa mas maliliit na transaksyon.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">real estate</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Gumagalaw agad ang bitcoin kahit saan sa mundo. Nakatali ang real estate sa lokasyon at masisira dahil sa lokal na pang-ekonomiya, pampulitika, at environmental threats.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Nahahati ang bitcoin sa 100 milyong satoshi. Hindi mo maaaring ibenta ng bahagya ang real estate — hindi posible ang pagbebenta ng kusina o pagbili ng kalahating kwarto.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Tumatakbo ang bitcoin sa isang desentralisadong network na hindi makokontrol ng anumang gobyerno. Mahigpit na regulated ang real estate — zoning, rent control, eminent domain, at agaw ay naaangkop lahat.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Hindi nangangailangan ng maintenance ang bitcoin. Nangangailangan ang real estate ng pag-aayos, pagpapabago, insurance, property management, at paglutas ng mga problema sa tenant.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Hindi patuloy na ni-re-tax ang bitcoin — ang mga capital gains tax ay binabayaran lamang kapag nagbebenta ka. Ang real estate ay may buwanang property tax na dapat bayaran anuman ang kita.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Ang bitcoin na tamang naka-backup ay nakakaligtas sa mga sunog, baha, at lindol. Ang real estate ay madaling masira sa lahat ng kalamidad at bihirang masaklaw ng insurance ang lahat.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Bawat bitcoin ay parehong-pareho at interchangeable. Bawat piraso ng real estate ay kakaiba, na nagpapahirap sa pag-appraise at paghahambing.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Nagta-trade ang bitcoin nang 24/7 sa buong mundo sa sinumang may internet connection. Ang pagbebenta ng real estate ay limitado sa mga lokal na mamimili at maaaring tumagal ng buwan para i-close sa paperwork.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Nagpapahintulot ang bitcoin sa direktang indibidwal na pagmamay-ari para sa lahat. Ang pagbili ng real estate bilang isang investment bukod sa unang pangunahing bahay ay nagpapataas ng presyo ng bahay, binabawasan ang availability, at lumilikha ng housing crisis.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">mga stock</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Ang bitcoin ay direktang asset na ganap mong pag-aari. Ang mga stock ay piraso ng kumpanya — ang kanilang halaga ay nakasalalay sa pamamahala, performance, at mga desisyong hindi mo kontrolado.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Ang bitcoin ay may fixed na limit na 21 milyong BTC. Maaaring mag-issue ang mga kumpanya ng mga bagong share anumang oras at magpuno sa mga existing shareholder — tulad lang ng",
	"bitcoin-vs-stocks::point_2_summary_2": "inflation",
	"bitcoin-vs-stocks::point_2_summary_3":
		" ng fiat na pumupuno ng cash. Sa bitcoin, hindi kailanman bumababa ang iyong parte.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Walang CEO o isang solong failure point ang bitcoin. Ang mga stock ay umaasa nang malaki sa pamamahala — isang masamang desisyon o pag-alis ng isang key person ay maaaring mag-crash sa presyo.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Ang presyo ng bitcoin ay nagmumula sa open pandaigdigang markets. Ang valuation ng stock ay nakadepende sa mga metric tulad ng P/E na maaaring magtago ng mga overpriced na stocks.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Nagta-trade ang bitcoin nang 24/7 sa buong mundo. Ang stock markets ay bukas lamang tuwing weekday sa oras ng trading.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Sa bitcoin, maaari kang lumipat sa",
	"bitcoin-vs-stocks::point_6_summary_2": "self-custody",
	"bitcoin-vs-stocks::point_6_summary_3":
		" sa pamamagitan ng simpleng app — hindi na kailangan ng broker. Ang mga stock ay itinatago ng mga broker, na nag-e-expose sa iyo sa counterparty risk kung bumagsak sila.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Ang fixed supply ng bitcoin ay ginagawa itong maaasahang hedge laban sa inflation. May ilang stock na tinatalo ang inflation, ang iba ay hindi — walang garantiya.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Ang kaibhan ng <span class=\"orange\">bitcoin</span> at <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Ang bitcoin ay isang open network na maaaring sumali ang sinuman nang walang pahintulot. Ang Visa ay saradong sistema na kontrolado ng mga institusyong pinansyal na maaaring tumanggi ng access — lalo na para sa mga taong walang bangko o may limitadong banking.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Ang mga bitcoin transaction ay walang merchant fees. Ang Visa ay naniningil sa mga merchant ng karaniwang mga 3% kada transaksyon — ang iyong negosyo ay maaaring makatipid ng pera sa pamamagitan ng pagtanggap ng",
	"bitcoin-vs-visa::point_2_summary_2": "mga bayad sa bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Bawat bitcoin transaction ay nasa publiko at ma-verify na blockchain. Ang Visa ay nagpapatakbo ng saradong at proprietary na sistema kung saan hindi maaaring i-verify ng mga customer ang kahit ano nang nakapag-iisa.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Ang bitcoin ay hindi maaaring ma-freeze ng sentralisadong awtoridad. Maaaring i-freeze ng Visa ang mga account, i-block ang mga transaksyon, o tumanggi ng serbisyo anumang oras.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Ang bitcoin ay final settlement — gumagastos ka lamang ng mayroon ka. Lumilikha ang mga credit card ng utang na may interest rates na madalas lumampas sa 25% kada taon.",
	"bitcoin-vs-visa::point_6_summary_1": "Pinapayagan ng bitcoin ang paglipat sa",
	"bitcoin-vs-visa::point_6_summary_2": "self-custody",
	"bitcoin-vs-visa::point_6_summary_3":
		" nang walang bangko o payment processor. Ang mga credit card ay palaging nangangailangan ng mga intermediary.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Tumatakbo ang bitcoin nang 24/7 sa buong mundo nang walang oras ng operasyon. Ang Visa ay may oras ng operasyon, downtime ng maintenance, at mga heograpikong paghihigpit na maaaring pumigil sa mga transaksyon.",
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
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (fil): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
