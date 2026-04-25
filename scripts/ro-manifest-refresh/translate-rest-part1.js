#!/usr/bin/env node
/**
 * Romanian (ro) manifest refresh — non-inflation namespaces, part 1.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (10 comparison pages).
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
	"ro.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Înapoi la pagina principală",
	"404::404_message":
		"Bitcoin este grozav, dar pagina asta stricată nu este.",
	"404::404_not_found_short": "Negăsit",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Oferim resurse gratuite pentru afaceri care le fac ușor comercianților locali să înceapă să accepte Bitcoin. Pagina noastră Bitcoin pentru afaceri explică de ce Bitcoin este bun pentru afaceri, cum să alegi un portofel și un sistem POS și oferă autocolante gratuite „Bitcoin acceptat aici”.",
	"about::about_card_business_label": "Resurse pentru afaceri",
	"about::about_card_business_source": "Sursă: bitcoin.rocks \u2192",
	"about::about_card_business_title":
		"Tot ce le trebuie afacerilor pentru a începe să accepte plăți în Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Sursă: GitHub \u2192",
	"about::about_card_contact_github_title":
		"github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Contribuie",
	"about::about_card_contribute_source": "Sursă: GitHub \u2192",
	"about::about_card_contribute_title":
		"Află cum poți contribui la bitcoin.rocks",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Sursă: e-mail \u2192",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Pliante imprimabile",
	"about::about_card_flyers_source": "Sursă: bitcoin.rocks \u2192",
	"about::about_card_flyers_title":
		"Descarcă și tipărește pliante Bitcoin pentru comunitatea ta",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Sursă: GitHub \u2192",
	"about::about_card_github_title": "Vezi bitcoin.rocks pe GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Sursă: Nostr \u2192",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Autocolante gratuite",
	"about::about_card_stickers_source": "Sursă: bitcoin.rocks \u2192",
	"about::about_card_stickers_title":
		"Primește autocolante Bitcoin gratuite trimise la tine acasă",
	"about::about_editorial_2":
		"Citez surse de încredere precum Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, Națiunile Unite, World Gold Council, Forbes, MIT Technology Review, Lyn Alden și James Lavish. Credem că Bitcoin vorbește de la sine atunci când faptele sunt prezentate clar.",
	"about::about_flyers_blurb":
		"Proiectăm pliante imprimabile pe care le poți distribui la întâlniri, le poți afișa pe avizierele comunității sau le poți pune în cutii poștale — un mod simplu de a stârni curiozitatea și de a îndruma oamenii spre bitcoin.rocks pentru a afla mai multe.",
	"about::about_header": "Despre bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks a fost fondat de",
	"about::about_mission_1b":
		"în 2022 cu o misiune simplă: să accelereze adopția Bitcoin prin educație.",
	"about::about_open_source_2":
		"bitcoin.rocks este un proiect gratuit și open source, sub licență MIT. Oricine poate contribui la bitcoin.rocks. Îi primim cu o căldură deosebită pe traducători, care ajută la a face conținutul nostru accesibil oamenilor din întreaga lume.",
	"about::about_page_description":
		"bitcoin.rocks este un site educativ Bitcoin gratuit și open source, fondat în 2022. Misiunea noastră este să accelerăm adopția Bitcoin prin educație.",
	"about::about_stickers_blurb":
		"Trimitem autocolante Bitcoin gratuite direct la tine acasă, ca să poți ajuta la răspândirea conștientizării Bitcoin în comunitatea ta. Sute de oameni scanează codurile QR de pe aceste autocolante în fiecare lună pentru a învăța ce este Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin nu are retrageri masive",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin este un sistem cu rezervă completă. Nu îți depui banii la o bancă. Tu ești propria ta bancă. Nimeni nu îți împrumută banii pe la spate, pentru că doar tu ai acces la banii tăi.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Atâta timp cât îți păstrezi Bitcoin în propriul portofel — nu pe un exchange sau împachetat într-un ETF — o retragere masivă este imposibilă.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Cu Bitcoin, ai cu adevărat controlul asupra banilor tăi.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Începând cu 26 martie 2020, băncile din SUA au obligația să mențină rezerve de 0%.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Rata rezervei bancare",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Sursă: Federal Reserve \u2192",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistem cu rezervă completă — nu este nevoie de asigurare a depozitelor.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Acoperirea Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Sursă: Bitcoin Whitepaper \u2192",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Fiecare Bitcoin este pe blockchain — nimic nu este împrumutat mai departe.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Rata rezervei Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Sursă: Bitcoin Whitepaper \u2192",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fond de asigurare de 153,9 miliarde de dolari față de 10,82 trilioane de dolari în depozite asigurate (dec. 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Acoperirea FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Sursă: FDIC Statistics at a Glance \u2192",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Studiu de caz",
	"bank-runs::bank_runs_card_svb_source":
		"Sursă: University of Washington School of Law \u2192",
	"bank-runs::bank_runs_card_svb_title":
		"Vezi cum a avut loc retragerea masivă de la Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Pasul următor",
	"bank-runs::bank_runs_card_wallet_source": "Începe aici \u2192",
	"bank-runs::bank_runs_card_wallet_title":
		"Află cum să îți obții propriul portofel Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"Asigurarea FDIC acoperă doar aproximativ 1% din depozite",
	"bank-runs::bank_runs_fdic_p1":
		"Asigurarea FDIC protejează depozitele până la 250.000 de dolari pe deponent. Dar acel fond de asigurare este minuscul în comparație cu totalul depozitelor pe care ar trebui să le protejeze.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Într-un faliment bancar la scară largă, guvernul ar tipări probabil bani pentru a acoperi diferența — ceea ce duce la mai multă",
	"bank-runs::bank_runs_fdic_p2_link": "inflație.",
	"bank-runs::bank_runs_header":
		"Bitcoin nu are retrageri masive, dar banca ta are.",
	"bank-runs::bank_runs_page_description":
		"Băncile îți împrumută depozitele într-un sistem bancar cu rezervă fracționară. Dacă prea mulți oameni retrag în același timp, băncile pot da faliment. Bitcoin este un sistem cu rezervă completă — retragerile masive sunt imposibile.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: un exemplu real",
	"bank-runs::bank_runs_svb_p1_a":
		"În martie 2023, Silicon Valley Bank a dat faliment după ce a investit depozitele clienților în",
	"bank-runs::bank_runs_svb_p1_b":
		"Când acele titluri au pierdut valoare, SVB nu a putut acoperi retragerile. Banca s-a prăbușit.",
	"bank-runs::bank_runs_svb_p1_link": "obligațiuni guvernamentale pe termen lung.",
	"bank-runs::bank_runs_svb_p2":
		"Mii de companii nu și-au putut plăti angajații. FDIC a intervenit — dar a ridicat o întrebare mai mare: sunt banii tăi cu adevărat în siguranță?",
	"bank-runs::bank_runs_what_p1":
		"Băncile nu îți păstrează depozitele într-un seif. Împrumută și investesc banii tăi — se numește rezervă fracționară.",
	"bank-runs::bank_runs_what_p2":
		"Dacă prea mulți oameni încearcă să retragă în același timp, banca nu are suficienți bani lichizi pentru a-i plăti pe toți. Asta este o retragere masivă — și poate prăbuși complet banca.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Bănci</span>',
	"bitcoin-vs-banks::point_1_summary_1":
		"Oricine are o conexiune la internet poate folosi Bitcoin — este",
	"bitcoin-vs-banks::point_1_summary_2": "fără permisiune.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Băncile pot refuza, îngheța sau închide conturi pe baza politicilor sau a regulilor guvernamentale.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Rețeaua Bitcoin funcționează 24/7/365 fără ferestre de mentenanță sau sărbători. Băncile au program limitat, sunt închise în weekenduri și au perioade de inactivitate.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Fiecare tranzacție Bitcoin se află pe un blockchain public pe care oricine îl poate verifica. Băncile țin registre private pe care clienții nu le pot verifica independent.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Cu Bitcoin, îți păstrezi tu însuți cheile private — vezi ghidul nostru simplu pentru",
	"bitcoin-vs-banks::point_4_summary_2": "portofele Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Băncile îți păstrează banii și îi pot îngheța, restricționa sau reține oricând.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Comisioanele Bitcoin sunt transparente și previzibile. Băncile acumulează în timp comisioane ascunse pentru conturi, descoperiri de cont, transferuri și bancomate.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin îți permite să cheltuiești doar ce deții cu adevărat. Băncile permit descoperirea contului, apoi taxează penalități peste penalități pentru acest privilegiu.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Odată difuzată, o tranzacție Bitcoin nu poate fi oprită sau anulată. Băncile pot bloca, îngheța sau anula tranzacții pe baza politicilor sau a ordinelor guvernamentale.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Obligațiuni</span>',
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligațiunile sunt „fără risc” doar cu numele — inflația, fluctuațiile dobânzilor și riscul de default erodează toate randamentele reale.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin are o volatilitate transparentă, dar niciun risc ascuns de contraparte.",
	"bitcoin-vs-bonds::point_2_summary_1": "Când",
	"bitcoin-vs-bonds::point_2_summary_2": "inflația",
	"bitcoin-vs-bonds::point_2_summary_3":
		"depășește randamentele obligațiunilor, deținătorii pierd putere de cumpărare reală în fiecare an. Plafonul de 21 de milioane Bitcoin nu poate fi inflatat.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Piețele de obligațiuni pot îngheța în timpul unei crize — Silicon Valley Bank s-a prăbușit parțial pentru că era blocată în obligațiuni care își pierdeau valoarea. Vezi cum se petrec",
	"bitcoin-vs-bonds::point_3_summary_2": "retragerile masive",
	"bitcoin-vs-bonds::point_3_summary_3":
		"și de ce Bitcoin le evită. Bitcoin este tranzacționat 24/7 la nivel global, fără crize de lichiditate.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Licitațiile Trezoreriei pot eșua când nu sunt suficienți cumpărători — vezi",
	"bitcoin-vs-bonds::point_4_summary_2": "licitațiile slabe din 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Prețul Bitcoin este descoperit continuu pe piața deschisă, fără o licitație centrală care poate eșua.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Randamentele obligațiunilor sunt fixate la momentul cumpărării. Chiar dacă economia explodează sau moneda se prăbușește, randamentul tău rămâne același.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin are loc pentru o apreciere semnificativă pe măsură ce adopția crește și cererea se întâlnește cu oferta fixă.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Majoritatea obligațiunilor sunt deținute prin bănci sau brokeri, adăugând risc de contraparte. Bitcoin poate fi auto-custodiat cu un",
	"bitcoin-vs-bonds::point_6_summary_2": "portofel",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — eliminând complet acel risc.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligațiunile depind în întregime de capacitatea guvernelor de a le rambursa. Dacă un guvern intră în default sau își inflatează datoria, deținătorii pierd.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin operează independent de orice guvern sau autoritate politică.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Numerar</span>',
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin se mișcă oriunde prin internet în câteva minute. Numerarul necesită prezență fizică sau un curier de încredere — nu poți trimite prin e-mail 20 de dolari în numerar.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funcționează la fel oriunde. Numerarul este limitat de geografie, cursuri de schimb și acceptarea locală.",
	"bitcoin-vs-cash::point_3_summary_1":
		'Guvernele pot anula numerarul peste noapte — <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">India</a> a făcut-o în 2016. Chiar și fără demonetizare, numerarul își pierde valoarea din cauza',
	"bitcoin-vs-cash::point_3_summary_2": "inflației.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin nu poate fi anulat de niciun guvern sau autoritate.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Numerarul poate fi falsificat, uneori foarte convingător. Bitcoin folosește criptografia care face falsificarea imposibilă din punct de vedere matematic.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin nu are o autoritate centrală. Numerarul este emis de guverne care pot tipări mai mult, schimba modelele sau anula bancnotele după bunul plac.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Numerarul este vulnerabil la furt, incendiu, pierdere și confiscare. Bitcoin poate fi",
	"bitcoin-vs-cash::point_6_summary_2": "auto-custodiat",
	"bitcoin-vs-cash::point_6_summary_3":
		"în siguranță pe un telefon sau un dispozitiv hardware.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin se împarte în 100 de milioane de satoshi, permițând micro-plăți de orice mărime. Numerarul are o denominație minimă — nu poți rupe un ban în două.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">CBDC</span>',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin este cea mai sigură rețea de calcul construită vreodată și nu a fost niciodată spartă. CBDC-urile depind de bănci și guverne care au fost sparte de multe ori.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nimeni nu te poate opri să faci tranzacții cu Bitcoin. CBDC-urile sunt proiectate astfel încât guvernele și băncile centrale să poată controla fiecare plată, limitându-ți confidențialitatea și libertatea.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin nu expiră niciodată și nu are taxe lunare. CBDC-urile pot fi programate să expire, împiedicându-te să economisești pentru viitor.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin are un plafon strict de 21 de milioane BTC. CBDC-urile nu au limite de ofertă, permițând guvernelor să extindă banii după bunul plac — ceea ce duce la",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflație.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Adresele Bitcoin nu sunt legate de identitatea ta reală. CBDC-urile sunt direct conectate cu actul de identitate guvernamental, permițând supraveghere financiară de masă și cenzură.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Regulile Bitcoin sunt validate de zeci de mii de noduri independente. CBDC-urile sunt centralizate în mâinile guvernelor și ale băncilor centrale, care au control complet asupra rețelei.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Oricine poate rula un nod Bitcoin pentru a verifica regulile rețelei. CBDC-urile nu permit utilizatorilor să ruleze noduri — trebuie să ai încredere în autoritatea centrală.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin auto-custodiat nu poate fi înghețat de nimeni. CBDC-urile sunt proiectate astfel încât guvernele și băncile centrale să poată îngheța conturile instantaneu.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin îți oferă control complet asupra banilor tăi când îi auto-custodiezi cu un",
	"bitcoin-vs-cbdc::point_8_summary_2": "portofel.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC-urile cer să îți încredințezi banii unui custode, precum o bancă sau un guvern.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Politica monetară a Bitcoin este fixată în cod și nu poate fi modificată. CBDC-urile pot fi reprogramate după bunul plac al politicienilor, provocând",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflație",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" când se tipăresc prea mulți bani.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragil",
	"bitcoin-vs-crypto::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Crypto</span>',
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protocolul Bitcoin a rămas fundamental același din 2009, oferind reguli previzibile. Majoritatea proiectelor crypto își schimbă continuu protocoalele, tokenomicele sau se ramifică în versiuni noi.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin rulează pe zeci de mii de noduri independente din întreaga lume. Majoritatea proiectelor crypto sunt controlate de fundații, companii sau echipe mici de dezvoltatori care pot face modificări unilaterale.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin are un plafon strict de 21 de milioane de monede — cel mai rar activ digital. Majoritatea proiectelor crypto au ofertă nelimitată sau mecanisme de a emite noi tokenuri după bunul plac, diluându-i pe deținători.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin are un singur scop: bani digitali peer-to-peer. Oricine îl poate înțelege și folosi. Majoritatea cripto implică smart contracte complexe sau DeFi care necesită expertiză tehnică pentru a fi folosite în siguranță.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work-ul Bitcoin funcționează de peste 15 ani fără un atac reușit asupra rețelei principale. Majoritatea proiectelor crypto folosesc mecanisme de consens experimentale și netestate în condiții reale.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin este bani digitali — o rezervă de valoare și un mijloc de schimb. Majoritatea tokenurilor crypto sunt tokenuri speculative de utilitate sau guvernanță, cu o valoare reală neclară.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin devine mai puternic sub atac și a rezistat fiecărei crize, interdicții și critici. Majoritatea proiectelor crypto se prăbușesc sub presiune reglementară, tehnică sau de piață.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin nu are CEO, nici companie, niciun punct unic de eșec. Majoritatea proiectelor crypto depind de VC-uri, de o anumită conducere sau de supraviețuirea unei singure companii.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Artă</span>',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Fiecare Bitcoin este identic și fungibil. Fiecare operă de artă este unică — proveniență, istorie, condiție și creație diferite fac comparațiile directe incredibil de dificile.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin este tranzacționat 24/7 pe piețe globale accesibile oricui. Artele plastice cer case de licitație specializate, dealeri privați sau galerii și pot dura luni întregi pentru a fi vândute.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Cumpărarea sau vânzarea Bitcoin costă mai puțin de 1%, adesea mult mai puțin. Vânzările de artă acumulează comisioane de 30–40% în prime ale cumpărătorului, comisioane, asigurări, transport și costuri de autentificare.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin se împarte în 100 de milioane de satoshi, perfect pentru tranzacții de orice mărime. Nu poți deține o parte dintr-un tablou sau colțul unei sculpturi fără risc de contraparte.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Proprietatea și autenticitatea Bitcoin pot fi verificate criptografic de oricine, pe blockchain. Autentificarea operelor de artă este costisitoare, lentă și încă păcălită în mod regulat de falsificatori — distrugând valoarea unei opere de artă peste noapte.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin cu backup corespunzător supraviețuiește inundațiilor, incendiilor, cutremurelor și furtului. Artele plastice sunt vulnerabile la orice formă de deteriorare fizică, iar asigurarea acoperă rareori totul.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Oricine are o conexiune la internet și ceva bani poate cumpăra Bitcoin. Investiția în artele plastice este efectiv limitată la colecționari avuți cu acces la licitații și cunoștințe specializate.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Aur</span>',
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin poate fi trimis instantaneu pe internet la cost mic. Aurul trebuie expediat fizic pentru a transfera proprietatea.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin este un activ nativ digital pe care îl poți transfera prin internet. Aurul online este un IOU digital — deții doar promisiunea unui custode, nu metalul propriu-zis.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Bitcoin are un plafon strict de 21 de milioane BTC. Oferta de aur crește cu aproximativ <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1,6% pe an</a>, micșorând cota ta — mai puțin decât',
	"bitcoin-vs-gold::point_3_summary_2": "inflația",
	"bitcoin-vs-gold::point_3_summary_3":
		"fiat — dar tot inflație.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Când prețul aurului crește, se extrage mai mult aur, împingând prețul în jos. Oferta Bitcoin este inelastică — oricât de mare ar fi prețul, vor fi întotdeauna doar 21 de milioane.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Zeci de mii de noduri independente validează rețeaua Bitcoin. Cea mai mare parte a aurului fizic se află într-un mănunchi de seifuri mari ale custodelor.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Oricine poate verifica Bitcoin-ul real rulând un full node — este doar o aplicație. Verificarea aurului fizic necesită topirea acestuia; interiorul ar putea fi tungsten.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin se împarte în 100 de milioane de satoshi, perfect pentru achiziții de orice mărime. Aurul nu poate fi împărțit cu ușurință pentru tranzacții mici.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Imobiliare</span>',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin se mișcă oriunde în lume instantaneu. Imobiliarele sunt legate de o locație și expuse la riscuri economice, politice și naturale locale.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin se împarte în 100 de milioane de satoshi. Imobiliarele nu pot fi vândute parțial — nu poți ceda doar bucătăria sau cumpăra jumătate de dormitor.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin operează pe o rețea descentralizată pe care niciun guvern nu o poate controla. Imobiliarele sunt puternic reglementate — zonificare, controlul chiriei, expropriere și confiscare se aplică toate.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin nu necesită întreținere. Imobiliarele necesită reparații, renovări, asigurări, gestionarea proprietății și probleme cu chiriașii.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin nu are taxe continue — plătești doar impozit pe câștigurile de capital când vinzi. Imobiliarele trebuie să plătească impozite pe proprietate anuale indiferent de venit.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin cu backup corespunzător supraviețuiește incendiilor, inundațiilor și cutremurelor. Imobiliarele sunt vulnerabile la orice dezastru, iar asigurarea acoperă rareori totul.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Fiecare Bitcoin este identic și fungibil. Fiecare proprietate este unică, ceea ce face dificile prețul și comparațiile.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin este tranzacționat la nivel global 24/7 de oricine are acces la internet. Vânzările imobiliare sunt limitate la cumpărătorii locali și pot dura luni de hârțogărie.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin permite proprietatea individuală directă oricui. Cumpărarea de imobile ca investiție dincolo de propria reședință principală împinge prețurile locuințelor în sus, reducând accesibilitatea și alimentând crize de locuințe.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Acțiuni</span>',
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin este un activ direct pe care îl deții complet. Acțiunile sunt fracțiuni dintr-o companie — valoarea lor depinde de management, performanță și decizii pe care nu le poți controla.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin are un plafon strict de 21 de milioane BTC. Companiile pot emite oricând noi acțiuni, diluându-i pe acționarii existenți — similar cu modul în care",
	"bitcoin-vs-stocks::point_2_summary_2": "inflația",
	"bitcoin-vs-stocks::point_2_summary_3":
		" fiat diluează numerarul. Cu Bitcoin, cota ta nu se micșorează niciodată.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin nu are CEO și niciun punct unic de eșec. Acțiunile depind puternic de conducere — o decizie greșită sau o plecare poate prăbuși prețul.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Prețul Bitcoin vine de la o piață globală deschisă. Evaluările acțiunilor se bazează pe metrici precum raportul P/E, care pot ascunde acțiuni supraevaluate.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin este tranzacționat 24/7 în întreaga lume. Piețele de acțiuni sunt deschise doar în timpul programului de lucru, în zilele lucrătoare.",
	"bitcoin-vs-stocks::point_6_summary_1": "Poți",
	"bitcoin-vs-stocks::point_6_summary_2": "auto-custodia",
	"bitcoin-vs-stocks::point_6_summary_3":
		"Bitcoin cu o aplicație simplă — niciun broker necesar. Acțiunile rămân la brokeri, expunându-te la riscul de contraparte dacă aceștia dau faliment.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Oferta fixă a Bitcoin îl face o protecție de încredere împotriva inflației. Unele acțiuni bat inflația, altele nu — nicio garanție.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'Diferența dintre <span class="orange">Bitcoin</span> și <span class="asset">Visa</span>',
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin este o rețea deschisă la care oricine se poate alătura și pe care o poate folosi fără permisiune. Visa este un sistem închis controlat de instituții financiare care pot refuza accesul — în special celor care nu au sau nu sunt deserviți de o bancă.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Tranzacțiile Bitcoin nu au comisioane pentru comercianți. Visa percepe de obicei aproximativ 3% per tranzacție comercianților — afacerea ta poate economisi bani acceptând",
	"bitcoin-vs-visa::point_2_summary_2": "plăți Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " în schimb.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Fiecare tranzacție Bitcoin se află pe un blockchain public verificabil. Visa operează un sistem închis și proprietar, în care clienții nu pot verifica nimic în mod independent.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin nu poate fi înghețat de nicio autoritate centrală. Visa poate îngheța conturi, bloca tranzacții sau refuza serviciul oricând.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin este decontare finală — poți cheltui doar ce deții. Cardurile de credit creează datorii cu rate ale dobânzii adesea mai mari de 25% pe an.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin îți permite să iei",
	"bitcoin-vs-visa::point_6_summary_2": "auto-custodia",
	"bitcoin-vs-visa::point_6_summary_3":
		"fără a avea nevoie de o bancă sau de un procesator de plăți. Cardurile de credit necesită întotdeauna intermediari.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funcționează 24/7 la nivel global, fără program de lucru. Visa are program de funcționare, ferestre de mentenanță și restricții geografice care pot bloca tranzacțiile.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (ro): filled ${filled}, already-done ${skipped}`,
	);
}

main();
