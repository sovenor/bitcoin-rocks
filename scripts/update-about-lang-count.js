/**
 * Updates the language count in all about_xx.json files.
 * Changes "9 languages" to "10 languages" (or equivalent in each language).
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', 'i18n');
const today = new Date().toISOString().split('T')[0];

// Map of language code -> correct translation of "10 languages and growing"
const translations = {
	en: "Thanks to our community of volunteer translators, bitcoin.rocks is currently available in 10 languages and growing.",
	de: "Dank unserer Gemeinschaft freiwilliger Übersetzer ist bitcoin.rocks derzeit in 10 Sprachen verfügbar und wächst weiter.",
	es: "Gracias a nuestra comunidad de traductores voluntarios, bitcoin.rocks está actualmente disponible en 10 idiomas y sigue creciendo.",
	fr: "Grâce à notre communauté de traducteurs bénévoles, bitcoin.rocks est actuellement disponible en 10 langues et continue de croître.",
	it: "Grazie alla nostra comunità di traduttori volontari, bitcoin.rocks è attualmente disponibile in 10 lingue e in continua crescita.",
	pt: "Graças à nossa comunidade de tradutores voluntários, o bitcoin.rocks está atualmente disponível em 10 idiomas e crescendo.",
	nl: "Dankzij onze gemeenschap van vrijwillige vertalers is bitcoin.rocks momenteel beschikbaar in 10 talen en groeiende.",
	bg: "Благодарение на нашата общност от доброволни преводачи, bitcoin.rocks е наличен в момента на 10 езика и продължава да расте.",
	id: "Berkat komunitas penerjemah sukarelawan kami, bitcoin.rocks saat ini tersedia dalam 10 bahasa dan terus bertambah.",
	th: "ด้วยชุมชนอาสาสมัครนักแปลของเรา bitcoin.rocks ปัจจุบันมีให้บริการใน 10 ภาษาและเพิ่มขึ้นเรื่อยๆ",
	pl: "Dzięki naszej społeczności tłumaczy-wolontariuszy, bitcoin.rocks jest obecnie dostępny w 10 językach i wciąż rośnie."
};

let updatedCount = 0;

for (const [lang, newText] of Object.entries(translations)) {
	const filePath = path.join(i18nDir, lang, `about_${lang}.json`);
	
	if (!fs.existsSync(filePath)) {
		console.log(`SKIP: ${filePath} does not exist`);
		continue;
	}
	
	const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
	
	const oldText = content.about_open_source_3;
	if (oldText === newText) {
		console.log(`OK (no change): ${lang}`);
		continue;
	}
	
	content.about_open_source_3 = newText;
	content['@metadata']['last-updated'] = today;
	
	fs.writeFileSync(filePath, JSON.stringify(content, null, '\t') + '\n', 'utf8');
	console.log(`UPDATED: ${lang} — "${oldText}" → "${newText}"`);
	updatedCount++;
}

console.log(`\nDone. Updated ${updatedCount} file(s).`);
