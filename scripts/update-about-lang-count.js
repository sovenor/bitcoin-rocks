/**
 * Updates the language count in all about_xx.json files.
 * Changes "14 languages" to "15 languages" (or equivalent in each language).
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', 'i18n');
const today = new Date().toISOString().split('T')[0];

// Map of language code -> correct translation of "18 languages and growing"
const translations = {
	en: "Thanks to our community of volunteer translators, bitcoin.rocks is currently available in 18 languages and growing.",
	af: "Danksy ons gemeenskap van vrywillige vertalers is bitcoin.rocks tans beskikbaar in 18 tale en groeiend.",
	cs: "Díky naší komunitě dobrovolných překladatelů je bitcoin.rocks v současnosti dostupný v 18 jazycích a stále roste.",
	de: "Dank unserer Gemeinschaft freiwilliger Übersetzer ist bitcoin.rocks derzeit in 18 Sprachen verfügbar und wächst weiter.",
	es: "Gracias a nuestra comunidad de traductores voluntarios, bitcoin.rocks está actualmente disponible en 18 idiomas y sigue creciendo.",
	fr: "Grâce à notre communauté de traducteurs bénévoles, bitcoin.rocks est actuellement disponible en 18 langues et continue de croître.",
	hi: "हमारे स्वयंसेवी अनुवादकों के समुदाय की बदौलत, bitcoin.rocks वर्तमान में 18 भाषाओं में उपलब्ध है और बढ़ रहा है।",
	it: "Grazie alla nostra comunità di traduttori volontari, bitcoin.rocks è attualmente disponibile in 18 lingue e in continua crescita.",
	ny: "Chifukwa cha gulu lathu la omasulira odzipereka, bitcoin.rocks panopa yapezeka m'zilankhulo 18 ndipo ikukulirakulira.",
	pt: "Graças à nossa comunidade de tradutores voluntários, o bitcoin.rocks está atualmente disponível em 18 idiomas e crescendo.",
	nl: "Dankzij onze gemeenschap van vrijwillige vertalers is bitcoin.rocks momenteel beschikbaar in 18 talen en groeiende.",
	bg: "Благодарение на нашата общност от доброволни преводачи, bitcoin.rocks е наличен в момента на 18 езика и продължава да расте.",
	id: "Berkat komunitas penerjemah sukarelawan kami, bitcoin.rocks saat ini tersedia dalam 18 bahasa dan terus bertambah.",
	th: "ด้วยชุมชนอาสาสมัครนักแปลของเรา bitcoin.rocks ปัจจุบันมีให้บริการใน 18 ภาษาและเพิ่มขึ้นเรื่อยๆ",
	pl: "Dzięki naszej społeczności tłumaczy-wolontariuszy, bitcoin.rocks jest obecnie dostępny w 18 językach i wciąż rośnie.",
	ta: "எங்கள் தன்னார்வ மொழிபெயர்ப்பாளர்கள் சமூகத்திற்கு நன்றி, bitcoin.rocks தற்போது 18 மொழிகளில் கிடைக்கிறது மற்றும் வளர்ந்து வருகிறது.",
	zh: "感谢我们的志愿翻译社区，bitcoin.rocks目前有18种语言版本，并且还在不断增长。",
	zu: "Ngokubonga umphakathi wethu wabahumushi abazithandela, i-bitcoin.rocks okwamanje itholakala ngezilimi ezingu-18 futhi iyakhula."
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
