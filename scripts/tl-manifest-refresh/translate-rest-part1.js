#!/usr/bin/env node
/**
 * Tagalog manifest refresh — non-inflation namespaces, part 1.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison
 * pages), buy, common, compound-inflation-calculator, flyers.
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Bumalik sa homepage",
	"404::404_message": "Astig ang Bitcoin, pero ang sirang pahinang ito ay hindi.",
	"404::404_not_found_short": "Hindi natagpuan",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Nagbibigay kami ng mga libreng resources para sa negosyo na nagpapadali sa pag-onboard ng mga lokal na merchant upang tumanggap ng Bitcoin. Sinasaklaw ng aming Bitcoin business page kung bakit maganda ang Bitcoin para sa negosyo, kung paano pumili ng wallet at point-of-sale, at nag-aalok ng mga libreng „Bitcoin Accepted Here“ stickers.",
	"about::about_card_business_label": "Mga resource para sa negosyo",
	"about::about_card_business_source": "Pinagmulan: bitcoin.rocks →",
	"about::about_card_business_title":
		"Lahat ng kailangan ng isang negosyo upang simulan ang pagtanggap ng mga bayad sa Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Pinagmulan: GitHub →",
	"about::about_card_contact_github_title":
		"github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Mag-ambag",
	"about::about_card_contribute_source": "Pinagmulan: GitHub →",
	"about::about_card_contribute_title":
		"Alamin kung paano mag-ambag sa bitcoin.rocks",
	"about::about_card_email_label": "Email",
	"about::about_card_email_source": "Pinagmulan: email →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Mga printable na flyer",
	"about::about_card_flyers_source": "Pinagmulan: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"I-download at i-print ang mga Bitcoin flyer para sa iyong komunidad",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Pinagmulan: GitHub →",
	"about::about_card_github_title": "Tingnan ang bitcoin.rocks sa GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Pinagmulan: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Mga libreng sticker",
	"about::about_card_stickers_source": "Pinagmulan: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Kumuha ng mga libreng Bitcoin sticker na ipapadala sa iyong pintuan",
	"about::about_editorial_2":
		"Naglilink kami sa mga mapagkakatiwalaang pinagmulan tulad ng Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, United Nations, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, at James Lavish. Naniniwala kami na nagsasalita ang Bitcoin para sa sarili nito kapag malinaw na ipinapakita ang mga katotohanan.",
	"about::about_flyers_blurb":
		"Nagdidisenyo kami ng mga printable na flyer na maaari mong ipamahagi sa mga meetup, ipaskil sa mga community board, o iwanan sa mga letterbox — isang simpleng paraan upang pukawin ang interes at ipadala ang mga tao sa bitcoin.rocks upang matuto pa.",
	"about::about_header": "Tungkol sa bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Ang bitcoin.rocks ay itinatag ni",
	"about::about_mission_1b":
		"noong 2022 na may simpleng misyon: mapabilis ang adoption ng Bitcoin sa pamamagitan ng edukasyon.",
	"about::about_open_source_2":
		"Ang bitcoin.rocks ay isang libre, open-source na proyekto na lisensyado sa ilalim ng MIT License. Sinuman ay maaaring mag-ambag sa bitcoin.rocks. Lalo kaming malugod na tinatanggap ang mga tagasalin na tumutulong na maging accessible ang aming nilalaman sa mga tao sa buong mundo.",
	"about::about_open_source_header": "Open source",
	"about::about_page_description":
		"Ang bitcoin.rocks ay isang libre, open-source na website ng edukasyon tungkol sa Bitcoin na itinatag noong 2022. Ang aming misyon ay mapabilis ang adoption ng Bitcoin sa pamamagitan ng edukasyon.",
	"about::about_stickers_blurb":
		"Nagpapadala kami ng mga libreng Bitcoin sticker sa iyong pintuan upang makatulong kang ikalat ang kamalayan tungkol sa Bitcoin sa iyong komunidad. Daan-daang tao ang nag-scan ng mga QR code sa mga sticker na ito kada buwan upang matuto tungkol sa Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_header":
		"Walang bank run ang Bitcoin, pero ang iyong bangko ay maaaring meron.",
	"bank-runs::bank_runs_bitcoin_heading": "Walang bank run ang Bitcoin",
	"bank-runs::bank_runs_bitcoin_p1":
		"Ang Bitcoin ay isang full-reserve na sistema. Hindi mo idinedeposito ang iyong pera sa isang bangko. Ikaw mismo ang iyong bangko. Walang nagpapautang ng iyong pera nang hindi mo alam dahil ikaw lang ang makaka-access sa iyong pera.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Hangga't hawak mo ang bitcoin sa sarili mong wallet — hindi sa exchange o wrapped sa isang ETF — imposible ang bank run.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Sa Bitcoin, ikaw mismo ang tunay na may kontrol sa iyong pera.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Mula Marso 26, 2020, kinakailangan ng mga bangko sa US na maghawak ng 0% sa reserves.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Bank reserve ratio",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Pinagmulan: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Full-reserve na sistema — walang kailangang deposit insurance.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Coverage ng Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Pinagmulan: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Bawat bitcoin ay umiiral on-chain — walang ipinapautang.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Reserve ratio ng Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Pinagmulan: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"$153.9B insurance fund laban sa $10.82T sa mga insured deposit (Dis 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Coverage ng FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Pinagmulan: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_svb_label": "Case study",
	"bank-runs::bank_runs_card_svb_source":
		"Pinagmulan: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Alamin kung paano nangyari ang bank run ng Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Susunod na hakbang",
	"bank-runs::bank_runs_card_wallet_source": "Magsimula dito →",
	"bank-runs::bank_runs_card_wallet_title":
		"Alamin kung paano kumuha ng sarili mong Bitcoin wallet",
	"bank-runs::bank_runs_fdic_heading":
		"Sinasaklaw lamang ng FDIC insurance ang halos 1% ng mga deposito",
	"bank-runs::bank_runs_fdic_p1":
		"Ang FDIC insurance ay nagpoprotekta ng mga deposito hanggang $250,000 bawat depositor. Pero ang insurance fund ay napakaliit kumpara sa kabuuang mga deposito na dapat itong protektahan.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Sa isang malaking pagkabigo ng bangko, malamang na magpi-print ng pera ang gobyerno upang takpan ang gap — nagreresulta sa mas maraming",
	"bank-runs::bank_runs_fdic_p2_link": "inflation.",
	"bank-runs::bank_runs_page_description":
		"Ang mga bangko ay nagpapautang ng iyong mga deposito sa ilalim ng fractional reserve banking. Kung masyadong maraming tao ang sabay-sabay na mag-withdraw, maaaring mabigo ang mga bangko. Ang Bitcoin ay isang full-reserve na sistema — imposible ang mga bank run.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: isang totoong halimbawa",
	"bank-runs::bank_runs_svb_p1_a":
		"Noong Marso 2023, nabigo ang Silicon Valley Bank matapos i-invest ang mga deposito ng kustomer sa pangmatagalang",
	"bank-runs::bank_runs_svb_p1_b":
		"Nang mawalan ng halaga ang mga bond na iyon, hindi nakaya ng SVB na takpan ang mga withdrawal. Ang bangko ay insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "mga government bond.",
	"bank-runs::bank_runs_svb_p2":
		"Libu-libong negosyo ang hindi nakapagbayad sa kanilang mga empleyado. Pumasok ang FDIC — pero nagdulot iyon ng mas malaking tanong: ligtas ba talaga ang iyong pera?",
	"bank-runs::bank_runs_what_p1":
		"Hindi inilalagay ng mga bangko ang iyong mga deposito sa isang vault. Ipinapautang at ini-invest nila ang iyong pera — iyon ang tinatawag na fractional reserve banking.",
	"bank-runs::bank_runs_what_p2":
		"Kung masyadong maraming tao ang sabay-sabay na susubukang mag-withdraw, walang sapat na cash ang bangko upang bayaran ang lahat. Iyon ang isang bank run — at maaari nitong magdulot ng kabuuang pagkalugi ng mga bangko.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::bitcoin_vs_banks": "Bitcoin vs Banks",
	"bitcoin-vs-banks::point_1_summary_1":
		"Sinumang may koneksyon sa internet ay maaaring gumamit ng Bitcoin — ito ay",
	"bitcoin-vs-banks::point_1_summary_2": "walang pahintulot na kailangan.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Ang mga bangko ay maaaring tumanggi, mag-freeze, o magsara ng mga account batay sa patakaran o mga panuntunan ng gobyerno.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Ang Bitcoin network ay tumatakbo 24/7/365 nang walang maintenance window o holiday. Ang mga bangko ay may limitadong oras, sarado tuwing weekend, at may mga panahon ng outage.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Bawat Bitcoin transaction ay nasa pampublikong blockchain na maaaring i-audit ng sinuman. Ang mga bangko ay nagpapatakbo ng pribadong mga ledger na hindi independyenteng ma-verify ng mga kustomer.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Sa Bitcoin, ikaw mismo ang humahawak ng iyong mga private key — tingnan ang aming simpleng",
	"bitcoin-vs-banks::point_4_summary_2": "mga gabay sa Bitcoin wallet",
	"bitcoin-vs-banks::point_4_summary_3":
		"Hawak ng mga bangko ang iyong pera at maaari itong i-freeze, limitahan, o i-restrict anumang oras.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Ang mga bayarin sa Bitcoin ay transparent at mahuhulaan. Ang mga bangko ay nagdaragdag ng mga nakatagong account, overdraft, wire, at ATM fee sa paglipas ng panahon.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Pinapayagan ka lang ng Bitcoin na gumastos ng aktwal mong pag-aari. Pinapayagan ng mga bangko ang overdraft, pagkatapos ay sisingilin ka ng tumataas na penalty fee para sa pribilehiyong iyon.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Kapag na-broadcast na, hindi maaaring ihinto o i-reverse ang mga Bitcoin transaction. Maaaring i-block, i-freeze, o i-reverse ng mga bangko ang mga transaksyon batay sa patakaran o utos ng gobyerno.",
	"bitcoin-vs-banks::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">mga Bangko</span>',
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::bitcoin_vs_bonds": "Bitcoin vs Bonds",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Ang mga bond ay 'walang panganib' lamang sa nominal na halaga — ang inflation, paggalaw ng interest rate, at panganib ng default ay kumakain ng totoong return.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Ang Bitcoin ay may transparent na volatility ngunit walang nakatagong counterparty risk.",
	"bitcoin-vs-bonds::point_2_summary_1": "Kapag ang",
	"bitcoin-vs-bonds::point_2_summary_2": "inflation",
	"bitcoin-vs-bonds::point_2_summary_3":
		"ay lumampas sa bond yield, nawawalan ng tunay na purchasing power ang mga bondholder kada taon. Ang 21-million cap ng Bitcoin ay hindi ma-iinflate.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Maaaring mag-freeze ang mga bond market sa panahon ng krisis — bumagsak ang Silicon Valley Bank sa bahaging dahil sa pagkakahawak nila ng mga bond na nawalan ng halaga. Tingnan kung paano",
	"bitcoin-vs-bonds::point_3_summary_2": "nangyayari ang mga bank run",
	"bitcoin-vs-bonds::point_3_summary_3":
		"at kung bakit iniiwasan ito ng Bitcoin. Ang Bitcoin ay nakatatrade 24/7 sa buong mundo nang walang krisis sa likido.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Maaaring mabigo ang mga Treasury auction kapag walang sapat na buyer — tingnan ang",
	"bitcoin-vs-bonds::point_4_summary_2": "mahinang auction noong 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Ang presyo ng Bitcoin ay tuloy-tuloy na natutuklasan sa bukas na market nang walang sentral na auction na maaaring mabigo.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Nakapirmi ang mga bond yield sa pagbili. Kahit na bumulwak ang ekonomiya o bumagsak ang pera, mananatiling pareho ang iyong return.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Ang Bitcoin ay may espasyo para sa malaking pagtaas ng halaga habang lumalaki ang adoption at nakikipagtagpo ang demand sa nakapirming supply.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Karamihan sa mga bond ay hawak sa pamamagitan ng mga bangko o broker, na nagdaragdag ng counterparty risk. Maaaring i-self-custody ang Bitcoin gamit ang isang",
	"bitcoin-vs-bonds::point_6_summary_2": "wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — na ganap na inaalis ang panganib na iyon.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Ang mga bond ay ganap na nakadepende sa mga gobyerno na magbabayad. Kung mag-default ang isang gobyerno o i-inflate ang utang nito, talo ang mga bondholder.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Ang Bitcoin ay tumatakbo nang independyente sa anumang gobyerno o pampulitikang awtoridad.",
	"bitcoin-vs-bonds::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">mga Bond</span>',
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::bitcoin_point_6": "Digital na self-custody",
	"bitcoin-vs-cash::bitcoin_vs_cash": "Bitcoin vs Cash",
	"bitcoin-vs-cash::cash": "CASH",
	"bitcoin-vs-cash::point_1_summary_1":
		"Naililipat ang Bitcoin sa internet kahit saan sa loob ng ilang minuto. Ang cash ay nangangailangan ng pisikal na presensya o mapagkakatiwalaang courier — hindi mo maaaring i-email ang isang $20 na bill.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Ang Bitcoin ay gumagana sa parehong paraan kahit saan. Ang cash ay limitado ng heograpiya, exchange rate, at lokal na pagtanggap.",
	"bitcoin-vs-cash::point_3_summary_1":
		'Maaaring i-invalidate ng mga gobyerno ang cash sa isang gabi — ginawa iyon ng <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">India</a> noong 2016. Kahit walang demonetization, nawawalan ng halaga ang cash dahil sa',
	"bitcoin-vs-cash::point_3_summary_2": "inflation.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Ang Bitcoin ay hindi maaaring i-invalidate ng anumang gobyerno o awtoridad.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Maaaring pekein ang cash, minsan ay nakakakumbinsi pa. Gumagamit ang Bitcoin ng cryptography na ginagawang mathematically imposible ang counterfeiting.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Ang Bitcoin ay walang sentral na awtoridad. Ang cash ay ini-issue ng mga gobyerno na maaaring mag-print ng higit pa, baguhin ang mga disenyo, o i-invalidate ang mga banknote ayon sa gusto.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Vulnerable ang cash sa pagnanakaw, sunog, pagkawala, at pag-confiscate. Maaaring ligtas na",
	"bitcoin-vs-cash::point_6_summary_2": "i-self-custody",
	"bitcoin-vs-cash::point_6_summary_3":
		"ang Bitcoin sa isang phone o hardware device.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Ang Bitcoin ay nahahati sa 100 milyong sat, na nagbibigay-daan sa mga micropayment ng anumang sukat. Ang cash ay may pinakamababang denominasyon — hindi mo maaaring hatiin ang isang sentimo.",
	"bitcoin-vs-cash::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Cash</span>',
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::bitcoin_point_10": "Ligtas",
	"bitcoin-vs-cbdc::bitcoin_point_4": "Pseudonymous",
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin vs CBDCs",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Ang Bitcoin ang pinaka-secure na computing network na ginawa kailanman at hindi pa kailanman na-hack. Ang mga CBDC ay umaasa sa mga bangko at gobyerno na na-hack nang hindi mabilang na beses.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Walang sinumang makapipigil sa iyong magtransact sa Bitcoin. Ang mga CBDC ay dinisenyo upang makontrol ng mga gobyerno at sentral na bangko ang bawat bayad, naglilimita sa iyong pribasiya at kalayaan.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Ang Bitcoin ay hindi kailanman nag-eexpire at walang buwanang bayarin. Ang mga CBDC ay maaaring i-program upang mag-expire, na pumipigil sa iyo na mag-ipon para sa hinaharap.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Ang Bitcoin ay may hard cap na 21 milyong BTC. Ang mga CBDC ay walang cap sa supply, na nagpapahintulot sa mga gobyerno na palawakin ang pera ayon sa gusto — na nagdudulot ng",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflation.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Ang mga Bitcoin address ay hindi nakatali sa iyong tunay na pagkakakilanlan. Ang mga CBDC ay direktang nakalink sa government ID, na nagpapahintulot sa malawakang surveillance at censorship sa pinansyal.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Ang mga patakaran ng Bitcoin ay vina-validate ng sampu-sampung libong independyenteng node. Ang mga CBDC ay sentralisado sa mga kamay ng gobyerno at sentral na bangko, na may ganap na kontrol sa network.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Sinuman ay maaaring magpatakbo ng Bitcoin node upang i-verify ang mga patakaran ng network. Ang mga CBDC ay hindi nagpapahintulot sa mga user na magpatakbo ng node — kailangan mong magtiwala sa sentral na awtoridad.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Ang self-custodied na Bitcoin ay hindi maaaring i-freeze ng sinuman. Ang mga CBDC ay dinisenyo upang agad-agad na ma-freeze ng mga gobyerno at sentral na bangko ang mga account.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Binibigyan ka ng Bitcoin ng buong kontrol sa iyong pera kapag nag-self-custody ka nito gamit ang isang",
	"bitcoin-vs-cbdc::point_8_summary_2": "wallet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Ang mga CBDC ay nangangailangan ng pagtitiwala sa mga custodian tulad ng mga bangko o gobyerno na hawakan ang iyong pera para sa iyo.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Ang monetary policy ng Bitcoin ay nakapirmi sa code at hindi maaaring baguhin. Maaaring i-reprogram ang mga CBDC ayon sa gusto ng mga politiko, na nagdudulot ng",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflation",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" kapag masyadong maraming pera ang nai-print.",
	"bitcoin-vs-cbdc::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">mga CBDC</span>',
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragile",
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin vs Crypto",
	"bitcoin-vs-crypto::crypto": "CRYPTO",
	"bitcoin-vs-crypto::crypto_point_8": "May suporta ng korporasyon",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Ang protocol ng Bitcoin ay nanatiling pundamental na pareho mula 2009, na nagbibigay ng mahuhulaang patakaran. Karamihan sa mga crypto project ay patuloy na nagbabago ng protocol, tokenomics, o nagfo-fork sa mga bagong bersyon.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Ang Bitcoin ay tumatakbo sa sampu-sampung libong independyenteng node sa buong mundo. Karamihan sa mga crypto project ay kontrolado ng mga foundation, kumpanya, o maliliit na dev team na maaaring gumawa ng unilateral na pagbabago.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Ang Bitcoin ay may hard cap na 21 milyong barya — ang pinaka-bibihira na digital asset. Karamihan sa mga crypto project ay may walang limitasyong supply o mga mekanismo upang mag-mint ng mga bagong token ayon sa gusto, na nagdi-dilute sa mga holder.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Ang Bitcoin ay may iisang layunin: peer-to-peer na digital na pera. Sinuman ay makakaunawa at makakagamit nito. Karamihan sa crypto ay kinabibilangan ng kumplikadong mga smart contract o DeFi na nangangailangan ng teknikal na kaalaman upang ligtas na magamit.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Ang Proof of Work ng Bitcoin ay tumatakbo nang walang matagumpay na pag-atake sa pangunahing network sa loob ng higit 15 taon. Karamihan sa mga crypto project ay gumagamit ng eksperimental na consensus na hindi pa nasubok sa labanan.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Ang Bitcoin ay digital na pera — isang store of value at medium of exchange. Karamihan sa mga crypto token ay speculative utility o governance token na may hindi malinaw na real-world na halaga.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Ang Bitcoin ay nagiging mas malakas sa ilalim ng pag-atake at nakaligtas sa bawat krisis, pagbabawal, at kritisismo. Karamihan sa mga crypto project ay bumabagsak sa ilalim ng regulatory, teknikal, o market pressure.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Ang Bitcoin ay walang CEO, walang kumpanya, walang single point of failure. Karamihan sa mga crypto project ay nakadepende sa mga VC, partikular na pamunuan, o sa pagkakapanatili ng iisang kumpanya.",
	"bitcoin-vs-crypto::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Crypto</span>',
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::bitcoin_point_5": "Cryptographically na ma-veverify",
	"bitcoin-vs-fine-art::bitcoin_vs_fine_art": "Bitcoin vs Fine Art",
	"bitcoin-vs-fine-art::fine_art": "FINE ART",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Ang bawat bitcoin ay magkapareho at maaaring ipalitan. Ang bawat artwork ay natatangi — magkaiba ang paggawa, kasaysayan, kondisyon, at provenance ang nagpapahirap sa direktang paghahambing.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Ang Bitcoin ay nakatatrade 24/7 sa global market na accessible sa kahit sino. Ang fine art ay nangangailangan ng mga espesyalisadong auction house, pribadong dealer, o gallery at maaaring tumagal ng ilang buwan upang maibenta.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Ang pagbili o pagbenta ng Bitcoin ay nagkakahalaga ng mas mababa sa 1% sa bayarin, madalas mas mababa pa. Ang mga pagbenta ng art ay umaakyat sa 30–40% sa mga buyer's premium, komisyon, insurance, transportasyon, at authentication fee.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Ang Bitcoin ay nahahati sa 100 milyong sat, na ginagawa itong perpekto para sa anumang sukat ng transaksyon. Hindi mo maaaring pag-aari ang isang fraction ng pintura o sulok ng eskultura nang walang counterparty risk.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Ang pagmamay-ari at pagiging tunay ng Bitcoin ay maaaring cryptographically na i-verify ng kahit sino on-chain. Ang authentication ng art ay mahal, mabagal, at madalas pa ring naloloko ng mga nagpapanggap — sinisira ang halaga ng artwork sa isang gabi.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Ang Bitcoin, kapag nai-back up nang maayos, ay nakakaligtas sa baha, sunog, lindol, at pagnanakaw. Ang fine art ay vulnerable sa lahat ng anyo ng pisikal na pagkasira, at bihirang masaklawan ng insurance ang lahat.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Sinumang may koneksyon sa internet at konting pera ay maaaring bumili ng Bitcoin. Ang investment sa fine art ay halos limitado sa mga mayayamang kolektor na may access sa auction at espesyalisadong kaalaman.",
	"bitcoin-vs-fine-art::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Fine Art</span>',
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::bitcoin_point_4": "Inelastic",
	"bitcoin-vs-gold::bitcoin_vs_gold": "Bitcoin vs Gold",
	"bitcoin-vs-gold::gold": "GOLD",
	"bitcoin-vs-gold::gold_point_4": "Elastic",
	"bitcoin-vs-gold::point_1_summary_1":
		"Maaaring ipadala agad-agad ang Bitcoin sa internet sa mababang bayarin. Ang ginto ay kailangang pisikal na ipadala upang ilipat ang pagmamay-ari.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Ang Bitcoin ay isang digitally native na asset na maaari mong ilipat sa internet. Ang online na ginto ay isang Digital IOU — ikaw lang ay may pangako mula sa isang custodian, hindi ang aktwal na metal.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Ang Bitcoin ay may hard cap na 21 milyong BTC. Ang supply ng ginto ay lumalaki ng halos <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1.6% kada taon</a>, na nagpapaliit ng iyong hiwa — mas mababa kaysa sa fiat',
	"bitcoin-vs-gold::point_3_summary_2": "inflation",
	"bitcoin-vs-gold::point_3_summary_3": "— pero inflation pa rin.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Kapag tumaas ang presyo ng ginto, mas marami ang minamina, na nagpapababa muli sa presyo. Ang supply ng Bitcoin ay inelastic — gaano man kataas ang presyo, 21 milyon lang ang lalabas.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Sampu-sampung libong independyenteng node ang nagbe-validate sa Bitcoin network. Karamihan sa pisikal na ginto ay nakaupo sa kakaunting malalaking custodian vault.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Sinuman ay maaaring i-verify ang tunay na Bitcoin sa pamamagitan ng pagpapatakbo ng full node — isa lang itong app. Ang pag-verify ng pisikal na ginto ay nangangailangan ng pagtunaw nito; ang loob ay maaaring tungsten.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Ang Bitcoin ay nahahati sa 100 milyong sat, na ginagawa itong perpekto para sa anumang sukat ng pagbili. Ang ginto ay hindi madaling mahati para sa maliliit na transaksyon.",
	"bitcoin-vs-gold::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Ginto</span>',
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::bitcoin_point_1": "Mababitbit sa buong mundo",
	"bitcoin-vs-real-estate::bitcoin_vs_real_estate":
		"Bitcoin vs Real Estate",
	"bitcoin-vs-real-estate::real_estate": "REAL ESTATE",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Naililipat ang Bitcoin agad-agad kahit saan sa mundo. Ang real estate ay nakapirmi sa isang lokasyon at nakaharap sa lokal na panganib pang-ekonomiya, pampulitika, at natural.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Ang Bitcoin ay nahahati sa 100 milyong sat. Ang real estate ay hindi maaaring ibenta nang bahagi — hindi mo maaaring ibenta lamang ang kusina o bilhin ang kalahati ng silid-tulugan.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Ang Bitcoin ay tumatakbo sa isang desentralisadong network na walang gobyernong makakakontrol. Ang real estate ay malawakang naka-regulate — zoning, rent control, eminent domain, at pagkumpiska ay lahat nag-aaplay.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Ang Bitcoin ay walang kailangang maintenance. Ang real estate ay nangangailangan ng pagkukumpuni, renovation, insurance, property management, at mga isyu sa nangungupahan.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Ang Bitcoin ay walang patuloy na buwis — nagbabayad ka lamang ng capital gains kapag nagbenta ka. Ang real estate ay may taunang property tax anuman ang kita.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Ang Bitcoin, kapag nai-back up nang maayos, ay nakakaligtas sa sunog, baha, at lindol. Ang real estate ay vulnerable sa lahat ng kalamidad, at bihirang masaklawan ng insurance ang lahat.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Ang bawat bitcoin ay magkapareho at maaaring ipalitan. Ang bawat ari-arian ay natatangi, na nagpapahirap sa pagpepresyo at paghahambing.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Ang Bitcoin ay nakatatrade sa buong mundo 24/7 ng kahit sinong may internet access. Ang mga pagbenta ng real estate ay limitado sa mga lokal na buyer at maaaring tumagal ng ilang buwang papeles upang maisara.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Pinagagana ng Bitcoin ang direktang indibidwal na pagmamay-ari para sa kahit sino. Ang pagbili ng real estate bilang investment na lampas sa iyong pangunahing tirahan ay nagtataas ng presyo ng pabahay, nagbabawas ng abot-kaya at nagdudulot ng krisis sa pabahay.",
	"bitcoin-vs-real-estate::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Real Estate</span>',
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::bitcoin_vs_stocks": "Bitcoin vs Stocks",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Ang Bitcoin ay isang direktang asset na ganap mong pag-aari. Ang mga stock ay shares sa isang kumpanya — ang halaga nito ay nakadepende sa pamamahala, performance, at mga desisyong hindi mo makontrol.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Ang Bitcoin ay may hard cap na 21 milyong BTC. Maaaring mag-issue ang mga kumpanya ng mga bagong share anumang oras, na nagdi-dilute sa mga kasalukuyang shareholder — katulad ng kung paano nagdi-dilute sa cash ang fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "inflation",
	"bitcoin-vs-stocks::point_2_summary_3":
		". Sa Bitcoin, hindi kailanman lumiliit ang iyong hiwa.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Ang Bitcoin ay walang CEO at walang single point of failure. Ang mga stock ay malakas na nakadepende sa pamunuan — isang masamang desisyon o pag-alis ay maaaring magpababa ng presyo.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Ang presyo ng Bitcoin ay galing sa bukas na global market. Ang mga stock valuation ay umaasa sa mga metric tulad ng P/E ratio na maaaring magtago sa mga sobrang mahal na share.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Ang Bitcoin ay nakatatrade 24/7 sa buong mundo. Ang mga stock market ay bukas lamang sa mga oras ng negosyo tuwing weekday.",
	"bitcoin-vs-stocks::point_6_summary_1": "Maaari mong kunin ang",
	"bitcoin-vs-stocks::point_6_summary_2": "self-custody",
	"bitcoin-vs-stocks::point_6_summary_3":
		"ng Bitcoin gamit ang isang simpleng app — walang kailangang broker. Ang mga stock ay nasa brokerage, na naglalantad sa iyo sa counterparty risk kung mabigo sila.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Ang nakapirming supply ng Bitcoin ay ginagawa itong maaasahang inflation hedge. Ang ilang stock ay tumatalo sa inflation, ang iba ay hindi — walang garantiya.",
	"bitcoin-vs-stocks::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Stocks</span>',
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::point_1_summary_1":
		"Ang Bitcoin ay isang bukas na network na maaaring sumali at gamitin ng kahit sino nang walang pahintulot. Ang Visa ay isang saradong sistema na kontrolado ng mga institusyong pinansyal na maaaring tanggihan ang access — lalo na sa mga unbanked at underbanked.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Ang mga Bitcoin transaction ay walang merchant fee. Ang Visa ay karaniwang naniningil ng mga merchant ng mga 3% bawat transaksyon — maaaring makatipid ang iyong negosyo sa pagtanggap ng",
	"bitcoin-vs-visa::point_2_summary_2": "mga bayad sa Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " sa halip.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Bawat Bitcoin transaction ay nasa pampublikong blockchain na maaaring i-audit. Ang Visa ay nagpapatakbo ng saradong, proprietary na sistema kung saan hindi maaaring i-verify nang independyente ng mga kustomer ang anuman.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Ang Bitcoin ay hindi maaaring i-freeze ng anumang sentral na awtoridad. Maaaring i-freeze ng Visa ang mga account, mag-block ng transaksyon, o tumanggi ng serbisyo anumang oras.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Ang Bitcoin ay final-settlement — maaari mo lamang gastusin ang pag-aari mo. Ang mga credit card ay lumilikha ng utang na may interest rate na madalas mahigit 25% kada taon.",
	"bitcoin-vs-visa::point_6_summary_1": "Pinapayagan ka ng Bitcoin na kumuha ng",
	"bitcoin-vs-visa::point_6_summary_2": "self-custody",
	"bitcoin-vs-visa::point_6_summary_3":
		"nang walang kailangang bangko o payment processor. Ang mga credit card ay laging nangangailangan ng mga tagapamagitan.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Ang Bitcoin ay tumatakbo 24/7 sa buong mundo nang walang oras ng negosyo. Ang Visa ay may oras ng operasyon, mga maintenance window, at heograpikal na mga restriksyon na maaaring mag-block ng transaksyon.",
	"bitcoin-vs-visa::hero_title":
		'Ang pagkakaiba ng <span class="orange">Bitcoin</span> at <span class="asset">Visa</span>',
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_dca": "Dollar-cost averaging",
	"buy::buy_platform_feature_mining": "Bitcoin mining",
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_platform_feature_regulated": "Regulated na exchange",
	"buy::buy_platform_feature_self_custody": "Self-custody na wallet",
	"buy::buy_platform_feature_support": "Suporta sa kustomer",
	"buy::buy_bitcoin_guide": "Paano bumili ng Bitcoin",
	"buy::buy_step_1_header": "Piliin ang iyong bansa",
	"buy::buy_step_2_header": "Piliin ang iyong paraan ng pagbabayad",
	"buy::buy_step_3_header": "Ang iyong mga opsyon sa pagbili",
	"buy::buy_step_4_header": "Ligtas na iimbak ang iyong Bitcoin",
	"buy::buy_header_subtitle":
		"Isang simpleng, hakbang-hakbang na gabay sa pagbili ng iyong unang Bitcoin.",
	"buy::buy_howto_name": "Paano bumili ng Bitcoin",
	"buy::buy_meta_description":
		"Alamin kung paano ligtas na bumili ng Bitcoin sa aming hakbang-hakbang na gabay. Piliin ang iyong bansa at paraan ng pagbabayad upang makita ang pinakamahusay na mga opsyon sa pagbili ng Bitcoin para sa iyo.",
	"buy::buy_step_1_eyebrow": "Hakbang 1",
	"buy::buy_step_2_eyebrow": "Hakbang 2",
	"buy::buy_step_3_eyebrow": "Hakbang 3",
	"buy::buy_step_4_eyebrow": "Hakbang 4",
	"buy::buy_storage_cta_label": "Susunod na hakbang",
	"buy::sources_bisq":
		"Bisq — Desentralisadong peer-to-peer na Bitcoin exchange",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Pandaigdigang directory ng Bitcoin ATM",
	"buy::sources_kraken": "Kraken — Itinatag na Bitcoin exchange",
	"buy::sources_relai":
		"Relai — Swiss na Bitcoin-only na self-custody na app",
	"buy::sources_river":
		"River — Bitcoin-only na pagbili, mining, at custody",
	"buy::sources_strike_lightning":
		"Strike — Bumili ng Bitcoin na may suporta sa Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin-only na dollar-cost averaging",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Magdagdag ng wika",
	"common::common_next_buy_bitcoin": "Bumili ng Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Alamin kung paano ligtas na bumili ng Bitcoin",
	"common::common_next_calculate": "Kalkulahin ang iyong inflation",
	"common::common_next_calculate_desc":
		"Tingnan kung paano nakakaapekto ang inflation sa iyong sahod sa paglipas ng panahon",
	"common::common_next_get_wallet": "Kumuha ng wallet",
	"common::common_next_get_wallet_desc":
		"Kunin ang iyong unang Bitcoin wallet — libre ito",
	"common::common_next_keep_learning": "Patuloy na matuto",
	"common::common_next_keep_learning_desc":
		"Tingnan kung paano pinapabuti ng Bitcoin ang mundo",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		'James Lavish — "Can a Treasury Auction Fail?"',
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Ano ang susunod?",
	"common::common_cold_wallet": "COLD WALLET",
	"common::common_hot_wallet": "HOT WALLET",
	"common::common_self_custody": "SELF-CUSTODY",
	"common::common_sticker_files_mission_3": "inflation",
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 in x 3 in)",
	"common::common_stickers_type_die_cut": "die-cut na sticker",
	"common::common_sticker_files_mission_5": "humiling ng pack",
	"common::common_site_tagline": "Edukasyon tungkol sa Bitcoin para sa lahat.",
	"common::common_source_btc_map":
		"BTC Map — Pandaigdigang directory ng mga merchant na tumatanggap ng Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — Libre, open-source, self-hosted na Bitcoin payment processor",
	"common::common_source_oshi":
		"Oshi — Platform ng mga rewards sa Bitcoin para sa mga merchant",
	"common::common_source_strike_business":
		"Strike — Mga bayad sa Bitcoin at Lightning para sa mga negosyo",
	"common::common_sources_group_bitcoin": "Datos ng Bitcoin",
	"common::common_sources_group_cpi": "Inflation / Consumer Price Index",
	"common::common_sources_group_debt": "Utang ng gobyerno",
	"common::common_sources_group_money": "Datos ng money supply",
	"common::common_sources_group_stories":
		"Mga halimbawa sa totoong mundo",
	"common::common_sticker_files_mission_6":
		"ng mga sticker na Ingles nang libre.",
	"common::common_sticker_files_next_flyers_label": "Mga flyer",
	"common::common_sticker_files_next_flyers_title":
		"Mag-print ng Bitcoin flyer",
	"common::common_sticker_files_next_languages_label":
		"Mga sticker file",
	"common::common_sticker_files_next_languages_title":
		"Tingnan ang mga sticker file sa iba pang wika",
	"common::common_sticker_files_print_these": "I-PRINT ITO SA 1 CLICK",
	"common::common_sticker_name_bdhi_black":
		'Sticker na "Bitcoin Doesn\'t Have Inflation" (Itim)',
	"common::common_sticker_name_bdhi_orange":
		'Sticker na "Bitcoin Doesn\'t Have Inflation" (Orange)',
	"common::common_sticker_name_caution":
		'Bitcoin Sticker na "Caution! Melting Ice Cube"',
	"common::common_sticker_name_cure_inflation":
		'Bitcoin Sticker na "Cure Inflation"',
	"common::common_sticker_name_danger":
		'Bitcoin Sticker na "Danger! Inflation Ahead"',
	"common::common_sticker_name_fix":
		'Bitcoin Sticker na "Fix The Money, Fix The World"',
	"common::common_sticker_name_got_inflation":
		'Bitcoin Sticker na "Got Inflation?"',
	"common::common_sticker_name_study": 'Sticker na "Study Bitcoin"',
	"common::common_sticker_name_warning":
		'Bitcoin Sticker na "Warning! Inflation is Stealing Your Savings"',
	"common::common_sticker_name_what_if":
		'Bitcoin Sticker na "What if your money didn\'t have inflation?"',
	"common::common_sticker_tips_heading": "Mga tip sa sticker",
	"common::common_sticker_tips_intro":
		"Sa sandaling na-print mo na ang iyong mga sticker, ilagay ito sa lugar kung saan ito makikita! Magagandang lugar para sa sticker ay:",
	"common::common_sticker_tips_list_1":
		"sa publiko kung saan makikita ito ng mga tao",
	"common::common_sticker_tips_list_2":
		"sa mga lugar na malabong agad maalis (ang mga sticker ay hindi nagdudulot ng anumang permanenteng pinsala)",
	"common::common_sticker_tips_list_3":
		"sa mga ibabaw kung saan madali itong dumikit (metal, plastic, salamin)",
	"common::common_sticker_tips_list_4":
		"HINDI sa pribadong ari-arian, na nagtatakip sa mga signage, ATM, o gas pump",
	"common::common_stickers_printer_prefix": "Ginagamit namin ang",
	"common::common_stickers_printer_suffix":
		"pero maaari kang gumamit ng anumang sticker company.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Consumer Price Index para sa Lahat ng Urban Consumer",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 Money Supply",
	"compound-inflation-calculator::cic_header":
		"Compound Inflation Calculator",
	"compound-inflation-calculator::cic_calculator_heading":
		"Kalkulahin ang iyong inflation gap",
	"compound-inflation-calculator::cic_cta_label": "Susunod na hakbang",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Tingnan kung gaano kalaki ang kailangang itaas ng iyong sahod upang makasabay sa inflation.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Mag-explore ng mas maraming paksa",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Tingnan kung paano kumokonekta ang Bitcoin sa pera, kalayaan, enerhiya, at iba pa.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Alamin kung paano gumagana ang inflation",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Paano i-print at i-post ang mga Bitcoin flyer na ito",
	"flyers::flyers_hero_subtitle":
		"Mga libre, printable na Bitcoin flyer. Ipaskil ito sa publiko upang matulungan ang mas maraming tao na matuto tungkol sa Bitcoin.",
	"flyers::flyers_hero_title":
		"Mag-print at mag-post ng mga Bitcoin flyer",
	"flyers::flyers_next_get_stickers": "Ipalaganap ang salita",
	"flyers::flyers_next_get_stickers_desc":
		"Mag-order ng libreng pack ng mga Bitcoin sticker",
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
		const [ns, key] = id.split("::");
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
		`translate-rest-part1 (tl): filled ${filled}, already-done ${skipped}`,
	);
	if (unknown.length) {
		console.log(
			`\nWarning: ${unknown.length} translation(s) in part1 don't match any report entry:`,
		);
		for (const id of unknown) console.log("  -", id);
	}
}

main();
