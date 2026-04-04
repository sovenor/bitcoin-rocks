/**
 * Creates Lithuanian (lt) translation files for all business/ pages.
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin yra naudingas verslui",
	"biz_header": "BITCOIN YRA NAUDINGAS VERSLUI",
	"biz_s1": "Ma\u017ei mokes\u010Diai be minimali\u0173 sum\u0173",
	"biz_s1_c1": "Bitcoin leid\u017Eia gauti mok\u0117jimus tiesiogiai i\u0161 klient\u0173, pana\u0161iai kaip grynaisiais. Bitcoin tinklas veikia be tarpinink\u0173, toki\u0173 kaip bankai ir kredito korti\u0173 bendrov\u0117s, kurie ima didelius mokes\u010Dius.",
	"biz_s2": "Momentinis atsiskaitymas",
	"biz_s2_c1": "Kaip ir grynaisiais, Bitcoin mok\u0117jimai atsiskaitomi i\u0161 karto. Nereikia laukti, kol kredito korti\u0173 bendrov\u0117 ar bankas jums sumok\u0117s. Vietoj to, pinigus gaunate i\u0161 karto.",
	"biz_s3": "Joki\u0173 gr\u0105\u017Einim\u0173 ar suktybi\u0173",
	"biz_s3_c1": "Kadangi Bitcoin mok\u0117jimai vyksta tiesiogiai tarp j\u016Bs\u0173 ir klient\u0173, niekas negali atsiimti pinig\u0173 gr\u0105\u017Einimu.",
	"biz_s3_c2": "Padirbt\u0173 Bitcoin negalima si\u0173sti Bitcoin tinkle, tod\u0117l nereikia jaudintis d\u0117l suktybi\u0173, kurios gali kainuoti j\u016Bs\u0173 verslui.",
	"biz_s4": "Pritraukite daugiau klient\u0173",
	"biz_s4_c1": "Milijonai \u017Emoni\u0173 turi Bitcoin ir nori j\u012F i\u0161leisti vietose, kurios j\u012F priima.",
	"biz_s4_c2": "Tiesiog priimdami Bitcoin, j\u016Bs\u0173 verslas gali b\u016Bti \u012Ftrauktas \u012F Bitcoin preki\u0173 \u017Eem\u0117lapius ir gauti nemokam\u0105 matom\u0105 nauj\u0173 Bitcoin klient\u0173.",
	"biz_s4_c3": "Bitcoin pri\u0117mimas yra 100% nemokamas. Joki\u0173 sutar\u010Di\u0173 ar pasl\u0117pt\u0173 mokes\u010Di\u0173."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Su\u017Einokite, kod\u0117l Bitcoin naudingas verslui",
	"why_header": "BITCOIN YRA NAUDINGAS VERSLUI",
	"why_good_for_you": "BITCOIN NAUDINGAS IR JUMS!",
	"why_learn_more_lowercase": "Su\u017Einokite daugiau.",
	"why_s1": "Bitcoin neturi infliacijos",
	"why_s1_c1": "Infliacija atsiranda, kai daugiau pinig\u0173 atspausdinama ar sukuriama i\u0161 nieko. D\u0117l to j\u016Bs\u0173 pinigai laikui b\u0117gant praranda vert\u0119.",
	"why_s1_c2": "Bitcoin turi fiksuot\u0105 pasi\u016Bl\u0105, tod\u0117l niekas negali atspausdinti daugiau Bitcoin.",
	"why_s2": "Bitcoin neturi bank\u0173 panik\u0173",
	"why_s2_c1": "Per pastaruosius kelerius metus d\u0117l bank\u0173 panik\u0173 \u017Elugo keli JAV bankai.",
	"why_s2_c2": "U\u017Euot tiesiog saugoj\u0119 j\u016Bs\u0173 pinigus, bankai juos investuoja ir skolina. Jei tos investicijos nepasiteisina, jiems tr\u016Bksta l\u0117\u0161\u0173 gr\u0105\u017Einti jums.",
	"why_s2_c3": "FDIC draudimo fondas turi tik 1 dolar\u012F kiekvienam 100 drahma\u0173, kuriuos draud\u017Eia.",
	"why_s3": "Bitcoin nereikalauja leidim\u0173",
	"why_s3_c1": "Skirtingai nuo tradicini\u0173 finansini\u0173 tinkl\u0173, Bitcoin naudojimui nereikia leidimo.",
	"why_s3_c2": "Tai rei\u0161kia, kad niekas negali sustabdyti j\u016Bs\u0173 naudojant Bitcoin d\u0117l bet kokios prie\u017Easties. Tai pirmasis finansinis tinklas, kur\u012F galite naudoti be cenz\u016Bros ar konfiskavimo baim\u0117s.",
	"why_s4": "Bitcoin kuria geresn\u012F pasaul\u012F",
	"why_s4_c1": "Bitcoin yra nesuprantama technologija, kuri kuria geresn\u012F pasaul\u012F.",
	"why_s4_c2": "Bitcoin \u012Fgalino \u017Emogaus teisi\u0173 aktyvistus kovoti u\u017E laisv\u0119, suma\u017Eino pasaulines metano emisijas, i\u0161gelb\u0117jo nacionalinius parkus ir padar\u0117 dar daug daugiau."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Priimkite Bitcoin mok\u0117jimus savo versle",
	"guide_header": "PASIRUO\u0160\u0116 PRIIMTI BITCOIN SAVO VERSLE?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Da\u017Enai u\u017Eduodami klausimai apie Bitcoin pri\u0117mim\u0105",
	"faq_description": "Turite klausim\u0173 d\u0117l Bitcoin mok\u0117jim\u0173 pri\u0117mimo j\u016Bs\u0173 versle?",
	"faq_header": "TURITE KLAUSIM\u0172 APIE BITCOIN MOK\u0116JIM\u0172 PRI\u0116MIM\u0104?",
	"faq_s1": "Kas yra Bitcoin?",
	"faq_s1_c1": "Bitcoin yra du dalykai: skaitmeniniai pinigai ir kompiuterinis tinklas.",
	"faq_s1_c2": "Galite si\u0173sti bitcoin (skaitmeninius pinigus) tiesiogiai kitiems \u017Emon\u0117ms naudodami Bitcoin tinkl\u0105.",
	"faq_s1_c3": "Bitcoin tinklas veikia be tarpinink\u0173 ar centrin\u0117s valdžios, toki\u0173 kaip bankai ar kredito korti\u0173 bendrov\u0117s, tod\u0117l galite i\u0161vengti j\u0173 operacij\u0173 mokes\u010Di\u0173.",
	"faq_s1_c4": "Bitcoin operacijos pasiekia galutin\u012F atsiskaitym\u0105 greitai (10 minu\u010Di\u0173) ir niekada negali b\u016Bti gr\u0105\u017Eintos, tod\u0117l galite ramiai miegoti \u017Einodami, kad j\u016Bs\u0173 pinigai yra j\u016Bs\u0173.",
	"faq_s2": "Kaip Bitcoin gali b\u016Bti naudingas mano verslui?",
	"faq_s2_c1": "Bitcoin leid\u017Eia priimti mok\u0117jimus su ma\u017Eesniais mokes\u010Diais ir pritraukti daugiau klient\u0173. Bitcoin mok\u0117jimai turi ma\u017Eus mokes\u010Dius be minimalios sumos, atsiskaitomi i\u0161 karto ir yra atspar\u016Bs gr\u0105\u017Einimams bei suktybei.",
	"faq_s2_c2": "Bitcoin pri\u0117mimas yra nemokamas ir leid\u017Eia \u012Ftraukti j\u016Bs\u0173 versl\u0105 \u012F Bitcoin prekiautoj\u0173 \u017Eem\u0117lapius, kad Bitcoin naudotojai gal\u0117t\u0173 lengvai rasti j\u016Bs\u0173 versl\u0105.",
	"faq_s2_c3": "Per\u017Ei\u016Br\u0117kite visas prie\u017Eastis, kod\u0117l Bitcoin naudingas verslui.",
	"faq_s3": "Kaip priimti Bitcoin mok\u0117jimus?",
	"faq_s3_c1": "Viskas, ko reikia norint priimti Bitcoin mok\u0117jimus, yra nemokama Bitcoin pinig\u0105.",
	"faq_s3_c2": "M\u016Bs\u0173 pinigin\u0117s vadovas pad\u0117s jums greitai ir lengvai \u012Fsidiegti, kad gal\u0117tum\u0117te pasinaudoti Bitcoin pri\u0117mimo privalumais jau \u0161iandien!",
	"faq_s3_c3": "Per\u017Ei\u016Br\u0117ti pinigin\u0117s vadov\u0105",
	"faq_s4": "Ar galiu konvertuoti gautus Bitcoin mok\u0117jimus \u012F vietin\u0119 valiut\u0105?",
	"faq_s4_c1": "Taip! Naudodami hibridin\u0119 pinigin\u0119, galite automati\u0161kai konvertuoti gautus Bitcoin mok\u0117jimus \u012F vietin\u0119 valiut\u0105, kai tik mok\u0117jimas gaunamas.",
	"faq_s4_c2": "M\u016Bs\u0173 pinigin\u0117s vadovas pad\u0117s jums greitai ir lengvai \u012Fsidiegti.",
	"faq_s4_c3": "Taip pat galite pasirinkti dal\u012F gaut\u0173 mok\u0117jim\u0173 laikyti Bitcoin. Taupymas Bitcoin turi daug privalum\u0173:",
	"faq_s4_c4": "Bitcoin yra visi\u0161ko rezervo finansin\u0117 sistema.",
	"faq_s4_c5": "Bitcoin neturi infliacijos.",
	"faq_s4_c6": "\u0160ie privalumai daro Bitcoin puiki\u0105 priemon\u0119 pinig\u0173 ilgalaikiam saugojimui.",
	"faq_s4_c7": "Net jei pasirinksite konvertuoti visus Bitcoin mok\u0117jimus \u012F dolerius, vis tiek gausite privalum\u0173 priimdami mok\u0117jimus su \u017Eymiai ma\u017Eesniais mokes\u010Diais ir pasiekdami daugiau potenciali\u0173 klient\u0173.",
	"faq_s5": "Ar galiu priimti Bitcoin mok\u0117jimus gyvai?",
	"faq_s5_c1": "Taip! Lengva priimti Bitcoin mok\u0117jimus gyvai naudojant Bitcoin pinigin\u0119.",
	"faq_s5_c2": "M\u016Bs\u0173 pinigin\u0117s vadovas pad\u0117s pasirinkti Bitcoin pinigin\u0119, tinkamiausi\u0105 j\u016Bs\u0173 verslui.",
	"faq_s5_c3": "Per\u017Ei\u016Br\u0117ti pinigin\u0117s vadov\u0105",
	"faq_s6": "Ar galiu priimti Bitcoin mok\u0117jimus internetu?",
	"faq_s6_c1": "Taip! Lengva priimti Bitcoin mok\u0117jimus internetu su esama internetine parduotuve.",
	"faq_s6_c2": "Per\u017Ei\u016Br\u0117kite m\u016Bs\u0173 pinigin\u0117s vadov\u0105, jei norite daugiau informacijos.",
	"faq_s7": "Kaip prane\u0161ti klientams, kad priimu Bitcoin?",
	"faq_s7_c1": "Si\u016Blome nemokamus \u201EBitcoin Accepted Here\u201C lipdukus, kuriuos galite i\u0161kabinti savo versle ir prane\u0161ti klientams, kad priimate Bitcoin.",
	"faq_s7_c2": "Spauskite \u010Dia, kad u\u017Esakytum\u0117te lipdukus.",
	"faq_s7_c3": "Taip pat galite nemokamai \u012Ftraukti savo versl\u0105 \u012F Bitcoin prekiautoj\u0173 \u017Eem\u0117lapius ir b\u016Bti matomi milijonams Bitcoin naudotoj\u0173, norin\u010Di\u0173 i\u0161leisti Bitcoin versluose, kurie j\u012F priima.",
	"faq_s7_c4": "U\u017Esiregistruokite dabar.",
	"faq_s8": "Kaip pri\u0117mus Bitcoin gal\u0117siu pritraukti daugiau klient\u0173?",
	"faq_s8_c1": "Yra milijonai Bitcoin naudotoj\u0173, norin\u010Di\u0173 i\u0161leisti Bitcoin versluose, kurie j\u012F priima.",
	"faq_s8_c2": "Tiesiog priimdami Bitcoin mok\u0117jimus, j\u016Bs\u0173 verslas gali b\u016Bti \u012Ftrauktas \u012F nemokamus Bitcoin prekiautoj\u0173 \u017Eem\u0117lapius ir gauti matom\u0105 potencialiems klientams.",
	"faq_s8_c3": "U\u017Esiregistruokite dabar.",
	"faq_s9": "Kiek kainuoja priimti Bitcoin?",
	"faq_s9_c1": "Bitcoin pri\u0117mimas j\u016Bs\u0173 versle yra 100% nemokamas. Joki\u0173 sutar\u010Di\u0173 ar pasl\u0117pt\u0173 mokes\u010Di\u0173.",
	"faq_s9_c2": "Per\u017Ei\u016Br\u0117kite m\u016Bs\u0173 pinigin\u0117s vadov\u0105 ir prad\u0117kite priimti Bitcoin mok\u0117jimus jau \u0161iandien."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Kaip priimti Bitcoin mok\u0117jimus",
	"wallets_header": "GAUKITE NEMOKAM\u0104 BITCOIN PINIGIN\u0118 IR PRAD\u0116KITE PRIIMTI BITCOIN MOK\u0116JIMUS",
	"wallets_intro_1": "Visos Bitcoin pinigin\u0117s yra suderinamos, tod\u0117l j\u016Bs\u0173 klientai gali mok\u0117ti Bitcoin nepriklausomai nuo to, koki\u0105 pinigin\u0119 naudoja.",
	"wallets_intro_2": "Tik Bitcoin pinigin\u0117s:",
	"wallets_intro_3": "Tai grynos Bitcoin pinigin\u0117s, atleid\u017Eian\u010Dios visus Bitcoin privalumus: be tarpinink\u0173, ma\u017Ei mokes\u010Diai, be gr\u0105\u017Einim\u0173 ar suktybi\u0173.",
	"wallets_intro_4": "Hibridin\u0117s pinigin\u0117s:",
	"wallets_intro_5": "Leid\u017Eia keisti bet koki\u0105 Bitcoin dal\u012F \u012F dolerius, kai tik klientas sumoka. Mokes\u010Diai vis tiek ma\u017Eesni nei kredito korti\u0173, bet didesni nei gryno Bitcoin mok\u0117jimo.",
	"wallets_intro_6": "Abu variantai puik\u016Bs priimant Bitcoin. Konkreti pinigin\u0117, kuri\u0105 naudosite, priklausys nuo j\u016Bs\u0173 verslo dyd\u017Eio ir tipo.",
	"wallets_choice_sole": "pinigin\u0117s individualiems verslams",
	"wallets_choice_multiple": "pinigin\u0117s verslams su keliais darbuotojais",
	"wallets_choice_online": "pinigin\u0117s internetiniams verslams",
	"wallets_choice_invoice": "pinigin\u0117s s\u0105skait\u0173 faktur\u0173 pagrind\u0173 verslams",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Galite priimti Bitcoin mok\u0117jimus su esamu Square POS terminalu ar internetin\u0117s parduotuv\u0117s integracija. Bitcoin mok\u0117jim\u0173 pri\u0117mimas dar niekada nebuvo toks paprastas.",
	"wallets_feature_bitcoin_only": "Tik Bitcoin pinigin\u0117",
	"wallets_feature_no_info": "Informacija nereikalinga",
	"wallets_feature_in_person": "Tik gyvieji mok\u0117jimai",
	"wallets_feature_settles_bitcoin": "Atsiskaito 100% Bitcoin",
	"wallets_feature_hybrid": "Hibridin\u0117 pinigin\u0117",
	"wallets_feature_info": "Reikalinga verslo informacija",
	"wallets_feature_in_person_online": "Gyvieji ir internetiniai mok\u0117jimai",
	"wallets_feature_settles_both": "Atsiskaito Bitcoin ir doleriais",
	"wallets_feature_multiple_employees": "Keli\u0173 darbuotoj\u0173 palaikymas (BPT)",
	"wallets_feature_self_hosted": "Sav\u0119 talpinantis = 0% mokes\u010Di\u0173",
	"wallets_feature_online_store": "Internetin\u0117s parduotuv\u0117s integracija",
	"wallets_feature_invoicing": "Nemokama s\u0105skait\u0173 programin\u0117 \u012Franga",
	"wallets_get_wallet": "GAUTI PINIGIN\u0118"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Bitcoin verslo apskaitos vadovas",
	"accounting_description": "Su\u017Einokite, kaip teisingai apskaityti Bitcoin mok\u0117jimus savo verslo apskaitoje.",
	"accounting_header": "BITCOIN APSKAITOS VADOVAS",
	"accounting_s1_c1": "Bitcoin pri\u0117mimas turi daug privalum\u0173, pvz., mok\u0117jim\u0173 pri\u0117mimas su ma\u017Eesniais mokes\u010Diais ir daugiau klient\u0173 pritraukimas.",
	"accounting_s1_c2": "Jei naudojate hibridin\u0119 pinigin\u0119 i\u0161 m\u016Bs\u0173 pinigin\u0117s vadovo ir automati\u0161kai konvertuojate 100% gaut\u0173 Bitcoin \u012F dolerius, nereikia keisti dabartinei apskaitai.",
	"accounting_s1_c3": "Per\u017Ei\u016Br\u0117ti pinigin\u0117s vadov\u0105.",
	"accounting_s1_c4": "Ta\u010Diau jei dalies gaut\u0173 Bitcoin mok\u0117jim\u0173 neskonvertuojate ir laikote kaip Bitcoin, tur\u0117site sekti kelet\u0105 detalei apskaitai. I\u0161 prad\u017Ei\u0173 tai gali atrodyti baugiai, bet i\u0161 tikr\u0173j\u0173 yra gana paprasta.",
	"accounting_s1_c5": "Pastaba: \u0161is vadovas skirtas tik informaciniais tikslais ir n\u0117ra mokestini\u0173 patarim\u0173.",
	"accounting_s1_c6": "Jei reikia mokestini\u0173 patarim\u0173, labai rekomenduojame Satoshi Pacioli Accounting Services \u2014 apskaitos firm\u0105, kuri specializuojasi Bitcoin apskaitoje.",
	"accounting_s2": "SAVIKAIN\u0172 SEKIMAS",
	"accounting_s2_c1": "Savikain\u0173 sekimas yra did\u017Eiausias skirtumas tarp doleri\u0173 ir Bitcoin apskaitos. Net jei \u017Ei\u016Brite \u012F versl\u0105 vien tik Bitcoin terminais, mokes\u010Di\u0173 deklaracijoje tur\u0117site nurodyti kiekvienos operacijos vertę doleriais.",
	"accounting_s2_c2": "Jei naudojate QuickBooks, tai galite atlikti automati\u0161kai naudodami Bitcoin Sync \u012Fskiep\u012F.",
	"accounting_s2_c3": "Jei nenaudojate QuickBooks, rekomenduojame Satoshi Pacioli Accounting Services — apskaitos firm\u0105, kuri specializuojasi Bitcoin apskaitoje.",
	"accounting_s2_c4": "Tai atlikti rankiniu b\u016Bdu paprasta: tiesiog fiksuokite gaut\u0105 Bitcoin kiek\u012F ir tos dienos Bitcoin operacijos vert\u0119 doleriais.",
	"accounting_s2_c5": "Dabartin\u0119 Bitcoin kain\u0105 doleriais galite pamatyti \u010Dia.",
	"accounting_s2_c6": "Fiksuokite \u0161i\u0105 informacij\u0105 Excel lentel\u0117je ir pateikite j\u0105 savo buhalteriui.",
	"accounting_s2_c7": "Taip pat galite automati\u0161kai importuoti \u0161iuos duomenis \u012F Excel.",
	"accounting_s2_c8": "Taip pat galite per\u017Ei\u016Br\u0117ti istorines Bitcoin kainas doleriais u\u017E pra\u0117jusias dienas, tod\u0117l nereikia to daryti kiekvien\u0105 dien\u0105.",
	"accounting_s3": "BITCOIN I\u0160LEIDIMAS AR PARDAVIMAS",
	"accounting_s3_c1": "Jei naudojate hibridin\u0119 pinigin\u0119 i\u0161 m\u016Bs\u0173 pinigin\u0117s vadovo ir automati\u0161kai konvertuojate 100% gaut\u0173 Bitcoin \u012F dolerius, nereikia keisti dabartinei apskaitai.",
	"accounting_s3_c2": "Per\u017Ei\u016Br\u0117ti pinigin\u0117s vadov\u0105.",
	"accounting_s3_c3": "Jei nuspr\u0119site i\u0161leisti ar parduoti dal\u012F gaut\u0173 Bitcoin po kurio laiko, tiesiog \u012Fra\u0161ykite pardavimo kain\u0105 \u012F savo savikain\u0173 sekimo Excel lentel\u0119.",
	"accounting_s3_c4": "Pavyzd\u017Eiui, jei gavote 100 doleri\u0173 vert\u0117s Bitcoin sausio 1 d. ir nuspr\u0117nd\u0117te j\u012F parduoti ar i\u0161leisti vasario 1 d. su nauja verte 110 doleri\u0173, tur\u0117tum\u0117te u\u017Efiksuoti 10 doleri\u0173 kapitalo prieaug\u012F savo apskaitoje.",
	"accounting_s3_c5": "Tai veikia ir atvirk\u0161\u010Diai. Pavyzd\u017Eiui, jei gavote 100 doleri\u0173 vert\u0117s Bitcoin sausio 1 d. ir nuspr\u0117nd\u0117te j\u012F parduoti ar i\u0161leisti vasario 1 d. su nauja verte 90 doleri\u0173, tur\u0117tum\u0117te u\u017Efiksuoti 10 doleri\u0173 kapitalo nuostol\u012F savo apskaitoje.",
	"accounting_s4": "MAN REIKIA DAUGIAU PAGALBOS",
	"accounting_s4_c1": "Jei reikia daugiau pagalbos integruojant Bitcoin \u012F j\u016Bs\u0173 verslo apskait\u0105, labai rekomenduojame Satoshi Pacioli Accounting Services — apskaitos firm\u0105, kuri specializuojasi Bitcoin apskaitoje.",
	"accounting_s4_c2": "Su\u017Einokite daugiau apie Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin prekiautoj\u0173 \u017Eem\u0117lapiai — \u012Ftraukite savo versl\u0105 nemokamai",
	"maps_header": "U\u017DSIREGISTRUOKITE BITCOIN PREKIAUTOJ\u0172 \u017DEM\u0116LAPIUOSE IR PRITRAUKITE DAUGIAU KLIENT\u0172",
	"maps_request_details": "\u012Eveskite savo verslo informacij\u0105 \u017Eemiau ir mes nemokamai \u012Ftrauksime j\u016Bs\u0173 versl\u0105 \u012F Bitcoin prekiautoj\u0173 \u017Eem\u0117lapius. Tai leis Bitcoin naudotojams rasti j\u016Bs\u0173 versl\u0105 ir i\u0161leisti Bitcoin!",
	"maps_view": "Per\u017Ei\u016Br\u0117kite \u017Eem\u0117lapius \u010Dia."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "J\u016Bs\u0173 verslas bus \u012Ftrauktas \u012F Bitcoin prekiautoj\u0173 \u017Eem\u0117lapius per 1\u20132 savaites.",
	"kit_success_2": "Per\u017Ei\u016Br\u0117kite \u017Eem\u0117lapius \u010Dia."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin verslo rinkinys",
	"kit_header": "ATSISPAUSDINKITE SAVO BITCOIN VERSLO RINKIN\u012E",
	"kit_request": "U\u017Esakyti nemokam\u0105 rinkin\u012F",
	"kit_request_details": "Kiekviename Bitcoin verslo rinkinyje yra 2 bro\u0161i\u016Bros, leid\u017Eian\u010Dios lengvai supažindinti vietin\u012F versl\u0105 su Bitcoin pri\u0117mimu.",
	"kit_country_global_print": "Globaliai — atsispausdinti pa\u010Diam",
	"kit_enter_address": "\u012Eveskite savo adres\u0105 ir mes atsi\u0173sime nemokam\u0105 Bitcoin verslo rinkin\u012F baltame voke. Adreso duomenys i\u0161trinami i\u0161siuntus rinkin\u012F.",
	"kit_print_details": "Galite dalyvauti atsispausdindami savo bro\u0161i\u016Bras, nepriklausomai nuo to, kur gyvenate! Jei nenorite spausdinti, taip pat galite i\u0161si\u0173sti skaitmenin\u012F verslo rinkin\u012F verslui.",
	"kit_view_files": "Per\u017Ei\u016Br\u0117ti failus",
	"kit_digital_kit": "Skaitmeninis rinkinys",
	"kit_resources": "Kiekviename rinkinyje yra nuorodos \u012F \u0161iuos nemokamus resursus"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "J\u016Bs\u0173 Bitcoin verslo rinkinys bus pristatytas baltame voke per 1\u20132 savaites."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "\u201EBitcoin Accepted Here\u201C lipdukai",
	"stickers_header": "GAUKITE NEMOKAMUS \u201EBITCOIN ACCEPTED HERE\u201C LIPDUKUS",
	"stickers_request": "Gauti nemokamus lipdukus",
	"stickers_request_details": "Prane\u0161kite savo klientams, kad priimate Bitcoin mok\u0117jimus, su \u0161iais nemokamais \u201EBitcoin Accepted Here\u201C lipdukais.",
	"stickers_country_global_print": "Globaliai — atsispausdinti pa\u010Diam",
	"stickers_request_instructions": "Atsi\u0173sime jums 3 \u201EBitcoin Accepted Here\u201C lipdukus baltame voke. Jei j\u016Bs\u0173 verslui reikia daugiau nei 3, tiesiog u\u017Esakykite kelis kartus. Adreso duomenys i\u0161trinami i\u0161siuntus lipdukus.",
	"stickers_print_details": "Galite atsispausdinti savo \u201EBitcoin Accepted Here\u201C lipdukus, nepriklausomai nuo to, kur gyvenate! Spauskite ant kalbos \u017Eemiau, kad atsisi\u0173stum\u0117te lipduk\u0173 failus ir spausdinimo instrukcijas.",
	"stickers_request_language": "Nematote savo kalbos? U\u017Epildykite \u017Eemiau esan\u010Di\u0105 form\u0105, kad u\u017Esakytum\u0117te \u201EBitcoin Accepted Here\u201C lipduk\u0173 failus savo kalba."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Lipdukai bus pristatyti baltame voke per 1\u20132 savaites. Kiekviename voke yra 3 lipdukai. Jei j\u016Bs\u0173 verslui reikia daugiau nei 3, u\u017Esakykite papildom\u0105 pak\u0105!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Parengsime lipduk\u0173 failus ir juos publikuosime per 3\u20134 savaites. D\u0117kojame u\u017E kantrybę!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Atsispausdinkite savo Bitcoin verslo rinkin\u012F",
	"english_bbk_files_description": "Atsisi\u0173skite bro\u0161i\u016Bras \u010Dia.",
	"english_header": "ATSISPAUSDINKITE ANGL\u0172 BITCOIN VERSLO RINKINIO BRO\u0160I\u016ARAS"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Angl\u0173 \u201EBitcoin Accepted Here\u201C lipduk\u0173 failai",
	"english_biz_sticker_files_description": "Atsisi\u0173skite angl\u0173 lipduk\u0173 failus ir atsispausdinkite savo \u201EBitcoin Accepted Here\u201C lipdukus.",
	"english_header": "ATSISI\u0172SKITE ANGL\u0172 \u201EBITCOIN ACCEPTED HERE\u201C LIPDUK\u0172 FAILUS"
});

console.log('\nDone! Business files created for Lithuanian (lt).');
