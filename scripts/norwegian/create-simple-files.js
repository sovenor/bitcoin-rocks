/**
 * Creates Norwegian Bokmål (nb) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'nb';
const today = '2026-04-04';

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
	"404_title": "Feil 404 | Siden ble ikke funnet",
	"404_message": "DENNE ØDELAGTE SIDEN ER IKKE KULT",
	"404_home": "TILBAKE TIL STARTSIDEN"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Om bitcoin.rocks — Bitcoin-utdanning siden 2022",
	"about_description": "bitcoin.rocks er en gratis, åpen kildekode Bitcoin-utdanningsnettside grunnlagt i 2022. Vårt oppdrag er å akselerere Bitcoin-adopsjon gjennom utdanning.",
	"about_header": "OM",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Vårt oppdrag",
	"about_mission_1": "bitcoin.rocks ble grunnlagt i 2022 med et enkelt oppdrag: akselerere Bitcoin-adopsjon gjennom utdanning.",
	"about_mission_2": "Vi eksisterer for å være den første lenken du deler med noen som er nysgjerrig på Bitcoin. Et vennlig og tilgjengelig utgangspunkt som forklarer hvordan Bitcoin bygger en bedre verden.",
	"about_mission_3": "Altfor mange mennesker misforstår Bitcoin eller har aldri fått en skikkelig introduksjon. Vi ønsker å endre det ved å tilby gratis utdanningsinnhold av høy kvalitet som alle kan forstå.",
	"about_what_we_do_header": "Hva vi gjør",
	"about_what_we_do_1": "Vi lager gratis utdanningsinnhold for Bitcoin-nybegynnere. Nettsiden vår dekker emner som inflasjon, selvforvaring, lommebøker, Lightning-nettverket og hvordan Bitcoin sammenlignes med andre eiendeler og betalingssystemer.",
	"about_what_we_do_2a": "Vi sender ",
	"about_what_we_do_2b": "gratis Bitcoin-klistremerker",
	"about_what_we_do_2c": " rett hjem til deg slik at du kan bidra til å spre Bitcoin-bevissthet i ditt lokalsamfunn. Hundrevis av mennesker skanner QR-kodene på disse klistremerkene hver måned for å lære om Bitcoin.",
	"about_what_we_do_3a": "Vi tilbyr også ",
	"about_what_we_do_3b": "utskrivbare flygeblad",
	"about_what_we_do_3c": " og ",
	"about_what_we_do_3d": "bedriftspakker",
	"about_what_we_do_3e": " for alle som ønsker å hjelpe lokale bedrifter med å akseptere Bitcoin-betalinger.",
	"about_what_we_do_4": "Alt innholdet vårt forutsetter null forkunnskaper om Bitcoin. Enten du er helt ny på Bitcoin eller en erfaren bitcoiner som leter etter ressurser å dele, er bitcoin.rocks for deg.",
	"about_editorial_header": "Vår redaksjonelle tilnærming",
	"about_editorial_1": "Alt innhold på bitcoin.rocks er kuratert og faktasjekket. Når vi refererer til data eller statistikk, oppgir vi kildene våre slik at du selv kan verifisere informasjonen.",
	"about_editorial_2": "Vi lenker til pålitelige kilder som TIME Magazine, Forbes, MIT Technology Review, Lyn Alden og mange andre. Vi tror at Bitcoin taler for seg selv når fakta presenteres tydelig.",
	"about_editorial_3": "Innholdet vårt gjennomgås og oppdateres regelmessig for å sikre nøyaktighet og aktualitet. Alt innhold fokuserer utelukkende på Bitcoin-utdanning.",
	"about_open_source_header": "Åpen kildekode",
	"about_open_source_1a": "bitcoin.rocks er et gratis åpen kildekode-prosjekt lisensiert under MIT-lisensen. All vår kode er offentlig tilgjengelig ",
	"about_open_source_1b": "på GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Hvem som helst kan bidra til bitcoin.rocks. Vi ønsker spesielt velkommen oversettere som hjelper med å gjøre innholdet vårt tilgjengelig for mennesker over hele verden.",
	"about_open_source_3": "Takket være vårt fellesskap av frivillige oversettere er bitcoin.rocks for tiden tilgjengelig på 30 språk og vokser.",
	"about_open_source_contribute": "Lær hvordan du kan bidra.",
	"about_contact_header": "Kontakt oss",
	"about_contact_1": "Vi vil gjerne høre fra deg. Enten du har et spørsmål, et forslag eller bare vil si hei, ikke nøl med å ta kontakt.",
	"about_contact_email": "E-post:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Du vil motta klistremerkene dine innen 2 til 4 uker. I mellomtiden kan du tenke på et bra sted for klistremerkene dine!",
	"sticker_success_2": "Gode steder for klistremerker er:",
	"sticker_success_list_1": "på offentlige steder der folk vil se dem",
	"sticker_success_list_2": "på steder der de sannsynligvis ikke fjernes raskt (klistremerkene forårsaker ingen permanent skade)",
	"sticker_success_list_3": "på overflater de lett fester seg til (metall, plast, glass)",
	"sticker_success_list_4": "IKKE på privat eiendom, over skilt, minibanker eller bensinstasjoner",
	"sticker_success_3": "Vil du se hvor andre plasserer sine klistremerker?",
	"sticker_success_flyers_bar_new": "NYTT!",
	"sticker_success_flyers_bar_cta": "Skriv ut og heng opp Bitcoin-flygeblad →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Vi har mottatt forespørselen din.",
	"sticker_language_success_2": "Vi publiserer nye filer i puljer, så det kan ta noen uker før disse filene er tilgjengelige for nedlasting. Kom tilbake og sjekk snart!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Du vil motta postkortene dine innen 1 til 2 uker.",
	"postcard_success_2": "Takk for at du hjelper med å akselerere Bitcoin-adopsjon ved å sende disse postkortene til noen du kjenner!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Du vil motta skiltene dine innen 1 til 2 uker. I mellomtiden kan du tenke på et bra sted for skiltene dine!",
	"sign_success_3": "Vil du se hvor andre setter opp sine skilt?",
	"signs_share_header": "DEL DINE SKILTSTEDER",
	"signs_share_c1": "Del et bilde av ditt skiltsted med oss på Nostr, så sender vi sats til deg! Sats er brøkdeler av en bitcoin.",
	"signs_btn_share_on_nostr": "DEL PÅ NOSTR",
	"signs_btn_what_is_nostr": "HVA ER NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KALKULATOR FOR SAMMENSATT INFLASJON",
	"cic_description": "Bruk denne kalkulatoren for sammensatt inflasjon for å finne ut hvor mye lønnen din må øke for å holde tritt med inflasjonen.",
	"what_can_i_do_about": "Hva kan jeg gjøre med",
	"what_can_i_do_about_2": "inflasjon?",
	"cic_inflation_cta": "Velg bort inflasjon med Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Bryt ut av Matrisen med Nostr",
	"nostr_header": "BRYT UT AV MATRISEN MED NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Hva er Nostr?",
	"what_is_nostr_header": "HVA ER NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
