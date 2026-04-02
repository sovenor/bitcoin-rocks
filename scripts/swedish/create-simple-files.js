/**
 * Creates Swedish (sv) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sv';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "Fel 404 | Sidan hittades inte",
	"404_message": "DENNA TRASIGA SIDA ÄR INTE COOL",
	"404_home": "TILLBAKA TILL STARTSIDAN"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Om bitcoin.rocks — Bitcoinutbildning sedan 2022",
	"about_description": "bitcoin.rocks är en gratis webbplats med öppen källkod för bitcoinutbildning, grundad 2022. Vårt uppdrag är att påskynda Bitcoinanvändningen genom utbildning.",
	"about_header": "OM OSS",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Vårt uppdrag",
	"about_mission_1": "bitcoin.rocks grundades 2022 med ett enkelt uppdrag: påskynda Bitcoinanvändningen genom utbildning.",
	"about_mission_2": "Vi finns till för att vara den första länken du delar med någon som är nyfiken på Bitcoin. En vänlig och tillgänglig startpunkt som förklarar hur Bitcoin bygger en bättre värld.",
	"about_mission_3": "Alltför många människor missförstår Bitcoin eller har aldrig fått en ordentlig introduktion. Vi vill ändra på det genom att tillhandahålla gratis utbildningsinnehåll av hög kvalitet som alla kan förstå.",
	"about_what_we_do_header": "Vad vi gör",
	"about_what_we_do_1": "Vi skapar gratis utbildningsinnehåll för Bitcoin-nybörjare. Vår webbplats täcker ämnen som inflation, egen förvaring, plånböcker, Lightning-nätverket och hur Bitcoin jämförs med andra tillgångar och betalningssystem.",
	"about_what_we_do_2a": "Vi skickar ",
	"about_what_we_do_2b": "gratis Bitcoin-klistermärken",
	"about_what_we_do_2c": " till din dörr så att du kan hjälpa till att sprida Bitcoin-medvetenhet i ditt samhälle. Hundratals människor skannar QR-koderna på dessa klistermärken varje månad för att lära sig om Bitcoin.",
	"about_what_we_do_3a": "Vi tillhandahåller också ",
	"about_what_we_do_3b": "utskrivbara flygblad",
	"about_what_we_do_3c": " och ",
	"about_what_we_do_3d": "företagspaket",
	"about_what_we_do_3e": " för alla som vill hjälpa till att introducera lokala företag till att acceptera Bitcoin-betalningar.",
	"about_what_we_do_4": "Allt vårt innehåll förutsätter noll förkunskaper om Bitcoin. Oavsett om du är helt ny på Bitcoin eller en erfaren bitcoiner som letar efter resurser att dela, är bitcoin.rocks för dig.",
	"about_editorial_header": "Vår redaktionella metod",
	"about_editorial_1": "Varje innehåll på bitcoin.rocks är noggrant utvalt och faktakontrollerat. När vi hänvisar till data eller statistik anger vi våra källor så att du kan verifiera informationen själv.",
	"about_editorial_2": "Vi länkar till pålitliga källor som TIME Magazine, Forbes, MIT Technology Review, Lyn Alden och många andra. Vi tror att Bitcoin talar för sig själv när fakta presenteras tydligt.",
	"about_editorial_3": "Vårt innehåll granskas och uppdateras regelbundet för att säkerställa noggrannhet och aktualitet. Allt innehåll fokuserar uteslutande på Bitcoinutbildning.",
	"about_open_source_header": "Öppen källkod",
	"about_open_source_1a": "bitcoin.rocks är ett gratis projekt med öppen källkod licensierat under MIT-licensen. All vår kod är offentligt tillgänglig ",
	"about_open_source_1b": "på GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Vem som helst kan bidra till bitcoin.rocks. Vi välkomnar särskilt översättare som hjälper till att göra vårt innehåll tillgängligt för människor över hela världen.",
	"about_open_source_3": "Tack vare vårt community av frivilliga översättare är bitcoin.rocks för närvarande tillgänglig på 19 språk och växer.",
	"about_open_source_contribute": "Lär dig hur du kan bidra.",
	"about_contact_header": "Kontakta oss",
	"about_contact_1": "Vi skulle gärna höra från dig. Oavsett om du har en fråga, ett förslag eller bara vill säga hej, tveka inte att kontakta oss.",
	"about_contact_email": "E-post:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Du kommer att få dina klistermärken inom 2 till 4 veckor. Under tiden, fundera på ett bra ställe för dina klistermärken!",
	"sticker_success_2": "Bra ställen för klistermärken är:",
	"sticker_success_list_1": "på offentliga platser där folk kommer att se dem",
	"sticker_success_list_2": "på platser där de sannolikt inte tas bort snabbt (klistermärkena orsakar ingen permanent skada)",
	"sticker_success_list_3": "på ytor som de lätt fäster på (metall, plast, glas)",
	"sticker_success_list_4": "INTE på privat egendom, över skyltar, bankomater eller bensinstationer",
	"sticker_success_3": "Vill du se var andra lägger sina klistermärken?",
	"sticker_success_flyers_bar_new": "NYTT!",
	"sticker_success_flyers_bar_cta": "Skriv ut och sätt upp Bitcoin-flygblad →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Vi har mottagit din förfrågan.",
	"sticker_language_success_2": "Vi publicerar nya filer i omgångar, så det kan ta några veckor innan dessa filer finns tillgängliga för nedladdning. Kom tillbaka och kolla snart!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Du kommer att få dina vykort inom 1 till 2 veckor.",
	"postcard_success_2": "Tack för att du hjälper till att påskynda Bitcoinanvändningen genom att skicka dessa vykort till någon du känner!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Du kommer att få dina skyltar inom 1 till 2 veckor. Under tiden, fundera på ett bra ställe för dina skyltar!",
	"sign_success_3": "Vill du se var andra sätter upp sina skyltar?",
	"signs_share_header": "DELA DINA SKYLTPLATSER",
	"signs_share_c1": "Dela en bild på din skyltplats med oss på Nostr så skickar vi sats till dig! Sats är bråkdelar av en bitcoin.",
	"signs_btn_share_on_nostr": "DELA PÅ NOSTR",
	"signs_btn_what_is_nostr": "VAD ÄR NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KALKYLATOR FÖR SAMMANSATT INFLATION",
	"cic_description": "Använd denna kalkylator för sammansatt inflation för att ta reda på hur mycket din lön behöver öka för att hålla jämna steg med inflationen.",
	"what_can_i_do_about": "Vad kan jag göra åt",
	"what_can_i_do_about_2": "inflation?",
	"cic_inflation_cta": "Välj bort inflation med Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Fly från Matrisen med Nostr",
	"nostr_header": "FLY FRÅN MATRISEN MED NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Vad är Nostr?",
	"what_is_nostr_header": "VAD ÄR NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
