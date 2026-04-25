"use strict";

const fs = require("fs");
const path = require("path");

const CHUNK_PATH = path.resolve(
	__dirname,
	"chunks",
	"sv-chunk3.json"
);

// Translation lookup keyed by `${namespace}::${key}`.
const T = {
	// ---------- business/accounting ----------
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title": "Bokföringstjänster från Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 USD",
	"business/accounting::accounting_example_loss_result": "−10 USD",
	"business/accounting::accounting_description":
		"En lättförståelig guide för att ta emot Bitcoin i din bokföring – hybridplånböcker, anskaffningskostnad, kapitalvinster och när det är dags att ringa en revisor.",
	"business/accounting::accounting_s1_c1":
		"Det enklaste sättet att ta emot Bitcoin är med en hybridplånbok som automatiskt säljer 100 % av den Bitcoin du tar emot mot dollar (eller din lokala valuta) i samma stund som betalningen kommer in.",
	"business/accounting::accounting_s1_c2":
		"Med den här lösningen ser din bokföring exakt likadan ut som idag – slutsumman är alltid i dollar, varje gång. Ingen anskaffningskostnad, inga kapitalvinster, inga nya kalkylblad.",
	"business/accounting::accounting_s2":
		"Om du behåller en del Bitcoin: spåra din anskaffningskostnad",
	"business/accounting::accounting_s2_c1":
		"En del företag väljer att behålla en del av den Bitcoin de tar emot istället för att växla allt automatiskt. Om det stämmer in på dig är det främsta extra steget att spåra din anskaffningskostnad – dollarvärdet för varje Bitcoin-betalning den dag du tog emot den.",
	"business/accounting::accounting_s2_c2":
		"Även om du tänker på ditt företag helt och hållet i Bitcoin, vill de flesta skattemyndigheter fortfarande att dollarvärdet rapporteras. Den goda nyheten: det är bara två siffror per transaktion – mängden mottagen Bitcoin och dess dollarvärde den dagen.",
	"business/accounting::accounting_s2_c3":
		"Använd verktygen nedan för att automatisera uppslagningen så att du slipper kontrollera priser varje dag.",
	"business/accounting::accounting_s3":
		"Att spendera eller sälja den Bitcoin du har behållit",
	"business/accounting::accounting_s3_c1":
		"Om du växlar varje betalning till dollar automatiskt kan du hoppa över det här avsnittet – det gäller inte dig.",
	"business/accounting::accounting_s3_c2":
		"Om du har behållit en del Bitcoin och senare bestämmer dig för att spendera eller sälja den, lägg till försäljningspriset i samma kalkylblad för anskaffningskostnad. Skillnaden mellan vad din Bitcoin var värd när du tog emot den och vad den är värd när du spenderar eller säljer den är en kapitalvinst eller kapitalförlust.",
	"business/accounting::accounting_s3_c3": "Två snabba exempel:",
	"business/accounting::accounting_s4":
		"Behöver du en revisor som förstår Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Om du hellre vill lämna över det här – eller om din Bitcoin-bokföring är mer komplex än vad en hybridplånbok klarar av – rekommenderar vi varmt Satoshi Pacioli Accounting Services, en byrå som specialiserar sig på Bitcoin-bokföring för företag.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin-bokföring för ditt företag",
	"business/accounting::accounting_card_bpr_label": "BITCOIN-PRIS",
	"business/accounting::accounting_card_bpr_title":
		"Slå upp Bitcoins aktuella eller historiska dollarpris",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN-REVISORER",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL-IMPORT",
	"business/accounting::accounting_card_spreadsheet_title":
		"Hämta Bitcoin-priser till Excel automatiskt",
	"business/accounting::accounting_card_wallets_label": "HYBRIDPLÅNBÖCKER",
	"business/accounting::accounting_card_wallets_title":
		"Se våra rekommenderade företagsplånböcker",
	"business/accounting::accounting_disclaimer":
		"Den här guiden är endast i informationssyfte och ska inte ses som skatterådgivning. För skatteråd som passar din situation, kontakta en kvalificerad revisor.",
	"business/accounting::accounting_disclaimer_label": "Observera",
	"business/accounting::accounting_example_feb_1": "1 feb",
	"business/accounting::accounting_example_gain_badge": "Kapitalvinst",
	"business/accounting::accounting_example_gain_explain":
		"Du bokför en kapitalvinst på 10 USD.",
	"business/accounting::accounting_example_jan_1": "1 jan",
	"business/accounting::accounting_example_loss_badge": "Kapitalförlust",
	"business/accounting::accounting_example_loss_explain":
		"Du bokför en kapitalförlust på 10 USD.",
	"business/accounting::accounting_example_received_label": "Mottaget",
	"business/accounting::accounting_example_sold_label": "Sålt eller spenderat",
	"business/accounting::accounting_hero_subtitle":
		"Att ta emot Bitcoin i ditt företag behöver inte krångla till bokföringen. Här kommer kortversionen – plus verktygen och proffsen som gör det smärtfritt.",
	"business/accounting::accounting_intro_c1":
		"Om du redan tar emot kontanter eller kort är det enklare än det ser ut att lägga till Bitcoin i företagets bokföring. Du har två vägar: växla varje Bitcoin-betalning till dollar automatiskt i samma stund den kommer in (ingen ny bokföring krävs), eller behåll en del som Bitcoin (några extra siffror att hålla koll på).",
	"business/accounting::accounting_intro_c2":
		"Den här guiden går igenom båda – så att du kan välja det som passar ditt företag och börja ta emot Bitcoin med självförtroende.",
	"business/accounting::accounting_s1":
		"Den enkla vägen: växla automatiskt till dollar",
	"business/accounting::accounting_s3_c6":
		"Det är allt. Den underliggande matematiken är identisk med hur vilken annan tillgång som helst som ökar eller minskar i värde bokförs.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoins aktuella och historiska dollarpris",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin-bokföring för företag",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Importera kryptovalutapriser till Excel",

	// ---------- business/sticker-files/english/index ----------
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Engelska klistermärkesfiler ”Bitcoin Accepted Here”",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Ladda ner engelska klistermärkesfiler för att skriva ut dina egna ”Bitcoin Accepted Here”-klistermärken.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Skriv ut dina egna ”Bitcoin Accepted Here”-klistermärken på engelska för att visa kunderna att du tar emot Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Ladda ner engelska klistermärkesfiler ”Bitcoin Accepted Here”",

	// ---------- business/wallets ----------
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Alla Bitcoin-plånböcker fungerar tillsammans – välj den som passar ditt företag. Gratis, omedelbar avveckling, inga återkrav.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-only Lightning-plånbok",
	"business/wallets::sources_ibex":
		"IBEX — Infrastruktur för Lightning-betalningar",
	"business/wallets::sources_opennode":
		"OpenNode — Betalleverantör för Bitcoin",
	"business/wallets::sources_square": "Square — Ta emot Bitcoin-betalningar",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin-fakturering för företag",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-plånböcker är gratis. Välj en som passar ditt företag – på plats, online eller fakturabaserad – och börja ta emot Bitcoin på några minuter.",
	"business/wallets::wallets_section_invoice":
		"Plånböcker för fakturabaserade företag",
	"business/wallets::wallets_section_invoice_intro":
		"Om du fakturerar kunder (konsulttjänster, frilansuppdrag, B2B-tjänster), använd en plånbok som är byggd kring fakturering. Din kund betalar en Bitcoin-faktura med ett par klick.",
	"business/wallets::wallets_section_multiple":
		"Plånböcker för företag med flera anställda",
	"business/wallets::wallets_section_multiple_intro":
		"Om du har ett team som tar emot betalningar i kassan, välj en plånbok som stöder inloggning för flera anställda – så att varje anställd får sin egen PIN-kod och du behåller en tydlig spårbarhet över vem som tagit emot vilken betalning.",
	"business/wallets::wallets_section_online": "Plånböcker för onlineföretag",
	"business/wallets::wallets_section_online_intro":
		"Säljer du via en webbplats? Dessa plånböcker kopplas in i din webbutik och tar emot Bitcoin från vilken kund som helst, var som helst i världen – inga återkrav, inget säljkonto krävs.",
	"business/wallets::wallets_section_sole":
		"Plånböcker för enskilda näringsidkare",
	"business/wallets::wallets_section_sole_intro":
		"Om du driver en butik, ett kafé, en studio eller en tjänst på egen hand fungerar vilken som helst av dessa plånböcker. Välj utifrån om du vill behålla betalningarna i Bitcoin eller automatiskt växla en del av varje betalning till din lokala valuta.",
	"business/wallets::wallets_strike_note":
		"Strike Business låter dig ta emot Bitcoin- och Lightning-betalningar med noll avgifter och omedelbar avveckling. Stöder betalningar på plats, online och fakturabaserade, med valfri automatisk växling till din lokala valuta.",

	// ---------- business/why ----------
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin tas emot här",
	"business/why::why_good_for_you": "Varför Bitcoin är bra för dig också",
	"business/why::why_learn_more_lowercase": "Läs mer →",
	"business/why::why_s1_c1":
		"Inflation uppstår när mer pengar trycks eller skapas ur tomma intet. Det gör att pengarna i din ficka blir värda mindre över tid – och det är därför priserna fortsätter att stiga år efter år.",
	"business/why::why_s1_c2":
		"Bitcoin har ett fast utbud på 21 miljoner mynt. Ingen regering, bank eller företag kan trycka mer av det. Ditt sparande i Bitcoin behåller sitt värde över tid istället för att tyst tappa det.",
	"business/why::why_s2_c1":
		"Flera amerikanska banker har kollapsat de senaste åren på grund av bankrusningar. När för många kunder försökte ta ut sina pengar samtidigt hade bankerna inte tillräckligt med likvida medel för att betala tillbaka alla.",
	"business/why::why_s2_c2":
		"Istället för att bara förvara dina pengar lånar och investerar bankerna ut det mesta. Om de investeringarna går dåligt – eller om insättarna tappar förtroendet – kan banken gå omkull, och dina insättningar kan frysas eller gå förlorade.",
	"business/why::why_s2_c3":
		"Med Bitcoin kan du förvara dina egna pengar direkt i din egen plånbok. Ingen bank. Ingen mellanhand. Ingen bankrusning.",
	"business/why::why_s3_c1":
		"Till skillnad från kreditkort, PayPal eller traditionella bankkonton kräver Bitcoin inte någons tillstånd för att användas.",
	"business/why::why_s3_c2":
		"Ingen kan frysa ditt konto, blockera en betalning eller stänga av dig från nätverket. Det är det första finansiella systemet i historien som du kan använda fritt, utan oro för censur eller konfiskering.",
	"business/why::why_s4_c1":
		"Bitcoin missförstås ofta, men gör i tysthet mycket gott i världen.",
	"business/why::why_s4_c2":
		"Det har hjälpt människorättsaktivister att kämpa för frihet, minskat globala metanutsläpp från soptippar och oljefält, stabiliserat elnät och finansierat allmännyttiga ändamål som nationalparker.",
	"business/why::why_biz_s1": "Lägre avgifter, mer kvar för företaget",
	"business/why::why_biz_s1_c1":
		"Bitcoin-betalningar går förbi bankerna och kreditkortsbolagen som tar 2–3 % av varje försäljning. Företaget får behålla mer av det du betalar – vilket ofta innebär bättre priser och bättre service för dig.",
	"business/why::why_biz_s2": "Omedelbar avveckling, inga återkrav",
	"business/why::why_biz_s2_c1":
		"Bitcoin-betalningar avvecklas på några sekunder, direkt från din plånbok till företaget. Det finns ingen väntetid på dagar för att en bank ska frigöra pengarna, och inga kostsamma tvister om återkrav – så att företaget kan fokusera på att betjäna kunder istället för att bekämpa bedrägerier.",
	"business/why::why_biz_s3": "Gratis att ta emot, öppet för alla",
	"business/why::why_biz_s3_c1":
		"Det finns inga kontrakt, månadsavgifter eller startkostnader för ett företag att ta emot Bitcoin. Och miljontals Bitcoin-användare runt om i världen söker aktivt efter handlare som tar emot det – vilket ger det här företaget gratis exponering mot nya kunder.",
	"business/why::why_business_cta_intro":
		"Driver du ett företag och vill börja ta emot Bitcoin?",
	"business/why::why_business_cta_link": "Se hur det fungerar →",
	"business/why::why_for_business":
		"Varför Bitcoin är fantastiskt för det här företaget",
	"business/why::why_for_business_intro":
		"Att ta emot Bitcoin gör att ett företag får behålla mer av varje försäljning, får betalt direkt utan återkrav och når en global publik av Bitcoin-användare – allt utan kontrakt och utan månadsavgifter.",
	"business/why::why_good_for_you_intro":
		"Bitcoin är inte bara användbart i kassan – det är en bättre form av pengar som skyddar ditt sparande, din integritet och din frihet att göra transaktioner. Här kommer en snabb översikt.",
	"business/why::why_hero_subtitle":
		"Du har precis skannat ett ”Bitcoin Accepted Here”-klistermärke. Här är varför det är goda nyheter – för det här företaget och för dig.",
	"business/why::why_intro_c1":
		"Företaget du befinner dig hos tar emot Bitcoin – ett modernt, öppet betalningsnätverk som vem som helst kan använda, var som helst i världen, utan att banker eller mellanhänder tar en del.",
	"business/why::why_intro_c2":
		"Nedan följer kortversionen av varför det är bra för det här företaget att ta emot Bitcoin, och varför det är bra för dig som kund att använda Bitcoin.",
	"business/why::why_next_business_label": "TA EMOT BITCOIN",
	"business/why::why_next_business_title":
		"Ta emot Bitcoin i ditt företag",
	"business/why::why_next_buy_label": "KÖP BITCOIN",
	"business/why::why_next_buy_title": "Köp din första Bitcoin",
	"business/why::why_next_learn_label": "LÄS MER",
	"business/why::why_next_learn_title": "Lär dig mer om Bitcoin",
	"business/why::why_next_wallet_label": "SKAFFA EN PLÅNBOK",
	"business/why::why_next_wallet_title": "Skaffa en egen Bitcoin-plånbok",
	"business/why::why_whats_next_heading": "Vart ska du härnäst?",
	"business/why::why_whats_next_intro":
		"Om det är första gången du skannar ett Bitcoin-klistermärke är det här de mest användbara platserna att gå vidare till.",

	// ---------- business/faq ----------
	"business/faq::faq_hero_subtitle":
		"De korta svaren på frågorna som handlare ställer oftast innan de börjar ta emot Bitcoin – avgifter, avveckling, plånböcker, återkrav, kostnad och mer.",
	"business/faq::faq_intro_c1":
		"Tryck på en fråga nedan för att se svaret. När du är redo att börja ta emot Bitcoin guidar företagsresurserna längst ner på sidan dig genom varje steg.",

	// ---------- business/index ----------
	"business/index::biz_label_accounting": "BOKFÖRING",
	"business/index::biz_label_faq": "VANLIGA FRÅGOR",
	"business/index::biz_label_maps": "HANDLARKARTOR",
	"business/index::biz_label_rewards": "BELÖNINGAR",
	"business/index::biz_label_stickers": "KLISTERMÄRKEN",
	"business/index::biz_label_wallets": "PLÅNBÖCKER",
	"business/index::biz_meta_description":
		"Ta emot Bitcoin i ditt företag för lägre avgifter, omedelbar avveckling, inga återkrav och fler kunder.",
	"business/index::business_hero_subtitle":
		"Ta emot betalningar med lägre avgifter, få betalt direkt och nå miljontals nya kunder – utan kontrakt och utan dolda kostnader.",
	"business/index::business_intro_c1":
		"Bitcoin ger ditt företag ett snabbare, billigare och mer privat sätt att få betalt. Inga mellanhänder. Inga återkrav. Inga kontrakt. Bara pengar som avvecklas på sekunder, direkt från dina kunder till dig.",
	"business/index::business_intro_c2":
		"Nedan kommer kortversionen av varför Bitcoin är bra för företag – och därunder alla resurser du behöver för att börja ta emot det idag.",
	"business/index::business_resources_heading":
		"Allt du behöver för att ta emot Bitcoin",
	"business/index::business_resources_intro":
		"Gå igenom dessa resurser i din egen takt. Var och en är en kort, praktisk guide.",

	// ---------- business/maps ----------
	"business/maps::biz_maps_form_header": "Berätta om ditt företag",
	"business/maps::biz_maps_form_intro":
		"Vi behöver bara några få uppgifter för att lägga upp dig. Adressuppgifter sparas bara så länge det krävs för att skicka in ditt företag till kartorna.",
	"business/maps::biz_maps_hero_subtitle":
		"Lägg upp ditt företag gratis på BTC Map – den öppna, världsomfattande katalogen över handlare som tar emot Bitcoin – så att Bitcoin-användare i närheten kan hitta dig och spendera Bitcoin hos dig.",
	"business/maps::biz_maps_hero_title":
		"Få ditt företag på Bitcoin-handlarkartor",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin-användare letar aktivt efter ställen att spendera på. Att få ditt företag på kartan placerar dig framför varje Bitcoin-användare som söker efter någonstans att äta, handla eller bo i närheten – utan kostnad för dig.",
	"business/maps::biz_maps_intro_c2":
		"Fyll bara i det korta formuläret nedan så skickar vi in ditt företag till BTC Map och andra Bitcoin-handlarkartor åt dig.",
	"business/maps::biz_maps_meta_description":
		"Lägg upp ditt företag gratis på BTC Map och andra Bitcoin-handlarkartor så att Bitcoin-användare i närheten kan hitta dig.",
	"business/maps::biz_maps_placeholder_address": "Gatuadress",
	"business/maps::biz_maps_placeholder_category":
		"Kategori (t.ex. restaurang, kafé, hotell)",
	"business/maps::biz_maps_placeholder_city": "Stad",
	"business/maps::biz_maps_placeholder_country": "Land",
	"business/maps::biz_maps_placeholder_name": "Företagsnamn",
	"business/maps::biz_maps_placeholder_region": "Län / Delstat / Region",
	"business/maps::biz_maps_placeholder_website": "Webbplats (valfritt)",
	"business/maps::biz_maps_view_map_cta": "Visa BTC Map",

	// ---------- business/maps-success ----------
	"business/maps-success::biz_maps_success_btn_view_map": "Visa BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Tack för att du skickade in ditt företag. Vi lägger upp dig på Bitcoin-handlarkartor inom kort.",
	"business/maps-success::biz_maps_success_hero_title": "Begäran mottagen 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Ditt företag kommer att läggas upp på BTC Map och andra Bitcoin-handlarkataloger inom 1 till 2 veckor. Vi granskar varje inskickning manuellt för att hålla kartorna korrekta.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"När din annons är publicerad kan Bitcoin-användare i närheten hitta ditt företag och komma och spendera Bitcoin där.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Vad händer härnäst",
	"business/maps-success::biz_maps_success_view_c1":
		"Medan du väntar kan du ta en titt på BTC Map och se det växande nätverket av företag som tar emot Bitcoin runt om i världen.",
	"business/maps-success::biz_maps_success_view_header":
		"Se var du kommer att synas",

	// ---------- business/sticker-language-success ----------
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Tack för att du efterfrågade ”Bitcoin Accepted Here”-klistermärkesfiler på ditt språk.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Begäran mottagen 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vi skapar och publicerar dina klistermärkesfiler inom 3 till 4 veckor. När de är klara kan du ladda ner och skriva ut dem gratis från vår sida för klistermärkesfiler.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Klistermärkesfiler släpps i omgångar, så det kan ta några veckor innan ditt språk publiceras. Tack för ditt tålamod!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Vad händer härnäst",

	// ---------- business/sticker-success ----------
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Beställ i större mängd",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Begär ett nytt gratispaket",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Du får dina gratis ”Bitcoin Accepted Here”-klistermärken inom 2 till 4 veckor, i ett vanligt vitt kuvert med 3 klistermärken inuti.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Dina klistermärken är på väg 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Om 3 klistermärken inte räcker för ditt företag är du välkommen att begära ett nytt gratispaket – eller beställa i större mängd från samma tryckeri som vi använder.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Behöver du fler klistermärken?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"På din ytterdörr eller fönster så att kunderna ser det innan de går in",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Nära din kassa, kassaterminal eller betalningsyta",
	"business/sticker-success::biz_sticker_success_tip_3":
		"På menyer, prislistor eller dricksburkar",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Sätt dem inte någonstans där du inte äger eller har tillstånd att placera dem",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Bra ställen att sätta upp dina klistermärken på",

	// ---------- business/stickers ----------
	"business/stickers::biz_stickers_hero_subtitle":
		"Visa kunderna att du tar emot Bitcoin. Beställ ett gratispaket med ”Bitcoin Accepted Here”-klistermärken att sätta upp i ditt företag.",
	"business/stickers::biz_stickers_hero_title":
		"Gratis ”Bitcoin Accepted Here”-klistermärken",
	"business/stickers::biz_stickers_intro_c1":
		"Att ta emot Bitcoin är bara halva jobbet – dina kunder behöver också veta att du gör det. De här små ”Bitcoin Accepted Here”-klistermärkena är gjorda för att sättas på ytterdörren, kassan, menyn eller någon annanstans där kunderna ser dem innan de betalar.",
	"business/stickers::biz_stickers_intro_c2":
		"Vi skickar ett gratispaket till dig var som helst i USA eller Kanada, eller så kan du skriva ut dina egna var som helst i världen.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — Gratis per post",
	"business/stickers::biz_stickers_option_print":
		"🌍 Globalt — Skriv ut själv",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — Gratis per post",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Översättning av ”Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Översättning av ”Skanna för att se varför Bitcoin är bra för företag.”",
	"business/stickers::biz_stickers_print_c1":
		"Du kan skriva ut dina egna ”Bitcoin Accepted Here”-klistermärken oavsett var du bor. Klicka på ditt språk nedan för att ladda ner klistermärkesfilerna och utskriftsanvisningar.",
	"business/stickers::biz_stickers_print_header":
		"Skriv ut dina egna klistermärkesfiler",
	"business/stickers::biz_stickers_request_c1":
		"Fyll i formuläret nedan för att begära ”Bitcoin Accepted Here”-klistermärkesfiler på ditt lokala språk. Vi hör av oss när de är klara.",
	"business/stickers::biz_stickers_request_header":
		"Hittar du inte ditt språk?",
	"business/stickers::biz_stickers_step_description":
		"Vi skickar ett gratispaket till adresser i USA och Kanada. Var som helst annars i världen kan du skriva ut dina egna.",
	"business/stickers::biz_stickers_step_header":
		"Hur vill du få dina klistermärken?",
};

function main() {
	const raw = fs.readFileSync(CHUNK_PATH, "utf8");
	const data = JSON.parse(raw);
	let filled = 0;
	const missing = [];

	for (const entry of data.entries) {
		const lookupKey = `${entry.namespace}::${entry.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			entry.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing.push(lookupKey);
		}
	}

	fs.writeFileSync(
		CHUNK_PATH,
		JSON.stringify(data, null, "\t") + "\n",
		"utf8"
	);

	console.log(`Filled ${filled}/${data.entries.length} entries.`);
	if (missing.length > 0) {
		console.log(`Missing translations for ${missing.length} keys:`);
		for (const k of missing) console.log(`  - ${k}`);
		process.exit(1);
	}
}

main();
