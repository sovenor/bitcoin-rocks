/**
 * Creates Danish (da) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'da';
const today = '2026-04-07';

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
	"404_title": "Fejl 404 | Siden blev ikke fundet",
	"404_message": "DENNE ØDELAGTE SIDE ER IKKE SEJT",
	"404_home": "TILBAGE TIL STARTSIDEN"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Om bitcoin.rocks — Bitcoin-uddannelse siden 2022",
	"about_description": "bitcoin.rocks er en gratis open source Bitcoin-uddannelseshjemmeside grundlagt i 2022. Vores mission er at accelerere Bitcoin-adoption gennem uddannelse.",
	"about_header": "OM",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Vores mission",
	"about_mission_1": "bitcoin.rocks blev grundlagt i 2022 med en simpel mission: accelerere Bitcoin-adoption gennem uddannelse.",
	"about_mission_2": "Vi eksisterer for at være det første link, du deler med nogen, der er nysgerrig på Bitcoin. Et venligt og tilgængeligt udgangspunkt, der forklarer, hvordan Bitcoin bygger en bedre verden.",
	"about_mission_3": "Alt for mange mennesker misforstår Bitcoin eller har aldrig fået en ordentlig introduktion. Vi ønsker at ændre det ved at tilbyde gratis uddannelsesindhold af høj kvalitet, som alle kan forstå.",
	"about_what_we_do_header": "Hvad vi gør",
	"about_what_we_do_1": "Vi laver gratis uddannelsesindhold for Bitcoin-nybegyndere. Vores hjemmeside dækker emner som inflation, selvopbevaring, wallets, Lightning-netværket og hvordan Bitcoin sammenligner sig med andre aktiver og betalingssystemer.",
	"about_what_we_do_2a": "Vi sender ",
	"about_what_we_do_2b": "gratis Bitcoin-klistermærker",
	"about_what_we_do_2c": " direkte hjem til dig, så du kan hjælpe med at sprede Bitcoin-bevidsthed i dit lokalsamfund. Hundredvis af mennesker scanner QR-koderne på disse klistermærker hver måned for at lære om Bitcoin.",
	"about_what_we_do_3a": "Vi tilbyder også ",
	"about_what_we_do_3b": "printbare flyers",
	"about_what_we_do_3c": " og ",
	"about_what_we_do_3d": "virksomhedspakker",
	"about_what_we_do_3e": " til alle, der ønsker at hjælpe lokale virksomheder med at acceptere Bitcoin-betalinger.",
	"about_what_we_do_4": "Alt vores indhold forudsætter nul forudgående viden om Bitcoin. Uanset om du er helt ny til Bitcoin eller en erfaren bitcoiner, der leder efter ressourcer at dele, er bitcoin.rocks for dig.",
	"about_editorial_header": "Vores redaktionelle tilgang",
	"about_editorial_1": "Alt indhold på bitcoin.rocks er kurateret og faktatjekket. Når vi refererer til data eller statistik, angiver vi vores kilder, så du selv kan verificere informationen.",
	"about_editorial_2": "Vi linker til pålidelige kilder som TIME Magazine, Forbes, MIT Technology Review, Lyn Alden og mange andre. Vi mener, at Bitcoin taler for sig selv, når fakta præsenteres tydeligt.",
	"about_editorial_3": "Vores indhold gennemgås og opdateres regelmæssigt for at sikre nøjagtighed og aktualitet. Alt indhold fokuserer udelukkende på Bitcoin-uddannelse.",
	"about_open_source_header": "Open source",
	"about_open_source_1a": "bitcoin.rocks er et gratis open source-projekt licenseret under MIT-licensen. Al vores kode er offentligt tilgængelig ",
	"about_open_source_1b": "på GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Enhver kan bidrage til bitcoin.rocks. Vi byder især oversættere velkommen, der hjælper med at gøre vores indhold tilgængeligt for mennesker over hele verden.",
	"about_open_source_3": "Takket være vores fællesskab af frivillige oversættere er bitcoin.rocks i øjeblikket tilgængeligt på 39 sprog og vokser.",
	"about_open_source_contribute": "Lær hvordan du kan bidrage.",
	"about_contact_header": "Kontakt os",
	"about_contact_1": "Vi vil gerne høre fra dig. Uanset om du har et spørgsmål, et forslag eller bare vil sige hej, er du velkommen til at kontakte os.",
	"about_contact_email": "E-mail:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Du vil modtage dine klistermærker inden for 2 til 4 uger. I mellemtiden kan du tænke på et godt sted til dine klistermærker!",
	"sticker_success_2": "Gode steder til klistermærker er:",
	"sticker_success_list_1": "på offentlige steder, hvor folk vil se dem",
	"sticker_success_list_2": "på steder, hvor de sandsynligvis ikke fjernes hurtigt (klistermærkerne forårsager ingen permanent skade)",
	"sticker_success_list_3": "på overflader, de nemt klæber til (metal, plastik, glas)",
	"sticker_success_list_4": "IKKE på privat ejendom, over skilte, pengeautomater eller tankstationer",
	"sticker_success_3": "Vil du se, hvor andre placerer deres klistermærker?",
	"sticker_success_flyers_bar_new": "NYT!",
	"sticker_success_flyers_bar_cta": "Print og hæng Bitcoin-flyers op →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Vi har modtaget din forespørgsel.",
	"sticker_language_success_2": "Vi udgiver nye filer i puljer, så det kan tage et par uger, før disse filer er tilgængelige til download. Kom tilbage og tjek snart!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Du vil modtage dine postkort inden for 1 til 2 uger.",
	"postcard_success_2": "Tak fordi du hjælper med at accelerere Bitcoin-adoption ved at sende disse postkort til nogen, du kender!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Du vil modtage dine skilte inden for 1 til 2 uger. I mellemtiden kan du tænke på et godt sted til dine skilte!",
	"sign_success_3": "Vil du se, hvor andre sætter deres skilte op?",
	"signs_share_header": "DEL DINE SKILTE-STEDER",
	"signs_share_c1": "Del et billede af dit skilte-sted med os på Nostr, så sender vi sats til dig! Sats er brøkdele af en bitcoin.",
	"signs_btn_share_on_nostr": "DEL PÅ NOSTR",
	"signs_btn_what_is_nostr": "HVAD ER NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "BEREGNER FOR SAMMENSAT INFLATION",
	"cic_description": "Brug denne beregner for sammensat inflation til at finde ud af, hvor meget din løn skal stige for at følge med inflationen.",
	"what_can_i_do_about": "Hvad kan jeg gøre ved",
	"what_can_i_do_about_2": "inflation?",
	"cic_inflation_cta": "Fravælg inflation med Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Bryd ud af Matrix med Nostr",
	"nostr_header": "BRYD UD AF MATRIX MED NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Hvad er Nostr?",
	"what_is_nostr_header": "HVAD ER NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
