/**
 * Updates the language count in all about_xx.json files.
 * The count needs to be manually updated in the translations array below before running the script.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', 'i18n');
const today = new Date().toISOString().split('T')[0];

// Map of language code -> correct translation of "21 languages and growing"
const translations = {
	en: "Thanks to our community of volunteer translators, bitcoin.rocks is currently available in 21 languages and growing.",
	af: "Danksy ons gemeenskap van vrywillige vertalers is bitcoin.rocks tans beskikbaar in 21 tale en groeiend.",
	cs: "Díky naší komunitě dobrovolných překladatelů je bitcoin.rocks v současnosti dostupný v 21 jazycích a stále roste.",
	de: "Dank unserer Gemeinschaft freiwilliger Übersetzer ist bitcoin.rocks derzeit in 21 Sprachen verfügbar und wächst weiter.",
	es: "Gracias a nuestra comunidad de traductores voluntarios, bitcoin.rocks está actualmente disponible en 21 idiomas y sigue creciendo.",
	fr: "Grâce à notre communauté de traducteurs bénévoles, bitcoin.rocks est actuellement disponible en 21 langues et continue de croître.",
	hi: "हमारे स्वयंसेवी अनुवादकों के समुदाय की बदौलत, bitcoin.rocks वर्तमान में 21 भाषाओं में उपलब्ध है और बढ़ रहा है।",
	it: "Grazie alla nostra comunità di traduttori volontari, bitcoin.rocks è attualmente disponibile in 21 lingue e in continua crescita.",
	ny: "Chifukwa cha gulu lathu la omasulira odzipereka, bitcoin.rocks panopa yapezeka m'zilankhulo 21 ndipo ikukulirakulira.",
	pt: "Graças à nossa comunidade de tradutores voluntários, o bitcoin.rocks está atualmente disponível em 21 idiomas e crescendo.",
	nl: "Dankzij onze gemeenschap van vrijwillige vertalers is bitcoin.rocks momenteel beschikbaar in 21 talen en groeiende.",
	bg: "Благодарение на нашата общност от доброволни преводачи, bitcoin.rocks е наличен в момента на 21 езика и продължава да расте.",
	id: "Berkat komunitas penerjemah sukarelawan kami, bitcoin.rocks saat ini tersedia dalam 21 bahasa dan terus bertambah.",
	sv: "Tack vare vårt community av frivilliga översättare är bitcoin.rocks för närvarande tillgänglig på 21 språk och växer.",
	th: "ด้วยชุมชนอาสาสมัครนักแปลของเรา bitcoin.rocks ปัจจุบันมีให้บริการใน 21 ภาษาและเพิ่มขึ้นเรื่อยๆ",
	pl: "Dzięki naszej społeczności tłumaczy-wolontariuszy, bitcoin.rocks jest obecnie dostępny w 21 językach i wciąż rośnie.",
	ta: "எங்கள் தன்னார்வ மொழிபெயர்ப்பாளர்கள் சமூகத்திற்கு நன்றி, bitcoin.rocks தற்போது 21 மொழிகளில் கிடைக்கிறது மற்றும் வளர்ந்து வருகிறது.",
	zh: "感谢我们的志愿翻译社区，bitcoin.rocks目前有21种语言版本，并且还在不断增长。",
	vi: "Nhờ cộng đồng dịch giả tình nguyện, bitcoin.rocks hiện có sẵn bằng 21 ngôn ngữ và đang tiếp tục phát triển.",
	zu: "Ngokubonga umphakathi wethu wabahumushi abazithandela, i-bitcoin.rocks okwamanje itholakala ngezilimi ezingu-21 futhi iyakhula.",
	ja: "ボランティア翻訳者コミュニティのおかげで、bitcoin.rocksは現在21言語で利用可能であり、さらに増え続けています。"
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
