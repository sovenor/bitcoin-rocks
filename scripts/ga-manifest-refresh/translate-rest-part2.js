#!/usr/bin/env node
/**
 * Irish (Gaeilge) manifest refresh — part 2 of non-inflation namespaces.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/index,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Seirbhísí cuntasaíochta Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"Treoir shimplí chun íocaíochtaí Bitcoin a chuntasú — sparáin hibrideacha, bunphraghas, gnóthachain chaipitil agus cathain is ceart dul chuig do chuntasóir.",
	"business/accounting::accounting_s1_c1":
		"Is é an bealach is simplí chun Bitcoin a ghlacadh ná sparán hibrideach a úsáid a athraíonn 100% de na bitcoin a fhaightear go huathoibríoch go dollair (nó d’airgead reatha áitiúil) a luaithe a thagann an íocaíocht.",
	"business/accounting::accounting_s1_c2":
		"Leis an socrú seo, tá do chuntasaíocht díreach mar an gcéanna agus atá sé inniu — is i ndollair a bheidh an méid deiridh gach uair. Gan bunphraghas, gan ghnóthachain chaipitil, gan scarbhileog nua.",
	"business/accounting::accounting_s2":
		"Má choinníonn tú Bitcoin: lean do bhunphraghas",
	"business/accounting::accounting_s2_c1":
		"Roghnaíonn roinnt gnólachtaí cuid den Bitcoin a fhaigheann siad a choinneáil seachas é a athrú go huathoibríoch. Má tá tú i mbun an chleachtais seo, is é an chéim bhreise ná an bunphraghas a leanúint — luach i ndollair gach íocaíochta Bitcoin an lá a fuarthas é.",
	"business/accounting::accounting_s2_c2":
		"Fiú má smaoiníonn tú ar do ghnó i mBitcoin amháin, teastaíonn ó fhormhór na n-údarás cánach fós go ndéanfaidh tú tuairisciú ar an luach i ndollair. Dea-scéala: níl ann ach dhá uimhir in aghaidh an idirbhirt — an méid Bitcoin a fuarthas agus a luach i ndollair an lá sin.",
	"business/accounting::accounting_s2_c3":
		"Úsáid na huirlisí thíos chun cuardaigh a uathoibriú, ionas nach gá duit praghsanna a sheiceáil gach lá.",
	"business/accounting::accounting_s3":
		"Bitcoin a coinníodh a chaitheamh nó a dhíol",
	"business/accounting::accounting_s3_c1":
		"Má athraíonn tú gach íocaíocht go huathoibríoch go dollair, scipeáil an rannán seo — ní bhaineann sé leat.",
	"business/accounting::accounting_s3_c2":
		"Má choinnigh tú Bitcoin agus ansin má chinneann tú é a chaitheamh nó a dhíol, cuir an praghas díola leis an scarbhileog chéanna leis an mbunphraghas. Is é an difríocht idir costas an Bitcoin nuair a fuair tú é agus a chostas nuair a chaitheann nó a dhíolann tú é gnóthachan nó caillteanas caipitil.",
	"business/accounting::accounting_s3_c3": "Dhá shampla ghasta:",
	"business/accounting::accounting_s4":
		"Ag teastáil saineolaí a thuigeann Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Más fearr leat gur duine eile a dhéanfadh é — nó má tá do chuntasaíocht Bitcoin níos casta ná mar is féidir le sparán hibrideach a láimhseáil — molaimid Satoshi Pacioli Accounting Services go mór, cuideachta a dhéanann cuntasaíocht Bitcoin ar ghnólachtaí.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Cuntasaíocht Bitcoin do do ghnó",
	"business/accounting::accounting_card_bpr_label": "PRAGHAS BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Cuardaigh praghsanna reatha nó stairiúla Bitcoin i ndollair",
	"business/accounting::accounting_card_pacioli_label":
		"CUNTASÓIR BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"IOMPÓRTÁIL GO EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Iompórtáil praghsanna Bitcoin go uathoibríoch isteach in Excel",
	"business/accounting::accounting_card_wallets_label":
		"SPARÁIN HIBRIDEACHA",
	"business/accounting::accounting_card_wallets_title":
		"Féach ar na sparáin atá molta againn do ghnólachtaí",
	"business/accounting::accounting_disclaimer":
		"Cuirtear an treoir seo ar fáil chun críocha eolais amháin agus ní comhairle chánach í. Le haghaidh comhairle chánach a oireann do do chás, déan teagmháil le cuntasóir cáilithe.",
	"business/accounting::accounting_disclaimer_label": "Tabhair faoi deara",
	"business/accounting::accounting_example_feb_1": "1 Feabhra",
	"business/accounting::accounting_example_gain_badge": "Gnóthachan",
	"business/accounting::accounting_example_gain_explain":
		"Taifeadann tú gnóthachan caipitil de $10.",
	"business/accounting::accounting_example_jan_1": "1 Eanáir",
	"business/accounting::accounting_example_loss_badge": "Caillteanas",
	"business/accounting::accounting_example_loss_explain":
		"Taifeadann tú caillteanas caipitil de $10.",
	"business/accounting::accounting_example_received_label": "Faighte",
	"business/accounting::accounting_example_sold_label":
		"Díolta nó caite",
	"business/accounting::accounting_hero_subtitle":
		"Ní chaithfidh glacadh le Bitcoin i do ghnó do chuntasaíocht a chur trí chéile. Seo an leagan gairid — móide uirlisí agus saineolaithe a fhágfaidh gan pian é.",
	"business/accounting::accounting_intro_c1":
		"Má ghlacann tú le hairgead tirim nó le cártaí cheana féin, is simplí ná mar a cheapann tú é Bitcoin a chur le cuntasaíocht do ghnó. Tá dhá chonair agat: gach íocaíocht Bitcoin a athrú go huathoibríoch go dollair a luaithe a thagann sí (gan chuntasaíocht nua), nó cuid de a choinneáil i mBitcoin (ní mór roinnt uimhreacha breise a leanúint).",
	"business/accounting::accounting_intro_c2":
		"Déanann an treoir seo athbhreithniú ar an dá chonair — ionas go roghnóidh tú an ceann a oireann do do ghnó agus go dtosóidh tú ag glacadh le Bitcoin go muiníneach.",
	"business/accounting::accounting_s1":
		"An chonair éasca: athraigh go uathoibríoch go dollair",
	"business/accounting::accounting_s3_c6":
		"Sin é. Tá na ríomhanna bunúsacha mar an gcéanna le haon sócmhainn eile a théann suas nó síos.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — praghas reatha agus stairiúil Bitcoin i ndollair",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — cuntasaíocht Bitcoin do ghnólachtaí",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — praghsanna cripteabhair a iompórtáil isteach in Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Freagraí tapa ar na ceisteanna is minice a bhíonn ag ceannaithe sula nglacann siad le Bitcoin — táillí, socrú, sparáin, aisíoc cártaí, costais agus níos mó.",
	"business/faq::faq_intro_c1":
		"Cliceáil ar cheist ar bith thíos chun an freagra a leathnú. Nuair a bheidh tú réidh le tosú ag glacadh le Bitcoin, treoraíonn na hacmhainní gnó ag bun an leathanaigh tú céim ar chéim.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "CUNTASAÍOCHT",
	"business/index::biz_label_faq": "CCanna",
	"business/index::biz_label_maps": "LÉARSCÁILEANNA CEANNAITHE",
	"business/index::biz_label_rewards": "LUACHANNA",
	"business/index::biz_label_stickers": "GREAMÁIN",
	"business/index::biz_label_wallets": "SPARÁIN",
	"business/index::biz_meta_description":
		"Glac le Bitcoin i do ghnó le táillí níos ísle, socrú láithreach, gan aisíocaíochtaí cártaí, agus mealladh níos mó custaiméirí.",
	"business/index::business_hero_subtitle":
		"Déan íocaíochtaí le táillí níos ísle, socraigh láithreach agus sroich na milliúin custaiméirí nua — gan chonarthaí ná costais fholaithe.",
	"business/index::business_intro_c1":
		"Tugann Bitcoin bealach do do ghnó íocaíochtaí a ghlacadh atá níos tapúla, níos saoire agus níos príobháidí. Gan idirghabhálaithe. Gan aisíocaíochtaí cártaí. Gan chonarthaí. Díreach airgead a shocraíonn i soicindí, díreach ón gcustaiméir chugat.",
	"business/index::business_intro_c2":
		"Thíos tá an leagan gairid de na cúiseanna go bhfuil Bitcoin go maith don ghnó — agus faoi sin, na hacmhainní go léir a theastaíonn uait chun tosú ag glacadh leis inniu.",
	"business/index::business_resources_heading":
		"Gach rud a theastaíonn uait chun Bitcoin a ghlacadh",
	"business/index::business_resources_intro":
		"Déan na hacmhainní seo ar do luas féin. Is treoir ghearr phraiticiúil iad gach ceann.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Inis dúinn faoi do ghnó",
	"business/maps::biz_maps_form_intro":
		"Ní gá dúinn ach beagán eolais chun tú a chur ar an léarscáil. Ní choinnímid sonraí seolta ach ar feadh na tréimhse a theastaíonn chun do ghnó a chur isteach sna léarscáileanna.",
	"business/maps::biz_maps_hero_subtitle":
		"Cuir do ghnó le BTC Map saor in aisce — eolaire oscailte domhanda ceannaithe a ghlacann le Bitcoin — ionas go bhfaighidh úsáideoirí Bitcoin in aice láimhe tú agus go gcaithfidh siad Bitcoin leat.",
	"business/maps::biz_maps_hero_title":
		"Cuir do ghnó ar léarscáileanna ceannaithe Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Tá úsáideoirí Bitcoin ag lorg go gníomhach áit chun a gcuid airgid a chaitheamh. Fágann bheith ar an léarscáil do ghnó ar taispeáint do gach úsáideoir Bitcoin a bhíonn ag lorg áite le hithe, siopadóireacht nó fanacht — saor in aisce go hiomlán.",
	"business/maps::biz_maps_intro_c2":
		"Líon an fhoirm ghearr thíos agus cuirfimid do ghnó isteach chuig BTC Map agus chuig léarscáileanna eile ceannaithe Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Cuir do ghnó le BTC Map agus le léarscáileanna eile ceannaithe Bitcoin saor in aisce, ionas go bhfaighidh úsáideoirí Bitcoin in aice láimhe tú.",
	"business/maps::biz_maps_placeholder_address":
		"Sráid agus uimhir",
	"business/maps::biz_maps_placeholder_category":
		"Catagóir (m.sh. bialann, caifé, óstán)",
	"business/maps::biz_maps_placeholder_city": "Cathair",
	"business/maps::biz_maps_placeholder_country": "Tír",
	"business/maps::biz_maps_placeholder_name": "Ainm an ghnó",
	"business/maps::biz_maps_placeholder_region":
		"Réigiún / contae / stát",
	"business/maps::biz_maps_placeholder_website":
		"Suíomh gréasáin (roghnach)",
	"business/maps::biz_maps_view_map_cta": "Féach ar BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Féach ar BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Go raibh maith agat as do ghnó a chur isteach. Cuirfimid ar léarscáileanna ceannaithe Bitcoin go luath tú.",
	"business/maps-success::biz_maps_success_hero_title":
		"Faighte an t-iarratas 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Cuirfear do ghnó le BTC Map agus le heolairí ceannaithe Bitcoin eile laistigh de 1-2 sheachtain. Déanaimid athbhreithniú ar gach iarratas de láimh chun na léarscáileanna a choinneáil cruinn.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Nuair a bheidh do liostáil beo, aimseoidh úsáideoirí Bitcoin in aice láimhe do ghnó agus tiocfaidh siad chun a gcuid bitcoin a chaitheamh leat.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Cad a tharlóidh anois",
	"business/maps-success::biz_maps_success_view_c1":
		"Idir an dá linn, féach ar BTC Map chun an líonra atá ag fás de ghnólachtaí ar fud an domhain a ghlacann le Bitcoin a fheiceáil.",
	"business/maps-success::biz_maps_success_view_header":
		"Féach cá mbeidh tú le feiceáil",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Íoslódáil na comhaid ghreamán i mBéarla chun do ghreamáin féin “Bitcoin Accepted Here” a phriontáil.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Priontáil do ghreamáin féin “Bitcoin Accepted Here” i mBéarla ionas go mbeidh a fhios ag do chustaiméirí go nglacann tú le Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Íoslódáil na comhaid ghreamán “Bitcoin Accepted Here” i mBéarla",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Go raibh maith agat as comhaid ghreamán “Bitcoin Accepted Here” a iarraidh i do theanga.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Faighte an t-iarratas 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Cruthóimid agus foilseoimid do chomhaid ghreamán laistigh de 3-4 sheachtain. Nuair a bheidh siad réidh, is féidir leat iad a íoslódáil agus a phriontáil saor in aisce ónár leathanach comhad greamán.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Foilsímid comhaid ghreamán i mbaisceanna, mar sin d’fhéadfadh sé cúpla seachtain a thógáil sula mbeidh do theanga ar fáil. Go raibh maith agat as d’fhoighne!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Cad a tharlóidh anois",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Ordaigh i mbulc",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Iarr pacáiste saor in aisce eile",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Gheobhaidh tú do ghreamáin saor in aisce “Bitcoin Accepted Here” laistigh de 2-4 sheachtain, in imchlúdach bán simplí le 3 ghreamán.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Tá do ghreamáin ar a mbealach 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Má tá 3 ghreamán gan a bheith ag teastáil go leor do do ghnó, ná bíodh leisce ort pacáiste saor in aisce eile a iarraidh — nó ordaigh i mbulc ón gclódóir céanna a úsáidimid.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Ag teastáil níos mó greamán?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Ar do phríomhdhoras nó ar d’fhuinneog, ionas go bhfeicfidh custaiméirí iad sula dtiocfaidh siad isteach",
	"business/sticker-success::biz_sticker_success_tip_2":
		"In aice leis an bpointe díola, ar an teirminéal íocaíochta nó san áit a n-íocann custaiméirí",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Ar bhiachláir, liostaí praghsanna nó árthaigh síntiúis",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ná cuir iad in áiteanna nach leatsa iad nó nach bhfuil cead agat greamáin a chur",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Áiteanna maithe chun do ghreamáin a chur",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Cuir in iúl do chustaiméirí go nglacann tú le Bitcoin. Ordaigh pacáiste saor in aisce de ghreamáin “Bitcoin Accepted Here” le cur i do ghnó.",
	"business/stickers::biz_stickers_hero_title":
		"Greamáin saor in aisce “Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_intro_c1":
		"Is leath den obair é glacadh le Bitcoin — ní mór do do chustaiméirí é a fhios freisin. Tá na greamáin bheaga “Bitcoin Accepted Here” deartha le cur ar an doras tosaigh, ag an bpointe díola, ar an mbiachlár nó áit ar bith a fheicfidh custaiméirí iad sula n-íocann siad.",
	"business/stickers::biz_stickers_intro_c2":
		"Cuirfimid pacáiste saor in aisce chugat chuig seoladh ar bith sna Stáit Aontaithe nó i gCeanada, nó is féidir leat do chinn féin a phriontáil áit ar bith ar domhan.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Ceanada — saor in aisce sa phost",
	"business/stickers::biz_stickers_option_print":
		"🌍 Ar fud an domhain — priontáil do chinn féin",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 Stáit Aontaithe — saor in aisce sa phost",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Aistriúchán ar “Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Aistriúchán ar “Scan to learn why Bitcoin is good for business.”",
	"business/stickers::biz_stickers_print_c1":
		"Is féidir leat do ghreamáin féin “Bitcoin Accepted Here” a phriontáil cibé áit a bhfuil tú. Cliceáil ar do theanga thíos chun na comhaid ghreamán agus na treoracha priontála a íoslódáil.",
	"business/stickers::biz_stickers_print_header":
		"Priontáil do chomhaid ghreamán féin",
	"business/stickers::biz_stickers_request_c1":
		"Líon an fhoirm thíos chun comhaid ghreamán “Bitcoin Accepted Here” i do theanga áitiúil a iarraidh. Cuirfimid ar an eolas thú a luaithe a bheidh siad réidh.",
	"business/stickers::biz_stickers_request_header":
		"Nach bhfeiceann tú do theanga?",
	"business/stickers::biz_stickers_step_description":
		"Cuirimid pacáistí saor in aisce chuig seoltaí sna Stáit Aontaithe agus i gCeanada. Áit ar bith eile ar domhan, is féidir leat do chinn féin a phriontáil.",
	"business/stickers::biz_stickers_step_header":
		"Conas ar mhaith leat do ghreamáin?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Oibríonn gach sparán Bitcoin le chéile — roghnaigh an ceann a oireann do do ghnó. Saor in aisce, socrú láithreach, gan aisíocaíochtaí cártaí.",
	"business/wallets::sources_breez_business":
		"Breez — sparán Lightning Bitcoin-amháin",
	"business/wallets::sources_ibex":
		"IBEX — bonneagar íocaíochtaí Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — próiseálaí íocaíochtaí Bitcoin",
	"business/wallets::sources_square":
		"Square — glac le híocaíochtaí in Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — sonraisc in Bitcoin do ghnólachtaí",
	"business/wallets::wallets_hero_subtitle":
		"Tá sparáin Bitcoin saor in aisce. Roghnaigh an ceann a oireann do do ghnó — sa siopa, ar líne nó ar shonrasc — agus tosaigh ag glacadh le Bitcoin i gceann nóiméad.",
	"business/wallets::wallets_section_invoice":
		"Sparáin do ghnólachtaí a sheolann sonraisc chuig custaiméirí",
	"business/wallets::wallets_section_invoice_intro":
		"Má sheolann tú sonraisc chuig custaiméirí (comhairleoireacht, saorobair, seirbhísí B2B), úsáid sparán atá tógtha thart ar shonraiscí. Íocann an custaiméir an sonrasc Bitcoin i gcúpla cliceáil.",
	"business/wallets::wallets_section_multiple":
		"Sparáin do ghnólachtaí a bhfuil foirne fostaithe acu",
	"business/wallets::wallets_section_multiple_intro":
		"Má tá foireann agat a dhéanann díolacháin ag an bpointe díola, roghnaigh sparán a láimhseálann logáil isteach iomadúla fostaithe — ionas go bhfuil a PIN féin ag gach fostaí agus go gcoinníonn tú taifead soiléir ar cé a fuair gach íocaíocht.",
	"business/wallets::wallets_section_online":
		"Sparáin do ghnólachtaí ar líne",
	"business/wallets::wallets_section_online_intro":
		"An bhfuil tú ag díol ar líne? Nascann na sparáin seo le do shiopa ar líne agus glacann siad le Bitcoin ó chustaiméir ar bith ar domhan — gan aisíocaíochtaí cártaí agus gan cuntas ceannaí ag teastáil.",
	"business/wallets::wallets_section_sole":
		"Sparáin do ghnólachtaí aonair",
	"business/wallets::wallets_section_sole_intro":
		"Má ritheann tú siopa, caifé, stiúideo nó seirbhís leat féin, oibreoidh gach ceann de na sparáin seo. Roghnaigh de réir má theastaíonn uait íocaíochtaí a choinneáil in Bitcoin nó cuid de gach íocaíocht a athrú go huathoibríoch go d’airgead reatha áitiúil.",
	"business/wallets::wallets_strike_note":
		"Ligeann Strike Business duit glacadh le híocaíochtaí Bitcoin agus Lightning le táillí nialasacha agus socrú láithreach. Tacaíonn sé le híocaíochtaí sa siopa, ar líne agus ar shonrasc, le tiontú uathoibríoch roghnach go d’airgead reatha áitiúil.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Glactar le Bitcoin anseo",
	"business/why::why_good_for_you":
		"Cén fáth go bhfuil Bitcoin go maith duitse freisin",
	"business/why::why_learn_more_lowercase": "Foghlaim tuilleadh →",
	"business/why::why_s1_c1":
		"Tarlaíonn boilsciú nuair a chlóbhuailtear nó a chruthaítear níos mó airgid as rud ar bith. Cailleann sé luach ar an airgead i do phóca le himeacht ama — agus is é sin an fáth a n-ardaíonn praghsanna bliain i ndiaidh bliana.",
	"business/why::why_s1_c2":
		"Tá soláthar seasta 21 milliún bonn ag Bitcoin. Ní féidir le rialtas, banc nó comhlacht tuilleadh a chruthú. Coinníonn do choigilt in Bitcoin a luach le himeacht ama in áit é a chailleadh go ciúin.",
	"business/why::why_s2_c1":
		"Le blianta beaga anuas, thit go leor bainc SAM mar gheall ar rití bainc. Nuair a rinne an iomarca custaiméirí iarracht tarraingt ag an am céanna, ní raibh dóthain airgid thirim ag na bainc chun iad go léir a íoc.",
	"business/why::why_s2_c2":
		"In ionad d’airgead a choinneáil amháin, tugann bainc an chuid is mó de ar iasacht agus infheistíonn siad é. Má theipeann ar na hinfheistíochtaí sin — nó má chailleann taisceoirí muinín — is féidir leis an mbanc titim agus do thaiscí a reo nó a chailleadh.",
	"business/why::why_s2_c3":
		"Le Bitcoin, is féidir leat d’airgead a choinneáil go díreach i do sparán féin. Gan bhanc. Gan idirghabhálaithe. Gan rith bainc.",
	"business/why::why_s3_c1":
		"Murab ionann agus cártaí creidmheasa, PayPal nó cuntais bhainc traidisiúnta, ní iarrann Bitcoin cead ar dhuine ar bith.",
	"business/why::why_s3_c2":
		"Ní féidir le duine ar bith do chuntas a reo, íocaíocht a bhlocáil nó tú a dhíchonnascadh ón líonra. Is é an chéad chóras airgeadais sa stair é is féidir leat a úsáid go saor, gan eagla roimh chinsireacht nó coigistíocht.",
	"business/why::why_s4_c1":
		"Is minic a thuigtear Bitcoin go mícheart, ach déanann sé go leor maitheasa go ciúin ar fud an domhain.",
	"business/why::why_s4_c2":
		"Chuidigh sé le cosantóirí cearta daonna ina gcuid troda ar son na saoirse, laghdaigh sé astuithe domhanda meatáin ó líonadh talún agus toibreacha ola, chobhsaigh sé eangacha leictreachais agus mhaoinigh sé earraí poiblí ar nós páirceanna náisiúnta.",
	"business/why::why_biz_s1":
		"Táillí níos ísle, níos mó don ghnó",
	"business/why::why_biz_s1_c1":
		"Téann íocaíochtaí Bitcoin thart ar na bainc agus ar chuideachtaí cártaí a ghearrann 2-3% as gach díolachán. Coinníonn an gnó níos mó den mhéid a íocann tú — rud a chiallaíonn níos minice praghsanna níos fearr agus seirbhís níos fearr duit.",
	"business/why::why_biz_s2":
		"Socrú láithreach, gan aisíocaíochtaí cártaí",
	"business/why::why_biz_s2_c1":
		"Socraíonn íocaíochtaí Bitcoin i soicindí, díreach ó do sparán chuig an ngnó. Gan moill laethanta sula scaoileann an banc na cistí, agus gan díospóidí aisíocaíochta costasacha — rud a chiallaíonn gur féidir leis an ngnó díriú ar a chustaiméirí in áit a bheith ag troid le calaois.",
	"business/why::why_biz_s3":
		"Glacadh saor in aisce, oscailte do gach duine",
	"business/why::why_biz_s3_c1":
		"Gan chonarthaí, táillí míosúla ná táillí tosaithe do ghnó chun Bitcoin a ghlacadh. Agus tá na milliúin úsáideoir Bitcoin ar fud an domhain ag lorg go gníomhach ceannaithe a ghlacann leis — rud a thugann nochtadh saor in aisce don ghnó sin do chustaiméirí nua.",
	"business/why::why_business_cta_intro":
		"An bhfuil gnó agat agus ar mhaith leat tosú ag glacadh le Bitcoin?",
	"business/why::why_business_cta_link":
		"Faigh amach conas a oibríonn sé →",
	"business/why::why_for_business":
		"Cén fáth go bhfuil Bitcoin go maith don ghnó seo",
	"business/why::why_for_business_intro":
		"Trí Bitcoin a ghlacadh, coinníonn an gnó seo níos mó ar gach díolachán, socraíonn sé láithreach gan aisíocaíochtaí cártaí agus sroicheann sé lucht éisteachta domhanda d’úsáideoirí Bitcoin — gach rud gan chonarthaí ná táillí míosúla.",
	"business/why::why_good_for_you_intro":
		"Níl Bitcoin úsáideach ag an bpointe díola amháin — is foirm airgid níos fearr é a chosnaíonn do choigilt, do phríobháideachas agus do shaoirse idirbheartaíochta. Seo achoimre ghasta.",
	"business/why::why_hero_subtitle":
		"Rinne tú scanadh díreach ar ghreamán “Bitcoin Accepted Here”. Seo cén fáth gur dea-scéala é — don ghnó seo agus duitse.",
	"business/why::why_intro_c1":
		"Glacann an gnó ina bhfuil tú le Bitcoin — líonra íocaíochtaí nua-aimseartha, foinse oscailte ar féidir le duine ar bith, áit ar bith, é a úsáid, gan go dtógann bainc agus idirghabhálaithe a sciar.",
	"business/why::why_intro_c2":
		"Thíos tá an leagan gairid de na cúiseanna go bhfuil sé go maith don ghnó seo Bitcoin a ghlacadh, móide cén fáth go bhfuil sé go maith duitse mar chustaiméir Bitcoin a úsáid.",
	"business/why::why_next_business_label": "GLAC LE BITCOIN",
	"business/why::why_next_business_title":
		"Glac le Bitcoin i do ghnó",
	"business/why::why_next_buy_label": "CEANNAIGH BITCOIN",
	"business/why::why_next_buy_title": "Ceannaigh do chéad Bitcoin",
	"business/why::why_next_learn_label": "FOGHLAIM TUILLEADH",
	"business/why::why_next_learn_title": "Foghlaim níos mó faoi Bitcoin",
	"business/why::why_next_wallet_label": "FAIGH SPARÁN",
	"business/why::why_next_wallet_title":
		"Faigh do sparán Bitcoin féin",
	"business/why::why_whats_next_heading": "Cá rachaidh tú anois?",
	"business/why::why_whats_next_intro":
		"Más é seo an chéad uair agat ag scanadh greamán Bitcoin, seo na háiteanna is úsáidí le dul anois.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Piara-le-piara (go díreach idir úsáideoirí)",
	"buy::buy_bitcoin_guide": "Conas Bitcoin a cheannach",
	"buy::buy_step_1_header": "Roghnaigh do thír",
	"buy::buy_step_2_header": "Roghnaigh do mhodh íocaíochta",
	"buy::buy_step_3_header": "Do chuid roghanna ceannaigh",
	"buy::buy_step_4_header": "Coinnigh do Bitcoin sábháilte",
	"buy::buy_header_subtitle":
		"Treoir shimplí, céim ar chéim chun do chéad Bitcoin a cheannach.",
	"buy::buy_howto_name": "Conas Bitcoin a cheannach",
	"buy::buy_meta_description":
		"Foghlaim conas Bitcoin a cheannach go sábháilte lenár dtreoir céim ar chéim. Roghnaigh do thír agus do mhodh íocaíochta chun na roghanna is fearr a aimsiú chun Bitcoin a cheannach.",
	"buy::buy_step_1_eyebrow": "Céim 1",
	"buy::buy_step_2_eyebrow": "Céim 2",
	"buy::buy_step_3_eyebrow": "Céim 3",
	"buy::buy_step_4_eyebrow": "Céim 4",
	"buy::buy_storage_cta_label": "An chéad chéim eile",
	"buy::sources_bisq":
		"Bisq — malartán Bitcoin piara-le-piara díláraithe",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — eolaire domhanda ATManna Bitcoin",
	"buy::sources_kraken":
		"Kraken — malartán Bitcoin aitheanta",
	"buy::sources_relai":
		"Relai — aip féin-choimeádaíochta Bitcoin na hEilvéise",
	"buy::sources_river":
		"River — ceannach, mianadóireacht agus coimeád Bitcoin-amháin",
	"buy::sources_strike_lightning":
		"Strike — ceannach Bitcoin le tacaíocht Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — ceannach athfhillteach (DCA) Bitcoin-amháin",
	"buy::buy_bitcoin": "Ceannaigh Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Cuir teanga leis",
	"common::common_next_buy_bitcoin": "Ceannaigh Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Foghlaim conas Bitcoin a cheannach go sábháilte",
	"common::common_next_calculate": "Ríomh do bhoilsciú",
	"common::common_next_calculate_desc":
		"Féach conas a bhíonn boilsciú ag dul i bhfeidhm ar do thuarastal le himeacht ama",
	"common::common_next_get_wallet": "Faigh sparán",
	"common::common_next_get_wallet_desc":
		"Faigh do chéad sparán Bitcoin — saor in aisce",
	"common::common_next_keep_learning": "Lean ag foghlaim",
	"common::common_next_keep_learning_desc":
		"Féach conas a fheabhsaíonn Bitcoin an domhan",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — innéacs praghsanna tomhaltóirí (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — soláthar airgid (innéacs de réir catagóire)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — “An féidir le ceantáil an Treasury teip?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Cad atá ag teacht anois?",
	"common::common_sticker_files_mission_5": "iarr pacáiste",
	"common::common_site_tagline": "Oideachas Bitcoin do gach duine.",
	"common::common_source_btc_map":
		"BTC Map — eolaire domhanda ceannaithe a ghlacann le Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — próiseálaí íocaíochtaí Bitcoin féin-óstáilte, saor in aisce, foinse oscailte",
	"common::common_source_oshi":
		"Oshi — ardán luaíochtaí Bitcoin do cheannaithe",
	"common::common_source_strike_business":
		"Strike — íocaíochtaí Bitcoin agus Lightning do ghnólachtaí",
	"common::common_sources_group_bitcoin": "Sonraí Bitcoin",
	"common::common_sources_group_cpi":
		"Boilsciú / innéacs praghsanna tomhaltóirí",
	"common::common_sources_group_debt": "Fiachas poiblí",
	"common::common_sources_group_money": "Sonraí soláthair airgid",
	"common::common_sources_group_stories": "Samplaí ón saol",
	"common::common_sticker_files_mission_6":
		"de ghreamáin Bhéarla saor in aisce.",
	"common::common_sticker_files_next_flyers_label": "Bileoga",
	"common::common_sticker_files_next_flyers_title":
		"Priontáil bileog Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Comhaid ghreamán",
	"common::common_sticker_files_next_languages_title":
		"Féach ar chomhaid ghreamán i dteangacha eile",
	"common::common_sticker_files_print_these":
		"PRIONTÁIL IAD I 1 CHLICEÁIL",
	"common::common_sticker_name_bdhi_black":
		"Greamán “Bitcoin Doesn\u2019t Have Inflation” (dubh)",
	"common::common_sticker_name_bdhi_orange":
		"Greamán “Bitcoin Doesn\u2019t Have Inflation” (oráiste)",
	"common::common_sticker_name_caution":
		"Greamán Bitcoin “Caution! Melting Ice Cube”",
	"common::common_sticker_name_cure_inflation":
		"Greamán Bitcoin “Cure Inflation”",
	"common::common_sticker_name_danger":
		"Greamán Bitcoin “Danger! Inflation Ahead”",
	"common::common_sticker_name_fix":
		"Greamán Bitcoin “Fix The Money, Fix The World”",
	"common::common_sticker_name_got_inflation":
		"Greamán Bitcoin “Got Inflation?”",
	"common::common_sticker_name_study":
		"Greamán “Study Bitcoin”",
	"common::common_sticker_name_warning":
		"Greamán Bitcoin “Warning! Inflation is Stealing Your Savings”",
	"common::common_sticker_name_what_if":
		"Greamán Bitcoin “What if your money didn\u2019t have inflation?”",
	"common::common_sticker_tips_heading": "Leideanna do ghreamáin",
	"common::common_sticker_tips_intro":
		"Nuair a bheidh do ghreamáin priontáilte agat, cuir iad san áit a bhfeicfidh daoine iad! Áiteanna maithe:",
	"common::common_sticker_tips_list_1":
		"spásanna poiblí ina dtabharfaidh daoine faoi deara iad",
	"common::common_sticker_tips_list_2":
		"áiteanna nach dócha go mbainfear iad go tapa (ní dhéanann greamáin damáiste buan)",
	"common::common_sticker_tips_list_3":
		"dromchlaí a ghreamaíonn go maith (miotal, plaisteach, gloine)",
	"common::common_sticker_tips_list_4":
		"NÍ ar mhaoin phríobháideach, comharthaí bóthair, ATManna ná caidéil pheitril",
	"common::common_stickers_printer_prefix": "Úsáidimid",
	"common::common_stickers_printer_suffix":
		"ach is féidir leat clódóir ar bith greamán a úsáid.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — innéacs praghsanna tomhaltóirí do gach tomhaltóir uirbeach",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — soláthar airgid M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Ríomh do bhearna boilscithe",
	"compound-inflation-calculator::cic_cta_label": "An chéad chéim eile",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Faigh amach cé mhéad a chaithfidh do thuarastal a mhéadú chun fanacht leis an mboilsciú.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Iniúch ábhair eile",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Féach conas a bhaineann Bitcoin leis an airgead, an tsaoirse, an fuinneamh agus níos mó.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Foghlaim conas a oibríonn boilsciú",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Conas na bileoga Bitcoin seo a phriontáil agus a chrochadh",
	"flyers::flyers_hero_subtitle":
		"Bileoga Bitcoin saor in aisce, inphriontáilte. Croch iad i spásanna poiblí chun cabhrú le níos mó daoine foghlaim faoi Bitcoin.",
	"flyers::flyers_hero_title": "Priontáil agus croch bileoga Bitcoin",
	"flyers::flyers_next_get_stickers": "Scaip an focal",
	"flyers::flyers_next_get_stickers_desc":
		"Ordaigh pacáiste saor in aisce de ghreamáin Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Glac páirt agus cabhraigh le Bitcoin a scaipeadh",
	"get-involved::get_involved_business_content_1":
		"Ar mhaith leat cabhrú le geilleagar ciorclach Bitcoin a thógáil? Is é an bealach is simplí cabhrú le gnólachtaí áitiúla tosú ag glacadh le híocaíochtaí Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"An bhfuil aithne agat ar ghnó a bheadh oscailte don smaoineamh? Seol an t-úinéir chuig ár leathanach",
	"get-involved::get_involved_business_content_3":
		"Bitcoin do ghnólachtaí.",
	"get-involved::get_involved_description":
		"Fágann ár n-acmhainní saor in aisce go bhfuil sé éasca glacadh le Bitcoin a scaipeadh. Greamáin, bileoga, greamáin “Bitcoin Accepted Here” do ghnólachtaí, agus cód foinse oscailte ar féidir le duine ar bith cur leis.",
	"get-involved::get_involved_header":
		"Glac páirt agus cabhraigh le Bitcoin a scaipeadh.",
	"get-involved::get_involved_intro_5":
		"Is féidir leat cabhrú é sin a athrú. Chruthaíomar cúpla acmhainn saor in aisce a fhágann go bhfuil sé éasca an dóchas a thugann Bitcoin a scaipeadh i do phobal.",
	"get-involved::get_involved_biz_stickers_note":
		"An nglacann tú le Bitcoin cheana féin? Cuir in iúl do do chustaiméirí é lenár ngreamáin saor in aisce “Bitcoin Accepted Here”. Seolaimid pacáiste chuig seoladh ar bith sna Stáit Aontaithe nó i gCeanada, nó is féidir leat do chinn féin a phriontáil áit ar bith ar domhan.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Greamáin “Accepted Here”",
	"get-involved::get_involved_card_biz_stickers_source":
		"Foinse: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Greamáin saor in aisce “Bitcoin Accepted Here” do do ghnó",
	"get-involved::get_involved_card_business_label":
		"Bitcoin do ghnólachtaí",
	"get-involved::get_involved_card_business_source":
		"Foinse: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Gach rud a theastaíonn ó ghnólacht chun tosú ag glacadh íocaíochtaí Bitcoin",
	"get-involved::get_involved_card_flyers_label":
		"Bileoga inphriontáilte",
	"get-involved::get_involved_card_flyers_source":
		"Foinse: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Íoslódáil agus priontáil bileog Bitcoin saor in aisce",
	"get-involved::get_involved_card_github_label": "Foinse oscailte",
	"get-involved::get_involved_card_github_source": "Foinse: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Cuir le bitcoin.rocks ar GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Greamáin saor in aisce",
	"get-involved::get_involved_card_stickers_source":
		"Foinse: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Ordaigh pacáiste saor in aisce de ghreamáin Bitcoin seolta chuig do dhoras",
	"get-involved::get_involved_flyers_content_1":
		"Is iad bileoga ceann de na bealaí is simplí chun Bitcoin a thabhairt isteach do do phobal. Íoslódáil ár mbileog Bitcoin inphriontáilte saor in aisce, déan an oiread cóipeanna agus is mian leat agus croch iad ar chláir fógraí, i gcaiféanna, ag cruinnithe nó áit ar bith ina dtagann daoine le chéile.",
	"get-involved::get_involved_flyers_content_2":
		"Tá ceannteideal tarraingteach agus QR-chód ar gach bileog a thugann léitheoirí fiosracha chuig bitcoin.rocks chun tuilleadh a fhoghlaim.",
	"get-involved::get_involved_flyers_content_3":
		"Murab ionann agus greamáin, is féidir bileoga a phriontáil ar éileamh ó áit ar bith ar domhan — níl uait ach printéir agus cúpla nóiméad.",
	"get-involved::get_involved_flyers_header":
		"Priontáil agus croch bileog",
	"get-involved::get_involved_flyers_image_alt":
		"Réamhamharc ar bhileog Bitcoin inphriontáilte saor in aisce bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"Is tionscadal saor in aisce, foinse oscailte é bitcoin.rocks faoi cheadúnas MIT. Is é ár misean glacadh Bitcoin a dhreasú tríd an oideachas — agus ní féidir linn é sin a dhéanamh linn féin.",
	"get-involved::get_involved_github_content_2":
		"Cibé an bhfuil tú i do fhorbróir, i do dhearthóir, i do scríbhneoir nó i d’aistritheoir, tá bealach ann chun cabhrú. Cuirimid fáilte ar leith roimh ranníocóirí is féidir leo ár n-ábhar a aistriú go níos mó teangacha, ionas gur féidir le daoine ar fud an domhain foghlaim faoi Bitcoin ina dteanga dhúchais.",
	"get-involved::get_involved_github_content_3":
		"Fork ár stór, oscail pull request, cruthaigh issue nó cuir réalta ar an tionscadal. Cabhraíonn gach ranníocaíocht le Bitcoin sroicheadh níos mó daoine.",
	"get-involved::get_involved_github_header":
		"Cuir leis ar GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Pacáiste de ghreamáin téacs Bitcoin saor in aisce ó bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "coigilt",
	"index::home_card_label_art_1": "Déanaimis comparáid",
	"index::home_card_label_art_2": "Scaip an focal",
	"index::home_card_label_art_3": "Ealaín sráide",
	"index::home_card_label_bank_runs": "Córas lán-chúltaca",
	"index::home_card_label_bonds": "Déanaimis comparáid",
	"index::home_card_label_business_1": "Cad í an difríocht?",
	"index::home_card_label_business_2": "Glac le híocaíochtaí Bitcoin",
	"index::home_card_label_cash": "Déanaimis comparáid",
	"index::home_card_label_cbdc": "Oscailte nó dúnta?",
	"index::home_card_label_coding_1": "Cúrsa idirghníomhach",
	"index::home_card_label_coding_2": "Tóg crua-earra",
	"index::home_card_label_coding_3": "Dúshláin ríomhchlárúcháin",
	"index::home_card_label_crowdfunding_1": "Agóidí EndSARS",
	"index::home_card_label_crowdfunding_2": "Airgead nach féidir a stopadh",
	"index::home_card_label_crowdfunding_3": "Maoinigh do thionscadal",
	"index::home_card_label_crypto": "Cad í an difríocht?",
	"index::home_card_label_energy_1": "Cobhsú eangaí leictreachais",
	"index::home_card_label_energy_4": "Bainistíocht éilimh",
	"index::home_card_label_energy_5": "Leictrifíú tuaithe",
	"index::home_card_label_energy_6": "Dreasachtaí inathnuaite",
	"index::home_card_label_environment_1": "Laghdú meatáin",
	"index::home_card_label_environment_2": "Shábháil páirc náisiúnta",
	"index::home_card_label_environment_3": "An tionscal is glaise",
	"index::home_card_label_environment_4": "Laghdaíonn lasadh gáis",
	"index::home_card_label_equality_1": "Dóchas agus deis",
	"index::home_card_label_equality_2": "An comhaontóir mór",
	"index::home_card_label_food_1": "Praghsanna bia",
	"index::home_card_label_food_2": "Feirmeacha agus tailte",
	"index::home_card_label_freedom_1": "Réimis údarásacha",
	"index::home_card_label_freedom_2": "Uirlis uathúil",
	"index::home_card_label_get_started_1":
		"Bunúsacha do thosaitheoirí",
	"index::home_card_label_get_started_2": "Do chéad sparán",
	"index::home_card_label_get_started_3": "Ceannaigh Bitcoin",
	"index::home_card_label_gold": "Cé acu is fearr?",
	"index::home_card_label_housing_1": "Tithíocht inacmhainne",
	"index::home_card_label_human_rights_1":
		"Cuireann cearta daonna chun cinn",
	"index::home_card_label_human_rights_2": "Glacadh na ndaoine",
	"index::home_card_label_human_rights_3": "Rian domhanda",
	"index::home_card_label_inflation": "Is airgead níos fearr é Bitcoin",
	"index::home_card_label_networks_1": "Léiriú líonra beo",
	"index::home_card_label_networks_2": "Déanaimis comparáid",
	"index::home_card_label_payments_1": "Cad í an difríocht?",
	"index::home_card_label_payments_2": "Íocaíochtaí tapa saor",
	"index::home_card_label_payments_3": "Aistrithe thar lear",
	"index::home_card_label_payments_4": "Glac le híocaíochtaí",
	"index::home_card_label_politics_1": "An paradacsa polaitiúil",
	"index::home_card_label_politics_2": "Geallsa láidir",
	"index::home_card_label_property_rights_1": "Déanaimis comparáid",
	"index::home_card_label_property_rights_2": "Úinéireacht fhíor",
	"index::home_card_label_salary": "Cosain do thuarastal",
	"index::home_card_label_self_custody_1":
		"Treoir sparán Bitcoin",
	"index::home_card_label_self_custody_2": "An chéim is tábhachtaí",
	"index::home_card_label_self_custody_3": "Airgead ceannasach",
	"index::home_card_label_war_1": "Cuir deireadh le cogaí gan chríoch",
	"index::home_card_label_war_2": "Cabhair do sheansaighdiúirí",
	"index::home_card_label_war_3": "Éalaigh ón gcogadh",
	"index::home_h1":
		"Is airgead níos fearr é Bitcoin a thógann domhan níos fearr.",
	"index::home_nav_about": "Eolas",
	"index::home_nav_get_involved": "Glac páirt",
	"index::home_nav_learn": "Foghlaim",
	"index::home_source_prefix": "Foinse:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon agus Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Féach ar ár",
	"lightning::lightning_grid_heading":
		"Sparáin Lightning a bhfuil tóir orthu",
	"lightning::lightning_hardware_cta_label":
		"Sparáin crua-earraí",
	"lightning::lightning_header_subtitle":
		"Ligeann Lightning duit Bitcoin a sheoladh i soicindí ar chodán de chent — roghnaigh sparán a oireann lena idirmhalartuithe don mhéid Bitcoin a bheidh tú ag caitheamh.",
	"lightning::lightning_s1_c4_end": "chun tuilleadh eolais.",
	"lightning::lightning_s1_c4_link":
		"Treoir sparán crua-earraí Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — sparán Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — sparán Lightning féin-choimeádaithe",
	"lightning::sources_lightning_labs":
		"Lightning Labs — doiciméadúchán do Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — sparán Lightning coimeádach",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android agus gréasán",
	"nostr/index::nostr_platform_web": "Brabhsálaí gréasáin",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Is prótacal nua díláraithe é Nostr le haghaidh cumarsáide ar líne — níl aon chomhlacht ina úinéir air, tá zaps Bitcoin ionsuite, agus is féidir leat cliaint a mhalartú gan do leantóirí a chailleadh.",
	"nostr/index::nostr_amethyst_f1":
		"Gnéithe iomadúla agus roghanna saincheaptha",
	"nostr/index::nostr_amethyst_f2":
		"Ní mór sparán Bitcoin ar leith",
	"nostr/index::nostr_amethyst_f3": "100% saor in aisce",
	"nostr/index::nostr_damus_f1":
		"Comhéadan atá cosúil le Twitter",
	"nostr/index::nostr_damus_f2":
		"Ní mór sparán Bitcoin ar leith",
	"nostr/index::nostr_damus_f3": "100% saor in aisce",
	"nostr/index::nostr_download_heading":
		"Íoslódáil cliant Nostr saor in aisce",
	"nostr/index::nostr_download_intro":
		"Is aipeanna saor in aisce iad cliaint Nostr a ligeann duit léamh agus scríobh ar líonra Nostr. Oibríonn siad go léir le chéile — is féidir leat cliaint a mhalartú am ar bith agus do leantóirí agus d’ábhar a choinneáil.",
	"nostr/index::nostr_hero_subtitle":
		"Is prótacal nua díláraithe é Nostr le haghaidh cumarsáide ar líne — níl aon chomhlacht ina úinéir air, tá zaps Bitcoin ionsuite, agus is féidir leat bogadh ó aip go haip gan do leantóirí a chailleadh.",
	"nostr/index::nostr_hero_title": "Cad é Nostr?",
	"nostr/index::nostr_intro_c1":
		"Oibríonn Nostr mar ríomhphost: níl duine ar bith ina úinéir ar an bprótacal, is féidir le duine ar bith aip a thógáil air agus roghnaíonn tú an ceann is fearr leat. Murab ionann agus Twitter nó Facebook, níl aon chomhlacht lárnach ann ar féidir leis tú a chinsireadh, a chosc nó a shrianadh.",
	"nostr/index::nostr_intro_c2":
		"Thíos tá an leagan gairid de na cúiseanna go bhfuil Nostr tábhachtach — agus ansin na cliaint Nostr saor in aisce go léir a theastaíonn uait chun tosú inniu.",
	"nostr/index::nostr_iris_f1":
		"An-simplí — gan gá le suiteáil",
	"nostr/index::nostr_iris_f2":
		"Bealach éasca Nostr a thriail le cuntas triail",
	"nostr/index::nostr_iris_f3": "100% saor in aisce",
	"nostr/index::nostr_learn_more_label": "DUL NÍOS DOIMHNE",
	"nostr/index::nostr_learn_more_title":
		"Foghlaim níos mó faoi Nostr ar nostr.how",
	"nostr/index::nostr_primal_f1": "An chéad chliant atá molta againn",
	"nostr/index::nostr_primal_f2":
		"Sparán zap Bitcoin ionsuite",
	"nostr/index::nostr_primal_f3": "100% saor in aisce",
	"nostr/index::nostr_s1": "Prótacal, ní ardán",
	"nostr/index::nostr_s1_c1":
		"Is prótacal nua é Nostr a ligeann duit cumarsáid a dhéanamh ar líne gan eagla roimh chinsireacht, cosc nó laghdú.",
	"nostr/index::nostr_s1_c2":
		"Tá ardáin ar nós Twitter agus Facebook á rialú ag aon chomhlacht amháin, ach níl prótacal Nostr á rialú ag duine ar bith.",
	"nostr/index::nostr_s2": "Saor le bogadh",
	"nostr/index::nostr_s2_c1":
		"Oibríonn Nostr mar ríomhphost. Níl duine ar bith i gceannas ar phrótacal an ríomhphoist, agus is féidir le duine ar bith cliant a thógáil air (ar nós Gmail, Hotmail, srl.).",
	"nostr/index::nostr_s2_c2":
		"Níl prótacal Nostr á rialú ag duine ar bith ach oiread, agus is féidir le duine ar bith cliant a thógáil air (ar nós Damus, Amethyst, srl.).",
	"nostr/index::nostr_s2_c3":
		"Mura dtaitníonn an chaoi a n-oibríonn cliant ar leith leat, is féidir leat do chuntas Nostr a bhogadh chuig cliant eile gan do leantóirí ná d’ábhar a chailleadh.",
	"nostr/index::nostr_s3": "Tá Bitcoin ionsuite",
	"nostr/index::nostr_s3_c1":
		"Tá Bitcoin ionsuite i bprótacal Nostr. Nuair a fheiceann tú ábhar a thaitníonn leat, is féidir leat “zap Bitcoin” a sheoladh chuig an údar go héasca mar bhuíochas.",
	"nostr/index::nostr_s3_c2":
		"Ar ardáin láraithe ar nós Twitter agus Facebook, déanann comhlacht lárnach airgead ó d’ábhar. Ach ar phrótacail oscailte ar nós Nostr, is tusa a dhéanann airgead ó d’ábhar féin.",
	"nostr/index::sources_damus": "Damus — cliant Nostr d’iPhone",
	"nostr/index::sources_iris": "Iris — cliant Nostr sa bhrabhsálaí",
	"nostr/index::sources_nostr_how": "nostr.how — Cad é Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Prótacal Nostr — sonrúchán foinse oscailte",
	"nostr/index::sources_primal":
		"Primal — cliant Nostr le sparán zap Bitcoin ionsuite",
	"nostr/index::what_is_nostr": "Cad é Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Priontáil do ghreamáin Bitcoin féin leis na comhaid seo.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Faighte an t-iarratas 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Ordaigh i mbulc",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Roinn ar Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Cad é Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Ag teastáil níos mó greamán?",
	"sticker-success::sticker_success_hero_title":
		"Tá do ghreamáin ar a mbealach 🎉",
	"sticker-success::sticker_success_share_header":
		"Roinn cá bhfuil na greamáin curtha agat",
	"sticker-success::sticker_success_tips_header":
		"Áiteanna maithe chun na greamáin a chur",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Agus a luaithe a thosaíonn tú, priontáil agus croch do bhileoga féin freisin",
	"stickers::stickers_instructions_1":
		"Iontráil do sheoladh poist agus cuirfimid pacáiste saor in aisce de ghreamáin Bitcoin chugat tríd an bpost. Tiocfaidh do ghreamáin in imchlúdach bán simplí.",
	"stickers::stickers_btn_choose_pack": "Roghnaigh an pacáiste seo",
	"stickers::stickers_bulk_c1":
		"An bhfuil níos mó ná cúpla greamán uait?",
	"stickers::stickers_bulk_c2":
		"Ordaigh i mbulc ón gclódóir céanna a úsáidimid",
	"stickers::stickers_bulk_c3":
		"— a thuilleadh a cheannaíonn tú, is ísle a chosnaíonn gach ceann.",
	"stickers::stickers_bulk_cta": "Ceannaigh greamáin i mbulc",
	"stickers::stickers_bulk_header":
		"Ordaigh greamáin i mbulc",
	"stickers::stickers_hero_subtitle":
		"Ordaigh pacáiste saor in aisce de ghreamáin Bitcoin agus cuir i spásanna poiblí iad chun cabhrú le níos mó daoine foghlaim faoi Bitcoin.",
	"stickers::stickers_hero_title":
		"Greamáin Bitcoin saor in aisce",
	"stickers::stickers_intro_c1":
		"Is é ár misean cabhrú leat níos mó daoine a “piollaíocht oráiste” trí ghreamáin Bitcoin a chur i spásanna poiblí. Tá QR-chóid ag ár ngreamáin go léir a sheolann chuig leathanaigh oideachais ar ",
	"stickers::stickers_intro_c3": "bhoilsciú",
	"stickers::stickers_intro_c4":
		"Roghnaigh pacáiste greamán thíos agus roghnaigh conas a theastaíonn uait iad — seolfaimid pacáiste saor in aisce chuig duine ar bith sna Stáit Aontaithe nó i gCeanada, nó is féidir leat do chinn féin a phriontáil áit ar bith ar domhan.",
	"stickers::stickers_mail_header":
		"Seolfaimid do ghreamáin saor in aisce chugat tríd an bpost",
	"stickers::stickers_next_print_flyers": "Scaip an teachtaireacht níos faide",
	"stickers::stickers_next_print_flyers_desc":
		"Priontáil bileoga Bitcoin saor in aisce agus croch iad in áiteanna poiblí",
	"stickers::stickers_option_bulk":
		"📦 Ar fud an domhain — ordaigh i mbulc",
	"stickers::stickers_option_canada":
		"🇨🇦 Ceanada — saor in aisce sa phost",
	"stickers::stickers_option_print":
		"🌍 Ar fud an domhain — priontáil do chinn féin",
	"stickers::stickers_option_usa":
		"🇺🇸 Stáit Aontaithe — saor in aisce sa phost",
	"stickers::stickers_print_c1":
		"Is féidir leat páirt a ghlacadh trí do ghreamáin féin a phriontáil cibé áit a bhfuil tú. Cliceáil ar do theanga thíos chun na comhaid ghreamán agus na treoracha priontála a íoslódáil.",
	"stickers::stickers_print_c2":
		"Níl gach greamán ar fáil i ngach teanga.",
	"stickers::stickers_print_header":
		"Priontáil do chomhaid ghreamán féin",
	"stickers::stickers_request_c1":
		"Líon an fhoirm thíos chun comhaid ghreamán i do theanga áitiúil a iarraidh. Cuirfimid ar an eolas thú a luaithe a bheidh siad réidh.",
	"stickers::stickers_request_header":
		"Nach bhfeiceann tú do theanga?",
	"stickers::stickers_share_c2":
		"Lean sinn ar Nostr trí",
	"stickers::stickers_share_c3":
		"a chuardach i gcliant Nostr ar bith.",
	"stickers::stickers_signs_pack_description":
		"Comharthaí rabhaidh, aire agus foláirimh le teachtaireachtaí Bitcoin — deartha chun an tsúil a tharraingt agus chun stad a chur ar dhaoine chun léamh.",
	"stickers::stickers_step_1_description":
		"Tá tacar éagsúil greamán Bitcoin i ngach pacáiste le QR-chóid a mhúineann do dhaoine cad é Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "CÉIM 1",
	"stickers::stickers_step_1_header":
		"Roghnaigh pacáiste greamán",
	"stickers::stickers_step_2_description":
		"Cuirimid pacáistí saor in aisce chuig seoltaí sna Stáit Aontaithe agus i gCeanada. Áit ar bith eile ar domhan, is féidir leat do chinn féin a phriontáil nó ordú i mbulc.",
	"stickers::stickers_step_2_eyebrow": "CÉIM 2",
	"stickers::stickers_step_2_header":
		"Conas ar mhaith leat do ghreamáin?",
	"stickers::stickers_text_pack_description":
		"Meascán mana agus nathanna Bitcoin deartha chun fiosracht a spreagadh i spásanna poiblí.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Roghnaigh do sparán",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — measúnuithe stórála miotail do fhrásaí téarnaimh Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — sparán Bitcoin féin-choimeádaithe",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — sparán crua-earraí Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — sparán crua-earraí Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — sparán crua-earraí Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — sparán crua-earraí Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — gléas sínithe DIY foinse oscailte d’idirbhearta Bitcoin",
	"wallets::wallets_grid_heading": "Sparáin Bitcoin a bhfuil tóir orthu",
	"wallets::wallets_header_subtitle":
		"Treoir céim ar chéim chun sparán a roghnú, do chuid eochracha a chosaint agus smacht iomlán a ghlacadh ar do Bitcoin.",
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
		`translate-rest-part2 (ga): filled ${filled}, already-done ${skipped}`,
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
