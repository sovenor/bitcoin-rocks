#!/usr/bin/env node
/**
 * Swedish manifest refresh — chunk 4 of 5.
 *
 * Covers: 404, about, bank-runs, buy, compound-inflation-calculator, flyers,
 * get-involved, lightning, nostr/index, sticker-language-success,
 * sticker-success, stickers, wallets.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"chunks",
	"sv-chunk4.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Tillbaka till startsidan",
	"404::404_message": "Bitcoin är grymt, men den här trasiga sidan är det inte.",
	"404::404_not_found_short": "Hittades inte",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Vi tillhandahåller kostnadsfria företagsresurser som gör det enkelt för lokala handlare att börja ta emot Bitcoin. Vår sida om Bitcoin för företag förklarar varför Bitcoin är bra för affärerna, hur du väljer plånbok och kassasystem, och erbjuder gratis ”Bitcoin accepteras här”-klistermärken.",
	"about::about_card_business_label": "Företagsresurser",
	"about::about_card_business_source": "Källa: bitcoin.rocks →",
	"about::about_card_business_title":
		"Allt ett företag behöver för att börja ta emot Bitcoin-betalningar",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Källa: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Bidra",
	"about::about_card_contribute_source": "Källa: GitHub →",
	"about::about_card_contribute_title":
		"Lär dig hur du bidrar till bitcoin.rocks",
	"about::about_card_email_label": "E-post",
	"about::about_card_email_source": "Källa: e-post →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Utskrivbara flygblad",
	"about::about_card_flyers_source": "Källa: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Ladda ner och skriv ut Bitcoin-flygblad för din community",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Källa: GitHub →",
	"about::about_card_github_title": "Se bitcoin.rocks på GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Källa: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Gratis klistermärken",
	"about::about_card_stickers_source": "Källa: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Få gratis Bitcoin-klistermärken hemskickade till din dörr",
	"about::about_editorial_2":
		"Vi länkar till pålitliga källor som Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, Förenta nationerna, World Gold Council, Forbes, MIT Technology Review, Lyn Alden och James Lavish. Vi tror att Bitcoin talar för sig självt när fakta presenteras tydligt.",
	"about::about_flyers_blurb":
		"Vi designar utskrivbara flygblad som du kan dela ut på meetups, sätta upp på anslagstavlor i din community eller släppa i brevlådor — ett enkelt sätt att väcka nyfikenhet och leda människor till bitcoin.rocks för att lära sig mer.",
	"about::about_header": "Om bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks grundades av",
	"about::about_mission_1b":
		"år 2022 med ett enkelt uppdrag: att accelerera Bitcoin-adoption genom utbildning.",
	"about::about_open_source_2":
		"bitcoin.rocks är ett kostnadsfritt projekt med öppen källkod under MIT-licens. Vem som helst kan bidra till bitcoin.rocks. Vi välkomnar särskilt översättare som hjälper till att göra vårt innehåll tillgängligt för människor runt om i världen.",
	"about::about_page_description":
		"bitcoin.rocks är en kostnadsfri utbildningssajt om Bitcoin med öppen källkod, grundad 2022. Vårt uppdrag är att accelerera Bitcoin-adoption genom utbildning.",
	"about::about_stickers_blurb":
		"Vi skickar gratis Bitcoin-klistermärken hem till dig så att du kan hjälpa till att sprida medvetenhet om Bitcoin i din community. Hundratals människor skannar QR-koderna på dessa klistermärken varje månad för att lära sig om Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin har inga bankrusningar",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin är ett system med full reservtäckning. Du sätter inte in dina pengar på en bank. Du är din egen bank. Det finns ingen som lånar ut dina pengar utan din vetskap, eftersom du är den enda som har tillgång till dina pengar.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Så länge du förvarar bitcoin i din egen plånbok — inte på en växlingsplattform eller paketerad i en ETF — är bankrusningar omöjliga.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Med Bitcoin har du verkligen kontroll över dina pengar.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Sedan den 26 mars 2020 är amerikanska banker inte skyldiga att hålla några reserver alls.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Bankernas reservkrav",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Källa: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"System med full reservtäckning — ingen insättningsgaranti behövs.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin-täckning",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Källa: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Varje bitcoin finns på blockkedjan — ingenting lånas ut.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoins reservtäckning",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Källa: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 miljarder USD i försäkringsfond mot 10,82 biljoner USD i försäkrade insättningar (dec 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-täckning",
	"bank-runs::bank_runs_card_fdic_source":
		"Källa: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Fallstudie",
	"bank-runs::bank_runs_card_svb_source":
		"Källa: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Lär dig hur bankrusningen mot Silicon Valley Bank gick till",
	"bank-runs::bank_runs_card_wallet_label": "Nästa steg",
	"bank-runs::bank_runs_card_wallet_source": "Börja här →",
	"bank-runs::bank_runs_card_wallet_title":
		"Lär dig hur du skaffar din egen Bitcoin-plånbok",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC-försäkringen täcker omkring 1 % av insättningarna",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC-försäkringen skyddar insättningar upp till 250 000 USD per insättare. Men försäkringsfonden är liten i jämförelse med de totala insättningar som den ska skydda.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Vid en storskalig bankkollaps skulle staten sannolikt trycka pengar för att täcka skillnaden — vilket leder till mer",
	"bank-runs::bank_runs_fdic_p2_link": "inflation.",
	"bank-runs::bank_runs_header":
		"Bitcoin har inga bankrusningar, men din bank kan ha det.",
	"bank-runs::bank_runs_page_description":
		"Bankerna lånar ut dina insättningar genom fraktionell reservbankverksamhet. Om för många människor tar ut pengar samtidigt kan banker kollapsa. Bitcoin är ett system med full reservtäckning — bankrusningar är omöjliga.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: ett verkligt exempel",
	"bank-runs::bank_runs_svb_p1_a":
		"I mars 2023 kollapsade Silicon Valley Bank efter att ha investerat kundernas insättningar i långa",
	"bank-runs::bank_runs_svb_p1_b":
		"När dessa obligationer förlorade i värde kunde SVB inte täcka uttagen. Banken var insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "statsobligationer.",
	"bank-runs::bank_runs_svb_p2":
		"Tusentals företag kunde inte betala ut löner till sina anställda. FDIC ingrep — men det väckte en större fråga: är dina pengar verkligen säkra?",
	"bank-runs::bank_runs_what_p1":
		"Banker förvarar inte dina insättningar i ett valv. De lånar ut dina pengar och investerar dem — det kallas fraktionell reservbankverksamhet.",
	"bank-runs::bank_runs_what_p2":
		"Om för många människor försöker ta ut pengar samtidigt har banken inte tillräckligt med kontanter för att betala alla. Det är en bankrusning — och den kan få banker att kollapsa helt.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Hur du köper Bitcoin",
	"buy::buy_step_1_header": "Välj ditt land",
	"buy::buy_step_2_header": "Välj betalningsmetod",
	"buy::buy_step_3_header": "Dina köpalternativ",
	"buy::buy_step_4_header": "Förvara din Bitcoin säkert",
	"buy::buy_header_subtitle":
		"En enkel steg-för-steg-guide för att köpa din första Bitcoin.",
	"buy::buy_howto_name": "Hur du köper Bitcoin",
	"buy::buy_meta_description":
		"Lär dig hur du köper Bitcoin tryggt med vår steg-för-steg-guide. Välj ditt land och betalningsmetod för att hitta de bästa alternativen för att köpa Bitcoin.",
	"buy::buy_step_1_eyebrow": "Steg 1",
	"buy::buy_step_2_eyebrow": "Steg 2",
	"buy::buy_step_3_eyebrow": "Steg 3",
	"buy::buy_step_4_eyebrow": "Steg 4",
	"buy::buy_storage_cta_label": "Nästa steg",
	"buy::sources_bisq": "Bisq — Decentraliserad peer-to-peer-växlingsplattform för Bitcoin",
	"buy::sources_coinatmradar": "Coin ATM Radar — Världsomfattande katalog över Bitcoin-bankomater",
	"buy::sources_kraken": "Kraken — Etablerad Bitcoin-växlingsplattform",
	"buy::sources_relai": "Relai — Schweizisk Bitcoin-only-app för självförvaring",
	"buy::sources_river": "River — Bitcoin-only för köp, mining och förvaring",
	"buy::sources_strike_lightning": "Strike — Köp Bitcoin med stöd för Lightning",
	"buy::sources_swan": "Swan Bitcoin — Bitcoin-only med dollar-cost averaging",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Konsumentprisindex för alla stadsbor",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 penningmängd",
	"compound-inflation-calculator::cic_calculator_heading":
		"Räkna ut ditt inflationsgap",
	"compound-inflation-calculator::cic_cta_label": "Nästa steg",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Se hur mycket din lön behöver öka för att hålla jämna steg med inflationen.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Utforska fler ämnen",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Se hur Bitcoin hänger ihop med pengar, frihet, energi och mycket mer.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Lär dig hur inflation fungerar",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Hur du skriver ut och sätter upp dessa Bitcoin-flygblad",
	"flyers::flyers_hero_subtitle":
		"Gratis, utskrivbara Bitcoin-flygblad. Sätt upp dem på offentliga platser för att hjälpa fler människor att lära sig om Bitcoin.",
	"flyers::flyers_hero_title": "Skriv ut och sätt upp Bitcoin-flygblad",
	"flyers::flyers_next_get_stickers": "Sprid budskapet",
	"flyers::flyers_next_get_stickers_desc":
		"Beställ ett gratis paket med Bitcoin-klistermärken",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Engagera dig och sprid Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Vill du hjälpa till att bygga den cirkulära Bitcoin-ekonomin? Det enklaste sättet är att hjälpa lokala företag att börja ta emot Bitcoin-betalningar.",
	"get-involved::get_involved_business_content_2":
		"Känner du till ett företag som kan vara öppet för det? Skicka ägaren till vår",
	"get-involved::get_involved_business_content_3":
		"sida om Bitcoin för företag.",
	"get-involved::get_involved_description":
		"Våra kostnadsfria resurser gör det lättare att sprida Bitcoin-adoption. Klistermärken, flygblad, ”Bitcoin accepteras här”-klistermärken för företag och en kodbas med öppen källkod som vem som helst kan bidra till.",
	"get-involved::get_involved_header": "Engagera dig och sprid Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Du kan hjälpa till att förändra det. Vi har skapat flera kostnadsfria resurser för att göra det enklare att sprida hoppet som Bitcoin ger till människorna runt omkring dig.",
	"get-involved::get_involved_biz_stickers_note":
		"Tar du redan emot Bitcoin? Låt kunderna veta det med våra gratis ”Bitcoin accepteras här”-klistermärken. Vi skickar ett paket till valfri adress i USA eller Kanada, eller så kan du skriva ut dina egna var som helst i världen.",
	"get-involved::get_involved_card_biz_stickers_label":
		"”Accepteras här”-klistermärken",
	"get-involved::get_involved_card_biz_stickers_source":
		"Källa: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Gratis ”Bitcoin accepteras här”-klistermärken till ditt företag",
	"get-involved::get_involved_card_business_label": "Bitcoin för företag",
	"get-involved::get_involved_card_business_source": "Källa: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Allt ett företag behöver för att börja ta emot Bitcoin-betalningar",
	"get-involved::get_involved_card_flyers_label": "Utskrivbara flygblad",
	"get-involved::get_involved_card_flyers_source": "Källa: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Ladda ner och skriv ut ett gratis Bitcoin-flygblad",
	"get-involved::get_involved_card_github_label": "Öppen källkod",
	"get-involved::get_involved_card_github_source": "Källa: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Bidra till bitcoin.rocks på GitHub",
	"get-involved::get_involved_card_stickers_label": "Gratis klistermärken",
	"get-involved::get_involved_card_stickers_source": "Källa: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Beställ ett gratis paket Bitcoin-klistermärken hem till din dörr",
	"get-involved::get_involved_flyers_content_1":
		"Flygblad är ett av de enklaste sätten att introducera Bitcoin för din community. Ladda ner ett gratis utskrivbart Bitcoin-flygblad, skriv ut så många kopior du vill och sätt upp dem på anslagstavlor, på kaféer, på meetups eller där andra människor samlas.",
	"get-involved::get_involved_flyers_content_2":
		"Varje flygblad innehåller en slagkraftig rubrik och en QR-kod som leder nyfikna läsare till bitcoin.rocks för att lära sig mer.",
	"get-involved::get_involved_flyers_content_3":
		"Till skillnad från klistermärken kan flygblad skrivas ut på begäran var som helst i världen — allt du behöver är en skrivare och några minuter.",
	"get-involved::get_involved_flyers_header": "Skriv ut och sätt upp ett flygblad",
	"get-involved::get_involved_flyers_image_alt":
		"Förhandsvisning av det gratis utskrivbara Bitcoin-flygbladet från bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks är ett kostnadsfritt projekt med öppen källkod under MIT-licens. Vårt uppdrag är att accelerera Bitcoin-adoption genom utbildning — och det klarar vi inte ensamma.",
	"get-involved::get_involved_github_content_2":
		"Oavsett om du är utvecklare, designer, skribent eller översättare finns det ett sätt för dig att hjälpa till. Vi välkomnar särskilt bidragsgivare som kan översätta vårt innehåll till fler språk så att fler människor runt om i världen kan lära sig om Bitcoin på sitt modersmål.",
	"get-involved::get_involved_github_content_3":
		"Forka repositoryt, öppna en pull request, skapa ett issue eller stjärnmärk projektet för att visa ditt stöd. Varje bidrag hjälper Bitcoin att nå fler människor.",
	"get-involved::get_involved_github_header": "Bidra på GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Gratis Bitcoin-textklistermärkespaket från bitcoin.rocks",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Kolla in vår",
	"lightning::lightning_grid_heading": "Populära Lightning-plånböcker",
	"lightning::lightning_hardware_cta_label": "Hårdvaruplånböcker",
	"lightning::lightning_header_subtitle":
		"Lightning låter dig skicka Bitcoin på några sekunder för en bråkdel av ett öre — välj den plånbok vars avvägningar passar hur mycket Bitcoin du planerar att spendera.",
	"lightning::lightning_s1_c4_end": "för mer information.",
	"lightning::lightning_s1_c4_link": "guide till Bitcoin-hårdvaruplånböcker",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning-plånbok",
	"lightning::sources_breez_lightning":
		"Breez — Lightning-plånbok med självförvaring",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Dokumentation om Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — Förvarad Lightning-plånbok",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android och webb",
	"nostr/index::nostr_platform_web": "Webbläsare",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr är ett nytt decentraliserat protokoll för online-kommunikation — inget enskilt företag kontrollerar det, Bitcoin-zaps är inbyggda från grunden, och du kan flytta mellan klienter utan att förlora dina följare.",
	"nostr/index::nostr_amethyst_f1": "Många funktioner och anpassningsmöjligheter",
	"nostr/index::nostr_amethyst_f2": "Kräver en separat Bitcoin-plånbok",
	"nostr/index::nostr_amethyst_f3": "100 % gratis",
	"nostr/index::nostr_damus_f1": "Bekant Twitter-liknande gränssnitt",
	"nostr/index::nostr_damus_f2": "Kräver en separat Bitcoin-plånbok",
	"nostr/index::nostr_damus_f3": "100 % gratis",
	"nostr/index::nostr_download_heading": "Ladda ner en gratis Nostr-klient",
	"nostr/index::nostr_download_intro":
		"Nostr-klienter är gratis appar där du kan läsa och publicera på Nostr-nätverket. Alla är interoperabla — du kan byta klient när som helst och behålla dina följare och ditt innehåll.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr är ett nytt decentraliserat protokoll för att kommunicera online — inget enskilt företag kontrollerar det, Bitcoin-zaps är inbyggda, och du kan flytta mellan appar utan att förlora dina följare.",
	"nostr/index::nostr_hero_title": "Vad är Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr liknar e-post: ingen äger protokollet, vem som helst kan bygga en app ovanpå det och du kan välja den app du gillar bäst. Till skillnad från Twitter eller Facebook finns det inget centralt företag som kan censurera, plattformsbanna eller nedprioritera dig.",
	"nostr/index::nostr_intro_c2":
		"Nedan följer den korta versionen av varför Nostr spelar roll — och sedan varje gratis Nostr-klient du behöver för att komma igång idag.",
	"nostr/index::nostr_iris_f1": "Superenkel — ingen installation krävs",
	"nostr/index::nostr_iris_f2":
		"Enkelt sätt att prova Nostr med ett testkonto",
	"nostr/index::nostr_iris_f3": "100 % gratis",
	"nostr/index::nostr_learn_more_label": "GÅ DJUPARE",
	"nostr/index::nostr_learn_more_title": "Läs mer om Nostr på nostr.how",
	"nostr/index::nostr_primal_f1": "Rekommenderad första klient",
	"nostr/index::nostr_primal_f2": "Bitcoin-zap-plånbok inbyggd",
	"nostr/index::nostr_primal_f3": "100 % gratis",
	"nostr/index::nostr_s1": "Protokoll, inte plattform",
	"nostr/index::nostr_s1_c1":
		"Nostr är ett nytt protokoll som låter dig kommunicera online utan rädsla för censur, plattformsavstängning eller nedprioritering.",
	"nostr/index::nostr_s1_c2":
		"Plattformar som Twitter och Facebook kontrolleras av ett enskilt företag, men ingen kontrollerar Nostr-protokollet.",
	"nostr/index::nostr_s2": "Frihet att flytta",
	"nostr/index::nostr_s2_c1":
		"Nostr liknar e-post. Ingen kontrollerar e-postprotokollet, och vem som helst kan bygga en klient (som Gmail, Hotmail osv.) ovanpå det.",
	"nostr/index::nostr_s2_c2":
		"Ingen kontrollerar heller Nostr-protokollet, och vem som helst kan bygga en klient (som Damus, Amethyst osv.) ovanpå det.",
	"nostr/index::nostr_s2_c3":
		"Om du inte gillar hur en viss klient fungerar kan du sömlöst flytta ditt Nostr-konto till en annan klient utan att förlora dina följare eller ditt innehåll.",
	"nostr/index::nostr_s3": "Bitcoin är inbyggt",
	"nostr/index::nostr_s3_c1":
		"Bitcoin är inbyggt från grunden i Nostr-protokollet. Om du ser innehåll du gillar kan du enkelt zappa Bitcoin till någon som ett tack!",
	"nostr/index::nostr_s3_c2":
		"På centraliserade plattformar som Twitter och Facebook tjänar det centraliserade företaget pengar på ditt innehåll. Men på öppna protokoll som Nostr tjänar du själv pengar på ditt innehåll.",
	"nostr/index::sources_damus": "Damus — Nostr-klient för iPhone",
	"nostr/index::sources_iris": "Iris — Webbläsarbaserad Nostr-klient",
	"nostr/index::sources_nostr_how": "nostr.how — Vad är Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — Specifikation med öppen källkod",
	"nostr/index::sources_primal":
		"Primal — Nostr-klient med inbyggd Bitcoin-zap-plånbok",
	"nostr/index::what_is_nostr": "Vad är Nostr?",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Förfrågan mottagen 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Beställ i större antal",
	"sticker-success::sticker_success_btn_share_on_nostr": "Dela på Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Vad är Nostr?",
	"sticker-success::sticker_success_bulk_header": "Vill du ha fler klistermärken?",
	"sticker-success::sticker_success_hero_title":
		"Dina klistermärken är på väg 🎉",
	"sticker-success::sticker_success_share_header":
		"Dela platserna där du satt upp klistermärken",
	"sticker-success::sticker_success_tips_header": "Bra platser för klistermärken",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"När du ändå håller på, skriv ut och sätt upp dina egna",
	"stickers::stickers_instructions_1":
		"Fyll i din postadress så skickar vi ett gratis paket med Bitcoin-klistermärken till dig. Klistermärkena skickas i ett enkelt vitt kuvert.",
	"stickers::stickers_btn_choose_pack": "Välj detta paket",
	"stickers::stickers_bulk_c1": "Vill du ha fler än några få klistermärken?",
	"stickers::stickers_bulk_c2":
		"Beställ i större antal från samma tryckeri som vi använder",
	"stickers::stickers_bulk_c3":
		"— ju fler du köper, desto billigare blir de per klistermärke.",
	"stickers::stickers_bulk_cta": "Handla klistermärken i större antal",
	"stickers::stickers_bulk_header": "Beställ klistermärken i större antal",
	"stickers::stickers_hero_subtitle":
		"Beställ ett gratis paket med Bitcoin-klistermärken och sätt upp dem på offentliga platser för att hjälpa fler människor att lära sig om Bitcoin.",
	"stickers::stickers_hero_title": "Gratis Bitcoin-klistermärken",
	"stickers::stickers_intro_c1":
		"Vårt uppdrag är att hjälpa dig orange-pilla fler människor genom att sätta upp Bitcoin-klistermärken på offentliga platser. Alla våra klistermärken har QR-koder som länkar till utbildningssidor om",
	"stickers::stickers_intro_c3": "inflation",
	"stickers::stickers_intro_c4":
		"Välj ett klistermärkespaket nedan och välj hur du vill få dem — vi skickar ett gratis paket till vem som helst i USA eller Kanada, eller så kan du skriva ut dina egna var som helst i världen.",
	"stickers::stickers_mail_header":
		"Vi skickar dina gratis klistermärken med posten",
	"stickers::stickers_next_print_flyers": "Fortsätt sprida budskapet",
	"stickers::stickers_next_print_flyers_desc":
		"Skriv ut gratis Bitcoin-flygblad att sätta upp på offentliga platser",
	"stickers::stickers_option_bulk":
		"📦 Globalt — Beställ i större antal",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — Gratis med posten",
	"stickers::stickers_option_print": "🌍 Globalt — Skriv ut själv",
	"stickers::stickers_option_usa": "🇺🇸 USA — Gratis med posten",
	"stickers::stickers_print_c1":
		"Du kan delta genom att skriva ut dina egna klistermärken, oavsett var du bor. Klicka på ditt språk nedan för att ladda ner klistermärkesfilerna och utskriftsanvisningarna.",
	"stickers::stickers_print_c2":
		"Alla klistermärken finns inte tillgängliga på alla språk.",
	"stickers::stickers_print_header": "Skriv ut dina egna klistermärkesfiler",
	"stickers::stickers_request_c1":
		"Fyll i formuläret nedan för att begära klistermärkesfiler på ditt lokala språk. Vi hör av oss när de är klara.",
	"stickers::stickers_request_header": "Saknar du ditt språk?",
	"stickers::stickers_share_c2": "Följ oss på Nostr genom att söka efter",
	"stickers::stickers_share_c3": "i valfri Nostr-klient.",
	"stickers::stickers_signs_pack_description":
		"Skyltar i varnings-, fara- och uppmärksamhetsstil med Bitcoin-budskap — designade för att fånga blickar och få människor att stanna upp och läsa.",
	"stickers::stickers_step_1_description":
		"Varje paket innehåller en egen uppsättning Bitcoin-klistermärken med QR-koder som lär människor om Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "STEG 1",
	"stickers::stickers_step_1_header": "Välj ditt klistermärkespaket",
	"stickers::stickers_step_2_description":
		"Vi skickar ett gratis paket till adresser i USA och Kanada. Var som helst annars i världen kan du skriva ut dina egna eller beställa i större antal.",
	"stickers::stickers_step_2_eyebrow": "STEG 2",
	"stickers::stickers_step_2_header":
		"Hur vill du få dina klistermärken?",
	"stickers::stickers_text_pack_description":
		"En blandning av Bitcoin-slogans och one-liners designade för att väcka nyfikenhet på offentliga platser.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose": "Bitcoin.org — Välj din plånbok",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Recensioner av seedförvaring i metall för Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin-plånbok med självförvaring",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin-hårdvaruplånbok",
	"wallets::sources_coldcard_mk5": "Coinkite — Coldcard MK5-hårdvaruplånbok",
	"wallets::sources_coldcard_q": "Coinkite — Coldcard Q-hårdvaruplånbok",
	"wallets::sources_passport":
		"Foundation Devices — Passport-hårdvaruplånbok",
	"wallets::sources_seedsigner":
		"SeedSigner — DIY-signeringsenhet för Bitcoin med öppen källkod",
	"wallets::wallets_grid_heading": "Populära Bitcoin-plånböcker",
	"wallets::wallets_header_subtitle":
		"En steg-för-steg-guide för att välja en plånbok, skydda dina nycklar och ta full kontroll över din Bitcoin.",
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
		`translate-chunk4 (sv): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in chunk4 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
