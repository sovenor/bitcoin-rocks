#!/usr/bin/env node
/**
 * Danish manifest refresh — part 2 of non-inflation namespaces.
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
	"da.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Bogholderitjenester fra Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"En guide på enkelt dansk til at bogføre Bitcoin-betalinger — hybride wallets, kostpris, kapitalgevinster, og hvornår du skal ringe til din revisor.",
	"business/accounting::accounting_s1_c1":
		"Den nemmeste måde at modtage Bitcoin på er ved at bruge en hybrid wallet, der automatisk sælger 100 % af den modtagne Bitcoin til kroner (eller din lokale valuta), så snart betalingen kommer ind.",
	"business/accounting::accounting_s1_c2":
		"Med denne opsætning ser dit regnskab nøjagtigt ud, som det gør i dag — slutbeløbet er kroner hver gang. Ingen kostpris, ingen kapitalgevinster, ingen nye regneark.",
	"business/accounting::accounting_s2":
		"Hvis du beholder noget Bitcoin: sporing af kostpris",
	"business/accounting::accounting_s2_c1":
		"Nogle virksomheder vælger at beholde noget af den Bitcoin, de modtager, i stedet for automatisk at konvertere det hele. Hvis det er dig, er det ekstra trin at spore kostprisen — værdien i kroner på hver Bitcoin-betaling den dag, du modtog den.",
	"business/accounting::accounting_s2_c2":
		"Selv hvis du tænker på din forretning rent i Bitcoin, ønsker de fleste skattemyndigheder stadig, at du indberetter værdien i kroner. Den gode nyhed: det er bare to tal pr. transaktion — mængden af Bitcoin modtaget og dens værdi i kroner den dag.",
	"business/accounting::accounting_s2_c3":
		"Brug værktøjerne nedenfor til at automatisere opslagene, så du ikke behøver tjekke priser hver dag.",
	"business/accounting::accounting_s3":
		"Brug eller salg af Bitcoin, du har beholdt",
	"business/accounting::accounting_s3_c1":
		"Hvis du konverterer hver betaling automatisk til kroner, så spring dette afsnit over — det gælder ikke for dig.",
	"business/accounting::accounting_s3_c2":
		"Hvis du har beholdt noget Bitcoin og senere beslutter at bruge eller sælge det, skal du tilføje salgsprisen til det samme regneark med kostpris. Forskellen mellem, hvad Bitcoin kostede, da du modtog det, og hvad det koster, når du bruger eller sælger det, er en kapitalgevinst eller -tab.",
	"business/accounting::accounting_s3_c3": "To hurtige eksempler:",
	"business/accounting::accounting_s4":
		"Har du brug for en professionel, der forstår Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Hvis du hellere vil lade nogen anden håndtere det — eller hvis dit Bitcoin-regnskab er mere komplekst end en hybrid wallet kan håndtere — anbefaler vi varmt Satoshi Pacioli Bogholderitjenester, et firma specialiseret i Bitcoin-regnskab for virksomheder.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin-regnskab for din virksomhed",
	"business/accounting::accounting_card_bpr_label": "BITCOIN-PRIS",
	"business/accounting::accounting_card_bpr_title":
		"Slå op aktuelle eller historiske Bitcoin-priser i dollars",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN-REVISOR",
	"business/accounting::accounting_card_spreadsheet_label":
		"EXCEL-IMPORT",
	"business/accounting::accounting_card_spreadsheet_title":
		"Hent automatisk Bitcoin-priser ind i Excel",
	"business/accounting::accounting_card_wallets_label": "HYBRIDE WALLETS",
	"business/accounting::accounting_card_wallets_title":
		"Se vores anbefalede erhvervs-wallets",
	"business/accounting::accounting_disclaimer":
		"Denne guide er kun til informationsformål og er ikke skatterådgivning. For skatterådgivning specifikt til din situation, kontakt venligst en kvalificeret revisor.",
	"business/accounting::accounting_disclaimer_label": "Ansvarsfraskrivelse",
	"business/accounting::accounting_example_feb_1": "1. februar",
	"business/accounting::accounting_example_gain_badge": "Kapitalgevinst",
	"business/accounting::accounting_example_gain_explain":
		"Du noterer en kapitalgevinst på 10 $.",
	"business/accounting::accounting_example_jan_1": "1. januar",
	"business/accounting::accounting_example_loss_badge": "Kapitaltab",
	"business/accounting::accounting_example_loss_explain":
		"Du noterer et kapitaltab på 10 $.",
	"business/accounting::accounting_example_received_label": "Modtaget",
	"business/accounting::accounting_example_sold_label":
		"Solgt eller brugt",
	"business/accounting::accounting_hero_subtitle":
		"At acceptere Bitcoin i din virksomhed behøver ikke komplicere dit regnskab. Her er den korte version — plus værktøjer og eksperter, der gør det smertefrit.",
	"business/accounting::accounting_intro_c1":
		"Hvis du allerede modtager kontanter eller kort, er det nemmere end det lyder at tilføje Bitcoin til dit virksomhedsregnskab. Du har to veje: automatisk konvertere hver Bitcoin-betaling til kroner, så snart den kommer ind (intet nyt regnskab), eller beholde noget som Bitcoin (få ekstra tal at spore).",
	"business/accounting::accounting_intro_c2":
		"Denne guide gennemgår begge veje — så du kan vælge den, der passer til din virksomhed, og begynde at tage imod Bitcoin med ro i sjælen.",
	"business/accounting::accounting_s1":
		"Den nemme vej: automatisk konvertering til kroner",
	"business/accounting::accounting_s3_c6":
		"Og det er det. Grundmatematikken er den samme, som du ville bruge på ethvert andet aktiv, der stiger eller falder i værdi.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — aktuel og historisk Bitcoin-pris i dollars",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Bogholderitjenester — Bitcoin-regnskab for virksomheder",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — import af kryptovaluta-priser til Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Korte svar på de spørgsmål, handlende typisk stiller, før de begynder at tage imod Bitcoin — gebyrer, afregning, wallets, chargebacks, omkostninger og mere.",
	"business/faq::faq_intro_c1":
		"Klik på ethvert spørgsmål nedenfor for at folde svaret ud. Når du er klar til at begynde at tage imod Bitcoin, guider erhvervsressourcerne i bunden af siden dig gennem hvert trin.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "REGNSKAB",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "HANDELSKORT",
	"business/index::biz_label_rewards": "BELØNNINGER",
	"business/index::biz_label_stickers": "KLISTERMÆRKER",
	"business/index::biz_label_wallets": "WALLETS",
	"business/index::biz_meta_description":
		"Tag imod Bitcoin i din virksomhed med lavere gebyrer, øjeblikkelig afregning, ingen chargebacks, og få flere kunder.",
	"business/index::business_hero_subtitle":
		"Modtag betalinger med lavere gebyrer, få udbetalt øjeblikkeligt og nå millioner af nye kunder — ingen kontrakter og ingen skjulte omkostninger.",
	"business/index::business_intro_c1":
		"Bitcoin giver din virksomhed en hurtigere, billigere og mere privat måde at blive betalt på. Ingen mellemmænd. Ingen chargebacks. Ingen kontrakter. Bare penge, der afregnes på sekunder, direkte fra kunden til dig.",
	"business/index::business_intro_c2":
		"Nedenfor er den korte version af, hvorfor Bitcoin er godt for forretning — og derunder hver eneste ressource, du har brug for for at begynde at tage imod det i dag.",
	"business/index::business_resources_heading":
		"Alt du har brug for for at tage imod Bitcoin",
	"business/index::business_resources_intro":
		"Gennemgå disse ressourcer i dit eget tempo. Hver er en kort, praktisk guide.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Fortæl os om din virksomhed",
	"business/maps::biz_maps_form_intro":
		"Vi har bare brug for nogle få oplysninger for at få dig på kortet. Vi gemmer kun adresseoplysninger så længe som nødvendigt for at sende din virksomhed til kortene.",
	"business/maps::biz_maps_hero_subtitle":
		"Tilføj din virksomhed gratis til BTC Map — et åbent, verdensomspændende register over handlende, der tager imod Bitcoin — så Bitcoin-brugere i nærheden kan finde dig og bruge Bitcoin hos dig.",
	"business/maps::biz_maps_hero_title":
		"Sæt din virksomhed på Bitcoin-handelskort",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin-brugere søger aktivt efter steder at bruge deres penge. At være på kortet eksponerer din virksomhed over for enhver Bitcoin-bruger, der søger et sted at spise, handle eller bo i nærheden — helt gratis.",
	"business/maps::biz_maps_intro_c2":
		"Udfyld bare den korte formular nedenfor, så indsender vi din virksomhed til BTC Map og andre Bitcoin-handelskort.",
	"business/maps::biz_maps_meta_description":
		"Tilføj din virksomhed gratis til BTC Map og andre Bitcoin-handelskort, så Bitcoin-brugere i nærheden kan finde dig.",
	"business/maps::biz_maps_placeholder_address": "Gade og husnummer",
	"business/maps::biz_maps_placeholder_category":
		"Kategori (f.eks. restaurant, café, hotel)",
	"business/maps::biz_maps_placeholder_city": "By",
	"business/maps::biz_maps_placeholder_country": "Land",
	"business/maps::biz_maps_placeholder_name": "Virksomhedsnavn",
	"business/maps::biz_maps_placeholder_region":
		"Stat / region / provins",
	"business/maps::biz_maps_placeholder_website": "Hjemmeside (valgfri)",
	"business/maps::biz_maps_view_map_cta": "Se BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Se BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Tak fordi du indsendte din virksomhed. Vi får dig snart på Bitcoin-handelskortene.",
	"business/maps-success::biz_maps_success_hero_title":
		"Anmodning modtaget 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Din virksomhed vil blive tilføjet til BTC Map og andre Bitcoin-handelsregistre inden for 1 til 2 uger. Vi gennemgår hver indsendelse manuelt for at holde kortene nøjagtige.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Så snart din opførelse er live, vil Bitcoin-brugere i nærheden finde din virksomhed og komme forbi for at bruge Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Hvad sker der nu",
	"business/maps-success::biz_maps_success_view_c1":
		"Mens du venter, tjek BTC Map for at se det voksende netværk af virksomheder verden over, der tager imod Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Se hvor du kommer til at vises",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Download engelske klistermærkefiler til at printe dine egne „Bitcoin modtages her“-klistermærker.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Print dine egne „Bitcoin modtages her“-klistermærker på engelsk for at lade kunderne vide, at du tager imod Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Download engelske „Bitcoin modtages her“-klistermærkefiler",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Tak fordi du anmodede om „Bitcoin modtages her“-klistermærkefiler på dit sprog.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Anmodning modtaget 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vi opretter og udgiver dine klistermærkefiler inden for 3 til 4 uger. Så snart de er klar, kan du gratis downloade og printe dem fra vores klistermærkefil-side.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Vi udgiver klistermærkefiler i batches, så det kan tage et par uger, før dit sprog går live. Tak for din tålmodighed!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Hvad sker der nu",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Bestil i bulk",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Anmod om endnu en gratis pakke",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Du modtager dine gratis „Bitcoin modtages her“-klistermærker om 2 til 4 uger i en almindelig hvid konvolut med 3 klistermærker.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Dine klistermærker er på vej 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Hvis 3 klistermærker ikke er nok til din virksomhed, er du velkommen til at anmode om en anden gratis pakke — eller bestil i bulk fra samme printer, som vi bruger.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Har du brug for flere klistermærker?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"På din hoveddør eller vindue, så kunderne ser dem, før de kommer ind",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Nær kassen, betalingsterminalen eller stedet, hvor kunder betaler",
	"business/sticker-success::biz_sticker_success_tip_3":
		"På menuer, prislister eller drikkepengeglas",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Sæt dem ikke steder, du ikke ejer eller ikke har tilladelse til at sætte klistermærker",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Gode steder at sætte dine klistermærker",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Lad kunderne vide, at du tager imod Bitcoin. Bestil en gratis pakke „Bitcoin modtages her“-klistermærker at sætte op i din butik.",
	"business/stickers::biz_stickers_hero_title":
		"Gratis „Bitcoin modtages her“-klistermærker",
	"business/stickers::biz_stickers_intro_c1":
		"At tage imod Bitcoin er kun halvdelen af arbejdet — dine kunder skal også vide, at du accepterer det. Disse små „Bitcoin modtages her“-klistermærker er designet til at sidde på din hoveddør, kasse, menu eller hvor som helst kunder vil se dem, før de betaler.",
	"business/stickers::biz_stickers_intro_c2":
		"Vi sender dig en gratis pakke til enhver adresse i USA eller Canada, eller du kan printe dine egne hvor som helst i verden.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canada — gratis med posten",
	"business/stickers::biz_stickers_option_print":
		"🌍 Verdensomspændende — print dine egne",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — gratis med posten",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Oversættelse af udtrykket „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Oversættelse af udtrykket „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Du kan printe dine egne „Bitcoin modtages her“-klistermærker uanset hvor du bor. Klik på dit sprog nedenfor for at downloade klistermærkefilerne og printinstruktioner.",
	"business/stickers::biz_stickers_print_header":
		"Print dine egne klistermærkefiler",
	"business/stickers::biz_stickers_request_c1":
		"Udfyld formularen nedenfor for at anmode om „Bitcoin modtages her“-klistermærkefiler på dit lokale sprog. Vi giver dig besked, så snart de er klar.",
	"business/stickers::biz_stickers_request_header":
		"Kan du ikke se dit sprog?",
	"business/stickers::biz_stickers_step_description":
		"Vi sender en gratis pakke til adresser i USA og Canada. Alle andre steder i verden kan du printe dine egne.",
	"business/stickers::biz_stickers_step_header":
		"Hvordan vil du have dine klistermærker?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Alle Bitcoin-wallets fungerer sammen — vælg den, der passer til din virksomhed. Gratis, øjeblikkelig afregning, ingen chargebacks.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-only Lightning-wallet",
	"business/wallets::sources_ibex":
		"IBEX — infrastruktur til Lightning-betalinger",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin-betalingsbehandler",
	"business/wallets::sources_square":
		"Square — tag imod Bitcoin-betalinger",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin-fakturering for virksomheder",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-wallets er gratis. Vælg den, der passer til din virksomhed — personligt, online eller faktureret — og begynd at tage imod Bitcoin på få minutter.",
	"business/wallets::wallets_section_invoice":
		"Wallets til virksomheder, der fakturerer kunder",
	"business/wallets::wallets_section_invoice_intro":
		"Hvis du fakturerer kunder (rådgivning, freelance, B2B-tjenester), brug en wallet bygget omkring fakturering. Din kunde betaler Bitcoin-fakturaen med et par klik.",
	"business/wallets::wallets_section_multiple":
		"Wallets til virksomheder med flere medarbejdere",
	"business/wallets::wallets_section_multiple_intro":
		"Hvis du har et team, der tager imod betalinger i kassen, så vælg en wallet, der understøtter flere medarbejderlogin — så hver medarbejder får deres egen PIN, og du holder rene optegnelser over, hvem der tog imod hvilken betaling.",
	"business/wallets::wallets_section_online":
		"Wallets til onlinevirksomheder",
	"business/wallets::wallets_section_online_intro":
		"Sælger du på nettet? Disse wallets kobles ind i din onlinebutik og tager imod Bitcoin fra enhver kunde overalt i verden — ingen chargebacks og ingen handelskonto nødvendig.",
	"business/wallets::wallets_section_sole":
		"Wallets til enkeltmandsvirksomheder",
	"business/wallets::wallets_section_sole_intro":
		"Hvis du driver en butik, café, studie eller service på egen hånd, vil enhver af disse wallets fungere for dig. Vælg baseret på, om du vil beholde betalinger i Bitcoin eller automatisk konvertere noget af hver betaling til din lokale valuta.",
	"business/wallets::wallets_strike_note":
		"Strike Business lader dig tage imod Bitcoin- og Lightning-betalinger med nul gebyrer og øjeblikkelig afregning. Det understøtter personlige, online- og fakturabetalinger med valgfri automatisk konvertering til din lokale valuta.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin modtages her",
	"business/why::why_good_for_you":
		"Hvorfor Bitcoin også er godt for dig",
	"business/why::why_learn_more_lowercase": "Lær mere →",
	"business/why::why_s1_c1":
		"Inflation sker, når der trykkes flere penge, eller når de skabes ud af den blå luft. Det får pengene i din lomme til at miste værdi over tid — og det er derfor priserne stiger år for år.",
	"business/why::why_s1_c2":
		"Bitcoin har en fast forsyning på 21 millioner mønter. Ingen regering, bank eller virksomhed kan trykke mere. Dine Bitcoin-opsparinger holder deres værdi over tid i stedet for stille at miste den.",
	"business/why::why_s2_c1":
		"I de seneste år er flere amerikanske banker krakket på grund af bankpaniker. Da for mange kunder prøvede at hæve på samme tid, havde bankerne ikke kontanter nok til at udbetale dem alle.",
	"business/why::why_s2_c2":
		"I stedet for bare at opbevare dine penge udlåner og investerer banker det meste. Hvis disse investeringer mislykkes — eller indskydere mister tilliden — kan banken krakke, og dine indlån kan fryses eller tabes.",
	"business/why::why_s2_c3":
		"Med Bitcoin kan du opbevare dine penge direkte i din egen wallet. Ingen bank. Ingen mellemmand. Ingen bankpanik.",
	"business/why::why_s3_c1":
		"I modsætning til kreditkort, PayPal eller traditionelle bankkonti kræver Bitcoin ikke nogens tilladelse.",
	"business/why::why_s3_c2":
		"Ingen kan fryse din konto, blokere en betaling eller koble dig fra netværket. Det er det første finansielle system i historien, du kan bruge frit, uden frygt for censur eller konfiskation.",
	"business/why::why_s4_c1":
		"Bitcoin bliver ofte misforstået, men gør stille meget godt i verden.",
	"business/why::why_s4_c2":
		"Det har hjulpet menneskerettighedsaktivister i deres kamp for frihed, reduceret globale metanudledninger fra lossepladser og oliefelter, stabiliseret elnet og finansieret offentlige goder som nationalparker.",
	"business/why::why_biz_s1":
		"Lavere gebyrer, mere til virksomheden",
	"business/why::why_biz_s1_c1":
		"Bitcoin-betalinger går uden om banker og kortselskaber, der tager 2-3 % af hvert salg. Virksomheden beholder mere af det, du betaler — hvilket ofte betyder bedre priser og bedre service for dig.",
	"business/why::why_biz_s2":
		"Øjeblikkelig afregning, ingen chargebacks",
	"business/why::why_biz_s2_c1":
		"Bitcoin-betalinger afregnes på sekunder, direkte fra din wallet til virksomheden. Ingen ventetid i dagevis, mens banken frigiver midler, og ingen dyre chargeback-tvister — hvilket betyder, at virksomheden kan fokusere på at betjene kunder i stedet for at bekæmpe svindel.",
	"business/why::why_biz_s3":
		"Gratis at tage imod, åbent for alle",
	"business/why::why_biz_s3_c1":
		"Der er ingen kontrakter, månedlige gebyrer eller opstartsomkostninger for en virksomhed at tage imod Bitcoin. Og millioner af Bitcoin-brugere verden over leder aktivt efter handlende, der tager imod det — hvilket giver denne virksomhed gratis eksponering for nye kunder.",
	"business/why::why_business_cta_intro":
		"Ejer du en virksomhed og vil begynde at tage imod Bitcoin?",
	"business/why::why_business_cta_link":
		"Se hvordan det fungerer →",
	"business/why::why_for_business":
		"Hvorfor Bitcoin er godt for denne virksomhed",
	"business/why::why_for_business_intro":
		"Ved at tage imod Bitcoin beholder denne virksomhed mere af hvert salg, bliver betalt øjeblikkeligt uden chargebacks og når et globalt publikum af Bitcoin-brugere — alt sammen uden kontrakter eller månedlige gebyrer.",
	"business/why::why_good_for_you_intro":
		"Bitcoin er ikke kun nyttigt ved kassen — det er en bedre form for penge, der beskytter din opsparing, privatliv og frihed til at transagere. Her er en hurtig oversigt.",
	"business/why::why_hero_subtitle":
		"Du har lige scannet et „Bitcoin modtages her“-klistermærke. Her er hvorfor det er gode nyheder — for denne virksomhed og for dig.",
	"business/why::why_intro_c1":
		"Virksomheden, du er hos, tager imod Bitcoin — et moderne open source-betalingsnetværk, som alle hvor som helst i verden kan bruge, uden at banker og mellemmænd tager et snit.",
	"business/why::why_intro_c2":
		"Nedenfor er den korte version af, hvorfor det er godt for denne virksomhed at tage imod Bitcoin, plus hvorfor det er godt for dig som kunde at bruge Bitcoin.",
	"business/why::why_next_business_label": "TAG IMOD BITCOIN",
	"business/why::why_next_business_title":
		"Tag imod Bitcoin i din virksomhed",
	"business/why::why_next_buy_label": "KØB BITCOIN",
	"business/why::why_next_buy_title": "Køb din første Bitcoin",
	"business/why::why_next_learn_label": "LÆR MERE",
	"business/why::why_next_learn_title": "Lær mere om Bitcoin",
	"business/why::why_next_wallet_label": "FÅ EN WALLET",
	"business/why::why_next_wallet_title":
		"Få din egen Bitcoin-wallet",
	"business/why::why_whats_next_heading": "Hvor skal du hen nu?",
	"business/why::why_whats_next_intro":
		"Hvis det er første gang, du scanner et Bitcoin-klistermærke, er her de mest nyttige steder at tage hen næste.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer (direkte mellem brugere)",
	"buy::buy_bitcoin_guide": "Sådan køber du Bitcoin",
	"buy::buy_step_1_header": "Vælg dit land",
	"buy::buy_step_2_header": "Vælg din betalingsmetode",
	"buy::buy_step_3_header": "Dine købsmuligheder",
	"buy::buy_step_4_header": "Opbevar din Bitcoin sikkert",
	"buy::buy_header_subtitle":
		"En simpel trin-for-trin guide til at købe din første Bitcoin.",
	"buy::buy_howto_name": "Sådan køber du Bitcoin",
	"buy::buy_meta_description":
		"Lær at købe Bitcoin sikkert med vores trin-for-trin-guide. Vælg dit land og betalingsmetode for at finde de bedste Bitcoin-købsmuligheder for dig.",
	"buy::buy_step_1_eyebrow": "Trin 1",
	"buy::buy_step_2_eyebrow": "Trin 2",
	"buy::buy_step_3_eyebrow": "Trin 3",
	"buy::buy_step_4_eyebrow": "Trin 4",
	"buy::buy_storage_cta_label": "Næste skridt",
	"buy::sources_bisq":
		"Bisq — decentraliseret peer-to-peer Bitcoin-børs",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — verdensomspændende register over Bitcoin-pengeautomater",
	"buy::sources_kraken": "Kraken — etableret Bitcoin-børs",
	"buy::sources_relai":
		"Relai — schweizisk app til Bitcoin-selvforvaring",
	"buy::sources_river":
		"River — Bitcoin-only køb, mining og opbevaring",
	"buy::sources_strike_lightning":
		"Strike — Bitcoin-køb med Lightning Network-understøttelse",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin-only dollar-cost averaging",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Tilføj et sprog",
	"common::common_next_buy_bitcoin": "Køb Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Lær at købe Bitcoin sikkert",
	"common::common_next_calculate": "Beregn din inflation",
	"common::common_next_calculate_desc":
		"Se hvordan inflation påvirker din løn over tid",
	"common::common_next_get_wallet": "Få en wallet",
	"common::common_next_get_wallet_desc":
		"Få din første Bitcoin-wallet — det er gratis",
	"common::common_next_keep_learning": "Bliv ved med at lære",
	"common::common_next_keep_learning_desc":
		"Se hvordan Bitcoin gør verden bedre",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — forbrugerprisindeks (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — pengemængde (kategoriindeks)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Kan en Treasury-auktion mislykkes?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Hvad er det næste?",
	"common::common_sticker_files_mission_5": "anmod om en pakke",
	"common::common_site_tagline": "Bitcoin-undervisning for alle.",
	"common::common_source_btc_map":
		"BTC Map — verdensomspændende register over handlende, der tager imod Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — gratis open source-selvhostet Bitcoin-betalingsbehandler",
	"common::common_source_oshi":
		"Oshi — Bitcoin-belønningsplatform for handlende",
	"common::common_source_strike_business":
		"Strike — Bitcoin og Lightning-betalinger for virksomheder",
	"common::common_sources_group_bitcoin": "Bitcoin-data",
	"common::common_sources_group_cpi":
		"Inflation / forbrugerprisindeks",
	"common::common_sources_group_debt": "Statsgæld",
	"common::common_sources_group_money": "Pengemængde-data",
	"common::common_sources_group_stories": "Eksempler fra virkeligheden",
	"common::common_sticker_files_mission_6":
		"gratis engelske klistermærker.",
	"common::common_sticker_files_next_flyers_label": "Flyers",
	"common::common_sticker_files_next_flyers_title":
		"Print en Bitcoin-flyer",
	"common::common_sticker_files_next_languages_label":
		"Klistermærkefiler",
	"common::common_sticker_files_next_languages_title":
		"Se klistermærkefiler på andre sprog",
	"common::common_sticker_files_print_these":
		"PRINT DISSE MED 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"„Bitcoin Doesn\u2019t Have Inflation“-klistermærke (sort)",
	"common::common_sticker_name_bdhi_orange":
		"„Bitcoin Doesn\u2019t Have Inflation“-klistermærke (orange)",
	"common::common_sticker_name_caution":
		"Bitcoin „Caution! Melting Ice Cube“-klistermærke",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin „Cure Inflation“-klistermærke",
	"common::common_sticker_name_danger":
		"Bitcoin „Danger! Inflation Ahead“-klistermærke",
	"common::common_sticker_name_fix":
		"Bitcoin „Fix The Money, Fix The World“-klistermærke",
	"common::common_sticker_name_got_inflation":
		"Bitcoin „Got Inflation?“-klistermærke",
	"common::common_sticker_name_study":
		"„Study Bitcoin“-klistermærke",
	"common::common_sticker_name_warning":
		"Bitcoin „Warning! Inflation is Stealing Your Savings“-klistermærke",
	"common::common_sticker_name_what_if":
		"Bitcoin „What if your money didn\u2019t have inflation?“-klistermærke",
	"common::common_sticker_tips_heading": "Klistermærke-tips",
	"common::common_sticker_tips_intro":
		"Når du har printet dine klistermærker, så sæt dem steder, hvor folk vil se dem! Gode steder inkluderer:",
	"common::common_sticker_tips_list_1":
		"offentlige steder, hvor folk vil bemærke dem",
	"common::common_sticker_tips_list_2":
		"steder, hvor de sandsynligvis ikke bliver fjernet med det samme (klistermærker forårsager ingen varig skade)",
	"common::common_sticker_tips_list_3":
		"overflader, hvor de sidder godt fast (metal, plast, glas)",
	"common::common_sticker_tips_list_4":
		"IKKE på privat ejendom, henover færdselsskilte, hæveautomater eller benzinpumper",
	"common::common_stickers_printer_prefix": "Vi bruger",
	"common::common_stickers_printer_suffix":
		"men du kan bruge enhver klistermærke-printer.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — forbrugerprisindeks for alle byforbrugere",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1-pengemængde",
	"compound-inflation-calculator::cic_calculator_heading":
		"Beregn dit inflationsgab",
	"compound-inflation-calculator::cic_cta_label": "Næste skridt",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Find ud af, hvor meget din løn skal stige for at følge med inflationen.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Udforsk flere emner",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Se hvordan Bitcoin relaterer sig til penge, frihed, energi og mere.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Lær hvordan inflation fungerer",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Sådan printer og hænger du disse Bitcoin-flyers op",
	"flyers::flyers_hero_subtitle":
		"Gratis, printbare Bitcoin-flyers. Hæng dem op på offentlige steder for at hjælpe flere med at lære om Bitcoin.",
	"flyers::flyers_hero_title": "Print og hæng Bitcoin-flyers op",
	"flyers::flyers_next_get_stickers": "Spred budskabet",
	"flyers::flyers_next_get_stickers_desc":
		"Bestil en gratis pakke Bitcoin-klistermærker",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Engager dig og spred Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Vil du hjælpe med at opbygge en cirkulær Bitcoin-økonomi? Den nemmeste måde er at hjælpe lokale virksomheder med at begynde at tage imod Bitcoin-betalinger.",
	"get-involved::get_involved_business_content_2":
		"Kender du en virksomhed, der ville være åben for dette? Send ejeren til vores",
	"get-involved::get_involved_business_content_3":
		"Bitcoin for virksomheder-side.",
	"get-involved::get_involved_description":
		"Vores gratis ressourcer gør det nemt at sprede Bitcoin-adoption. Klistermærker, flyers, „Bitcoin modtages her“-klistermærker til virksomheder og open source-kode, som alle kan bidrage til.",
	"get-involved::get_involved_header":
		"Engager dig og spred Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Du kan hjælpe med at ændre dette. Vi har lavet nogle få gratis ressourcer, der gør det nemt at sprede det håb, Bitcoin bringer til dit lokalsamfund.",
	"get-involved::get_involved_biz_stickers_note":
		"Tager du allerede imod Bitcoin? Lad dine kunder vide det med vores gratis „Bitcoin modtages her“-klistermærker. Vi sender en pakke til enhver adresse i USA eller Canada, eller du kan printe dine egne hvor som helst i verden.",
	"get-involved::get_involved_card_biz_stickers_label":
		"„Modtages her“-klistermærker",
	"get-involved::get_involved_card_biz_stickers_source":
		"Kilde: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Gratis „Bitcoin modtages her“-klistermærker til din virksomhed",
	"get-involved::get_involved_card_business_label":
		"Bitcoin for virksomheder",
	"get-involved::get_involved_card_business_source":
		"Kilde: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Alt en virksomhed behøver for at begynde at tage imod Bitcoin-betalinger",
	"get-involved::get_involved_card_flyers_label": "Printbare flyers",
	"get-involved::get_involved_card_flyers_source":
		"Kilde: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Download og print en gratis Bitcoin-flyer",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source": "Kilde: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Bidrag til bitcoin.rocks på GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Gratis klistermærker",
	"get-involved::get_involved_card_stickers_source":
		"Kilde: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Anmod om en gratis pakke Bitcoin-klistermærker leveret til din dør",
	"get-involved::get_involved_flyers_content_1":
		"Flyers er en af de nemmeste måder at introducere Bitcoin til dit lokalsamfund. Download vores gratis, printbare Bitcoin-flyer, print så mange kopier du vil, og hæng dem op på opslagstavler, i cafeer, til meetups eller hvor som helst folk samles.",
	"get-involved::get_involved_flyers_content_2":
		"Hver flyer har en opmærksomhedsvækkende overskrift og en QR-kode, der leder nysgerrige læsere til bitcoin.rocks for at lære mere.",
	"get-involved::get_involved_flyers_content_3":
		"I modsætning til klistermærker kan flyers printes on demand fra hvor som helst i verden — du behøver kun en printer og et par minutter.",
	"get-involved::get_involved_flyers_header":
		"Print og hæng en flyer op",
	"get-involved::get_involved_flyers_image_alt":
		"Forhåndsvisning af den gratis, printbare Bitcoin-flyer fra bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks er et gratis open source-projekt under MIT-licensen. Vores mission er at accelerere Bitcoin-adoption gennem uddannelse — og vi kan ikke gøre det alene.",
	"get-involved::get_involved_github_content_2":
		"Uanset om du er udvikler, designer, tekstforfatter eller oversætter, er der en måde, du kan hjælpe. Vi byder især velkommen til bidragydere, der kan oversætte vores indhold til flere sprog, så folk verden over kan lære om Bitcoin på deres modersmål.",
	"get-involved::get_involved_github_content_3":
		"Fork vores repository, åbn en pull request, opret et issue eller stjerne-boost projektet. Hvert bidrag hjælper Bitcoin med at nå flere mennesker.",
	"get-involved::get_involved_github_header":
		"Bidrag på GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"En pakke gratis Bitcoin-tekstklistermærker fra bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "opsparing",
	"index::home_card_label_art_1": "Lad os sammenligne",
	"index::home_card_label_art_2": "Spred budskabet",
	"index::home_card_label_art_3": "Gadekunst",
	"index::home_card_label_bank_runs": "Fuldt reservesystem",
	"index::home_card_label_bonds": "Lad os sammenligne",
	"index::home_card_label_business_1": "Hvad er forskellen?",
	"index::home_card_label_business_2": "Tag imod Bitcoin-betalinger",
	"index::home_card_label_cash": "Lad os sammenligne",
	"index::home_card_label_cbdc": "Åbent eller lukket?",
	"index::home_card_label_coding_1": "Interaktiv tutorial",
	"index::home_card_label_coding_2": "Byg hardware",
	"index::home_card_label_coding_3": "Programmeringsudfordringer",
	"index::home_card_label_crowdfunding_1": "EndSARS-protester",
	"index::home_card_label_crowdfunding_2": "Penge der ikke kan stoppes",
	"index::home_card_label_crowdfunding_3": "Finansier dit projekt",
	"index::home_card_label_crypto": "Hvad er forskellen?",
	"index::home_card_label_energy_1": "Stabilisering af elnet",
	"index::home_card_label_energy_4": "Styring af efterspørgsel",
	"index::home_card_label_energy_5": "Elektrificering af landdistrikter",
	"index::home_card_label_energy_6": "Incitamenter til vedvarende energi",
	"index::home_card_label_environment_1": "Reduktion af metan",
	"index::home_card_label_environment_2": "Reddede en nationalpark",
	"index::home_card_label_environment_3": "Den grønneste industri",
	"index::home_card_label_environment_4": "Reducerer afbrænding af gas",
	"index::home_card_label_equality_1": "Håb og muligheder",
	"index::home_card_label_equality_2": "Den store udligner",
	"index::home_card_label_food_1": "Fødevarepriser",
	"index::home_card_label_food_2": "Gårde og jord",
	"index::home_card_label_freedom_1": "Autoritære regimer",
	"index::home_card_label_freedom_2": "Et unikt værktøj",
	"index::home_card_label_get_started_1":
		"Begynderens grundlag",
	"index::home_card_label_get_started_2": "Din første wallet",
	"index::home_card_label_get_started_3": "Køb Bitcoin",
	"index::home_card_label_gold": "Hvilken er bedst?",
	"index::home_card_label_housing_1": "Økonomisk overkommelig bolig",
	"index::home_card_label_human_rights_1":
		"Fremme af menneskerettigheder",
	"index::home_card_label_human_rights_2": "Græsrodsadoption",
	"index::home_card_label_human_rights_3": "Globalt aftryk",
	"index::home_card_label_inflation": "Bitcoin er bedre penge",
	"index::home_card_label_networks_1": "Live netværksvisning",
	"index::home_card_label_networks_2": "Lad os sammenligne",
	"index::home_card_label_payments_1": "Hvad er forskellen?",
	"index::home_card_label_payments_2": "Hurtige og billige betalinger",
	"index::home_card_label_payments_3": "Overførsler til udlandet",
	"index::home_card_label_payments_4": "Tag imod betalinger",
	"index::home_card_label_politics_1": "Det politiske paradoks",
	"index::home_card_label_politics_2": "Gå all in",
	"index::home_card_label_property_rights_1": "Lad os sammenligne",
	"index::home_card_label_property_rights_2": "Sandt ejerskab",
	"index::home_card_label_salary": "Beskyt din løn",
	"index::home_card_label_self_custody_1": "Guide til Bitcoin-wallets",
	"index::home_card_label_self_custody_2": "Det vigtigste trin",
	"index::home_card_label_self_custody_3": "Suveræne penge",
	"index::home_card_label_war_1": "Afslutter evige krige",
	"index::home_card_label_war_2": "Hjælper veteraner",
	"index::home_card_label_war_3": "Flygter fra krig",
	"index::home_h1":
		"Bitcoin er bedre penge, der bygger en bedre verden.",
	"index::home_nav_about": "Om",
	"index::home_nav_get_involved": "Engager dig",
	"index::home_nav_learn": "Lær",
	"index::home_source_prefix": "Kilde:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon og Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Se vores",
	"lightning::lightning_grid_heading":
		"Populære Lightning-wallets",
	"lightning::lightning_hardware_cta_label":
		"Hardware-wallets",
	"lightning::lightning_header_subtitle":
		"Lightning lader dig sende Bitcoin på sekunder for en brøkdel af en øre — vælg en wallet, hvis afvejninger matcher, hvor meget Bitcoin du planlægger at bruge.",
	"lightning::lightning_s1_c4_end": "for mere information.",
	"lightning::lightning_s1_c4_link":
		"Guide til Bitcoin-hardware-wallets",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning-wallet",
	"lightning::sources_breez_lightning":
		"Breez — selvforvaret Lightning-wallet",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentation for Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — depot-Lightning-wallet",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android og web",
	"nostr/index::nostr_platform_web": "Webbrowser",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr er en ny decentraliseret protokol for onlinekommunikation — ingen virksomhed ejer den, Bitcoin-zaps er indbygget, og du kan skifte klient uden at miste følgere.",
	"nostr/index::nostr_amethyst_f1":
		"Mange funktioner og tilpasningsmuligheder",
	"nostr/index::nostr_amethyst_f2":
		"Kræver en separat Bitcoin-wallet",
	"nostr/index::nostr_amethyst_f3": "100 % gratis",
	"nostr/index::nostr_damus_f1":
		"Velkendt Twitter-lignende grænseflade",
	"nostr/index::nostr_damus_f2":
		"Kræver en separat Bitcoin-wallet",
	"nostr/index::nostr_damus_f3": "100 % gratis",
	"nostr/index::nostr_download_heading":
		"Download en gratis Nostr-klient",
	"nostr/index::nostr_download_intro":
		"Nostr-klienter er gratis apps, der lader dig læse og skrive på Nostr-netværket. De fungerer alle sammen — du kan skifte klient når som helst og beholde dine følgere og dit indhold.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr er en ny decentraliseret protokol for onlinekommunikation — ingen virksomhed ejer den, Bitcoin-zaps er indbygget, og du kan skifte mellem apps uden at miste følgere.",
	"nostr/index::nostr_hero_title": "Hvad er Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr minder om e-mail: protokollen er ikke ejet af nogen, hvem som helst kan bygge en app oven på den, og du vælger den, der passer bedst til dig. I modsætning til Twitter eller Facebook er der ingen central virksomhed, der kan censurere dig, forvise dig eller nedtone dig.",
	"nostr/index::nostr_intro_c2":
		"Nedenfor er den korte version af, hvorfor Nostr betyder noget — og så hver eneste gratis Nostr-klient, du har brug for for at komme i gang i dag.",
	"nostr/index::nostr_iris_f1":
		"Ekstremt simpel — ingen installation nødvendig",
	"nostr/index::nostr_iris_f2":
		"Nem måde at prøve Nostr med en testkonto",
	"nostr/index::nostr_iris_f3": "100 % gratis",
	"nostr/index::nostr_learn_more_label": "GÅ DYBERE",
	"nostr/index::nostr_learn_more_title":
		"Lær mere om Nostr på nostr.how",
	"nostr/index::nostr_primal_f1": "Vores anbefalede førsteklient",
	"nostr/index::nostr_primal_f2":
		"Indbygget Bitcoin-zap-wallet",
	"nostr/index::nostr_primal_f3": "100 % gratis",
	"nostr/index::nostr_s1": "En protokol, ikke en platform",
	"nostr/index::nostr_s1_c1":
		"Nostr er en ny protokol, der lader dig kommunikere online uden frygt for censur, udelukkelse eller nedtoning.",
	"nostr/index::nostr_s1_c2":
		"Platforme som Twitter og Facebook kontrolleres af en enkelt virksomhed, men Nostr-protokollen er ikke kontrolleret af nogen.",
	"nostr/index::nostr_s2": "Frihed til at flytte dig",
	"nostr/index::nostr_s2_c1":
		"Nostr minder om e-mail. Ingen kontrollerer e-mail-protokollen, og hvem som helst kan bygge en klient oven på den (som Gmail, Hotmail osv.).",
	"nostr/index::nostr_s2_c2":
		"Nostr-protokollen er heller ikke kontrolleret af nogen, og hvem som helst kan bygge en klient oven på den (som Damus, Amethyst osv.).",
	"nostr/index::nostr_s2_c3":
		"Hvis du ikke kan lide, hvordan en bestemt klient fungerer, kan du flytte din Nostr-konto til en anden klient uden at miste dine følgere eller dit indhold.",
	"nostr/index::nostr_s3": "Bitcoin er indbygget",
	"nostr/index::nostr_s3_c1":
		"Bitcoin er indbygget i Nostr-protokollen. Når du ser indhold, du kan lide, kan du nemt sende forfatteren et „Bitcoin-zap“ som tak!",
	"nostr/index::nostr_s3_c2":
		"På centraliserede platforme som Twitter og Facebook tjener en central virksomhed penge på dit indhold. Men på åbne protokoller som Nostr tjener du penge på dit eget indhold.",
	"nostr/index::sources_damus": "Damus — Nostr-klient til iPhone",
	"nostr/index::sources_iris": "Iris — Nostr-klient i browseren",
	"nostr/index::sources_nostr_how": "nostr.how — Hvad er Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — open source-specifikation",
	"nostr/index::sources_primal":
		"Primal — Nostr-klient med indbygget Bitcoin-zap-wallet",
	"nostr/index::what_is_nostr": "Hvad er Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Print dine egne Bitcoin-klistermærker ved hjælp af disse filer.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Anmodning modtaget 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Bestil i bulk",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Del på Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Hvad er Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Har du brug for flere klistermærker?",
	"sticker-success::sticker_success_hero_title":
		"Dine klistermærker er på vej 🎉",
	"sticker-success::sticker_success_share_header":
		"Del hvor du har sat klistermærkerne op",
	"sticker-success::sticker_success_tips_header":
		"Gode steder at sætte klistermærker",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Og når du er i gang, så print og hæng også din egen",
	"stickers::stickers_instructions_1":
		"Indtast din postadresse, så sender vi dig en gratis pakke Bitcoin-klistermærker med posten. Dine klistermærker ankommer i en almindelig hvid konvolut.",
	"stickers::stickers_btn_choose_pack": "Vælg denne pakke",
	"stickers::stickers_bulk_c1":
		"Vil du have flere end et par klistermærker?",
	"stickers::stickers_bulk_c2":
		"Bestil dem i bulk fra samme printer, vi bruger",
	"stickers::stickers_bulk_c3":
		"— jo flere du køber, jo billigere er de pr. stk.",
	"stickers::stickers_bulk_cta": "Køb klistermærker i bulk",
	"stickers::stickers_bulk_header":
		"Bestil klistermærker i bulk",
	"stickers::stickers_hero_subtitle":
		"Bestil en gratis pakke Bitcoin-klistermærker og hæng dem op på offentlige steder for at hjælpe flere med at lære om Bitcoin.",
	"stickers::stickers_hero_title": "Gratis Bitcoin-klistermærker",
	"stickers::stickers_intro_c1":
		"Vores mission er at hjælpe dig med at „orange-pille“ flere mennesker ved at sætte Bitcoin-klistermærker op på offentlige steder. Alle vores klistermærker har QR-koder, der linker til undervisningssider om",
	"stickers::stickers_intro_c3": "inflation",
	"stickers::stickers_intro_c4":
		"Vælg en klistermærkepakke nedenfor og vælg, hvordan du vil have dem — vi sender en gratis pakke til enhver i USA eller Canada, eller du kan printe dine egne hvor som helst i verden.",
	"stickers::stickers_mail_header":
		"Vi sender dine klistermærker med posten gratis",
	"stickers::stickers_next_print_flyers": "Spred budskabet videre",
	"stickers::stickers_next_print_flyers_desc":
		"Print gratis Bitcoin-flyers og hæng dem op offentligt",
	"stickers::stickers_option_bulk":
		"📦 Verdensomspændende — bestil i bulk",
	"stickers::stickers_option_canada":
		"🇨🇦 Canada — gratis med posten",
	"stickers::stickers_option_print":
		"🌍 Verdensomspændende — print dine egne",
	"stickers::stickers_option_usa":
		"🇺🇸 USA — gratis med posten",
	"stickers::stickers_print_c1":
		"Du kan engagere dig ved at printe dine egne klistermærker uanset hvor du bor. Klik på dit sprog nedenfor for at downloade klistermærkefilerne og printinstruktioner.",
	"stickers::stickers_print_c2":
		"Ikke alle klistermærker er tilgængelige på alle sprog.",
	"stickers::stickers_print_header":
		"Print dine egne klistermærkefiler",
	"stickers::stickers_request_c1":
		"Udfyld formularen nedenfor for at anmode om klistermærkefiler på dit lokale sprog. Vi giver dig besked, så snart de er klar.",
	"stickers::stickers_request_header":
		"Kan du ikke se dit sprog?",
	"stickers::stickers_share_c2":
		"Følg os på Nostr ved at søge efter",
	"stickers::stickers_share_c3":
		"i enhver Nostr-klient.",
	"stickers::stickers_signs_pack_description":
		"Advarsels-, advarsels- og opmærksomhedsskilte med Bitcoin-budskaber — designet til at fange opmærksomheden og få folk til at stoppe op og læse.",
	"stickers::stickers_step_1_description":
		"Hver pakke indeholder et forskelligt sæt Bitcoin-klistermærker med QR-koder, der lærer folk om Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "TRIN 1",
	"stickers::stickers_step_1_header":
		"Vælg en klistermærkepakke",
	"stickers::stickers_step_2_description":
		"Vi sender en gratis pakke til adresser i USA og Canada. Alle andre steder i verden kan du printe dine egne eller bestille i bulk.",
	"stickers::stickers_step_2_eyebrow": "TRIN 2",
	"stickers::stickers_step_2_header":
		"Hvordan vil du have dine klistermærker?",
	"stickers::stickers_text_pack_description":
		"En blanding af Bitcoin-slogans og one-liners designet til at vække nysgerrighed på offentlige steder.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Vælg din wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — anmeldelser af metalopbevaring til Bitcoin-seed",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — selvforvaret Bitcoin-wallet",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin-hardware-wallet",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardware-wallet",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardware-wallet",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardware-wallet",
	"wallets::sources_seedsigner":
		"SeedSigner — open source-DIY-signeringsenhed til Bitcoin-transaktioner",
	"wallets::wallets_grid_heading": "Populære Bitcoin-wallets",
	"wallets::wallets_header_subtitle":
		"En trin-for-trin guide til at vælge en wallet, beskytte dine nøgler og tage fuld kontrol over din Bitcoin.",
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
		`translate-rest-part2 (da): filled ${filled}, already-done ${skipped}`,
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
