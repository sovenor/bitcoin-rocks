#!/usr/bin/env node
/**
 * Slovenian manifest refresh — part 2 of non-inflation namespaces.
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
	"sl.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Računovodske storitve Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Vodnik v preprosti slovenščini, kako vnesti sprejemanje Bitcoina v računovodstvo — hibridne denarnice, nabavna vrednost, kapitalski dobički in kdaj poklicati računovodjo.",
	"business/accounting::accounting_s1_c1":
		"Najlažji način sprejemanja Bitcoina je s hibridno denarnico, ki samodejno proda 100 % prejetega Bitcoina za evre (ali vašo lokalno valuto) takoj po prejemu plačila.",
	"business/accounting::accounting_s1_c2":
		"S to nastavitvijo je vaše računovodstvo videti popolnoma enako kot doslej — končni znesek je vsakič v evrih. Brez nabavne vrednosti, brez kapitalskih dobičkov, brez novih preglednic.",
	"business/accounting::accounting_s2":
		"Če del Bitcoina obdržite: sledenje nabavni vrednosti",
	"business/accounting::accounting_s2_c1":
		"Nekatera podjetja se odločijo, da del prejetega Bitcoina obdržijo, namesto da bi vsega samodejno pretvorila. Če to velja za vas, je glavni dodatni korak sledenje nabavni vrednosti — vrednosti v evrih za vsako Bitcoin plačilo na dan, ko ste ga prejeli.",
	"business/accounting::accounting_s2_c2":
		"Tudi če svoje poslovanje dojemate povsem v Bitcoinu, večina davčnih organov še vedno zahteva, da vrednost prijavite v evrih. Dobra novica: gre le za dve številki na transakcijo — količino prejetega Bitcoina in njegovo vrednost v evrih na ta dan.",
	"business/accounting::accounting_s2_c3":
		"Spodnja orodja uporabite, da iskanje avtomatizirate in vam ni treba vsak dan preverjati cen.",
	"business/accounting::accounting_s3":
		"Trošenje ali prodaja Bitcoina, ki ste ga obdržali",
	"business/accounting::accounting_s3_c1":
		"Če vsako plačilo samodejno pretvorite v evre, ta razdelek preskočite — ne velja za vas.",
	"business/accounting::accounting_s3_c2":
		"Če ste obdržali nekaj Bitcoina in ga pozneje porabite ali prodate, prodajno ceno dopolnite v isto preglednico nabavne vrednosti. Razlika med tem, koliko je Bitcoin stal, ko ste ga prejeli, in tem, koliko stane, ko ga porabite ali prodate, je kapitalski dobiček ali izguba.",
	"business/accounting::accounting_s3_c3": "Dva hitra primera:",
	"business/accounting::accounting_s4":
		"Potrebujete profesionalca, ki razume Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Če to raje prepustite komu drugemu — ali je vaše Bitcoin računovodstvo bolj zapleteno, kot zmore hibridna denarnica — toplo priporočamo Računovodske storitve Satoshi Pacioli, podjetje, ki se specializira za Bitcoin računovodstvo za podjetja.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin računovodstvo za vaše podjetje",
	"business/accounting::accounting_card_bpr_label": "CENA BITCOINA",
	"business/accounting::accounting_card_bpr_title":
		"Poiščite trenutno ali zgodovinsko ceno Bitcoina v dolarjih",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN RAČUNOVODJA",
	"business/accounting::accounting_card_spreadsheet_label": "UVOZ V EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Samodejno prenašajte cene Bitcoina v Excel",
	"business/accounting::accounting_card_wallets_label": "HIBRIDNE DENARNICE",
	"business/accounting::accounting_card_wallets_title":
		"Oglejte si naše priporočene poslovne denarnice",
	"business/accounting::accounting_disclaimer":
		"Ta vodnik je zgolj za informativne namene in ni davčno svetovanje. Za davčne nasvete, ki ustrezajo vaši situaciji, se obrnite na usposobljenega računovodjo.",
	"business/accounting::accounting_disclaimer_label": "Opozorilo",
	"business/accounting::accounting_example_feb_1": "1. februar",
	"business/accounting::accounting_example_gain_badge": "Kapitalski dobiček",
	"business/accounting::accounting_example_gain_explain":
		"Zabeležite kapitalski dobiček 10 $.",
	"business/accounting::accounting_example_jan_1": "1. januar",
	"business/accounting::accounting_example_loss_badge": "Kapitalska izguba",
	"business/accounting::accounting_example_loss_explain":
		"Zabeležite kapitalsko izgubo 10 $.",
	"business/accounting::accounting_example_received_label": "Prejeto",
	"business/accounting::accounting_example_sold_label":
		"Prodano ali porabljeno",
	"business/accounting::accounting_hero_subtitle":
		"Sprejemanje Bitcoina v vašem podjetju ni nujno, da zaplete vaše računovodstvo. Tu je kratka različica — plus orodja in strokovnjaki, ki to naredijo brez bolečin.",
	"business/accounting::accounting_intro_c1":
		"Če že sprejemate gotovino ali kartice, je dodajanje Bitcoina v poslovno računovodstvo lažje, kot se zdi. Imate dve poti: vsako Bitcoin plačilo samodejno pretvorite v evre takoj po prejemu (brez novega računovodstva) ali del obdržite kot Bitcoin (nekaj dodatnih številk za sledenje).",
	"business/accounting::accounting_intro_c2":
		"Ta vodnik vas popelje skozi obe poti — da lahko izberete tisto, ki ustreza vašemu podjetju, in mirno začnete sprejemati Bitcoin.",
	"business/accounting::accounting_s1": "Lahka pot: samodejna pretvorba v evre",
	"business/accounting::accounting_s3_c6":
		"In to je vse. Osnovna matematika je enaka kot pri katerem koli drugem premoženju, ki pridobiva ali izgublja vrednost.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — trenutna in zgodovinska cena Bitcoina v dolarjih",
	"business/accounting::sources_satoshi_pacioli":
		"Računovodske storitve Satoshi Pacioli — Bitcoin računovodstvo za podjetja",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — uvoz cen kriptovalut v Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Kratki odgovori na vprašanja, ki jih trgovci najpogosteje zastavljajo, preden začnejo sprejemati Bitcoin — provizije, poravnava, denarnice, chargebacki, stroški in več.",
	"business/faq::faq_intro_c1":
		"S klikom na katero koli vprašanje spodaj se razširi odgovor. Ko boste pripravljeni začeti sprejemati Bitcoin, vas poslovni viri na dnu strani vodijo skozi vsak korak.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "RAČUNOVODSTVO",
	"business/index::biz_label_faq": "POGOSTA VPRAŠANJA",
	"business/index::biz_label_maps": "ZEMLJEVIDI TRGOVCEV",
	"business/index::biz_label_rewards": "NAGRADE",
	"business/index::biz_label_stickers": "NALEPKE",
	"business/index::biz_label_wallets": "DENARNICE",
	"business/index::biz_meta_description":
		"Sprejemajte Bitcoin v svojem podjetju z nižjimi provizijami, takojšnjo poravnavo, brez chargebackov in pridobite več strank.",
	"business/index::business_hero_subtitle":
		"Sprejemajte plačila z nižjimi provizijami, dobite plačano takoj in pridobite milijone novih strank — brez pogodb in brez skritih stroškov.",
	"business/index::business_intro_c1":
		"Bitcoin daje vašemu podjetju hitrejši, cenejši in bolj zaseben način, da dobi plačano. Brez posrednikov. Brez chargebackov. Brez pogodb. Le denar, ki se poravna v sekundah, neposredno od stranke do vas.",
	"business/index::business_intro_c2":
		"Spodaj je kratka različica, zakaj je Bitcoin dober za posel — in pod njo vsak vir, ki ga potrebujete, da ga lahko začnete sprejemati že danes.",
	"business/index::business_resources_heading":
		"Vse, kar potrebujete za sprejemanje Bitcoina",
	"business/index::business_resources_intro":
		"Te vire prehodite v lastnem tempu. Vsak je kratek in praktičen vodnik.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Povejte nam o svojem podjetju",
	"business/maps::biz_maps_form_intro":
		"Potrebujemo le nekaj podatkov, da vas vpišemo. Podatke o naslovu hranimo le toliko časa, kot je potrebno, da vaše podjetje pošljemo na zemljevide.",
	"business/maps::biz_maps_hero_subtitle":
		"Vpišite svoje podjetje brezplačno na BTC Map — odprt globalni imenik trgovcev, ki sprejemajo Bitcoin — da vas Bitcoinarji v vaši okolici najdejo in pri vas porabijo Bitcoin.",
	"business/maps::biz_maps_hero_title":
		"Postavite svoje podjetje na zemljevide Bitcoin trgovcev",
	"business/maps::biz_maps_intro_c1":
		"Bitcoinarji aktivno iščejo kraje, kjer bi porabili. Ko bo vaše podjetje na zemljevidu, se boste pokazali vsakemu Bitcoin uporabniku, ki v okolici išče, kje bi jedel, nakupoval ali prenočil — povsem brezplačno.",
	"business/maps::biz_maps_intro_c2":
		"Samo izpolnite kratek obrazec spodaj in vaše podjetje bomo poslali na BTC Map in druge zemljevide Bitcoin trgovcev.",
	"business/maps::biz_maps_meta_description":
		"Vpišite svoje podjetje brezplačno na BTC Map in druge zemljevide Bitcoin trgovcev, da vas Bitcoinarji v vaši okolici najdejo.",
	"business/maps::biz_maps_placeholder_address": "Ulica in hišna številka",
	"business/maps::biz_maps_placeholder_category":
		"Kategorija (npr. restavracija, kavarna, hotel)",
	"business/maps::biz_maps_placeholder_city": "Mesto",
	"business/maps::biz_maps_placeholder_country": "Država",
	"business/maps::biz_maps_placeholder_name": "Ime podjetja",
	"business/maps::biz_maps_placeholder_region": "Regija / pokrajina",
	"business/maps::biz_maps_placeholder_website": "Spletna stran (neobvezno)",
	"business/maps::biz_maps_view_map_cta": "Pokaži BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Pokaži BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Hvala, ker ste poslali svoje podjetje. Kmalu vas bomo vpisali na zemljevide Bitcoin trgovcev.",
	"business/maps-success::biz_maps_success_hero_title": "Prošnja prejeta 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Vaše podjetje bo vpisano na BTC Map in druge imenike Bitcoin trgovcev v 1 do 2 tednih. Vsako prijavo pregledamo ročno, da zemljevidi ostanejo natančni.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Takoj ko bo vaš vpis aktiven, bodo Bitcoinarji v vaši okolici našli vaše podjetje in prišli porabit Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header": "Kaj sledi",
	"business/maps-success::biz_maps_success_view_c1":
		"Medtem ko čakate, si oglejte BTC Map in si poglejte rastoče omrežje podjetij po vsem svetu, ki sprejemajo Bitcoin.",
	"business/maps-success::biz_maps_success_view_header": "Poglejte, kje se boste pojavili",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Prenesite angleške datoteke z nalepkami, da lahko natisnete svoje nalepke „Tu sprejemamo Bitcoin“.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Natisnite svoje nalepke „Tu sprejemamo Bitcoin“ v angleščini, da strankam sporočite, da sprejemate Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Prenesite angleške datoteke z nalepkami „Tu sprejemamo Bitcoin“",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Hvala, ker ste zaprosili za datoteke nalepk „Tu sprejemamo Bitcoin“ v vašem jeziku.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Prošnja prejeta 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vaše datoteke z nalepkami bomo izdelali in objavili v 3 do 4 tednih. Takoj ko bodo pripravljene, jih boste lahko brezplačno prenesli in natisnili z naše strani z datotekami nalepk.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Datoteke nalepk izdajamo v paketih, zato lahko traja nekaj tednov, preden bo vaš jezik aktiven. Hvala za potrpežljivost!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Kaj sledi",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "Naroči veleprodajno",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Zaprosi za nov brezplačen paket",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Vaše brezplačne nalepke „Tu sprejemamo Bitcoin“ boste prejeli v 2 do 4 tednih v navadni beli kuverti s 3 nalepkami.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Vaše nalepke so na poti 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Če 3 nalepke za vaše podjetje ne zadostujejo, lahko mirno zaprosite za nov brezplačen paket — ali pa naročite veleprodajno pri istem tiskarju, kot ga uporabljamo mi.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Potrebujete več nalepk?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Na vhodna vrata ali izložbo, da jih stranke vidijo, preden vstopijo",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Pri blagajni, plačilnem terminalu ali plačilnem mestu",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Na jedilnike, cenike ali škatle za napitnino",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ne lepite jih na mesta, ki niso vaša last ali za katera nimate dovoljenja",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Dobra mesta za vaše nalepke",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Sporočite strankam, da sprejemate Bitcoin. Naročite brezplačen paket nalepk „Tu sprejemamo Bitcoin“ za izobesitev v svojem lokalu.",
	"business/stickers::biz_stickers_hero_title":
		"Brezplačne nalepke „Tu sprejemamo Bitcoin“",
	"business/stickers::biz_stickers_intro_c1":
		"Sprejemanje Bitcoina je le polovica dela — vaše stranke morajo tudi vedeti, da ga sprejemate. Te majhne nalepke „Tu sprejemamo Bitcoin“ so zasnovane tako, da jih nalepite na vhodna vrata, blagajno, jedilnik ali kamor koli, kjer jih stranke vidijo, preden plačajo.",
	"business/stickers::biz_stickers_intro_c2":
		"Brezplačno vam bomo poslali paket kamor koli v ZDA ali Kanado, ali pa lahko natisnete svoje kjer koli na svetu.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kanada — brezplačno po pošti",
	"business/stickers::biz_stickers_option_print":
		"🌍 Po vsem svetu — natisnil bom svoje",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 ZDA — brezplačno po pošti",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Prevod fraze „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Prevod fraze „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Lastne nalepke „Tu sprejemamo Bitcoin“ lahko natisnete ne glede na to, kje živite. S klikom na svoj jezik spodaj prenesete datoteke nalepk in navodila za tisk.",
	"business/stickers::biz_stickers_print_header":
		"Natisnite svoje datoteke nalepk",
	"business/stickers::biz_stickers_request_c1":
		"Izpolnite spodnji obrazec, da zaprosite za datoteke nalepk „Tu sprejemamo Bitcoin“ v vašem lokalnem jeziku. Sporočili vam bomo, takoj ko bodo pripravljene.",
	"business/stickers::biz_stickers_request_header": "Ne vidite svojega jezika?",
	"business/stickers::biz_stickers_step_description":
		"Brezplačen paket bomo poslali na naslove v ZDA in Kanadi. Kjer koli drugje na svetu lahko natisnete svoje.",
	"business/stickers::biz_stickers_step_header":
		"Kako želite priti do nalepk?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Vse Bitcoin denarnice so med seboj združljive — izberite tisto, ki ustreza vašemu podjetju. Brezplačno, takojšnja poravnava, brez chargebackov.",
	"business/wallets::sources_breez_business":
		"Breez — Lightning denarnica samo za Bitcoin",
	"business/wallets::sources_ibex": "IBEX — infrastruktura za Lightning plačila",
	"business/wallets::sources_opennode":
		"OpenNode — procesor Bitcoin plačil",
	"business/wallets::sources_square": "Square — sprejemajte Bitcoin plačila",
	"business/wallets::sources_zaprite":
		"Zaprite — izstavljanje računov v Bitcoinu za podjetja",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin denarnice so brezplačne. Izberite tisto, ki ustreza vašemu podjetju — osebna prodaja, splet ali računi — in začnite sprejemati Bitcoin v nekaj minutah.",
	"business/wallets::wallets_section_invoice":
		"Denarnice za podjetja, ki strankam izstavljajo račune",
	"business/wallets::wallets_section_invoice_intro":
		"Če strankam izstavljate račune (svetovanje, prosta praksa, B2B storitve), uporabite denarnico, zgrajeno okoli izstavljanja računov. Stranka plača Bitcoin račun z nekaj kliki.",
	"business/wallets::wallets_section_multiple":
		"Denarnice za podjetja z več zaposlenimi",
	"business/wallets::wallets_section_multiple_intro":
		"Če imate ekipo, ki sprejema plačila pri blagajni, izberite denarnico, ki podpira več prijav zaposlenih — tako vsak zaposleni dobi svoj PIN, vi pa ohranite jasen pregled, kdo je prejel katero plačilo.",
	"business/wallets::wallets_section_online": "Denarnice za spletne posle",
	"business/wallets::wallets_section_online_intro":
		"Prodajate na spletu? Te denarnice se povežejo z vašo spletno trgovino in sprejemajo Bitcoin od katere koli stranke, kjer koli na svetu — brez chargebackov in brez potrebe po trgovskem računu.",
	"business/wallets::wallets_section_sole":
		"Denarnice za samostojno podjetništvo",
	"business/wallets::wallets_section_sole_intro":
		"Če sami vodite trgovino, kavarno, studio ali storitev, vam bo zadostovala katera koli od teh denarnic. Izberite glede na to, ali želite plačila obdržati v Bitcoinu ali del vsakega plačila samodejno pretvoriti v lokalno valuto.",
	"business/wallets::wallets_strike_note":
		"Strike Business vam omogoča sprejemanje Bitcoin in Lightning plačil z ničelnimi provizijami in takojšnjo poravnavo. Podpira osebna, spletna in računovodska plačila z izbirno samodejno pretvorbo v lokalno valuto.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business": "Tu sprejemamo Bitcoin",
	"business/why::why_good_for_you": "Zakaj je Bitcoin odličen tudi za vas",
	"business/why::why_learn_more_lowercase": "Več o tem →",
	"business/why::why_s1_c1":
		"Inflacija nastane, ko se tiska več denarja ali ko se ustvarja iz nič. Denar v vašem žepu zato sčasoma izgublja vrednost — in prav zato cene leto za letom rastejo.",
	"business/why::why_s1_c2":
		"Bitcoin ima fiksno ponudbo 21 milijonov kovancev. Nobena vlada, banka ali podjetje ne morejo natisniti več. Vaši prihranki v Bitcoinu sčasoma ohranijo svojo vrednost, namesto da bi jo tiho izgubljali.",
	"business/why::why_s2_c1":
		"V zadnjih letih je propadlo več ameriških bank zaradi naskokov na banko. Ko je preveč strank naenkrat hotelo dvigniti, banke niso imele dovolj gotovine, da bi vsem izplačale.",
	"business/why::why_s2_c2":
		"Namesto da bi vaš denar le hranile, ga banke večino posojajo in vlagajo. Če te naložbe propadejo — ali če vlagatelji izgubijo zaupanje — banka lahko propade in vaše vloge so lahko zamrznjene ali izgubljene.",
	"business/why::why_s2_c3":
		"Z Bitcoinom lahko denar hranite neposredno v lastni denarnici. Brez banke. Brez posrednikov. Brez naskoka na banko.",
	"business/why::why_s3_c1":
		"Za razliko od kreditnih kartic, PayPala ali tradicionalnih bančnih računov Bitcoin ne zahteva ničjega dovoljenja.",
	"business/why::why_s3_c2":
		"Nihče vam ne more zamrzniti računa, blokirati plačila ali vas odklopiti od omrežja. To je prvi finančni sistem v zgodovini, ki ga lahko uporabljate svobodno, brez strahu pred cenzuro ali zaplembo.",
	"business/why::why_s4_c1":
		"Bitcoin je pogosto napačno razumljen, a v svetu tiho dela kup dobrega.",
	"business/why::why_s4_c2":
		"Pomagal je aktivistom za človekove pravice v boju za svobodo, zmanjšal globalne emisije metana z odlagališč in naftnih polj, stabiliziral električna omrežja in financiral javne dobrine, kot so narodni parki.",
	"business/why::why_biz_s1": "Nižje provizije, več za podjetje",
	"business/why::why_biz_s1_c1":
		"Bitcoin plačila zaobidejo banke in kartična podjetja, ki si vzamejo 2 – 3 % od vsake prodaje. Podjetje obdrži več od tistega, kar plačate — kar pogosto pomeni boljše cene in boljše storitve za vas.",
	"business/why::why_biz_s2": "Takojšnja poravnava, brez chargebackov",
	"business/why::why_biz_s2_c1":
		"Bitcoin plačila se poravnajo v sekundah, neposredno z vaše denarnice na podjetje. Brez čakanja dni, da banka sprosti sredstva, in brez dragih sporov o chargebackih — podjetje se lahko osredotoči na stranke namesto na boj proti goljufijam.",
	"business/why::why_biz_s3": "Brezplačno sprejemanje, odprto vsem",
	"business/why::why_biz_s3_c1":
		"Za sprejemanje Bitcoina podjetje ne plačuje pogodb, mesečnih provizij ali stroškov vzpostavitve. In milijoni Bitcoin uporabnikov po vsem svetu aktivno iščejo trgovce, ki ga sprejemajo — kar tem podjetjem brezplačno daje izpostavljenost novim strankam.",
	"business/why::why_business_cta_intro":
		"Imate podjetje in želite začeti sprejemati Bitcoin?",
	"business/why::why_business_cta_link": "Poglejte, kako to deluje →",
	"business/why::why_for_business": "Zakaj je Bitcoin odličen za to podjetje",
	"business/why::why_for_business_intro":
		"S sprejemanjem Bitcoina podjetje obdrži več od vsake prodaje, dobi plačano takoj brez chargebackov in doseže globalno občinstvo Bitcoin uporabnikov — vse to brez pogodb in mesečnih provizij.",
	"business/why::why_good_for_you_intro":
		"Bitcoin ni koristen samo pri blagajni — je boljša oblika denarja, ki ščiti vaše prihranke, zasebnost in svobodo transakcij. Tu je kratek pregled.",
	"business/why::why_hero_subtitle":
		"Pravkar ste skenirali nalepko „Tu sprejemamo Bitcoin“. Tukaj je razlog, zakaj je to odlična novica — za to podjetje in za vas.",
	"business/why::why_intro_c1":
		"Podjetje, v katerem ste, sprejema Bitcoin — sodobno odprtokodno plačilno omrežje, ki ga lahko uporablja kdor koli kjer koli na svetu, ne da bi banke in posredniki vzeli provizijo.",
	"business/why::why_intro_c2":
		"Spodaj je kratka različica, zakaj je sprejemanje Bitcoina dobro za to podjetje, plus zakaj je uporaba Bitcoina dobra za vas kot stranko.",
	"business/why::why_next_business_label": "SPREJEMAJTE BITCOIN",
	"business/why::why_next_business_title":
		"Sprejemajte Bitcoin v svojem podjetju",
	"business/why::why_next_buy_label": "KUPITE BITCOIN",
	"business/why::why_next_buy_title": "Kupite svoj prvi Bitcoin",
	"business/why::why_next_learn_label": "VEČ O TEM",
	"business/why::why_next_learn_title": "Spoznajte več o Bitcoinu",
	"business/why::why_next_wallet_label": "PRIDOBITE DENARNICO",
	"business/why::why_next_wallet_title": "Pridobite svojo Bitcoin denarnico",
	"business/why::why_whats_next_heading": "Kam naprej?",
	"business/why::why_whats_next_intro":
		"Če je to vaše prvo skeniranje Bitcoin nalepke, so tu najuporabnejša mesta, kamor odpotovati naprej.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Kako kupiti Bitcoin",
	"buy::buy_step_1_header": "Izberite svojo državo",
	"buy::buy_step_2_header": "Izberite način plačila",
	"buy::buy_step_3_header": "Vaše možnosti nakupa",
	"buy::buy_step_4_header": "Varno shranite svoj Bitcoin",
	"buy::buy_header_subtitle":
		"Preprost vodnik korak za korakom za nakup vašega prvega Bitcoina.",
	"buy::buy_howto_name": "Kako kupiti Bitcoin",
	"buy::buy_meta_description":
		"Naučite se varno kupiti Bitcoin z našim vodnikom korak za korakom. Izberite svojo državo in način plačila ter najdite najboljše možnosti nakupa Bitcoina za vas.",
	"buy::buy_step_1_eyebrow": "Korak 1",
	"buy::buy_step_2_eyebrow": "Korak 2",
	"buy::buy_step_3_eyebrow": "Korak 3",
	"buy::buy_step_4_eyebrow": "Korak 4",
	"buy::buy_storage_cta_label": "Naslednji korak",
	"buy::sources_bisq":
		"Bisq — decentralizirana peer-to-peer Bitcoin menjalnica",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — globalni imenik Bitcoin bankomatov",
	"buy::sources_kraken": "Kraken — uveljavljena Bitcoin menjalnica",
	"buy::sources_relai":
		"Relai — švicarska aplikacija za lastno hrambo Bitcoina",
	"buy::sources_river":
		"River — nakup, rudarjenje in hramba samo Bitcoina",
	"buy::sources_strike_lightning":
		"Strike — nakup Bitcoina s podporo Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — dolar-cost averaging samo za Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Dodaj jezik",
	"common::common_next_buy_bitcoin": "Kupite Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Naučite se, kako varno kupiti Bitcoin",
	"common::common_next_calculate": "Izračunajte svojo inflacijo",
	"common::common_next_calculate_desc":
		"Spoznajte, kako inflacija sčasoma vpliva na vašo plačo",
	"common::common_next_get_wallet": "Pridobite denarnico",
	"common::common_next_get_wallet_desc":
		"Pridobite svojo prvo Bitcoin denarnico — brezplačno",
	"common::common_next_keep_learning": "Učite se naprej",
	"common::common_next_keep_learning_desc":
		"Poglejte, kako Bitcoin izboljšuje svet",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — indeks cen življenjskih potrebščin (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — denarna masa (kategorični indeks)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Lahko spodleti dražba Treasury?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Kaj sledi?",
	"common::common_sticker_files_mission_5": "zaprosite za paket",
	"common::common_site_tagline": "Bitcoin izobraževanje za vse.",
	"common::common_source_btc_map":
		"BTC Map — globalni imenik trgovcev, ki sprejemajo Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — brezplačen odprtokoden samogostujoč procesor Bitcoin plačil",
	"common::common_source_oshi":
		"Oshi — platforma Bitcoin nagrad za trgovce",
	"common::common_source_strike_business":
		"Strike — Bitcoin in Lightning plačila za podjetja",
	"common::common_sources_group_bitcoin": "Podatki o Bitcoinu",
	"common::common_sources_group_cpi":
		"Inflacija / indeks cen življenjskih potrebščin",
	"common::common_sources_group_debt": "Državni dolg",
	"common::common_sources_group_money": "Podatki o denarni masi",
	"common::common_sources_group_stories": "Resnični primeri",
	"common::common_sticker_files_mission_6": "brezplačnih angleških nalepk.",
	"common::common_sticker_files_next_flyers_label": "Letaki",
	"common::common_sticker_files_next_flyers_title":
		"Natisnite Bitcoin letak",
	"common::common_sticker_files_next_languages_label": "Datoteke nalepk",
	"common::common_sticker_files_next_languages_title":
		"Oglejte si datoteke nalepk v drugih jezikih",
	"common::common_sticker_files_print_these": "NATISNI Z 1 KLIKOM",
	"common::common_sticker_name_bdhi_black":
		"Nalepka „Bitcoin Doesn\u2019t Have Inflation“ (črna)",
	"common::common_sticker_name_bdhi_orange":
		"Nalepka „Bitcoin Doesn\u2019t Have Inflation“ (oranžna)",
	"common::common_sticker_name_caution":
		"Bitcoin nalepka „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin nalepka „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin nalepka „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin nalepka „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin nalepka „Got Inflation?“",
	"common::common_sticker_name_study": "Nalepka „Study Bitcoin“",
	"common::common_sticker_name_warning":
		"Bitcoin nalepka „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin nalepka „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Nasveti za nalepke",
	"common::common_sticker_tips_intro":
		"Takoj ko nalepke natisnete, jih namestite tam, kjer jih bodo ljudje videli! Dobra mesta so:",
	"common::common_sticker_tips_list_1":
		"na javnih mestih, kjer jih bodo ljudje opazili",
	"common::common_sticker_tips_list_2":
		"na mestih, od koder jih verjetno ne bodo takoj odstranili (nalepke ne povzročajo trajne škode)",
	"common::common_sticker_tips_list_3":
		"na površine, kjer dobro držijo (kovina, plastika, steklo)",
	"common::common_sticker_tips_list_4":
		"NE na zasebno lastnino, čez prometne znake, bankomate ali bencinske črpalke",
	"common::common_stickers_printer_prefix": "Mi uporabljamo",
	"common::common_stickers_printer_suffix":
		"a lahko uporabite kateri koli tiskar nalepk.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — indeks cen življenjskih potrebščin za vse mestne potrošnike",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — denarna masa M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Izračunajte svojo inflacijsko vrzel",
	"compound-inflation-calculator::cic_cta_label": "Naslednji korak",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Spoznajte, za koliko mora narasti vaša plača, da drži korak z inflacijo.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Raziščite več tem",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Poglejte, kako se Bitcoin povezuje z denarjem, svobodo, energijo in več.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Naučite se, kako deluje inflacija",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Kako natisniti in razobesiti te Bitcoin letake",
	"flyers::flyers_hero_subtitle":
		"Brezplačni Bitcoin letaki za tisk. Razobesite jih na javnih mestih, da pomagate več ljudem izvedeti za Bitcoin.",
	"flyers::flyers_hero_title": "Tiskajte in razobešajte Bitcoin letake",
	"flyers::flyers_next_get_stickers": "Širite vest",
	"flyers::flyers_next_get_stickers_desc":
		"Naročite brezplačen paket Bitcoin nalepk",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Vključite se in širite Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Želite pomagati graditi Bitcoin krožno gospodarstvo? Najlažji način je pomagati lokalnim podjetjem začeti sprejemati Bitcoin plačila.",
	"get-involved::get_involved_business_content_2":
		"Poznate podjetje, ki bi bilo odprto za ta korak? Pošljite lastnika na našo",
	"get-involved::get_involved_business_content_3":
		"Bitcoin stran za podjetja.",
	"get-involved::get_involved_description":
		"Naši brezplačni viri olajšajo širjenje sprejemanja Bitcoina. Nalepke, letaki, nalepke „Tu sprejemamo Bitcoin“ za podjetja in odprta koda, h kateri lahko prispeva vsakdo.",
	"get-involved::get_involved_header": "Vključite se in širite Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Pri tem lahko pomagate. Ustvarili smo več brezplačnih virov, ki olajšajo širjenje upanja, ki ga Bitcoin prinaša v vaše okolje.",
	"get-involved::get_involved_biz_stickers_note":
		"Že sprejemate Bitcoin? Dajte strankam vedeti z našimi brezplačnimi nalepkami „Tu sprejemamo Bitcoin“. Paket bomo poslali na kateri koli naslov v ZDA ali Kanadi, ali pa lahko natisnete svoje kjer koli na svetu.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Nalepke „sprejemamo“",
	"get-involved::get_involved_card_biz_stickers_source":
		"Vir: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Brezplačne nalepke „Tu sprejemamo Bitcoin“ za vaše podjetje",
	"get-involved::get_involved_card_business_label": "Bitcoin za podjetja",
	"get-involved::get_involved_card_business_source": "Vir: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Vse, kar podjetje potrebuje, da začne sprejemati plačila v Bitcoinu",
	"get-involved::get_involved_card_flyers_label": "Letaki za tisk",
	"get-involved::get_involved_card_flyers_source": "Vir: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Prenesite in natisnite brezplačen Bitcoin letak",
	"get-involved::get_involved_card_github_label": "Odprta koda",
	"get-involved::get_involved_card_github_source": "Vir: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Prispevajte k bitcoin.rocks na GitHubu",
	"get-involved::get_involved_card_stickers_label": "Brezplačne nalepke",
	"get-involved::get_involved_card_stickers_source":
		"Vir: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Zaprosite za brezplačen paket Bitcoin nalepk, dostavljen na vaš dom",
	"get-involved::get_involved_flyers_content_1":
		"Letaki so eden najpreprostejših načinov, da Bitcoin predstavite svoji skupnosti. Prenesite brezplačen Bitcoin letak za tisk, natisnite toliko izvodov, kolikor želite, in jih razobesite na oglasnih deskah skupnosti, v kavarnah, na srečanjih ali kjer koli, kjer se ljudje zbirajo.",
	"get-involved::get_involved_flyers_content_2":
		"Vsak letak vsebuje pritegljiv naslov in QR kodo, ki radovedne bralce pripelje na bitcoin.rocks, kjer izvedo več.",
	"get-involved::get_involved_flyers_content_3":
		"Za razliko od nalepk lahko letake tiskate na zahtevo od koder koli na svetu — potrebujete le tiskalnik in nekaj minut.",
	"get-involved::get_involved_flyers_header": "Natisnite in razobesite letak",
	"get-involved::get_involved_flyers_image_alt":
		"Predogled brezplačnega Bitcoin letaka za tisk z bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks je brezplačen odprtokoden projekt pod licenco MIT. Naše poslanstvo je pospešiti sprejemanje Bitcoina prek izobraževanja — in tega ne zmoremo sami.",
	"get-involved::get_involved_github_content_2":
		"Ne glede na to, ali ste razvijalec, oblikovalec, pisec ali prevajalec, obstaja način, kako lahko pomagate. Posebej pozdravljamo prispevalce, ki znajo prevesti našo vsebino v dodatne jezike, da bi se ljudje po vsem svetu lahko o Bitcoinu učili v svojem maternem jeziku.",
	"get-involved::get_involved_github_content_3":
		"Forknite repozitorij, odprite pull request, ustvarite issue ali projekt vsaj zvezdico. Vsak prispevek pomaga Bitcoinu doseči več ljudi.",
	"get-involved::get_involved_github_header": "Prispevajte na GitHubu",
	"get-involved::get_involved_sticker_image_alt":
		"Paket brezplačnih besedilnih Bitcoin nalepk z bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "varčevanje",
	"index::home_card_label_art_1": "Primerjajmo",
	"index::home_card_label_art_2": "Širite vest",
	"index::home_card_label_art_3": "Ulična umetnost",
	"index::home_card_label_bank_runs": "Sistem polnih rezerv",
	"index::home_card_label_bonds": "Primerjajmo",
	"index::home_card_label_business_1": "V čem je razlika?",
	"index::home_card_label_business_2": "Sprejemajte Bitcoin plačila",
	"index::home_card_label_cash": "Primerjajmo",
	"index::home_card_label_cbdc": "Odprto ali zaprto?",
	"index::home_card_label_coding_1": "Interaktivna vadnica",
	"index::home_card_label_coding_2": "Gradite strojno opremo",
	"index::home_card_label_coding_3": "Programerski izzivi",
	"index::home_card_label_crowdfunding_1": "Protesti EndSARS",
	"index::home_card_label_crowdfunding_2": "Neustavljiv denar",
	"index::home_card_label_crowdfunding_3": "Financirajte svoj projekt",
	"index::home_card_label_crypto": "V čem je razlika?",
	"index::home_card_label_energy_1": "Stabilizacija omrežja",
	"index::home_card_label_energy_4": "Upravljanje povpraševanja",
	"index::home_card_label_energy_5": "Elektrifikacija podeželja",
	"index::home_card_label_energy_6": "Spodbude za obnovljive vire",
	"index::home_card_label_environment_1": "Zmanjšanje metana",
	"index::home_card_label_environment_2": "Rešil narodni park",
	"index::home_card_label_environment_3": "Najbolj zelena panoga",
	"index::home_card_label_environment_4": "Zmanjšuje sežiganje plina",
	"index::home_card_label_equality_1": "Upanje in priložnost",
	"index::home_card_label_equality_2": "Velika prelomnica",
	"index::home_card_label_food_1": "Cene hrane",
	"index::home_card_label_food_2": "Kmetije in zemlja",
	"index::home_card_label_freedom_1": "Avtoritarni režimi",
	"index::home_card_label_freedom_2": "Edinstveno orodje",
	"index::home_card_label_get_started_1": "Osnove za začetnike",
	"index::home_card_label_get_started_2": "Vaša prva denarnica",
	"index::home_card_label_get_started_3": "Kupite Bitcoin",
	"index::home_card_label_gold": "Kaj je boljše?",
	"index::home_card_label_housing_1": "Dostopna stanovanja",
	"index::home_card_label_human_rights_1": "Uveljavljanje človekovih pravic",
	"index::home_card_label_human_rights_2": "Sprejemanje od spodaj",
	"index::home_card_label_human_rights_3": "Globalni vpliv",
	"index::home_card_label_inflation": "Bitcoin je boljši denar",
	"index::home_card_label_networks_1": "Pogled na omrežje v živo",
	"index::home_card_label_networks_2": "Primerjajmo",
	"index::home_card_label_payments_1": "V čem je razlika?",
	"index::home_card_label_payments_2": "Hitra in poceni plačila",
	"index::home_card_label_payments_3": "Tuje nakazila",
	"index::home_card_label_payments_4": "Sprejemajte plačila",
	"index::home_card_label_politics_1": "Politični paradoks",
	"index::home_card_label_politics_2": "Pojdite po svoje",
	"index::home_card_label_property_rights_1": "Primerjajmo",
	"index::home_card_label_property_rights_2": "Resnično lastništvo",
	"index::home_card_label_salary": "Zaščitite svojo plačo",
	"index::home_card_label_self_custody_1": "Vodnik po Bitcoin denarnicah",
	"index::home_card_label_self_custody_2": "Najpomembnejši korak",
	"index::home_card_label_self_custody_3": "Suvereni denar",
	"index::home_card_label_war_1": "Konec neskončne vojne",
	"index::home_card_label_war_2": "Pomoč veteranom",
	"index::home_card_label_war_3": "Pobeg pred vojno",
	"index::home_h1":
		"Bitcoin je boljši denar, ki gradi boljši svet.",
	"index::home_nav_about": "O nas",
	"index::home_nav_get_involved": "Vključi se",
	"index::home_nav_learn": "Učite se",
	"index::home_source_prefix": "Vir:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon in Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Oglejte si naš",
	"lightning::lightning_grid_heading": "Priljubljene Lightning denarnice",
	"lightning::lightning_hardware_cta_label": "Strojne denarnice",
	"lightning::lightning_header_subtitle":
		"Lightning vam omogoča pošiljanje Bitcoina v sekundah za delček centa — izberite denarnico, katere kompromisi ustrezajo količini Bitcoina, ki jo nameravate porabiti.",
	"lightning::lightning_s1_c4_end": "za več informacij.",
	"lightning::lightning_s1_c4_link":
		"Vodnik po Bitcoin strojnih denarnicah",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning denarnica",
	"lightning::sources_breez_lightning":
		"Breez — Lightning denarnica z lastno hrambo",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentacija Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — kustodialna Lightning denarnica",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android in splet",
	"nostr/index::nostr_platform_web": "Spletni brskalnik",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr je nov decentraliziran protokol za spletno komunikacijo — ne nadzoruje ga nobeno podjetje, Bitcoin zapi so nativno vgrajeni in med odjemalci lahko prehajate, ne da bi izgubili sledilce.",
	"nostr/index::nostr_amethyst_f1": "Veliko funkcij in prilagoditev",
	"nostr/index::nostr_amethyst_f2": "Zahteva ločeno Bitcoin denarnico",
	"nostr/index::nostr_amethyst_f3": "100 % brezplačno",
	"nostr/index::nostr_damus_f1": "Znano vmesnik v slogu Twitterja",
	"nostr/index::nostr_damus_f2": "Zahteva ločeno Bitcoin denarnico",
	"nostr/index::nostr_damus_f3": "100 % brezplačno",
	"nostr/index::nostr_download_heading": "Brezplačno prenesite Nostr odjemalca",
	"nostr/index::nostr_download_intro":
		"Nostr odjemalci so brezplačne aplikacije, ki vam omogočajo branje in prispevanje na omrežje Nostr. Vsi so med seboj združljivi — odjemalca lahko kadar koli zamenjate in obdržite svoje sledilce in vsebino.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr je nov decentraliziran protokol za spletno komunikacijo — ne nadzoruje ga nobeno podjetje, Bitcoin zapi so vgrajeni in med aplikacijami lahko prehajate, ne da bi izgubili sledilce.",
	"nostr/index::nostr_hero_title": "Kaj je Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr je podoben e-pošti: protokol nikomur ne pripada, aplikacijo na njem lahko zgradi vsakdo in vi izberete tisto, ki vam najbolj ustreza. Za razliko od Twitterja ali Facebooka ne obstaja osrednje podjetje, ki bi vas lahko cenzuriralo, izrinilo ali utišalo.",
	"nostr/index::nostr_intro_c2":
		"Spodaj je kratka različica, zakaj je Nostr pomemben — in nato vsak brezplačen Nostr odjemalec, ki ga potrebujete, da lahko začnete še danes.",
	"nostr/index::nostr_iris_f1":
		"Izjemno preprosto — namestitev ni potrebna",
	"nostr/index::nostr_iris_f2":
		"Lahek način, da preizkusite Nostr s testnim računom",
	"nostr/index::nostr_iris_f3": "100 % brezplačno",
	"nostr/index::nostr_learn_more_label": "POJDITE GLOBLJE",
	"nostr/index::nostr_learn_more_title":
		"Več o Nostru izvedite na nostr.how",
	"nostr/index::nostr_primal_f1": "Priporočen prvi odjemalec",
	"nostr/index::nostr_primal_f2":
		"Vgrajena denarnica za Bitcoin zape",
	"nostr/index::nostr_primal_f3": "100 % brezplačno",
	"nostr/index::nostr_s1": "Protokol, ne platforma",
	"nostr/index::nostr_s1_c1":
		"Nostr je nov protokol, ki vam omogoča spletno komunikacijo brez strahu pred cenzuro, izrinjanjem ali utišanjem.",
	"nostr/index::nostr_s1_c2":
		"Platforme, kot sta Twitter in Facebook, nadzoruje eno samo podjetje, protokola Nostr pa ne nadzoruje nihče.",
	"nostr/index::nostr_s2": "Svoboda gibanja",
	"nostr/index::nostr_s2_c1":
		"Nostr je podoben e-pošti. Nihče ne nadzoruje protokola e-pošte in vsakdo lahko na njem zgradi odjemalca (na primer Gmail, Hotmail itd.).",
	"nostr/index::nostr_s2_c2":
		"Tudi protokola Nostr nihče ne nadzoruje in vsakdo lahko na njem zgradi odjemalca (na primer Damus, Amethyst itd.).",
	"nostr/index::nostr_s2_c3":
		"Če vam ni všeč, kako deluje določen odjemalec, lahko svoj Nostr račun gladko prenesete v drugega odjemalca, ne da bi izgubili sledilce ali vsebino.",
	"nostr/index::nostr_s3": "Bitcoin je vgrajen",
	"nostr/index::nostr_s3_c1":
		"Bitcoin je nativno vgrajen v protokol Nostr. Ko vidite vsebino, ki vam je všeč, lahko avtorju enostavno pošljete „Bitcoin zap“ v zahvalo!",
	"nostr/index::nostr_s3_c2":
		"Na centraliziranih platformah, kot sta Twitter in Facebook, denar služi osrednje podjetje od vaše vsebine. Toda na odprtih protokolih, kot je Nostr, denar služite vi od svoje vsebine.",
	"nostr/index::sources_damus": "Damus — Nostr odjemalec za iPhone",
	"nostr/index::sources_iris": "Iris — Nostr odjemalec v brskalniku",
	"nostr/index::sources_nostr_how": "nostr.how — Kaj je Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — odprtokodna specifikacija",
	"nostr/index::sources_primal":
		"Primal — Nostr odjemalec z vgrajeno denarnico za Bitcoin zape",
	"nostr/index::what_is_nostr": "Kaj je Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Natisnite svoje Bitcoin nalepke s temi datotekami.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Prošnja prejeta 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Naroči veleprodajno",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Deli na Nostru",
	"sticker-success::sticker_success_btn_what_is_nostr": "Kaj je Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Potrebujete več nalepk?",
	"sticker-success::sticker_success_hero_title":
		"Vaše nalepke so na poti 🎉",
	"sticker-success::sticker_success_share_header":
		"Delite mesta, kamor ste namestili nalepke",
	"sticker-success::sticker_success_tips_header": "Dobra mesta za nalepke",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"In medtem ko ste pri tem, natisnite in razobesite svoje",
	"stickers::stickers_instructions_1":
		"Vnesite svoj poštni naslov in poslali vam bomo brezplačen paket Bitcoin nalepk po pošti. Vaše nalepke bodo prispele v navadni beli kuverti.",
	"stickers::stickers_btn_choose_pack": "Izberi ta paket",
	"stickers::stickers_bulk_c1": "Želite več kot le nekaj nalepk?",
	"stickers::stickers_bulk_c2":
		"Naročite jih veleprodajno pri istem tiskarju, kot ga uporabljamo mi",
	"stickers::stickers_bulk_c3":
		"— več kot jih kupite, cenejše so na kos.",
	"stickers::stickers_bulk_cta": "Kupite nalepke veleprodajno",
	"stickers::stickers_bulk_header": "Naročite nalepke veleprodajno",
	"stickers::stickers_hero_subtitle":
		"Naročite brezplačen paket Bitcoin nalepk in jih razobesite na javnih mestih, da pomagate več ljudem izvedeti za Bitcoin.",
	"stickers::stickers_hero_title": "Brezplačne Bitcoin nalepke",
	"stickers::stickers_intro_c1":
		"Naše poslanstvo je, da vam pomagamo dati več ljudem „oranžno tableto“ tako, da Bitcoin nalepke nameščate na javna mesta. Vse naše nalepke imajo QR kode, ki vodijo do izobraževalnih strani o",
	"stickers::stickers_intro_c3": "inflaciji",
	"stickers::stickers_intro_c4":
		"Spodaj izberite paket nalepk in izberite, kako želite priti do njih — paket bomo brezplačno poslali komur koli v ZDA ali Kanadi, ali pa lahko natisnete svoje kjer koli na svetu.",
	"stickers::stickers_mail_header":
		"Poslali vam bomo vaše nalepke brezplačno po pošti",
	"stickers::stickers_next_print_flyers": "Širite naprej",
	"stickers::stickers_next_print_flyers_desc":
		"Natisnite brezplačne Bitcoin letake in jih javno razobesite",
	"stickers::stickers_option_bulk": "📦 Po vsem svetu — naročite veleprodajno",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — brezplačno po pošti",
	"stickers::stickers_option_print":
		"🌍 Po vsem svetu — natisnil bom svoje",
	"stickers::stickers_option_usa": "🇺🇸 ZDA — brezplačno po pošti",
	"stickers::stickers_print_c1":
		"Vključite se lahko z natiskom svojih nalepk ne glede na to, kje živite. S klikom na svoj jezik spodaj prenesete datoteke nalepk in navodila za tisk.",
	"stickers::stickers_print_c2":
		"Ni vsaka nalepka na voljo v vseh jezikih.",
	"stickers::stickers_print_header":
		"Natisnite svoje datoteke nalepk",
	"stickers::stickers_request_c1":
		"Izpolnite spodnji obrazec, da zaprosite za datoteke nalepk v vašem lokalnem jeziku. Sporočili vam bomo, takoj ko bodo pripravljene.",
	"stickers::stickers_request_header": "Ne vidite svojega jezika?",
	"stickers::stickers_share_c2":
		"Sledite nam na Nostru z iskanjem",
	"stickers::stickers_share_c3":
		"v katerem koli Nostr odjemalcu.",
	"stickers::stickers_signs_pack_description":
		"Opozorilne, svarilne in znakovne nalepke z Bitcoin sporočilom — zasnovane tako, da pritegnejo pozornost in ljudi pripravijo, da se ustavijo in preberejo.",
	"stickers::stickers_step_1_description":
		"Vsak paket vsebuje drugačen niz Bitcoin nalepk z QR kodami, ki ljudi učijo o Bitcoinu.",
	"stickers::stickers_step_1_eyebrow": "KORAK 1",
	"stickers::stickers_step_1_header": "Izberite paket nalepk",
	"stickers::stickers_step_2_description":
		"Brezplačen paket bomo poslali na naslove v ZDA in Kanadi. Kjer koli drugje na svetu lahko natisnete svoje ali naročite veleprodajno.",
	"stickers::stickers_step_2_eyebrow": "KORAK 2",
	"stickers::stickers_step_2_header": "Kako želite priti do nalepk?",
	"stickers::stickers_text_pack_description":
		"Mešanica Bitcoin sloganov in enovrstičnih dovtipov, namenjenih spodbujanju radovednosti na javnih površinah.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Izberite denarnico",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — pregledi kovinskih shrambo za Bitcoin seed",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin denarnica z lastno hrambo",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin strojna denarnica",
	"wallets::sources_coldcard_mk5":
		"Coinkite — strojna denarnica Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — strojna denarnica Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — strojna denarnica Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — odprtokodna naredi-sam naprava za podpisovanje Bitcoin transakcij",
	"wallets::wallets_grid_heading": "Priljubljene Bitcoin denarnice",
	"wallets::wallets_header_subtitle":
		"Vodnik korak za korakom, kako izbrati denarnico, zaščititi svoje ključe in prevzeti popoln nadzor nad svojim Bitcoinom.",
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
		`translate-rest-part2 (sl): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50) console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
