#!/usr/bin/env node
/**
 * Irish (Gaeilge) manifest refresh — part 1 of non-inflation namespaces.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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
	"ga.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Fill ar an mbaile",
	"404::404_message":
		"Tá Bitcoin iontach, ach níl an leathanach briste seo.",
	"404::404_not_found_short": "Níor aimsíodh",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Cuirimid acmhainní saor in aisce ar fáil a fhágann go bhfuil sé éasca do ghnólachtaí áitiúla Bitcoin a ghlacadh. Míníonn ár leathanach Bitcoin do ghnólachtaí cén fáth go bhfuil Bitcoin go maith don ghnó, conas sparán agus próiseálaí íocaíochta a roghnú, agus cuireann sé greamáin saor in aisce “Bitcoin Accepted Here” ar fáil.",
	"about::about_card_business_label": "Acmhainní gnó",
	"about::about_card_business_source": "Foinse: bitcoin.rocks →",
	"about::about_card_business_title":
		"Gach rud a theastaíonn ó ghnólacht chun tosú ag glacadh íocaíochtaí Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Foinse: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Cuir leis",
	"about::about_card_contribute_source": "Foinse: GitHub →",
	"about::about_card_contribute_title":
		"Foghlaim conas cur le tionscadal bitcoin.rocks",
	"about::about_card_email_label": "Ríomhphost",
	"about::about_card_email_source": "Foinse: ríomhphost →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Bileoga inphriontáilte",
	"about::about_card_flyers_source": "Foinse: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Íoslódáil agus priontáil bileoga Bitcoin do do phobal",
	"about::about_card_github_label": "Stóras",
	"about::about_card_github_source": "Foinse: GitHub →",
	"about::about_card_github_title": "Féach ar bitcoin.rocks ar GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Foinse: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Greamáin saor in aisce",
	"about::about_card_stickers_source": "Foinse: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Faigh greamáin Bitcoin saor in aisce seolta chuig do dhoras",
	"about::about_editorial_2":
		"Luaimid foinsí iontaofa ar nós an Chúlchiste Chónaidhme (FRED), Biúró Staitisticí Saothair na SAM, an FDIC, na NA, an World Gold Council, Forbes, MIT Technology Review, Lyn Alden agus James Lavish. Creidimid nuair a chuirtear na fíricí i láthair go soiléir, labhraíonn Bitcoin ar a shon féin.",
	"about::about_flyers_blurb":
		"Dearaimid bileoga inphriontáilte gur féidir leat a roinnt ag cruinnithe, a chur ar chláir fógraí nó a chur isteach i mboscaí litreacha — bealach simplí chun fiosracht a spreagadh agus daoine a sheoladh chuig bitcoin.rocks, áit ar féidir leo tuilleadh a fhoghlaim.",
	"about::about_header": "Maidir le bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Bhunaigh an t-úsáideoir bitcoin.rocks",
	"about::about_mission_1b":
		"sa bhliain 2022 agus misean simplí aige: glacadh Bitcoin a dhrechur tríd an oideachas.",
	"about::about_open_source_2":
		"Tionscadal saor in aisce, foinse oscailte é bitcoin.rocks faoi cheadúnas MIT. Is féidir le duine ar bith cur leis. Cuirimid fáilte ar leith roimh aistritheoirí, a chuidíonn linn ár n-ábhar a chur ar fáil do dhaoine ar fud an domhain.",
	"about::about_open_source_header": "Foinse oscailte",
	"about::about_page_description":
		"Is suíomh gréasáin oideachais, saor in aisce, foinse oscailte é bitcoin.rocks faoi Bitcoin, a bunaíodh in 2022. Is é ár misean glacadh Bitcoin a dhreasú tríd an oideachas.",
	"about::about_stickers_blurb":
		"Seolaimid greamáin Bitcoin saor in aisce díreach chuig do dhoras, ionas go gcabhróidh tú le Bitcoin a leathadh i do phobal. Gach mí, scanann na céadta daoine na QR-chóid ar na greamáin seo chun tuilleadh a fhoghlaim faoi Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Níl rith bainc ag Bitcoin",
	"bank-runs::bank_runs_bitcoin_p1":
		"Is córas lán-chúltaca é Bitcoin. Ní chuireann tú d’airgead i mbanc. Is banc tú féin. Ní chuirtear d’airgead ar iasacht gan fhios duit, mar is tusa an t-aon duine a bhfuil rochtain aige air.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Chomh fada agus a choinníonn tú do bitcoin i do sparán féin — ní ar mhalartán ná in ETF — tá rití bainc dodhéanta.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Le Bitcoin, tá fíor-smacht agat ar do chuid airgid.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Ón 26 Márta 2020, ní gá do bhainc SAM aon cúltaca éigeantach a choinneáil.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Cóimheas cúltaca bainc",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Foinse: Cúlchiste Cónaidhme →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Córas lán-chúltaca — ní gá árachas taisce.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Clúdach Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Foinse: páipéar bán Bitcoin →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Tá gach bitcoin ann ar an mblocshlabhra — ní chuirtear rud ar bith ar iasacht.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Cóimheas cúltaca Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Foinse: páipéar bán Bitcoin →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Ciste árachais $153.9 billiún in aghaidh $10.82 trilliún i dtaiscí árachaithe (Nollaig 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Clúdach FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Foinse: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Cás-staidéar",
	"bank-runs::bank_runs_card_svb_source":
		"Foinse: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Féach conas a tharla rith bainc Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "An chéad chéim eile",
	"bank-runs::bank_runs_card_wallet_source": "Tosaigh anseo →",
	"bank-runs::bank_runs_card_wallet_title":
		"Foghlaim conas do sparán Bitcoin féin a fháil",
	"bank-runs::bank_runs_fdic_heading":
		"Clúdaíonn árachas FDIC thart ar 1% de na taiscí",
	"bank-runs::bank_runs_fdic_p1":
		"Cosnaíonn árachas FDIC taiscí suas le $250,000 in aghaidh an tais­ceora. Ach tá an ciste árachais bídeach i gcomparáid leis na taiscí iomlána atá sé beartaithe a chosaint.",
	"bank-runs::bank_runs_fdic_p2_a":
		"I dtitim leathan bainc, is dócha go gclófadh an rialtas airgead chun an bhearna a líonadh — ag cruthú tuilleadh ",
	"bank-runs::bank_runs_fdic_p2_link": "boilscithe.",
	"bank-runs::bank_runs_header":
		"Níl rith bainc ag Bitcoin, ach is féidir le do bhanc é a bheith.",
	"bank-runs::bank_runs_page_description":
		"Tugann bainc d’airgead ar iasacht trí chóras cúltaca codánaigh. Má tharraingíonn an iomarca daoine ag an am céanna, is féidir le bainc titim. Is córas lán-chúltaca é Bitcoin — tá rití bainc dodhéanta.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: sampla fíor-shaoil",
	"bank-runs::bank_runs_svb_p1_a":
		"I Márta 2023, thit Silicon Valley Bank tar éis gur infheistigh sé taiscí custaiméirí i ",
	"bank-runs::bank_runs_svb_p1_b":
		"Nuair a chaill na bannaí sin luach, ní raibh SVB in ann tarraingtí a chlúdach. D’éirigh an banc dócmhainneach.",
	"bank-runs::bank_runs_svb_p1_link":
		"bannaí rialtais fadtéarmacha.",
	"bank-runs::bank_runs_svb_p2":
		"Ní raibh na mílte gnólacht in ann a gcuid fostaithe a íoc. Tháinig an FDIC isteach — ach tháinig ceist níos leithne chun tosaigh: an bhfuil d’airgead sábháilte i ndáiríre?",
	"bank-runs::bank_runs_what_p1":
		"Ní choinníonn bainc do thaiscí i gcaipín sábháilteachta. Tugann siad ar iasacht agus infheistíonn siad d’airgead — is é sin an córas cúltaca codánaigh.",
	"bank-runs::bank_runs_what_p2":
		"Má dhéanann an iomarca daoine iarracht tarraingt ag an am céanna, níl dóthain airgid thirim ag an mbanc chun gach duine a íoc. Is rith bainc é sin — agus is féidir leis sin an banc a scriosadh go hiomlán.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Bainc</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Is féidir le duine ar bith a bhfuil ceangal idirlín aige Bitcoin a úsáid — tá sé ",
	"bitcoin-vs-banks::point_1_summary_2": "gan chead.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Is féidir le bainc cuntais a dhiúltú, a reo nó a dhúnadh de réir a rialacha féin nó de réir rialacháin.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Oibríonn líonra Bitcoin 24 uair sa ló, 7 lá sa tseachtain, 365 lá sa bhliain gan fuinneoga cothabhála ná laethanta saoire. Tá uaireanta teoranta ag bainc, dúnann siad ag an deireadh seachtaine agus bíonn teipeanna oibríochta orthu.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Cláraítear gach idirbheart Bitcoin ar bhlocshlabhra poiblí ar féidir le duine ar bith a fhíorú. Coinníonn bainc leabhair chuntas phríobháideacha nach féidir le custaiméirí a iniúchadh go neamhspleách.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Le Bitcoin, coinníonn tú do chuid eochracha príobháideacha féin — féach ar ár dtreoir shimplí ar ",
	"bitcoin-vs-banks::point_4_summary_2": "sparáin Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Coinníonn bainc coimeádaíocht ar d’airgead agus is féidir leo é a reo, a shrianadh nó a bhac aon uair.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Tá táillí Bitcoin trédhearcach agus intuartha. Cruinníonn bainc táillí folaithe de réir a chéile le haghaidh cuntais, rótharraingtí, aistrithe agus ATManna.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Ligeann Bitcoin duit an méid a bhfuil agat a chaitheamh amháin. Ceadaíonn bainc rótharraingtí agus gearrann siad sraith táillí pionóis ort ansin.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Nuair a sheoltar idirbheart Bitcoin, ní féidir é a stopadh ná a chealú. Is féidir le bainc idirbhearta a bhlocáil, a reo nó a chealú de réir a rialacha nó ar ordú an rialtais.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Bannaí</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Níl bannaí “gan phriacal” ach amháin in ainm — creimeann boilsciú, athruithe ráta úis agus priacal mainneachtana fíor-thorthaí.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Tá luaineacht thrédhearcach ag Bitcoin, ach níl aon phriacal contrapháirtí i bhfolach.",
	"bitcoin-vs-bonds::point_2_summary_1": "Nuair a sháraíonn an ",
	"bitcoin-vs-bonds::point_2_summary_2": "boilsciú",
	"bitcoin-vs-bonds::point_2_summary_3":
		" torthaí bannaí, cailleann sealbhóirí bannaí cumhacht ceannaigh fhíor gach bliain. Ní féidir an t-uasteorainn 21 milliún de Bitcoin a thanú le boilsciú.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Is féidir le margaí bannaí reo le linn géarchéime — thit Silicon Valley Bank go páirteach toisc go raibh bannaí aige a chaill luach. Féach conas a tharlaíonn ",
	"bitcoin-vs-bonds::point_3_summary_2": "rití bainc",
	"bitcoin-vs-bonds::point_3_summary_3":
		" agus cén fáth go seachnaíonn Bitcoin iad. Trádáiltear Bitcoin 24 uair sa ló ar fud an domhain gan aon ghéarchéim leachtachta.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Is féidir ceantálacha banna rialtais teip nuair nach bhfuil dóthain ceannaitheoirí ann — féach ar an ",
	"bitcoin-vs-bonds::point_4_summary_2": "gceantáil lag in 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Aimsítear praghas Bitcoin go leanúnach ar mhargaí oscailte, gan aon cheantáil láraithe ar féidir léi teip.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Socraítear torthaí bannaí tráth an cheannaigh. Fiú má fhásann an geilleagar nó má thiteann an t-airgead reatha, fanann do thoradh mar an gcéanna.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Tá spás suntasach fáis ag Bitcoin agus glacadh ag leathadh agus éileamh ag bualadh le soláthar seasta.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Coimeádtar formhór na mbannaí trí bhainc nó bróicéirí, rud a chuireann priacal contrapháirtí leis. Is féidir Bitcoin a choimeád agat féin le ",
	"bitcoin-vs-bonds::point_6_summary_2": "sparán",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — ag bailiú an phriacail sin ar fad.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Braitheann bannaí go hiomlán ar rialtais ag aisíoc a gcuid fiach. Má mhainneann rialtas nó má laghdaíonn sé a fhiachas trí bhoilsciú, caillfidh sealbhóirí bannaí.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Oibríonn Bitcoin go neamhspleách ar rialtas nó údarás polaitíochta ar bith.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Airgead tirim</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Taistealaíonn Bitcoin áit ar bith ar domhan tríd an idirlíon, i gceann nóiméad. Éilíonn airgead tirim láithreacht fhisiciúil nó teachtairí iontaofa — ní féidir leat nóta fiche a sheoladh trí ríomhphost.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Oibríonn Bitcoin mar an gcéanna i ngach áit. Tá airgead tirim teoranta ag tíreolaíocht, rátaí malairte agus glacadh áitiúil.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Is féidir le rialtais airgead tirim a neamhbhailigh thar oíche — rinne an <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> é sin in 2016. Ach fiú gan dí-airgeadú, cailleann airgead tirim luach mar gheall ar ",
	"bitcoin-vs-cash::point_3_summary_2": "bhoilsciú.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Ní féidir le haon rialtas nó údarás Bitcoin a neamhbhailigh.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Is féidir airgead tirim a bhrionnú, uaireanta go hinchreidte. Úsáideann Bitcoin cripteagrafaíocht a fhágann brionnú mar rud dodhéanta ó thaobh na matamaitice de.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Níl aon údarás lárnach ag Bitcoin. Eisíonn rialtais airgead tirim ar féidir leo tuilleadh a chlóbhualadh, dearaí a athrú nó nótaí a tharraingt siar de réir mar is mian leo.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Tá airgead tirim i mbaol goid, dóiteáin, caillteanais agus coigistíochta. Is féidir Bitcoin a ",
	"bitcoin-vs-cash::point_6_summary_2":
		"chóimheá agat féin go sábháilte",
	"bitcoin-vs-cash::point_6_summary_3":
		" ar do ghuthán nó ar ghléas crua-earraí.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Tá Bitcoin inroinnte go 100 milliún satoshi, rud a cheadaíonn micreamhéidíocachtaí ar aon mhéid. Tá íosluachanna ag airgead tirim — ní féidir leat pingin a roinnt.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Airgeadraí Digiteacha Banc Ceannais (CBDCanna)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Ní féidir le duine ar bith stop a chur leat ó bheith ag idirbheartú in Bitcoin. Tá CBDCanna deartha ionas go mbeidh smacht ag rialtais agus bainc cheannais ar gach íocaíocht, ag cur teorann le do phríobháideachas agus do shaoirse.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Ní éagaíonn Bitcoin choíche agus níl táillí míosúla aige. Is féidir CBDCanna a ríomhchlárú chun éag, ag díspreagadh coigilte don todhchaí.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Tá uasteorainn sheasta 21 milliún BTC ag Bitcoin. Níl teorainn soláthair ar bith ag CBDCanna agus ligeann siad do rialtais an soláthar airgid a mhéadú de réir mar is mian leo — rud a chruthaíonn ",
	"bitcoin-vs-cbdc::point_3_summary_2": "boilsciú.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Níl seoltaí Bitcoin nasctha le d’fhíor-aitheantas. Tá CBDCanna nasctha go díreach le haitheantas rialtais, rud a cheadaíonn faireachas ollmhór agus cinsireacht airgeadais.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Fíoraítear rialacha Bitcoin ag na mílte nód neamhspleách. Tá CBDCanna láraithe i lámha rialtas agus banc ceannais a bhfuil smacht iomlán acu ar an líonra.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Is féidir le duine ar bith nód Bitcoin a rith agus rialacha an líonra a fhíorú. Ní cheadaíonn CBDCanna d’úsáideoirí nóid a rith — caithfidh tú muinín a chur in údarás lárnach.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Ní féidir le duine ar bith Bitcoin féin-choimeádaithe a reo. Tá CBDCanna deartha ionas gur féidir le rialtais agus bainc cheannais cuntais a reo láithreach.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Tugann Bitcoin smacht iomlán duit ar do chuid airgid nuair a choinníonn tú é i ",
	"bitcoin-vs-cbdc::point_8_summary_2": "sparán.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Éilíonn CBDCanna muinín i gcoimeádaithe mar bhainc nó rialtais a choinníonn an t-airgead duit.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Tá beartas airgeadaíochta Bitcoin socraithe sa chód agus ní féidir é a athrú. Is féidir CBDCanna a athchlárú de réir mar is mian le hoifigigh pholaitiúla, rud a chruthaíonn ",
	"bitcoin-vs-cbdc::point_9_summary_2": "boilsciú",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", nuair a chlóbhuailtear an iomarca airgid.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Is é Bitcoin an líonra ríomhaireachta is sláine a tógadh riamh agus níor briseadh isteach air riamh. Braitheann CBDCanna ar bhainc agus rialtais a briseadh isteach orthu go minic.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Cripteabhair</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Is beag athrú atá tagtha ar phrótacal Bitcoin ó 2009 agus tairgeann sé rialacha intuartha. Athraíonn formhór na dtionscadal cripteabhair prótacal, tokenomics nó foirceann i leaganacha nua go leanúnach.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Ritheann Bitcoin ar na mílte nód neamhspleách ar fud an domhain. Tá formhór na dtionscadal cripteabhair á rialú ag fondúireachtaí, comhlachtaí nó grúpaí beaga forbróirí ar féidir leo athruithe aontaobhacha a dhéanamh.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Tá uasteorainn sheasta 21 milliún bonn ag Bitcoin — an tsócmhainn dhigiteach is annamh. Tá soláthar gan teorainn nó meicníochtaí chun tokens nua a chruthú go treallach ag formhór na dtionscadal cripteabhair, rud a thanaíonn sealbhóirí.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Tá aon chuspóir amháin ag Bitcoin: airgead digiteach piara-le-piara. Is féidir le gach duine é a thuiscint agus a úsáid. Áirítear le formhór na gcripteabhair conarthaí cliste nó DeFi casta a éilíonn scileanna teicniúla chun iad a úsáid go sábháilte.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Oibríonn Proof of Work Bitcoin gan aon ionsaí rathúil ar an bpríomh-shlabhra le breis is 15 bliain. Úsáideann formhór na dtionscadal cripteabhair meicníochtaí comhthola turgnamhacha nach ndearnadh tástáil dhomhain orthu.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Is airgead digiteach é Bitcoin — stór luacha agus modh malartán. Is tokens amhantraíochta úsáide nó rialachais iad formhór na dtokens cripteabhair nach bhfuil fíor-luach soiléir acu.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Neartaíonn Bitcoin faoi ionsaithe agus tháinig sé slán ó gach géarchéim, cosc agus cáineadh. Titeann formhór na dtionscadal cripteabhair faoi bhrú rialála, teicniúla nó margaidh.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Níl POF, comhlacht ná pointe teipe amháin ag Bitcoin. Braitheann formhór na dtionscadal cripteabhair ar infheisteoirí caipitil fiontair, ar cheannaireacht ar leith nó ar mharthanas comhlachta aonair.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Mínealaín</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Tá gach bitcoin mar an gcéanna agus inmhalartaithe. Tá gach saothar ealaíne uathúil — fágann proibhinc, stair, riocht agus líneáil éagsúla comparáid dhíreach thar a bheith deacair.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Trádáiltear Bitcoin 24 uair sa ló ar mhargadh domhanda atá ar fáil do gach duine. Éilíonn mínealaín tithe ceant speisialaithe, déileálaithe príobháideacha nó gailearaithe, agus is féidir le díolacháin míonna a thógáil.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Cosnaíonn sé níos lú ná 1% i dtáillí Bitcoin a cheannach nó a dhíol, go minic i bhfad níos lú. Cruinníonn díolacháin ealaíne 30-40% i gcoimisiúin cheannaitheora, táillí, árachas, iompar agus táillí fíordheimhnithe.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Tá Bitcoin inroinnte go 100 milliún satoshi, rud a fhágann go bhfuil sé idéalach d’idirbhearta ar aon mhéid. Ní féidir leat cuid de phéintéireacht ná cúinne dealbha a shealbhú gan priacal contrapháirtí.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Is féidir úinéireacht agus barántúlacht Bitcoin a fhíorú go cripteagrafach ag aon duine ar an mblocshlabhra. Tá fíordheimhniú saothar costasach, am-thógtha, agus cuirtear meabhla ar bhrionnóirí go minic — ag scriosadh luach saothair thar oíche.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Maireann Bitcoin a bhfuil cúltaca ceart déanta air tuilte, tinte, creathanna talún agus gadaíochtaí. Tá mínealaín i mbaol ag gach cineál tubaistí fisiciúla, agus is annamh a chlúdaíonn árachas gach rud.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Is féidir le duine ar bith a bhfuil ceangal idirlín agus beagán airgid aige Bitcoin a cheannach. Is do bhailitheoirí saibhre a bhfuil rochtain acu ar cheantanna agus saineolas sainiúil go príomha an infheistíocht ealaíne go praiticiúil.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Ór</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Is féidir Bitcoin a sheoladh láithreach tríd an idirlíon le táillí ísle. Caithfear ór a chur chun bealaigh go fisiciúil chun úinéireacht a aistriú.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Is sócmhainn dhigiteach dhúchasach é Bitcoin ar féidir leat é a aistriú tríd an idirlíon. Is IOU digiteach é ór ar líne — ní shealbhaíonn tú ach gealltanas ó choimeádaí, ní an miotal féin.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Tá uasteorainn sheasta 21 milliún BTC ag Bitcoin. Fásann soláthar óir thart ar <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% in aghaidh na bliana</a>, ag laghdú do sciar — níos lú ná ",
	"bitcoin-vs-gold::point_3_summary_2": "boilsciú",
	"bitcoin-vs-gold::point_3_summary_3":
		" airgeadra fiat, ach is boilsciú é fós.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Nuair a ardaíonn praghsanna óir, baintear níos mó óir, rud a ísleoidh an praghas arís. Tá soláthar Bitcoin neamh-leaisteach — is cuma cé chomh hard a ardaíonn an praghas, ní bheidh ach 21 milliún ann choíche.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Fíoraítear líonra Bitcoin ag na mílte nód neamhspleách. Tá an chuid is mó den ór fisiciúil i gcúpla príomh-chaibinéid.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Is féidir le duine ar bith barántúlacht Bitcoin a fhíorú trí nód iomlán a rith — níl ann ach aip. Éilíonn fíorú óir fhisiciúil é a leá; d’fhéadfadh sé tungstain a bheith istigh.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Tá Bitcoin inroinnte go 100 milliún satoshi, rud a fhágann go bhfuil sé idéalach le haghaidh ceannachán ar aon mhéid. Ní féidir ór a roinnt go héasca le haghaidh idirbheart níos lú.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Maoin Réadach</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bogann Bitcoin láithreach ar fud an domhain. Tá maoin réadach ceangailte le háit agus i mbaol priacail eacnamaíocha, pholaitiúla agus comhshaoil áitiúla.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Tá Bitcoin inroinnte go 100 milliún satoshi. Ní féidir maoin réadach a dhíol go páirteach — ní féidir leat cistin a dhíol ná leath-sheomra leapa a cheannach.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Oibríonn Bitcoin ar líonra díláraithe nach féidir le haon rialtas a rialú. Tá maoin réadach rialaithe go trom — baineann crioslú, smacht cíosa, ceannach éigeantach agus urghabháil léi go léir.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Ní iarrann Bitcoin cothabháil ar bith. Éilíonn maoin réadach deisiúcháin, athchóiriú, árachas, bainistíocht tionóntaí agus láimhseáil fadhbanna tionóntaí.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Níl cánacha leanúnacha ar Bitcoin — ní íocann tú ach cánacha gnóthachain chaipitil ar dhíol. Íocann maoin réadach cánacha maoine bliantúla beag beann ar ioncam.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Maireann Bitcoin a bhfuil cúltaca ceart déanta air tinte, tuilte agus creathanna talún. Tá maoin réadach i mbaol ag gach tubaiste, agus is annamh a chlúdaíonn árachas gach rud.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Tá gach bitcoin mar an gcéanna agus inmhalartaithe. Tá gach maoin réadach uathúil, rud a fhágann go bhfuil sé deacair í a luacháil agus a chomparáid.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Trádáiltear Bitcoin go domhanda 24 uair sa ló do dhuine ar bith a bhfuil idirlíon aige. Tá díolacháin maoine réadaí teoranta do cheannaitheoirí áitiúla agus is féidir leo míonna a thógáil le críochnú lena gcuid páipéarachais.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Ligeann Bitcoin úinéireacht dhíreach aonair do dhuine ar bith. Má cheannaítear maoin réadach mar infheistíocht níos faide ná an phríomhcheannáras, ardaíonn sé praghsanna tithíochta, laghdaíonn sé infhaighteacht agus cruthaíonn sé géarchéim tithíochta.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Scaireanna</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Is sócmhainn dhíreach é Bitcoin gur leatsa go hiomlán é. Is sciartha de chomhlacht iad scaireanna — braitheann a luach ar bhainistíocht, ar fheidhmíocht agus ar chinntí nach bhfuil smacht agat orthu.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Tá uasteorainn sheasta 21 milliún BTC ag Bitcoin. Is féidir le comhlachtaí scaireanna nua a eisiúint aon uair agus scairshealbhóirí atá ann cheana a thanú — díreach mar a thanaíonn ",
	"bitcoin-vs-stocks::point_2_summary_2": "boilsciú",
	"bitcoin-vs-stocks::point_2_summary_3":
		" fiat airgead tirim. Le Bitcoin, ní laghdaíonn do sciar choíche.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Níl POF ná pointe teipe amháin ag Bitcoin. Braitheann scaireanna go mór ar bhainistíocht — is féidir le drochchinneadh nó imeacht duine tábhachtach an praghas a thitim.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Tagann praghas Bitcoin ó mhargaí oscailte domhanda. Braitheann luacháil scaireanna ar chóimheasa ar nós P/E ar féidir leo scaireanna rótharchéimnitheacha a cheilt.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Trádáiltear Bitcoin 24 uair sa ló ar fud an domhain. Níl margaí scaireanna ar oscailt ach ar laethanta seachtaine le linn uaireanta trádála.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Le Bitcoin, is féidir leat bogadh chuig ",
	"bitcoin-vs-stocks::point_6_summary_2": "féin-choimeád",
	"bitcoin-vs-stocks::point_6_summary_3":
		" le haip shimplí — gan gá le bróicéir. Coimeádann bróicéirí scaireanna, rud a chuireann priacal contrapháirtí ort má thiteann siad.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Fágann soláthar seasta Bitcoin ina fhál iontaofa i gcoinne boilscithe. Buaileann roinnt scaireanna boilsciú, ní bhuaileann cinn eile — níl rud ar bith ráthaithe.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"An difríocht idir <span class=\"orange\">Bitcoin</span> agus <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Is líonra oscailte é Bitcoin ar féidir le duine ar bith páirt a ghlacadh ann gan chead. Is córas dúnta é Visa atá á rialú ag institiúidí airgeadais ar féidir leo rochtain a dhiúltú — go háirithe do dhaoine nach bhfuil banc acu nó nach bhfuil banc ceart acu.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Níl táillí ceannaí ar idirbhearta Bitcoin. Gearrann Visa thart ar 3% in aghaidh an idirbhirt ar cheannaithe go ginearálta — is féidir le do ghnó airgead a shábháil trí ",
	"bitcoin-vs-visa::point_2_summary_2": "íocaíochtaí Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " a ghlacadh.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Cláraítear gach idirbheart Bitcoin ar bhlocshlabhra poiblí agus infhíoraithe. Oibríonn Visa córas dúnta agus dílseánach nach féidir le custaiméirí rud ar bith a fhíorú go neamhspleách.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Ní féidir le haon údarás lárnach Bitcoin a reo. Is féidir le Visa cuntais a reo, idirbhearta a bhlocáil nó seirbhís a dhiúltú aon uair.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Is socrú críochnaitheach é Bitcoin — ní chaitheann tú ach an méid a bhfuil agat. Cruthaíonn cártaí creidmheasa fiachas le rátaí úis a sháraíonn 25% in aghaidh na bliana go minic.",
	"bitcoin-vs-visa::point_6_summary_1":
		"Ligeann Bitcoin duit bogadh chuig ",
	"bitcoin-vs-visa::point_6_summary_2": "féin-choimeád",
	"bitcoin-vs-visa::point_6_summary_3":
		" gan bhanc ná soláthraí íocaíochta. Éilíonn cártaí creidmheasa idirghabhálaithe i gcónaí.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Oibríonn Bitcoin 24/7 go domhanda, gan uaireanta oibre. Tá uaireanta oibre, fuinneoga cothabhála agus srianta tíreolaíocha ag Visa ar féidir leo idirbhearta a bhlocáil.",
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
		`translate-rest-part1 (ga): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
