#!/usr/bin/env node
/**
 * 09-fix-business-why.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/business/why_nb.json
 * into proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "business", "why_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"why_hero_subtitle": "Du har akkurat skannet et «Bitcoin mottas her»-klistremerke. Her er hvorfor det er gode nyheter — for denne bedriften og for deg.",
	"why_intro_c1": "Bedriften du er hos tar imot Bitcoin — et moderne, åpen kildekode-betalingsnettverk som alle hvor som helst i verden kan bruke, uten at banker og mellommenn tar et snitt.",
	"why_intro_c2": "Nedenfor er den korte versjonen av hvorfor det er bra for denne bedriften å ta imot Bitcoin, pluss hvorfor det er bra for deg som kunde å bruke Bitcoin.",
	"why_for_business": "Hvorfor Bitcoin er bra for denne bedriften",
	"why_for_business_intro": "Ved å ta imot Bitcoin beholder denne bedriften mer av hvert salg, blir betalt umiddelbart uten chargebacks og når et globalt publikum av Bitcoin-brukere — alt sammen uten kontrakter eller månedlige gebyrer.",
	"why_biz_s1": "Lavere gebyrer, mer til bedriften",
	"why_biz_s1_c1": "Bitcoin-betalinger går utenom banker og kortselskaper som tar 2–3 % av hvert salg. Bedriften beholder mer av det du betaler — noe som ofte betyr bedre priser og bedre service for deg.",
	"why_biz_s2": "Umiddelbart oppgjør, ingen chargebacks",
	"why_biz_s2_c1": "Bitcoin-betalinger oppgjøres på sekunder, direkte fra lommeboken din til bedriften. Ingen ventetid i flere dager mens banken frigir midler, og ingen dyre chargeback-tvister — noe som betyr at bedriften kan fokusere på å betjene kunder i stedet for å bekjempe svindel.",
	"why_biz_s3": "Gratis å ta imot, åpent for alle",
	"why_biz_s3_c1": "Det finnes ingen kontrakter, månedlige gebyrer eller oppstartskostnader for at en bedrift skal ta imot Bitcoin. Og millioner av Bitcoin-brukere over hele verden leter aktivt etter forhandlere som tar imot det — noe som gir denne bedriften gratis eksponering for nye kunder.",
	"why_business_cta_intro": "Driver du en bedrift og vil begynne å ta imot Bitcoin?",
	"why_good_for_you": "Hvorfor Bitcoin også er bra for deg",
	"why_good_for_you_intro": "Bitcoin er ikke bare nyttig ved kassen — det er en bedre form for penger som beskytter sparepengene dine, personvernet ditt og friheten din til å transagere. Her er en rask oversikt.",
	"why_learn_more_lowercase": "Lær mer →",
	"why_s1": "Bitcoin har ikke inflasjon",
	"why_s1_c1": "Inflasjon skjer når det trykkes mer penger, eller når penger skapes ut av løse luften. Det får pengene i lommen din til å miste verdi over tid — og det er derfor prisene stiger år etter år.",
	"why_s1_c2": "Bitcoin har en fast tilførsel på 21 millioner mynter. Ingen regjering, bank eller bedrift kan trykke mer av det. Bitcoin-sparepengene dine holder på verdien sin over tid i stedet for å miste den i stillhet.",
	"why_s2": "Bitcoin har ingen bankpanikker",
	"why_s2_c1": "I de siste årene har flere amerikanske banker kollapset på grunn av bankpanikker. Da for mange kunder prøvde å ta ut samtidig, hadde bankene ikke nok kontanter til å betale dem alle.",
	"why_s2_c2": "I stedet for bare å oppbevare pengene dine låner og investerer banker mesteparten. Hvis disse investeringene mislykkes — eller innskytere mister tilliten — kan banken kollapse, og innskuddene dine kan fryses eller tapes.",
	"why_s2_c3": "Med Bitcoin kan du oppbevare pengene dine direkte i din egen lommebok. Ingen bank. Ingen mellommann. Ingen bankpanikk.",
	"why_s3": "Bitcoin krever ingen tillatelse",
	"why_s3_c1": "I motsetning til kredittkort, PayPal eller tradisjonelle bankkontoer krever ikke Bitcoin tillatelse fra noen.",
	"why_s3_c2": "Ingen kan fryse kontoen din, blokkere en betaling eller koble deg fra nettverket. Det er det første finansielle systemet i historien som du kan bruke fritt, uten frykt for sensur eller konfiskering.",
	"why_s4": "Bitcoin bygger en bedre verden",
	"why_s4_c1": "Bitcoin blir ofte misforstått, men gjør i stillhet mye godt i verden.",
	"why_s4_c2": "Det har hjulpet menneskerettighetsaktivister i deres kamp for frihet, redusert globale metanutslipp fra fyllinger og oljefelt, stabilisert strømnett og finansiert offentlige goder som nasjonalparker.",
	"why_whats_next_heading": "Hvor skal du nå?",
	"why_whats_next_intro": "Hvis dette er første gang du skanner et Bitcoin-klistremerke, er her de mest nyttige stedene å gå videre.",
	"why_next_learn_label": "LÆR MER",
	"why_next_learn_title": "Lær mer om Bitcoin",
	"why_next_wallet_label": "FÅ EN LOMMEBOK",
	"why_next_wallet_title": "Få din egen Bitcoin-lommebok",
	"why_next_buy_label": "KJØP BITCOIN",
	"why_next_buy_title": "Kjøp din første Bitcoin",
	"why_next_business_label": "TA IMOT BITCOIN",
	"why_next_business_title": "Ta imot Bitcoin i bedriften din",
};

let changed = 0;
for (const [k, v] of Object.entries(fixes)) {
	if (!(k in data)) {
		console.warn(`! key not found in file: ${k}`);
		continue;
	}
	if (data[k] !== v) {
		data[k] = v;
		changed++;
	}
}

data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-26";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log(`business/why_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
