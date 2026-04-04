/**
 * Creates Lithuanian (lt) translation file for inflation.json (~100+ keys).
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'lt';
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

writeFile(`inflation_${lang}.json`, {
	"bitcoin_doesnt_have_inflation": "Bitcoin neturi infliacijos",
	"inflation_definition": "Bitcoin turi fiksuot\u0105 21 milijono monet\u0173 pasi\u016Bl\u0105, kurios niekada negali b\u016Bti padidinta. Skirtingai nuo vyriausybi\u0173 valiut\u0173, niekas negali atspausdinti daugiau Bitcoin. Pasirinkite savo valiut\u0105 \u017Eemiau, kad su\u017Einotum\u0117te, kaip infliacija veikia j\u016Bs\u0173 perkam\u0105j\u0105 gali\u0105 ir kaip Bitcoin gali pad\u0117ti.",
	"inflation_description": "Bitcoin turi fiksuot\u0105 21 milijono Bitcoin pasi\u016Bl\u0105. Niekas negali atspausdinti daugiau Bitcoin ir sukelti infliacij\u0105.",
	"inflation_sign_got_inflation": "TURITE INFLIACIJ\u0104?",
	"inflation_save_in_bitcoin": "TAUPYKITE BITCOIN",
	"inflation_sticker_cure": "REIKIA VAIST\u0172 NUO INFLIACIJOS?",
	"inflation_sticker_learn": "SU\u017DINOKITE, KAIP BITCOIN GALI PAD\u0116TI",
	"inflation_sticker_got_inflation": "TURITE INFLIACIJ\u0104?",
	"inflation_sticker_what_if": "O JEI J\u016AS\u0172 PINIGAI NETUR\u0116T\u0172 INFLIACIJOS?",
	"inflation_sticker_lets_find_out": "SU\u017DINOKIME",
	"inflation_sticker_bitcoin": "BITCOIN NETURI INFLIACIJOS",
	"inflation_sticker_your_money": "BET J\u016AS\u0172 PINIGAI TURI",
	"inflation_calculator_opt_out": "ATSISAKYKITE INFLIACIJOS",
	"inflation_calculator_with_bitcoin": "SU BITCOIN",
	"inflation_choose": "Pasirinkite savo valiut\u0105...",
	"inflation_choose_another": "Pasirinkite kit\u0105 valiut\u0105",
	"inflation_us_dollar": "JAV DOLERIS",
	"inflation_australian_dollar": "AUSTRALIJOS DOLERIS",
	"inflation_brazilian_real": "BRAZILIJOS REALAS",
	"inflation_british_pound": "BRIT\u0172 SVARAS",
	"inflation_canadian_dollar": "KANADOS DOLERIS",
	"inflation_euro": "EURAS",
	"inflation_honduran_lempira": "HOND\u016ARO LEMPIRA",
	"inflation_indian_rupee": "INDIJOS RUPIJA",
	"inflation_israeli_shekel": "IZRAELIO \u0160EKELIS",
	"inflation_japanese_yen": "JAPONIJOS JENA",
	"inflation_mexican_peso": "MEKSIKOS PESAS",
	"inflation_nz_dollar": "NAUJOSIOS ZELANDIJOS DOLERIS",
	"inflation_philippine_peso": "FILIPIN\u0172 PESAS",
	"inflation_thai_baht": "TAILANDO BATAS",
	"inflation_venezuelan_bolivar": "VENESUELOS BOLIVARAS",
	"inflation_usd_s1_c1": "Jei prie\u0161 5 metus \u012Fd\u0117jote 100 $ \u012F bank\u0105, \u0161iandien turite ma\u017Eiau nei 100 $ perkamosios galios.",
	"inflation_usd_s1_c2": "sud\u0117tin\u0117",
	"inflation_usd_s1_c3": "per paskutinius $1 metus.",
	"inflation_usd_s1_c4": "Gal ir turite tuos 100 $ savo banko s\u0105skaitoje, bet u\u017E juos nusipirksite ma\u017Eiau nei anks\u010Diau.",
	"inflation_usd_but_why": "BET KOD\u0116L?",
	"inflation_usd_s1_c5": "Jungtin\u0117se Valstijose n\u0117ra fiksuoto limito, kiek JAV doleri\u0173 galima sukurti. \u0160i neribota pasi\u016Bla yra pagrindin\u0117 infliacijos prie\u017Eastis.",
	"inflation_usd_s1_c6": "Nuo 2020 m.,",
	"inflation_usd_s1_c7": "bendras JAV doleri\u0173 kiekis i\u0161augo nuo 4 trilijon\u0173 iki 18 trilijon\u0173 doleri\u0173.",
	"inflation_usd_s1_c8": "\u0160is pinig\u0173 spausdinimas suk\u0117l\u0117 rekordinę infliacij\u0105.",
	"inflation_usd_s1_c9": "Dabar viskas kainuoja daugiau, nes pinig\u0173 spausdinimas padar\u0117 j\u016Bs\u0173 dolerius ma\u017Eiau vertingus.",
	"inflation_intro_c1": "Infliacija atsiranda, kai daugiau pinig\u0173 atspausdinama ar sukuriama i\u0161 nieko. D\u0117l to j\u016Bs\u0173 pinigai laikui b\u0117gant praranda vert\u0119.",
	"inflation_intro_c2": "Kai daugiau pinig\u0173 sukuriama per biud\u017Eeto deficitus ir naujus i\u0161laid\u0173 \u012Fstatymus, j\u016Bs\u0173 tur\u0117ti pinigai laikui b\u0117gant perka vis ma\u017Eiau. Kadangi per pastaruosius kelerius metus buvo atspausdinta tiek daug pinig\u0173, j\u016Bs\u0173 banko s\u0105skaitoje ir ki\u0161en\u0117je esan\u010Di\u0173 pinig\u0173 vert\u0117 \u017Eymiai suma\u017E\u0117jo.",
	"inflation_intro_c3": "Su Bitcoin yra fiksuotas 21 milijono Bitcoin limitas. Kadangi daugiau Bitcoin negalima sukurti, j\u0173 vert\u0117 laikui b\u0117gant \u017Eymiai i\u0161augo.",
	"inflation_intro_usd": "Jungtin\u0117se Valstijose n\u0117ra fiksuoto limito, kiek doleri\u0173 galima sukurti.",
	"inflation_intro_cad": "Kanadoje n\u0117ra fiksuoto limito, kiek Kanados doleri\u0173 galima sukurti.",
	"inflation_intro_euro": "Euro zonoje n\u0117ra fiksuoto limito, kiek eur\u0173 galima sukurti.",
	"inflation_intro_gbp": "Jungtin\u0117je Karalyst\u0117je n\u0117ra fiksuoto limito, kiek Brit\u0173 svar\u0173 galima sukurti.",
	"inflation_intro_brazilian_real": "Brazilijoje n\u0117ra fiksuoto limito, kiek Brazilijos real\u0173 galima sukurti.",
	"inflation_intro_philippine_peso": "Filipinuose n\u0117ra fiksuoto limito, kiek Filipin\u0173 pes\u0173 galima sukurti.",
	"inflation_intro_mexican_peso": "Meksikoje n\u0117ra fiksuoto limito, kiek Meksikos pes\u0173 galima sukurti.",
	"inflation_intro_indian_rupee": "Indijoje n\u0117ra fiksuoto limito, kiek Indijos rupij\u0173 galima sukurti.",
	"inflation_intro_honduran_lempira": "Hond\u016Bre n\u0117ra fiksuoto limito, kiek Hond\u016Bro lempir\u0173 galima sukurti.",
	"inflation_intro_venezuelan_bolivar": "Venesueloje n\u0117ra fiksuoto limito, kiek Venesuelos bolivar\u0173 galima sukurti.",
	"inflation_intro_japanese_yen": "Japonijoje n\u0117ra fiksuoto limito, kiek Japonijos jen\u0173 galima sukurti.",
	"inflation_intro_australian_dollar": "Australijoje n\u0117ra fiksuoto limito, kiek Australijos doleri\u0173 galima sukurti.",
	"inflation_intro_israeli_shekel": "Izraelyje n\u0117ra fiksuoto limito, kiek Izraelio \u0161ekeli\u0173 galima sukurti.",
	"inflation_intro_thai_baht": "Tailande n\u0117ra fiksuoto limito, kiek Tailando bat\u0173 galima sukurti.",
	"inflation_intro_nz_dollar": "Naujojoje Zelandijoje n\u0117ra fiksuoto limito, kiek Naujosios Zelandijos doleri\u0173 galima sukurti.",
	"inflation_cause_header": "KAS SUKELIA INFLIACIJ\u0104?",
	"inflation_cause_c1": "Nors tiekimo grandin\u0117s ir kai kurios korporacijos prisideda prie dirbtinai kylan\u010Di\u0173 kain\u0173, pagrindin\u0117 infliacijos prie\u017Eastis yra pinig\u0173 pasi\u016Blos pl\u0117tra.",
	"inflation_cause_c2": "\u0160tai buvo did\u017Eiul\u0117 pinig\u0173 pasi\u016Blos pl\u0117tra ir tai nebus paskutinis kartas.",
	"inflation_cause_c3": "Kai daugiau pinig\u0173 sukuriama i\u0161 nieko, visko kaina tais pinigais kyla. Tai apima \u017Ealiav\u0173 kainas, kurias \u012Fmon\u0117s turi mok\u0117ti u\u017E savo produktus, o tai rei\u0161kia auk\u0161tesnes kainas jums.",
	"inflation_cause_c4": "Infliacija n\u0117ra tik kylan\u010Dios kainos. Infliacija yra tai, kai j\u016Bs\u0173 pinigai laikui b\u0117gant praranda vert\u0119.",
	"inflation_cause_usd": "Beveik 80% vis\u0173 \u0161iandien egzistuojan\u010Di\u0173 JAV doleri\u0173 buvo sukurti tarp 2020 ir 2023 m.",
	"inflation_cause_cad": "Daugiau nei 1 i\u0161 5 Kanados doleri\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2020 ir 2022 m.",
	"inflation_cause_euro": "Apie 1 i\u0161 4 eur\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2020 ir 2022 m.",
	"inflation_cause_gbp": "Apie 1 i\u0161 4 Brit\u0173 svar\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2020 ir 2022 m.",
	"inflation_cause_brazilian_real": "Apie 40% vis\u0173 Brazilijos real\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2020 ir 2022 m.",
	"inflation_cause_philippine_peso": "Beveik 50% vis\u0173 Filipin\u0173 pes\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2020 ir 2022 m.",
	"inflation_cause_mexican_peso": "Daugiau nei 50% vis\u0173 Meksikos pes\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2022 m.",
	"inflation_cause_indian_rupee": "Daugiau nei 50% vis\u0173 Indijos rupij\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2022 m.",
	"inflation_cause_honduran_lempira": "Daugiau nei 50% vis\u0173 Hond\u016Bro lempir\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2022 m.",
	"inflation_cause_venezuelan_bolivar": "Daugiau nei 80% vis\u0173 Venesuelos bolivar\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti per paskutinius metus!",
	"inflation_cause_japanese_yen": "Daugiau nei 25% vis\u0173 Japonijos jen\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2022 m.",
	"inflation_cause_australian_dollar": "Daugiau nei 50% vis\u0173 Australijos doleri\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2022 m.",
	"inflation_cause_israeli_shekel": "Apie 50% vis\u0173 Izraelio \u0161ekeli\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2023 m.",
	"inflation_cause_thai_baht": "Apie 35% vis\u0173 Tailando bat\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2016 ir 2023 m.",
	"inflation_cause_nz_dollar": "Apie 50% vis\u0173 Naujosios Zelandijos doleri\u0173, egzistuojan\u010Di\u0173 \u0161iandien, buvo sukurti tarp 2010 ir 2023 m.",
	"inflation_cic_header": "KAIP INFLIACIJA VEIKIA MANE?",
	"inflation_issuance_header": "AR BITCOIN TURI INFLIACIJ\u0104?",
	"inflation_issuance_c1": "Infliacija i\u0161 esm\u0117s yra tai, kad j\u016Bs\u0173 \u201Epinig\u0173 pyrago\u201C gabal\u0117lis kasmet ma\u017E\u0117ja. Tai ar Bitcoin turi infliacij\u0105?",
	"inflation_issuance_c2": "Bitcoin turi fiksuot\u0105 21 000 000 (21 milijono) bitcoin pasi\u016Bl\u0105. 21 milijono limitas u\u017Efiksuotas kode ir apsaugotas galingiausio pasaulyje skaičiavimo tinklo, vadinamo Bitcoin tinklu. \u0160io limito negalima pakeisti.",
	"inflation_issuance_c3": "Nors Bitcoin neturi infliacijos, jis turi emisij\u0105. Emisija yra nauj\u0173 Bitcoin kasmet i\u0161kasam\u0173 procentas. Bitcoin kasyklininkai apsaugo tinkl\u0105, apdoroja Bitcoin operacijas ir gauna atlyg\u012F. Bitcoin kasyklininkai gauna \u0161i\u0105 nauj\u0105 emisij\u0105 (kol ji baigsis) ir taip pat gauna operacij\u0173 mokes\u010Dius.",
	"inflation_issuance_c4": "Daugiau nei 95% vis\u0173 bitcoin jau i\u0161kasta. Daugiau nei 99% vis\u0173 21 milijono bitcoin bus i\u0161kasta iki 2035 m., o likęs ma\u017Eiau nei 1% bus i\u0161kastas iki 2140 m.",
	"inflation_issuance_c5": "Nors dar liko \u0161iek tiek emisijos iki fiksuotos 21 milijono bitcoin pasi\u016Blos, visa esm\u0117 yra ta, kad j\u016Bs\u0173 21 milijono bitcoin pyrago gabal\u0117lis niekada nema\u017E\u0117ja. Tai \u0161iurkštus kontrastas su vyriausybi\u0173 valiutomis. Jose j\u016Bs\u0173 pyrago gabal\u0117lis kasmet ma\u017E\u0117ja, kai daugiau pinig\u0173 atspausdinama i\u0161 nieko.",
	"inflation_issuance_c6": "Negalite atspausdinti daugiau bitcoin.",
	"inflation_protect_header": "AR BITCOIN GALI APSAUGOTI MANO PINIGUS NUO INFLIACIJOS?",
	"inflation_protect_c1": "Bitcoin istori\u0161kai puikiai apsaugojo \u017Emones nuo j\u0173 vietin\u0117s valiutos infliacijos. Daugelis \u017Emoni\u0173, naudojan\u010Di\u0173 Bitcoin kaip apsaug\u0105 nuo infliacijos, saugo pinigus, kuriuos gali sau leisti laikyti Bitcoin kelis metus.",
	"inflation_protect_c2": "Bitcoin fiksuota pasi\u016Bla daro j\u012F geriausiu b\u016Bdu ilgalaikiam pinig\u0173 taupymui.",
	"inflation_protect_c3": "Kai taupote Bitcoin, viskas ilguoju laikotarpiu link\u0119 pigti. Kai taupote vyriausyb\u0117s pinigais, kuriuos jie gali spausdinti nemokamai, viskas link\u0119 brangti.",
	"inflation_protect_usd": "JAV doleriai prarado 90% savo perkamosios galios nuo 1950 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_cad": "Kanados doleriai prarado daugiau nei 90% savo perkamosios galios nuo 1971 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_euro": "Eurai prarado daugiau nei 30% savo perkamosios galios nuo j\u0173 suk\u016Brimo 1999 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_gbp": "Brit\u0173 svarai prarado 90% savo perkamosios galios nuo 1950 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_brazilian_real": "Brazilijos realo pinig\u0173 pasi\u016Bla i\u0161augo nuo 427 mlrd. R$ iki 589 mlrd. R$ per vos 2 metus, kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_brazilian_real_2": "2020 m. Brazilijos vyriausyb\u0117 atspausdino nauj\u0105 200 R$ banknotą. Vien \u0161is naujas banknotas sudar\u0117 12,8% vis\u0173 t\u0105 met\u0173 atspausdint\u0173 real\u0173!",
	"inflation_protect_philippine_peso": "Filipin\u0173 peso pinig\u0173 pasi\u016Bla beveik padvigub\u0117jo nuo 2020 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_mexican_peso": "Meksikos peso pinig\u0173 pasi\u016Bla beveik padvigub\u0117jo nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_indian_rupee": "Indijos rupijos pinig\u0173 pasi\u016Bla daugiau nei padvigub\u0117jo nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_honduran_lempira": "Hond\u016Bro lempiros pinig\u0173 pasi\u016Bla daugiau nei padvigub\u0117jo nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_venezuelan_bolivar": "Venesuelos bolivaro pinig\u0173 pasi\u016Bla i\u0161augo daugiau nei 500% per paskutinius metus, kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_japanese_yen": "Japonijos jenos pinig\u0173 pasi\u016Bla i\u0161augo daugiau nei 33% nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_australian_dollar": "Australijos dolerio pinig\u0173 pasi\u016Bla i\u0161augo daugiau nei 100% nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_israeli_shekel": "Izraelio \u0161ekelio pinig\u0173 pasi\u016Bla i\u0161augo apie 100% nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_thai_baht": "Tailando bato pinig\u0173 pasi\u016Bla i\u0161augo apie 50% nuo 2016 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_protect_nz_dollar": "Naujosios Zelandijos dolerio pinig\u0173 pasi\u016Bla i\u0161augo apie 100% nuo 2010 m., kai politikai j\u0173 daugiau atspausdino.",
	"inflation_graphic_money_up": "Kai atspausdint\u0173 pinig\u0173 kiekis did\u0117ja...",
	"inflation_graphic_pp_down": "...t\u0173 pinig\u0173 perkamoji galia ma\u017E\u0117ja."
});

console.log('\nDone! Inflation file created for Lithuanian (lt).');
