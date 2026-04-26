#!/usr/bin/env node
/**
 * Norwegian (Bokmål) manifest refresh — port translations from Danish.
 *
 * Norwegian Bokmål and Danish are nearly mutually intelligible written
 * languages. This script reads the most recent applied Danish report
 * (which has all 1026 entries translated) and ports each translation
 * into Norwegian Bokmål by applying systematic Danish→Norwegian word
 * substitutions.
 *
 * The result is then manually polished by fix-remaining.js for any
 * remaining edge cases. Since the inflation namespace is already
 * handled by translate-inflation.js with hand-tuned templates, this
 * script only fills in the non-inflation namespaces.
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
	"nb.json",
);

const APPLIED_DIR = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"applied",
);

/* ─────────────── Danish → Norwegian Bokmål word substitutions ─────────────── */
// Applied as whole-word case-sensitive replacements with word boundaries.
// Order matters: longer phrases first to avoid partial overrides.

const SUBS = [
	// Multi-word phrases first
	["i omløb", "i omløp"],
	["i omlobet", "i omløpet"],
	["bliver til", "blir til"],
	["bliver ved", "blir ved"],
	["bliver", "blir"],
	["blivet", "blitt"],
	["bliver ikke", "blir ikke"],
	["nogle gange", "noen ganger"],
	["være med", "være med"],
	["ikke længere", "ikke lenger"],
	["ikke længer", "ikke lenger"],
	["er nødt til", "må"],
	["må man", "må man"],
	["forskellen mellem", "forskjellen mellom"],
	["Forskellen mellem", "Forskjellen mellom"],
	["skat", "skatt"],
	["mellem", "mellom"],
	["mellom", "mellom"],
	["fjerntliggende", "fjerne"],
	["nogensinde", "noensinne"],
	["aldrig", "aldri"],
	["alligevel", "likevel"],
	["sjælden", "sjelden"],
	["sjældent", "sjelden"],
	["sjældnere", "sjeldnere"],
	["næsten", "nesten"],
	["næste", "neste"],
	["næste skridt", "neste skritt"],
	["næste trin", "neste trinn"],

	// Pronouns & verbs
	["mig", "meg"],
	["dig", "deg"],
	["jeg", "jeg"], // same
	["vi", "vi"], // same
	["du", "du"], // same
	["sig", "seg"],
	["sit", "sitt"],
	["sine", "sine"], // same
	["meget", "mye"],
	["megen", "mye"],
	["meningen", "meningen"], // same
	["Vores", "Vår"],
	["vores", "vår"],

	// Common verbs that differ
	["ringe til", "ringe til"], // same
	["ringer til", "ringer til"], // same
	["betyder", "betyr"],
	["betydet", "betydd"],
	["sætter", "setter"],
	["sættes", "settes"],
	["sættet", "settet"],
	["sætte", "sette"],
	["sat", "satt"],
	["pænt", "pent"],
	["pæn", "pen"],
	["lægger", "legger"],
	["lægges", "legges"],
	["lægge", "legge"],
	["lagt", "lagt"], // same
	["lader", "lar"],
	["lad", "la"],
	["lade", "la"],
	["lod", "lot"],
	["modtager", "mottar"],
	["modtagne", "mottatte"],
	["modtaget", "mottatt"],
	["modtage", "motta"],
	["modtages", "mottas"],
	["dækker", "dekker"],
	["dække", "dekke"],
	["dækket", "dekket"],
	["dækning", "dekning"],
	["nægter", "nekter"],
	["nægtede", "nektet"],
	["nægte", "nekte"],
	["forsøger", "prøver"],
	["forsøgte", "prøvde"],
	["forsøge", "prøve"],
	["udløbe", "utløpe"],
	["udløber", "utløper"],
	["udløb", "utløp"],
	["udlåner", "låner ut"],
	["udlånes", "lånes ut"],
	["udlåne", "låne ut"],
	["udlånt", "lånt ut"],
	["udvider", "utvider"],
	["udvide", "utvide"],
	["udvidelse", "utvidelse"],
	["udsteder", "utsteder"],
	["udstedt", "utstedt"],
	["udstede", "utstede"],
	["udstedelse", "utstedelse"],
	["udsætter", "utsetter"],
	["udsat", "utsatt"],
	["udsendelse", "utsendelse"],
	["udskrives", "utskrives"],
	["udskrivning", "utskriving"],
	["udskrive", "trykke"],
	["udsmeltes", "smeltes om"],
	["udvinder", "utvinner"],
	["udvundet", "utvunnet"],
	["udvundne", "utvunne"],
	["udvinde", "utvinne"],
	["udvindes", "utvinnes"],
	["udvinding", "utvinning"],
	["udvalg", "utvalg"], // same
	["udadtil", "utad"],
	["udlandet", "utlandet"], // same
	["udsigt", "utsikt"],
	["overfører", "overfører"], // same
	["overføres", "overføres"], // same
	["overføre", "overføre"], // same
	["overført", "overført"], // same
	["overgår", "overgår"], // same
	["overdrager", "overdrar"],
	["bevidst", "bevisst"],
	["bevidsthed", "bevissthet"],
	["bedst", "best"],
	["bedre", "bedre"], // same
	["enig", "enig"], // same
	["forskelligt", "forskjellig"],
	["forskellig", "forskjellig"],
	["forskelle", "forskjeller"],
	["forskel", "forskjell"],
	["forskellige", "forskjellige"],
	["uafhæng", "uavheng"],
	["afhæng", "avheng"],
	["hænger", "henger"],
	["hænge", "henge"],
	["hængt", "hengt"],
	["sændes", "sendes"],
	["sender", "sender"], // same
	["sende", "sende"], // same
	["sendt", "sendt"], // same
	["bygges", "bygges"], // same
	["bygget", "bygd"],
	["byggede", "bygde"],
	["bygge", "bygge"], // same
	["fungerer", "fungerer"], // same
	["fungere", "fungere"], // same
	["fungeret", "fungert"],
	["styrer", "styrer"], // same
	["styre", "styre"], // same
	["styret", "styrt"],
	["bragte", "brakte"],
	["bragt", "brakt"],
	["bringer", "bringer"], // same
	["bringe", "bringe"], // same
	["beholdt", "beholdt"], // same
	["behold", "behold"], // same
	["beholde", "beholde"], // same
	["beholder", "beholder"], // same

	// Countries / proper nouns
	["Storbritannien", "Storbritannia"],
	["Frankrig", "Frankrike"],
	["Filippinerne", "Filippinene"],
	["Tyskland", "Tyskland"], // same
	["Spanien", "Spania"],
	["Italien", "Italia"],
	["Sverige", "Sverige"], // same
	["Norge", "Norge"], // same
	["Schweiz", "Sveits"],
	["schweizisk", "sveitsisk"],

	// Currencies / nouns
	["regnskab", "regnskap"],
	["regering", "regjering"],
	["regeringen", "regjeringen"],
	["regeringer", "regjeringer"],
	["regeringers", "regjeringers"],
	["statslig", "statlig"],
	["statslige", "statlige"],
	["myndighed", "myndighet"],
	["myndighederne", "myndighetene"],
	["myndigheder", "myndigheter"],
	["sundhed", "sunnhet"],
	["frihed", "frihet"],
	["friheden", "friheten"],
	["frihedsværktøj", "frihetsverktøy"],
	["værktøj", "verktøy"],
	["sjov", "moro"],
	["læring", "læring"], // same
	["værne", "verne"],
	["værn", "vern"],
	["værge", "verge"],
	["lærdom", "lærdom"], // same
	["fremragende", "fremragende"], // same
	["udmærket", "utmerket"],
	["udmærke", "utmerke"],
	["mærke", "merke"],
	["mærket", "merket"],
	["mærker", "merker"],
	["mærkat", "merke"],
	["mærkning", "merking"],
	["mærke sig", "merke seg"],
	["bemærk", "merk"],
	["bemærket", "merket"],
	["bemærke", "merke"],
	["plads", "plass"],
	["pladsen", "plassen"],
	["pladser", "plasser"],
	["passende", "passende"], // same
	["passer", "passer"], // same
	["passe", "passe"], // same
	["bopæl", "bosted"],
	["bopælen", "bostedet"],
	["selvforvaring", "selvforvaring"], // same
	["selvbetjening", "selvbetjening"], // same
	["sjældnere", "sjeldnere"],
	["spørgsmål", "spørsmål"],
	["sætning", "setning"],
	["særlig", "særlig"], // same
	["særligt", "særlig"],
	["særlige", "særlige"], // same
	["samtidig", "samtidig"], // same
	["samtidigt", "samtidig"],
	["sammenligning", "sammenligning"], // same
	["sammenligne", "sammenligne"], // same
	["sammenlignet", "sammenlignet"], // same
	["uafhængig", "uavhengig"],
	["uafhængigt", "uavhengig"],

	// Conjunctions / particles
	["også", "også"], // same
	["igen", "igjen"],
	["endnu", "ennå"],
	["sådan", "slik"],
	["således", "slik"],
	["nogensinde", "noensinne"],
	["nogle", "noen"],
	["nogen", "noen"],
	["nogensteds", "noensteds"],
	["noget", "noe"],
	["intet", "intet"], // same (also "ingenting")
	["ingen", "ingen"], // same
	["skal", "skal"], // same
	["fra de", "fra de"], // same
	["lige", "like"],
	["lige nu", "akkurat nå"],
	["nu", "nå"],

	// "ej" is rare in Danish; Norwegian Bokmål uses "ikke"; if "ej" appears keep as-is
	// Days of week
	["mandag", "mandag"], // same
	["tirsdag", "tirsdag"], // same
	["onsdag", "onsdag"], // same
	["torsdag", "torsdag"], // same
	["fredag", "fredag"], // same
	["lørdag", "lørdag"], // same
	["søndag", "søndag"], // same
	["januar", "januar"], // same
	["februar", "februar"], // same
	["marts", "mars"],
	["april", "april"], // same
	["maj", "mai"],
	["juni", "juni"], // same
	["juli", "juli"], // same
	["august", "august"], // same
	["september", "september"], // same
	["oktober", "oktober"], // same
	["november", "november"], // same
	["december", "desember"],

	// Common adjectives
	["mindste", "minste"],
	["mindre", "mindre"], // same
	["mindst", "minst"],
	["mest", "mest"], // same
	["største", "største"], // same
	["størst", "størst"], // same
	["nuværende", "nåværende"],
	["ny", "ny"], // same
	["nye", "nye"], // same
	["nyt", "nytt"],
	["et nyt", "et nytt"],
	["et helt nyt", "et helt nytt"],
	["dit", "ditt"],
	["mit", "mitt"],
	["sit", "sitt"],
	["et", "et"], // same
	["ét", "ett"],
	["dette", "dette"], // same
	["dette her", "dette her"], // same
	["disse", "disse"], // same
	["denne", "denne"], // same
	["det", "det"], // same
	["i de", "i de"], // same
	["det er", "det er"], // same
	["der er", "det er"], // Danish "der er" → Norwegian "det er"
	["der", "det"], // careful! many edge cases

	// Common patterns
	["langt", "langt"], // same
	["langsigtet", "langsiktig"],
	["langsigtede", "langsiktige"],
	["lang", "lang"], // same
	["lange", "lange"], // same
	["langfristet", "langsiktig"],
	["langfristede", "langsiktige"],
	["kortsigtet", "kortsiktig"],
	["kortsigtede", "kortsiktige"],
	["kort", "kort"], // same
	["korte", "korte"], // same
	["kortere", "kortere"], // same
	["enkelt", "enkelt"], // same
	["enkelte", "enkelte"], // same
	["enkel", "enkel"], // same
	["enkle", "enkle"], // same
	["enkelheden", "enkeltheten"],
	["enkelhed", "enkelhet"],

	// Money & finance specific
	["kontanter", "kontanter"], // same
	["aktier", "aktier"], // same (alt. aksjer in Norwegian, but "aktier" exists too); use "aksjer"
	// Actually Norwegian standard is "aksjer"
	["aktier", "aksjer"],
	["aktie", "aksje"],
	["aktiepris", "aksjepris"],
	["aktiemarked", "aksjemarked"],
	["aktionær", "aksjonær"],
	["aktionærer", "aksjonærer"],
	["aktiekurs", "aksjekurs"],
	["mæglerselskab", "meglerforetak"],
	["mæglervirksomhed", "meglerforetak"],
	["mægler", "megler"],
	["mæglere", "meglere"],
	["mægler", "megler"],
	["pengemængden", "pengemengden"],
	["pengemængde", "pengemengde"],
	["mængden", "mengden"],
	["mængde", "mengde"],
	["mange", "mange"], // same
	["fast", "fast"], // same
	["lillebitte", "knøttsmå"],
	["valuta", "valuta"], // same
	["valutaer", "valutaer"], // same
	["i alt", "totalt"],

	// Specific phrases
	["en del af", "en del av"],
	["af noget", "av noe"],
	["af det", "av det"],
	["af din", "av din"],
	["af dit", "av ditt"],
	["af dine", "av dine"],
	["af enhver", "av enhver"],
	["af dem", "av dem"],
	["af os", "av oss"],
	["af alle", "av alle"],
	["af andre", "av andre"],
	[" af ", " av "],
	["til at", "til å"],
	["nem at", "lett å"],
	[" at ", " å "],

	// Dejlig / kølig etc
	["dejlig", "deilig"],
	["kølig", "kjølig"],
	["godt nok", "godt nok"], // same
	["ked", "lei"],
	["ked af", "lei seg over"],
	["røre", "røre"], // same
	["rørt", "rørt"], // same
	["røres", "røres"], // same
	["redde", "redde"], // same
	["red", "redd"],
	["reddede", "reddet"],
	["reddet", "reddet"], // same

	// Misc finance
	["wallet", "wallet"], // same
	["wallets", "wallets"], // same
	["en wallet", "en wallet"], // same
	["fortrolig", "fortrolig"], // same
	["fortrolighed", "fortrolighet"],
	["privatliv", "personvern"],
	["privatlivet", "personvernet"],

	// Number & dates
	["procent", "prosent"],
	["procentdel", "prosentandel"],
	["procentvis", "prosentvis"],
	["procentpoint", "prosentpoeng"],
	["pct.", "pst."],
	["%", "%"],
	[" %", " %"],

	// Bigger words
	["transaktion", "transaksjon"],
	["transaktioner", "transaksjoner"],
	["transaktionen", "transaksjonen"],
	["transaktionerne", "transaksjonene"],
	["operation", "operasjon"],
	["operationer", "operasjoner"],
	["produktion", "produksjon"],
	["produktioner", "produksjoner"],
	["nation", "nasjon"],
	["nationer", "nasjoner"],
	["national", "nasjonal"],
	["nationale", "nasjonale"],
	["funktion", "funksjon"],
	["funktioner", "funksjoner"],
	["funktionel", "funksjonell"],
	["station", "stasjon"],
	["stationer", "stasjoner"],
	["bidrag", "bidrag"], // same
	["bidrage", "bidra"],
	["bidrager", "bidrar"],
	["pension", "pensjon"],
	["pensioner", "pensjoner"],
	["pensionsalder", "pensjonsalder"],
	["finansierne", "finansene"],
	["finansiere", "finansiere"], // same
	["finansiering", "finansiering"], // same
	["finansieret", "finansiert"],
	["realisere", "realisere"], // same
	["realiseret", "realisert"],
	["realisering", "realisering"], // same
	["organisering", "organisering"], // same
	["organisationer", "organisasjoner"],
	["organisation", "organisasjon"],
	["centraliseret", "sentralisert"],
	["centraliserede", "sentraliserte"],
	["centralt", "sentralt"],
	["central", "sentral"],
	["centrale", "sentrale"],
	["centraliseret", "sentralisert"],
	["decentralisering", "desentralisering"],
	["decentraliseret", "desentralisert"],
	["decentraliserede", "desentraliserte"],
	["decentral", "desentral"],
	["decentrale", "desentrale"],
	["servere", "tjenere"],
	["server", "tjener"],
	// Misc
	["forslag", "forslag"], // same
	["foreslå", "foreslå"], // same
	["ulig", "ulik"],
	["ulige", "ulike"],
	["ulighed", "ulikhet"],
	["ligheder", "likheter"],
	["lighed", "likhet"],
	["lige", "lik"],
	["ligne", "ligne"], // same
	["lignende", "lignende"], // same
	["lignet", "lignet"], // same

	// Final tweaks
	["pengeudskrivning", "pengetrykking"],
	["udskriver", "skriver ut"],
	["udskrev", "skrev ut"],
	["udskrevet", "skrevet ut"],
	["pengetryk", "pengetrykk"],
	["udtrykker", "uttrykker"],
	["udtrykke", "uttrykke"],
	["udtryk", "uttrykk"],
	["forsyning", "tilførsel"],
	["forsynings", "tilførsels"],
	["forsyningsgrænse", "tilbudsgrense"],
	["loft", "tak"],
	["forsyningsloft", "tilbudstak"],

	// Polite cleanup
	["ved at", "ved å"],
	["nemmere", "lettere"],
	["nemmest", "letteste"],
	["nemt", "lett"],
	["nem", "lett"],
	["smukke", "vakre"],
	["smuk", "vakker"],
	["smukt", "vakkert"],

	// "i dag" / "i går" etc
	["i dag", "i dag"], // same
	["i går", "i går"], // same
	["i morgen", "i morgen"], // same
	["i fjor", "i fjor"], // same
	["i fjor sommer", "i fjor sommer"], // same

	// "trygge" / "tryg"
	["tryg", "trygg"],
	["trygt", "trygt"], // same
	["trygge", "trygge"], // same
	["tryghed", "trygghet"],

	// Ord-endinger på -ed → -et
	["lavet", "laget"],
	["købt", "kjøpt"],
	["købe", "kjøpe"],
	["køber", "kjøper"],
	["købte", "kjøpte"],
	["kæmper", "kjemper"],
	["kæmpe", "kjempe"],
	["kæmpet", "kjempet"],
	["kæreste", "kjæreste"],
	["kære", "kjære"],
	["kør", "kjør"],
	["køre", "kjøre"],
	["kører", "kjører"],
	["kørte", "kjørte"],
	["kørt", "kjørt"],
	["købsmuligheder", "kjøpsmuligheter"],
	["købspris", "kjøpspris"],
	["købskraft", "kjøpekraft"],
	["købekraft", "kjøpekraft"],
	["købe en", "kjøpe en"],

	// "spar" verb
	["sparer", "sparer"], // same
	["sparet", "spart"],
	["spar", "spar"], // same
	["spare", "spare"], // same
	["sparemuligheder", "sparemuligheter"],
	["opsparing", "oppsparing"],
	["opsparingen", "oppsparingen"],
	["opsparingerne", "oppsparingene"],
	["opsparingskonto", "sparekonto"],
	["sparekonto", "sparekonto"], // same
	["opsparede", "oppsparte"],
	["opsparet", "oppspart"],
	["opspare", "oppspare"],

	// "kunne" / "kan" - already same in Norwegian
	["skulle", "skulle"], // same
	["ville", "ville"], // same
	["måtte", "måtte"], // same

	// "tilladelse" → "tillatelse"
	["tilladelse", "tillatelse"],
	["tilladelser", "tillatelser"],
	["tilladelsesfri", "tillatelsesfri"],
	["tilladelsesfrit", "tillatelsesfritt"],
	["tillade", "tillate"],
	["tillader", "tillater"],
	["tilladt", "tillatt"],
	["tilfælde", "tilfelle"],
	["tilfældigvis", "tilfeldigvis"],
	["tilfældig", "tilfeldig"],
	["tilfældige", "tilfeldige"],

	// Internet / computing
	["online", "nett"],
	// Actually "online" is used in both, keep as-is. Reverting:
	// (no override)

	// "før / siden"  - same
	["førhen", "tidligere"],
	["til sidst", "til slutt"],
	["sidst", "sist"],
	["sidste", "siste"],
	["seneste", "siste"],
	["senest", "sist"],
	["slut", "slutt"],
	["slutter", "slutter"], // same
	["slutte", "slutte"], // same
	["sluttet", "sluttet"], // same
	["af sluttede", "av sluttede"], // probably not used
	["ende", "ende"], // same
	["enden", "enden"], // same
	["enderne", "endene"],
	["ender", "ender"], // same

	// Specific bitcoin.rocks vocabulary
	["bitcoin.rocks-projektet", "bitcoin.rocks-prosjektet"],
	["projekt", "prosjekt"],
	["projekter", "prosjekter"],
	["projektet", "prosjektet"],
	["projektets", "prosjektets"],
	["projekters", "prosjekters"],

	// "mellem" already done above
	// Common short
	["bare", "bare"], // same
	["selvom", "selv om"],
	["mens", "mens"], // same
	["hvor", "hvor"], // same
	["hvor som helst", "hvor som helst"], // same
	["hvor mange", "hvor mange"], // same
	["hvad", "hva"],
	["hvor meget", "hvor mye"],
	["hvor lidt", "hvor lite"],
	["hvor længe", "hvor lenge"],
	["hvor mange", "hvor mange"], // same
	["hvilken", "hvilken"], // same
	["hvilke", "hvilke"], // same
	["hvilket", "hvilket"], // same
	["hvis", "hvis"], // same

	// Final close
	["adskilt", "adskilt"], // same
	["adskillelse", "adskillelse"], // same
	["meningsfulde", "meningsfulle"],
	["meningsfuld", "meningsfull"],
	["meningsløse", "meningsløse"], // same
	["meningsløst", "meningsløst"], // same
	["betydningsfuldt", "betydningsfullt"],
	["betydningsfulde", "betydningsfulle"],
	["betydningsfuld", "betydningsfull"],

	// "stiger" → "stiger" same
	// "falder" → "faller"
	["falder", "faller"],
	["faldt", "falt"],
	["faldet", "falt"],
	["falde", "falle"],

	// "krakkede" → "kollapset" or keep "krakket"? Norwegian has "krakket"
	["krakkede", "kollapset"],
	["krakket", "kollapset"],
	["krakker", "kollapser"],
	["krakke", "kollapse"],
	["krakk", "krakk"], // same (financial krakk)

	// "nuværende" already done

	// "kvalifi" ekstra
	["kvalificeret", "kvalifisert"],
	["kvalifikation", "kvalifikasjon"],

	// Currency longnames done in inflation script directly, leave Danish forms here

	// "bil" / "biler" - same
	// "biler" - same
	// quotes: keep „...“ as Norwegian uses «...» in formal text but „...“ is sometimes seen
	["„", "«"],
	["“", "»"],
	["”", "»"],

	// thousands separator: Danish uses "." Norwegian uses " " (NBSP) or "."
	// Skip — keep as-is

	// Specific bank-runs / fiat / etc terms
	["chargeback", "chargeback"], // same
	["chargebacks", "chargebacks"], // same
	["betalingsterminal", "betalingsterminal"], // same
	["fast ejendom", "fast eiendom"],
	["ejendom", "eiendom"],
	["ejendomme", "eiendommer"],
	["ejendommen", "eiendommen"],
	["ejendomsskat", "eiendomsskatt"],
	["ejendomsadministration", "eiendomsforvaltning"],
	["ejer", "eier"],
	["ejere", "eiere"],
	["ejet", "eid"],
	["eje", "eie"],
	["ejerskab", "eierskap"],
	["egen", "egen"], // same
	["egne", "egne"], // same
	["eget", "eget"], // same
	["eje sit eget", "eie sitt eget"],
	["udelukkende", "utelukkende"],
	["udelukker", "utelukker"],
	["udelukke", "utelukke"],
	["udelukket", "utelukket"],

	// "samme" - same
	// "selv" - same
	// "alt" - same
	// "alle" - same

	// "gør" → "gjør"
	["gør det muligt", "gjør det mulig"],
	["gjør", "gjør"], // already correct
	["gør", "gjør"],
	["gøre", "gjøre"],
	["gjort", "gjort"], // already correct
	["gjorde", "gjorde"], // already correct
	["gjør", "gjør"], // already

	// "dybde / forskel"
	["dybt", "dypt"],
	["dyb", "dyp"],
	["dybe", "dype"],
	["dybde", "dybde"], // same

	// Very specific patterns from Danish output
	["forrige", "forrige"], // same
	["næste", "neste"],
	["værsgo", "vær så god"],

	// Possessive endings & verb endings - careful pass
	["kan ikke gå", "kan ikke gå"],
	["er gået", "har gått"],
	["gået", "gått"],
	["går", "går"], // same
	["gå", "gå"], // same
	["gik", "gikk"],

	// Cleanup
	["herefter", "heretter"],
	["derefter", "deretter"],
	["bagefter", "etterpå"],

	// Commerce vocabulary
	["handlende", "handlende"], // same
	["forretning", "bedrift"],
	["forretninger", "bedrifter"],
	["forretningen", "bedriften"],
	// But also keep "forretning" sometimes as in "forretningsmodell" → "forretningsmodell" same
	["virksomhed", "virksomhet"],
	["virksomheden", "virksomheten"],
	["virksomhedens", "virksomhetens"],
	["virksomheder", "virksomheter"],
	["virksomhedernes", "virksomhetenes"],
	["lighed", "likhet"],

	// done
];

/* ─────────────── Convert Danish text to Norwegian Bokmål ─────────────── */

function convertText(text) {
	if (typeof text !== "string") return text;
	let out = text;
	for (const [from, to] of SUBS) {
		// Use plain replace; case-sensitive global
		// To avoid splitting words mid-stream, we do a careful pattern with word
		// boundaries for short tokens. For multi-word phrases we just replace.
		if (/\s/.test(from)) {
			// Multi-word: simple replace
			out = out.split(from).join(to);
		} else {
			// Single-word: use regex with word boundary that handles non-ASCII
			const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			// Use Unicode-aware lookarounds for word boundaries
			const re = new RegExp(
				"(?<![\\p{L}\\p{N}_])" + escaped + "(?![\\p{L}\\p{N}_])",
				"gu",
			);
			out = out.replace(re, to);
		}
	}
	return out;
}

/* ─────────────── Apply ─────────────── */

function findLatestDanishReport() {
	const files = fs
		.readdirSync(APPLIED_DIR)
		.filter((f) => f.startsWith("da-") && f.endsWith(".json"))
		.sort();
	if (!files.length) throw new Error("No archived Danish reports found");
	return path.join(APPLIED_DIR, files[files.length - 1]);
}

function main() {
	const daPath = findLatestDanishReport();
	console.log("Reading Danish report:", path.basename(daPath));
	const da = JSON.parse(fs.readFileSync(daPath, "utf8"));
	const daMap = new Map();
	for (const e of da.entries) {
		if (typeof e.targetTranslation === "string") {
			daMap.set(`${e.namespace}::${e.key}`, e.targetTranslation);
		}
	}
	console.log(`Loaded ${daMap.size} Danish translations`);

	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let nodanish = 0;

	for (const e of report.entries) {
		// inflation namespace already handled by translate-inflation.js
		if (e.namespace === "inflation") {
			if (typeof e.targetTranslation === "string") skipped++;
			continue;
		}
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		const daTranslation = daMap.get(lookupKey);
		if (typeof daTranslation === "string") {
			e.targetTranslation = convertText(daTranslation);
			filled++;
		} else {
			nodanish++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-from-danish (nb): filled ${filled}, already-done ${skipped}, no Danish source ${nodanish}`,
	);
}

main();
