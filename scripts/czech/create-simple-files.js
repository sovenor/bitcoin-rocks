/**
 * Creates Czech (cs) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'cs';
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
	"404_title": "Chyba 404 | Stránka nenalezena",
	"404_message": "TATO ROZBITÁ STRÁNKA NENÍ COOL",
	"404_home": "ZPĚT NA HLAVNÍ STRÁNKU"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "O bitcoin.rocks — Vzdělávání o Bitcoinu od roku 2022",
	"about_description": "bitcoin.rocks je bezplatný open-source web o vzdělávání v oblasti Bitcoinu, založený v roce 2022. Naším posláním je urychlit přijetí Bitcoinu prostřednictvím vzdělávání.",
	"about_header": "O NÁS",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Naše poslání",
	"about_mission_1": "bitcoin.rocks byl založen v roce 2022 s jednoduchým posláním: urychlit přijetí Bitcoinu prostřednictvím vzdělávání.",
	"about_mission_2": "Existujeme proto, abychom byli prvním odkazem, který sdílíte s někým, kdo je zvědavý na Bitcoin. Přátelský a přístupný výchozí bod, který vysvětluje, jak Bitcoin buduje lepší svět.",
	"about_mission_3": "Příliš mnoho lidí Bitcoinu nerozumí nebo jim nikdy nebyl správně představen. Chceme to změnit poskytováním bezplatného a kvalitního vzdělávacího obsahu, kterému může porozumět každý.",
	"about_what_we_do_header": "Co děláme",
	"about_what_we_do_1": "Vytváříme bezplatný vzdělávací obsah pro nováčky v oblasti Bitcoinu. Naše stránky pokrývají témata jako inflace, vlastní správa, peněženky, Lightning Network a srovnání Bitcoinu s ostatními aktivy a platebními systémy.",
	"about_what_we_do_2a": "Posíláme ",
	"about_what_we_do_2b": "bezplatné bitcoinové nálepky",
	"about_what_we_do_2c": " až k vašim dveřím, abyste mohli pomoci šířit povědomí o Bitcoinu ve své komunitě. Stovky lidí každý měsíc skenují QR kódy na těchto nálepkách, aby se dozvěděli o Bitcoinu.",
	"about_what_we_do_3a": "Poskytujeme také ",
	"about_what_we_do_3b": "tisknutelné letáky",
	"about_what_we_do_3c": " a ",
	"about_what_we_do_3d": "podnikatelské sady",
	"about_what_we_do_3e": " pro každého, kdo chce pomoci přivést místní podniky k přijímání bitcoinových plateb.",
	"about_what_we_do_4": "Veškerý náš obsah předpokládá nulové předchozí znalosti o Bitcoinu. Ať už jste v Bitcoinu úplný nováček nebo zkušený bitcoiner hledající zdroje ke sdílení, bitcoin.rocks je pro vás.",
	"about_editorial_header": "Náš redakční přístup",
	"about_editorial_1": "Každý obsah na bitcoin.rocks je pečlivě vybraný a ověřený. Když odkazujeme na data nebo statistiky, uvádíme naše zdroje, abyste si mohli informace ověřit sami.",
	"about_editorial_2": "Odkazujeme na důvěryhodné zdroje jako TIME Magazine, Forbes, MIT Technology Review, Lyn Alden a mnoho dalších. Věříme, že Bitcoin mluví sám za sebe, když jsou fakta prezentována jasně.",
	"about_editorial_3": "Náš obsah je pravidelně kontrolován a aktualizován, aby byla zajištěna přesnost a aktuálnost. Veškerý obsah je zaměřen výhradně na vzdělávání o Bitcoinu.",
	"about_open_source_header": "Open Source",
	"about_open_source_1a": "bitcoin.rocks je bezplatný open-source projekt licencovaný pod licencí MIT. Celý náš kód je veřejně dostupný ",
	"about_open_source_1b": "na GitHubu",
	"about_open_source_1c": ".",
	"about_open_source_2": "Kdokoli může přispět k bitcoin.rocks. Obzvláště vítáme překladatele, kteří pomáhají zpřístupnit náš obsah lidem po celém světě.",
	"about_open_source_3": "Díky naší komunitě dobrovolných překladatelů je bitcoin.rocks v současnosti dostupný v 15 jazycích a stále roste.",
	"about_open_source_contribute": "Zjistěte, jak přispět.",
	"about_contact_header": "Kontaktujte nás",
	"about_contact_1": "Rádi od vás uslyšíme. Ať už máte otázku, návrh nebo nám jen chcete říct ahoj, ozvěte se kdykoli.",
	"about_contact_email": "E-mail:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Své nálepky obdržíte za 2 až 4 týdny. Mezitím zkuste vymyslet dobré místo pro vaše nálepky!",
	"sticker_success_2": "Dobrá místa pro nálepky jsou:",
	"sticker_success_list_1": "na veřejných místech, kde je lidé uvidí",
	"sticker_success_list_2": "na místech, odkud pravděpodobně nebudou rychle odstraněny (nálepky nezpůsobují žádné trvalé poškození)",
	"sticker_success_list_3": "na površích, na které se snadno přilepí (kov, plast, sklo)",
	"sticker_success_list_4": "NE na soukromém majetku, přes značení, bankomaty nebo čerpací stanice",
	"sticker_success_3": "Chcete vidět, kam ostatní lidé dávají své nálepky?",
	"sticker_success_flyers_bar_new": "NOVINKA!",
	"sticker_success_flyers_bar_cta": "Tiskněte a vylepujte bitcoinové letáky →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Váš požadavek jsme úspěšně přijali.",
	"sticker_language_success_2": "Nové soubory zveřejňujeme v dávkách, takže může trvat několik týdnů, než budou tyto soubory dostupné ke stažení. Zkontrolujte to znovu brzy!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Své pohlednice obdržíte za 1 až 2 týdny.",
	"postcard_success_2": "Děkujeme, že pomáháte urychlit přijetí Bitcoinu posíláním těchto pohlednic někomu, koho znáte!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Své cedule obdržíte za 1 až 2 týdny. Mezitím zkuste vymyslet dobré místo pro vaše cedule!",
	"sign_success_3": "Chcete vidět, kam ostatní lidé umisťují své cedule?",
	"signs_share_header": "SDÍLEJTE SVÁ MÍSTA S CEDULEMI",
	"signs_share_c1": "Sdílejte fotku svého místa s cedulí s námi na Nostru a pošleme vám saty! Saty jsou zlomky bitcoinu.",
	"signs_btn_share_on_nostr": "SDÍLET NA NOSTRU",
	"signs_btn_what_is_nostr": "CO JE NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KALKULAČKA SLOŽENÉ INFLACE",
	"cic_description": "Pomocí této kalkulačky složené inflace zjistíte, o kolik musí vzrůst váš plat, aby udržel krok s inflací.",
	"what_can_i_do_about": "Co mohu dělat s",
	"what_can_i_do_about_2": "inflací?",
	"cic_inflation_cta": "Odhlaste se z inflace pomocí Bitcoinu"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Unikněte z Matrixu s Nostrem",
	"nostr_header": "UNIKNĚTE Z MATRIXU S NOSTREM"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Co je Nostr?",
	"what_is_nostr_header": "CO JE NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
